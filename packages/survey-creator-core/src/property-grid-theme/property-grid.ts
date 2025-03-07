export var propertyGridCss = {
  root: "spg-root-modern",
  container: "spg-container-modern",
  header: "spg-title spg-container-modern__title",
  body: "spg-body",
  bodyEmpty: "spg-body spg-body--empty",
  footer: "spg-footer spg-body__footer spg-clearfix",
  title: "",
  description: "",
  logo: "spg-logo",
  logoImage: "spg-logo__image",
  headerText: "spg-header__text",
  navigationButton: "",
  completedPage: "spg-completedpage",
  navigation: {
    complete: "spg-btn spg-footer__complete-btn",
    prev: "spg-btn spg-footer__prev-btn",
    next: "spg-btn spg-footer__next-btn",
    start: "spg-btn spg-footer__start-btn",
    preview: "spg-btn spg-footer__preview-btn",
    edit: "spg-btn spg-footer__edit-btn"
  },
  panel: {
    title: "spg-title spg-panel__title",
    titleExpandable: "spg-panel__title--expandable",
    titleOnExpand: "spg-panel__title--expanded",
    titleOnError: "spg-panel__title--error",
    description: "spg-description spg-panel__description",
    container: "spg-panel spg-row__panel",
    content: "spg-panel__content",
    icon: "spg-panel__icon",
    iconExpanded: "spg-panel__icon--expanded",
    footer: "spg-panel__footer",
    requiredText: "spg-panel__required-text"
  },
  paneldynamic: {
    root: "spg-paneldynamic",
    navigation: "spg-paneldynamic__navigation",
    title: "spg-title spg-question__title",
    button: "spg-btn",
    buttonRemove: "spg-paneldynamic__remove-btn",
    buttonAdd: "spg-paneldynamic__add-btn",
    progressTop: "spg-paneldynamic__progress spg-paneldynamic__progress--top",
    progressBottom:
      "spg-paneldynamic__progress spg-paneldynamic__progress--bottom",
    buttonPrev: "spg-paneldynamic__prev-btn",
    buttonNext: "spg-paneldynamic__next-btn",
    progressContainer: "spg-paneldynamic__progress-container",
    progress: "spg-progress",
    progressBar: "spg-progress__bar",
    progressText: "spg-paneldynamic__progress-text",
    separator: "spg-paneldynamic__separator"
  },
  progress: "spg-progress spg-body__progress",
  progressBar: "spg-progress__bar",
  progressText: "spg-progress__text",
  progressTextInBar: "spg-hidden",
  page: {
    root: "spg-page spg-body__page",
    title: "spg-title spg-page__title",
    description: "spg-description spg-page__description"
  },
  pageTitle: "spg-title spg-page__title",
  pageDescription: "spg-description spg-page__description",
  row: "spg-row spg-clearfix",
  rowMultiple: "spg-row--multiple",
  question: {
    mainRoot: "spg-question spg-row__question",
    flowRoot: "spg-question spg-row__question spg-row__question--flow",
    asCell: "spg-table__cell",
    header: "spg-question__header",
    headerLeft: "spg-question__header--location--left",
    headerTop: "spg-question__header--location--top",
    headerBottom: "spg-question__header--location--bottom",
    content: "spg-question__content",
    contentLeft: "spg-question__content--left",
    titleLeftRoot: "spg-question--location--left",
    titleOnAnswer: "spg-question__title--answer",
    titleOnError: "spg-question__title--error",
    title: "spg-title spg-question__title",
    requiredText: "spg-question__required-text",
    number: "spg-question__num",
    description: "spg-description spg-question__description",
    descriptionUnderInput: "spg-description spg-question__description",
    comment: "spg-comment",
    required: "spg-question--required",
    titleRequired: "spg-question__title--required",
    indent: 0,
    footer: "spg-question__footer",
    formGroup: "spg-question__form-group",
    hasError: "",
    disabled: "spg-question--disabled"
  },
  image: { root: "spg-image", image: "sv_image_image" },
  error: {
    root: "spg-question__erbox",
    icon: "",
    item: "",
    locationTop: "spg-question__erbox--location--top",
    locationBottom: "spg-question__erbox--location--bottom"
  },
  checkbox: {
    root: "spg-selectbase",
    item: "spg-item spg-checkbox spg-selectbase__item",
    itemSelectAll: "spg-checkbox--selectall",
    itemNone: "spg-checkbox--none",
    itemDisabled: "spg-item--disabled spg-checkbox--disabled",
    itemChecked: "spg-checkbox--checked",
    itemHover: "spg-checkbox--allowhover",
    itemInline: "spg-selectbase__item--inline",
    label: "spg-selectbase__label",
    // label: "spg-checkbox",
    itemSvgIconId: "#icon-v2check",
    labelChecked: "",
    //itemControl: "spg-visuallyhidden spg-item__control",
    itemControl: "spg-checkbox__control",
    itemDecorator: "spg-checkbox__svg",
    //itemDecorator: "spg-checkbox__hidden",
    //controlLabel: "spg-item__control-label",
    controlLabel: "spg-checkbox__caption",
    materialDecorator: "spg-checkbox__rectangle",
    //materialDecorator: "spg-item__decorator spg-checkbox__decorator",
    other: "spg-comment spg-question__other",
    column: "spg-selectbase__column"
  },
  radiogroup: {
    root: "spg-selectbase",
    item: "spg-item spg-radio spg-selectbase__item",
    itemInline: "spg-selectbase__item--inline",
    label: "spg-selectbase__label",
    labelChecked: "",
    itemDisabled: "spg-item--disabled spg-radio--disabled",
    itemChecked: "spg-radio--checked",
    itemHover: "spg-radio--allowhover",
    itemControl: "spg-visuallyhidden spg-item__control",
    itemDecorator: "spg-item__svg spg-radio__svg",
    controlLabel: "spg-item__control-label",
    materialDecorator: "spg-item__decorator spg-radio__decorator",
    other: "spg-comment spg-question__other",
    clearButton: "spg-btn spg-selectbase__clear-btn",
    column: "spg-selectbase__column"
  },
  boolean: {
    mainRoot: "spg-question spg-row__question spg-question--boolean",
    rootCheckbox: "spg-selectbase",
    checkboxItem: "spg-checkbox",
    checkboxItemChecked: "spg-checkbox--checked",
    checkboxitemIndeterminate: "spg-checkbox--indeterminate",
    checkboxItemDisabled: "spg-checkbox--disabled",
    svgIconId: "#icon-v2check",
    checkboxLabel: "spg-selectbase__label",
    controlCheckbox: "spg-checkbox__control",
    checkboxControlLabel: "spg-checkbox__caption",
    checkboxItemDecorator: "spg-checkbox__svg",
    checkboxMaterialDecorator: "spg-checkbox__rectangle"
  },
  text: {
    root: "spg-input spg-text",
    small: "spg-row__question--small",
    onError: "spg-input--error"
  },
  multipletext: {
    root: "spg-multipletext",
    item: "spg-multipletext__item",
    itemTitle: "spg-multipletext__item-title",
    row: "spg-multipletext__row",
    cell: "spg-multipletext__cell"
  },
  dropdown: {
    root: "",
    small: "spg-row__question--small sd-row__question--small",
    control: "spg-input spg-dropdown sd-input sd-dropdown",
    filterStringInput: "sd-dropdown__filter-string-input spg-dropdown__filter-string-input",
    selectWrapper: "",
    other: "spg-comment spg-question__other",
    onError: "spg-input--error"
  },
  imagepicker: {
    root: "spg-imagepicker",
    item: "spg-imagepicker__item",
    itemInline: "spg-imagepicker__item--inline",
    itemChecked: "spg-imagepicker__item--checked",
    itemDisabled: "spg-imagepicker__item--disabled",
    itemHover: "spg-imagepicker__item--allowhover",
    label: "spg-imagepicker__label",
    itemControl: "spg-imagepicker__control",
    image: "spg-imagepicker__image",
    itemText: "spg-imagepicker__text",
    clearButton: "spg-btn",
    other: "spg-comment spg-question__other"
  },
  matrix: {
    tableWrapper: "spg-matrix",
    root: "spg-table",
    rowError: "spg-matrix__row--error",
    cell: "spg-table__cell spg-matrix__cell",
    headerCell: "spg-table__cell spg-table__cell--header",
    label: "spg-item spg-radio spg-matrix__label",
    itemValue: "spg-visuallyhidden spg-item__control spg-radio__control",
    itemChecked: "spg-radio--checked",
    itemDisabled: "spg-item--disabled spg-radio--disabled",
    itemHover: "spg-radio--allowhover",
    materialDecorator: "spg-item__decorator spg-radio__decorator",
    itemDecorator: "spg-item__svg spg-radio__svg",
    cellText: "spg-matrix__text",
    cellTextSelected: "spg-matrix__text--checked",
    cellTextDisabled: "spg-matrix__text--disabled"
  },
  matrixdropdown: {
    root: "spg-table",
    cell: "spg-table__cell",
    headerCell: "spg-table__cell spg-table__cell--header"
  },
  matrixdynamic: {
    root: "spg-table spg-matrixdynamic",
    cell: "spg-table__cell",
    headerCell: "spg-table__cell spg-table__cell--header",
    button: "spg-btn",
    detailRow: "spg-table__row spg-table__row--detail",
    detailButton: "spg-table__cell--detail-button",
    detailButtonExpanded: "spg-table__cell--detail-button--expanded",
    detailIcon: "spg-detail-panel__icon",
    detailIconExpanded: "spg-detail-panel__icon--expanded",
    detailPanelCell: "spg-table__cell--detail-panel",
    actionsCell: "spg-table__cell spg-table__cell--actions",
    buttonAdd: "spg-matrixdynamic__add-btn spg-action-button spg-action-button--large",
    buttonRemove: "spg-matrixdynamic__remove-btn",
    iconAdd: "",
    iconRemove: "",
    dragElementDecorator: "spg-drag-element__svg",
    iconDragElement: "#icon-drag-area-indicator",
    iconDrag: "spg-matrixdynamic__drag-element",
    footer: "",
    dragDropGhostPositionTop: "spg-matrixdynamic__drag-drop-ghost-position-top",
    dragDropGhostPositionBottom: "spg-matrixdynamic__drag-drop-ghost-position-bottom",
    emptyRowsSection: "spg-matrixdynamic__placeholder",
    emptyRowsText: "spg-matrixdynamic__placeholder-text"
  },
  rating: {
    root: "spg-rating",
    item: "spg-rating__item",
    selected: "spg-rating__item--selected",
    minText: "spg-rating__min-text",
    itemText: "spg-rating__item-text",
    maxText: "spg-rating__max-text",
    disabled: "spg-rating--disabled"
  },
  comment: {
    root: "spg-input spg-comment",
    small: "spg-row__question--small"
  },
  expression: "",
  file: {
    root: "spg-file",
    other: "spg-comment spg-question__other",
    placeholderInput: "spg-visuallyhidden",
    preview: "spg-file__preview",
    fileSign: "spg-hidden",
    fileSignBottom: "spg-file__sign",
    fileDecorator: "spg-file__decorator",
    fileInput: "spg-visuallyhidden",
    noFileChosen: "spg-description spg-file__no-file-chosen",
    chooseFile: "spg-btn spg-file__choose-btn",
    disabled: "spg-file__choose-btn--disabled",
    removeButton: "spg-hidden",
    removeButtonBottom: "spg-btn spg-file__clean-btn",
    removeFile: "spg-hidden",
    removeFileSvg: "spg-file__remove-svg",
    wrapper: "spg-file__wrapper"
  },
  signaturepad: {
    root: "spg-signaturepad sjs_sp_container",
    small: "spg-row__question--small",
    controls: "sjs_sp_controls",
    clearButton: "sjs_sp_clear"
  },
  propertygrid_restfull: {
    content: "spg-question__content spg-question__nopadding"
  },
  saveData: {
    root: "",
    saving: "",
    error: "",
    success: "",
    saveAgainButton: ""
  },
  window: {
    root: "sv_window",
    body: "sv_window_content",
    header: {
      root: "sv_window_title",
      title: "",
      button: "",
      buttonExpanded: "",
      buttonCollapsed: ""
    }
  },
  actionBar: {
    root: "spg-action-bar",
    item: "spg-action-button",
    itemPressed: "spg-action-button--pressed",
    itemAsIcon: "spg-action-button--icon",
    itemIcon: "spg-action-button__icon",
    itemTitle: "spg-action-button__title",
  },
};
