import { SurveyModel, Action, Question, MatrixDropdownRowModelBase, PanelModel, QuestionMatrixDynamicModel, property, HashTable } from "survey-core";
import { ConditionEditor } from "../../property-grid/condition-survey";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions, settings } from "../../settings";
import { LogicItemEditor } from "./logic-item-editor";
import { getLogicString } from "./logic-types";
import { SurveyLogicAction, SurveyLogicItem } from "./logic-items";
import { SurveyLogic } from "./logic";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { QuestionEmbeddedSurveyModel } from "../embedded-survey";
import { updateMatrixLogicRemoveAction, updateMatrixLogicExpandAction } from "../../utils/actions";

import "./logic-ui.scss";

import { logicCss } from "./logic-theme";

interface ILogicItemUI {
  expressionEditor: ConditionEditor;
  itemEditor: LogicItemEditor;
}

export class SurveyLogicUI extends SurveyLogic {
  private expressionEditorValue: ConditionEditor;
  private itemEditorValue: LogicItemEditor;
  @property() itemsSurveyValue: SurveyModel;
  @property() expressionEditorIsFastEntry: boolean;
  @property() expressionEditorCanShowBuilder: boolean;
  private visibleItems: SurveyLogicItem[];
  private itemUIHash: HashTable<ILogicItemUI> = {};
  public addNewButton: Action;

  constructor(
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    super(survey, options);
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    this.setupToolbarItems();
    this.update();
  }
  public update(
    survey: SurveyModel = null,
    options: ISurveyCreatorOptions = null
  ) {
    super.update(survey, options);
    const newItemsSurveyValue = this.options.createSurvey(this.getLogicItemSurveyJSON(), "logic-items");
    newItemsSurveyValue.css = logicCss;
    this.itemsSurveyValue = newItemsSurveyValue;
    this.itemsSurvey.onMatrixRowRemoving.add((sender, options) => {
      const item = this.visibleItems[options.rowIndex];
      options.allow = this.canRemoveItem(item);
    });
    this.itemsSurvey.onMatrixRowRemoved.add((sender, options) => {
      const item = this.visibleItems[options.rowIndex];
      const isDeleteEditable = item === this.editableItem;
      this.removeItem(item, false);
      if (isDeleteEditable) {
        this.mode = "view";
        this.updateNewActionState();
      }
      this.expressionEditorCanShowBuilder = !!this.editableItem;
    });
    this.itemsSurvey.onGetMatrixRowActions.add((sender, options) => {
      if (this.readOnly) return;
      updateMatrixLogicExpandAction(options.question, options.actions, options.row);
      updateMatrixLogicRemoveAction(options.question, options.actions, options.row);
    });
    this.updateItemsSurveyData();
    this.onReadOnlyChanged();
  }
  @property({
    onSet: (value, target: SurveyLogicUI) => {
      target.updateItemsSurveyData();
    }
  }) questionFilter: string;
  @property({
    onSet: (value, target: SurveyLogicUI) => {
      target.updateItemsSurveyData();
    }
  }) actionTypeFilter: string;
  public dispose(): void {
    super.dispose();
    for (let key in this.itemUIHash) {
      const itemUI = this.itemUIHash[key];
      itemUI.expressionEditor.dispose();
      itemUI.itemEditor.dispose();
    }
    this.itemUIHash = {};
  }
  public addNewUI() {
    if (this.items.length == 0 || !this.items[this.items.length - 1].isNew) {
      this.addNew();
    }
    this.matrixItems.visibleRows[this.matrixItems.visibleRows.length - 1].showDetailPanel();
  }
  public toggleExpressionEditorIsFastEntry() {
    this.expressionEditorIsFastEntry = !this.expressionEditorIsFastEntry;
    if (!!this.expressionEditor) {
      this.expressionEditor.setIsFastEntry(this.expressionEditorIsFastEntry);
    }
  }
  public updateEditableItemIsModifiedState(): void {
    if (!!this.editableItem) {
      this.editableItem.isModified = !!this.itemEditor && !!this.expressionEditor && (this.itemEditor.isModified || this.expressionEditor.isModified(this.editableItem.expression));
    }
  }
  public haveUnsavedRules(): boolean {
    this.updateEditableItemIsModifiedState();
    return this.visibleItems.some(item => item.isModified || item.isNew);
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "items") {
      this.updateItemsSurveyData();
    }
  }
  protected onReadOnlyChanged(): void {
    if (!this.itemsSurvey) return;
    this.itemsSurvey.mode = this.readOnly ? "display" : "edit";
  }
  public get expressionEditor(): ConditionEditor {
    return this.expressionEditorValue;
  }
  public get itemEditor(): LogicItemEditor {
    return this.itemEditorValue;
  }
  public getExpressionEditor(item: SurveyLogicItem): ConditionEditor {
    return this.getLogicItemUI(item).expressionEditor;
  }
  public getLogicItemEditor(item: SurveyLogicItem): LogicItemEditor {
    return this.getLogicItemUI(item).itemEditor;
  }
  private getLogicItemUI(item: SurveyLogicItem): ILogicItemUI {
    let res: ILogicItemUI = this.itemUIHash[item.id];
    if (!res) {
      const context = <Question>item.getContext();
      res = { expressionEditor: this.createExpressionPropertyEditor(), itemEditor: new LogicItemEditor(item, this.options) };
      res.expressionEditor.context = context;
      res.itemEditor.context = context;
      res.expressionEditor.text = item.expression;
      res.expressionEditor.onContextChanged = (context: Question): void => {
        res.itemEditor.context = context;
      };
      this.itemUIHash[item.id] = res;
    }
    return res;
  }
  public get expressionSurvey(): SurveyModel {
    return this.expressionEditor.editSurvey;
  }
  public get itemEditorSurvey(): SurveyModel {
    return this.itemEditor.editSurvey;
  }
  public get itemsSurvey(): SurveyModel {
    return this.itemsSurveyValue;
  }
  public get hasItems(): boolean {
    return this.items.length > 0;
  }
  get matrixItems(): QuestionMatrixDynamicModel {
    return this.itemsSurvey.getQuestionByName("items") as QuestionMatrixDynamicModel;
  }
  protected onStartEditing() {
    super.onStartEditing();
    this.expressionEditorValue = this.getExpressionEditor(this.editableItem);
    this.itemEditorValue = this.getLogicItemEditor(this.editableItem);
    this.expressionEditorIsFastEntry = false;
    this.expressionEditor.setIsFastEntry(this.expressionEditorIsFastEntry);
    this.expressionEditorCanShowBuilder = ConditionEditor.canBuildExpression(this.expressionEditor.text);
  }
  protected onEndEditing() {
    this.updateEditableItemIsModifiedState();
    super.onEndEditing();
    this.expressionEditorValue = null;
    this.itemEditorValue = null;
  }
  protected onEditableItemApply() {
    this.expressionEditor.apply();
    this.itemEditor.apply();
    this.editableItem.apply(this.expressionEditor.text);
    if (this.editableItem.actions.length != this.itemEditor.panels.length) {
      this.itemEditor.setEditableItem(this.editableItem);
    }
    this.itemEditor.resetModified();
    this.editableItem.isNew = false;
    if (!this.editableItem.isSuitable(this.questionFilter, this.actionTypeFilter)) {
      this.questionFilter = "";
      this.actionTypeFilter = "";
    } else {
      this.updateItemsSurveyData();
    }
  }
  protected hasErrorInUI(): boolean {
    const creator = (<any>this.survey).creator;
    if(this.expressionEditor.hasErrorInUI()) {
      this.errorText = this.expressionEditor.errorText;
      return true;
    }
    if (this.itemEditor.hasErrors()) {
      this.errorText = getLogicString("actionInvalid");
      !!creator &&
        creator.notify(this.errorText, "error");
      return true;
    }
    return false;
  }
  protected getExpressionText(): string {
    return this.expressionEditor.text;
  }
  protected getEditingActions(): Array<SurveyLogicAction> {
    return this.itemEditor.getEditingActions();
  }

  protected getLogicItemSurveyJSON(): any {
    const creator = (<any>this.survey).creator;
    const json = (creator && creator.useTableViewInLogicTab) ? this.getTwoColumnsLayout() : this.getOneColumnLayout();
    setSurveyJSONForPropertyGrid(json);
    return json;
  }
  private getTwoColumnsLayout() {
    return {
      elements: [
        {
          type: "matrixdynamic",
          name: "items",
          titleLocation: "hidden",
          detailPanelMode: "underRowSingle",
          allowAddRows: false,
          allowAdaptiveActions: false,
          rowCount: 0,
          columns: [
            {
              cellType: "linkvalue",
              name: "conditions",
              title: this.getLocString("ed.lg.conditions")
            },
            {
              cellType: "linkvalue",
              name: "actions",
              title: this.getLocString("ed.lg.actions")
            }
          ]
        }
      ]
    };
  }
  private getOneColumnLayout() {
    return {
      elements: [
        {
          type: "matrixdynamic",
          name: "items",
          titleLocation: "hidden",
          showColumnHeader: false,
          detailPanelMode: "underRowSingle",
          allowAddRows: false,
          allowAdaptiveActions: false,
          rowCount: 0,
          showHeader: false,
          columns: [
            {
              cellType: "linkvalue",
              name: "rules",
              showTooltip: true,
              width: "100%"
            }
          ]
        }
      ]
    };
  }
  private createExpressionPropertyEditor(): ConditionEditor {
    const res = new ConditionEditor(
      this.survey,
      null,
      this.options
    );
    res.isModal = false;
    res.editSurvey.onValueChanged.add((sender, options) => {
      if (options.name === "textEditor") {
        this.expressionEditorCanShowBuilder = ConditionEditor.canBuildExpression(options.value);
      }
    });
    return res;
  }
  private getVisibleItems(): SurveyLogicItem[] {
    return this.items.filter(item => item.isNew || item.isSuitable(this.questionFilter, this.actionTypeFilter));
  }
  private getDataFromItem(item: SurveyLogicItem) {
    const creator = (<any>this.survey).creator;
    if (creator && creator.useTableViewInLogicTab) {
      return {
        conditions: item.expressionText,
        actions: item.actionsText
      };
    } else {
      return { rules: this.getLogicItemDisplayText(item) };
    }
  }
  private getLogicItemDisplayText(item: SurveyLogicItem): string {
    const text = item.getDisplayText();
    if(!this.options) return text;
    return this.options.onLogicGetTitleCallback(item.expression, item.expressionText, text, item);
  }
  private updateItemsSurveyData() {
    if (!this.itemsSurvey) return;
    var data = [];
    this.visibleItems = this.getVisibleItems();
    this.visibleItems.forEach(item => {
      data.push(this.getDataFromItem(item));
    });

    this.matrixItems.onHasDetailPanelCallback = (row) => { return true; };
    this.matrixItems.onCreateDetailPanelCallback = (
      row: MatrixDropdownRowModelBase,
      panel: PanelModel
    ) => {
      row.onDetailPanelShowingChanged = () => {
        this.expressionEditorCanShowBuilder = row.isDetailPanelShowing;
        if (row.isDetailPanelShowing) {
          if (this.mode === "view") {
            const logicItem = this.visibleItems[row.rowIndex - 1];
            this.editItem(logicItem);
          }
          const condQuestion = <QuestionEmbeddedSurveyModel>panel.getQuestionByName("conditions");
          const actionsQuestion = <QuestionEmbeddedSurveyModel>panel.getQuestionByName("actions");
          condQuestion.embeddedSurvey = this.expressionEditor.editSurvey;
          actionsQuestion.embeddedSurvey = this.itemEditorValue.editSurvey;
          this.updateRowIsAdditionalClasses(row.rowIndex - 1, false);
        } else {
          this.mode = "view";
          this.updateRenderedRows();
        }
        this.updateNewActionState();
      };
      panel.addNewQuestion("embeddedsurvey", "conditions");
      panel.addNewQuestion("embeddedsurvey", "actions");

      panel.footerActions.push({
        id: "saveDetailPanel",
        innerCss: "sl-panel__done-button",
        title: this.getLocString("pe.doneEditing"),
        action: () => {
          if (this.saveEditableItem()) {
            row.hideDetailPanel(true);
          }
        }
      });
    };
    this.matrixItems.onCellCreatedCallback = (options: any) => {
      options.cell.question.linkClickCallback = () => {
        if (options.row.isDetailPanelShowing) {
          options.row.hideDetailPanel();
        } else {
          options.row.showDetailPanel();
        }
      };
      options.cell.question.showClear = false;
      options.cell.question.allowClear = false;
    };
    this.matrixItems.value = data;
    this.updateRenderedRows();
  }
  private updateRenderedRows() {
    this.visibleItems.forEach((_, index) => {
      this.updateRowIsAdditionalClasses(index, this.visibleItems[index].isModified || this.visibleItems[index].isNew);
    });
  }
  private updateRowIsAdditionalClasses(index: number, isAdditionalClasses: boolean) {
    if (!!this.matrixItems.renderedTable) {
      this.matrixItems.renderedTable.rows[index].isAdditionalClasses = isAdditionalClasses;
    }
  }
  private updateNewActionState(): void {
    this.addNewButton.enabled = this.mode !== "new";
  }
  private setupToolbarItems() {
    this.addNewButton = new Action({
      id: "svd-logic-addNew",
      title: this.addNewText,
      tooltip: this.addNewText,
      component: "sv-action-bar-item",
      enabled: true,
      action: () => {
        this.addNewUI();
      }
    });
  }
  public get addNewText(): string {
    return getLogicString("addNewItem");
  }

  public get emptyTabPlaceholder(): string {
    return getLogicString("empty_tab");
  }
}