import { SurveyModel, settings as surveySettings } from "survey-core";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { settings as creatorSetting, settings } from "../src/settings";
import { CreatorTester } from "./creator-tester";
import { UndoRedoController } from "../src/plugins/undo-redo/undo-redo-controller";
import { TabJsonEditorTextareaPlugin } from "../src/components/tabs/json-editor-textarea";

surveySettings.supportCreatorV2 = true;
creatorSetting.defaultNewSurveyJSON = {};

const multipageJSON = {
  pages: [
    {
      name: "page1",
      title: "Page 1",
      questions: [
        { type: "text", name: "question1" },
        {
          name: "question2",
          choices: [
            "one",
            { value: "two", text: "second value" },
            { value: 3, text: "third value" }
          ],
          type: "checkbox"
        }
      ]
    },
    { name: "page2", questions: [{ name: "question3", type: "comment" }] },
    {
      name: "page3",
      questions: [
        {
          name: "question4",
          columns: ["Column 1", "Column 2", "Column 3"],
          rows: ["Row 1", "Row 2"],
          type: "matrix"
        },
        { name: "question5", type: "rating" }
      ]
    }
  ]
};

test("the creator can be empty", () => {
  const creator = new CreatorTester(undefined, undefined, false);
  creator.JSON = multipageJSON;
  creator.text = undefined;
  expect(creator.survey.pages).toHaveLength(0);

  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
});

test("Create new page, set empty JSON", (): any => {
  const creator = new CreatorTester(undefined, undefined, false);
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
});

test("Create new page, recreate designer survey via JSON", (): any => {
  const creator = new CreatorTester(undefined, undefined, false);
  creator.JSON = { elements: [{ type: "text", name: "question1" }] };
  creator.showTestSurvey();
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  creator.JSON = {};
  creator.showDesigner();
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
});

test("pageEditMode='single'", (): any => {
  let creator = new CreatorTester(undefined, undefined, false);
  let designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(creator.pageEditMode).toEqual("standard");
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();

  creator = new CreatorTester({ pageEditMode: "single" }, undefined, false);
  designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();
});
test("Create new ghost on adding a question", (): any => {
  surveySettings.supportCreatorV2 = true;
  const creator = new CreatorTester();
  const undoredo = creator.getPlugin("undoredo");
  expect(undoredo.model).toBeTruthy();
  expect((<UndoRedoController>undoredo.model).undoRedoManager).toBeTruthy();
  creatorSetting.defaultNewSurveyJSON = {};
  creator.JSON = {};
  expect(creator.survey.pages).toHaveLength(0);
  creator.clickToolboxItem({ type: "text" });
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  creator.activeTab = "editor";
  const editorPlugin = <TabJsonEditorTextareaPlugin>(creator.getPlugin("editor"));
  expect(editorPlugin.model).toBeTruthy();
  editorPlugin.model.text = "";
  creator.activeTab = "designer";
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
});
test("setting empty JSON into creator do not update undo/redo survey and onModified stopped working", (): any => {
  settings.defaultNewSurveyJSON = {};
  const creator = new CreatorTester();
  let counter = 0;
  creator.onModified.add((sender, options) => {
    counter ++;
  });
  settings.defaultNewSurveyJSON = {};
  creator.JSON = {};
  expect(counter).toEqual(0);
  creator.survey.title = "title1";
  expect(counter).toEqual(1);
  settings.defaultNewSurveyJSON = {};
  creator.JSON = {};
  creator.survey.title = "title2";
  expect(counter).toEqual(2);
});
