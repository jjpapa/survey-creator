import { editorLocalization } from "survey-creator-core";

var italianTranslation = {
  // strings for survey templates
  survey: {
    edit: "Modifica",
    externalHelpLink: "Guarda e impara come creare questionari",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Aggiungi una domanda qui",
    addLogicItem:
      "Crea una regola per personalizzare il percorso del questionario.",
    copy: "Copia",
    duplicate: "Duplica",
    settings: "Impostazioni",
    addToToolbox: "Aggiungi alla toolbox",
    deletePanel: "Elimina Pannello",
    deleteQuestion: "Elimina Domanda",
    convertTo: "Converti in",
    drag: "Trascina l'elemento",
    license:
      "È necessario acquistare una licenza per sviluppatori per utilizzare Survey Creator nella propria applicazione.",
  },
  // strings for question types
  qt: {
    default: "Default",
    checkbox: "Casella di controllo",
    comment: "Commento",
    imagepicker: "Selezionatore di immagini",
    ranking: "Classifica",
    image: "Immagine",
    dropdown: "Tendina",
    file: "File",
    html: "Html",
    matrix: "Matrice (scelta singola)",
    matrixdropdown: "Matrice (scelta multipla)",
    matrixdynamic: "Matrice (dinamica)",
    multipletext: "Testo multiplo",
    panel: "Pannello",
    paneldynamic: "Pannello dinamico",
    radiogroup: "Opzione multipla",
    rating: "Valutazione",
    text: "Testo semplice",
    boolean: "Booleano",
    expression: "Espressione (sola lettura)",
    signaturepad: "Pad per la firma",
    buttongroup: "Gruppo di pulsanti",
    flowpanel: "Pannello di flusso",
  },
  // strings for editor
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Questionario",
    settings: "Impostazioni Questionario",
    settingsTooltip: "Apri le impostazioni del questionario",
    showPanel: "Mostra Pannello",
    hidePanel: "Nascondi Pannello",
    prevSelected: "Seleziona precedente",
    nextSelected: "Seleziona seguente",
    surveyTypeName: "Questionario",
    pageTypeName: "Pagina",
    panelTypeName: "Pannello",
    questionTypeName: "Domanda",
    columnTypeName: "Colonna",
    addNewPage: "Aggiungi Nuova Pagina",
    moveRight: "Scorri a destra",
    moveLeft: "Scorri a sinistra",
    deletePage: "Elimina Pagina",
    editPage: "Modifica Pagina",
    edit: "Modifica",
    newPageName: "Pagina",
    newQuestionName: "Domanda",
    newPanelName: "Pannello",
    newTextItemName: "Testo",
    testSurvey: "Anteprima del questionario",
    defaultV2Theme: "Default",
    modernTheme: "Tema Moderno",
    defaultTheme: "Default (legacy)",
    testSurveyAgain: "Prova il Questionario di nuovo",
    testSurveyWidth: "Larghezza questionario:",
    navigateToMsg: "Bisogna navigare fino a:",
    logic: "Logica",
    embedSurvey: "Includi Questionario",
    translation: "Traduzione",
    saveSurvey: "Salva Questionario",
    saveSurveyTooltip: "Salva Questionario",
    designer: "Progetta il questionario",
    jsonEditor: "Modifica JSON",
    jsonHideErrors: "Nascondi gli errori",
    jsonShowErrors: "Mostra gli errori",
    undo: "Annulla",
    redo: "Ripristina",
    undoTooltip: "Annulla l'ultima modifica",
    redoTooltip: "Ripristina l'ultima modifica",
    copy: "Copia",
    cut: "Taglia",
    paste: "Incolla",
    copyTooltip: "Copia la selezione negli appunti",
    cutTooltip: "Taglia la selezione negli appunti",
    pasteTooltip: "Incolla dagli appunti",
    options: "Opzioni",
    generateValidJSON: "Genera JSON Valido",
    generateReadableJSON: "Genera JSON Leggibile",
    toolbox: "Toolbox",
    "property-grid": "Proprietà",
    propertyGridFilteredTextPlaceholder: "Digita per cercare...",
    toolboxGeneralCategory: "Generale",
    correctJSON: "Correggi il tuo JSON",
    surveyResults: "Risultati del questionario: ",
    surveyResultsTable: "Come tabella",
    surveyResultsJson: "Come JSON",
    resultsTitle: "Titolo Domanda",
    resultsName: "Nome Domanda",
    resultsValue: "Valore Risposta",
    resultsDisplayValue: "Mostra Valore",
    modified: "Modificato",
    saving: "Salvataggio",
    saved: "Salvato",
    propertyEditorError: "Errore:",
    saveError: "Errore! Il contenuto dell'editor non è salvato.",
    translationPropertyGridTitle: "Impostazione della traduzione",
    translationLanguages: "Lingue",
    translationAddLanguage: "Seleziona la lingua da tradurre",
    translationShowAllStrings: "Tutte le stringhe",
    translationShowUsedStringsOnly: "Solo le stringhe usate",
    translationShowAllPages: "Tutte le pagine",
    translationNoStrings: "Nessuna stringa da tradurre. Cambia il filtro.",
    translationExportToSCVButton: "Esporta in CSV",
    translationImportFromSCVButton: "Importa da CSV",
    translationMergeLocaleWithDefault: "Unisci {0} con il predefinito",
    translationPlaceHolder: "Traduzione...",
    bold: "Grassetto",
    italic: "Corsivo",
    underline: "Sottolineato",
    fpAddQuestion: "Aggiungi domanda...",
    selectPage: "Seleziona la pagina...",
    htmlPlaceHolder: "Il contenuto HTML sarà qui.",
    panelPlaceHolder: "Trascina una domanda dalla toolbox qui.",
    surveyPlaceHolder:
      "Il questionario è vuoto. Trascina un elemento dalla toolbox o clicca sul tasto sottostante.",
    addNewQuestion: "Aggiungi domanda",
    addNewTypeQuestion: "Aggiungi {0}",
    chooseLogoPlaceholder: "[LOGO]",
    lg: {
      addNewItem: "Aggiungi Nuova Regola",
      empty_tab:
        "Crea una regola per personalizzare il percorso del questionario.",
      page_visibilityName: "Mostra (nascondi) pagina",
      page_enableName: "Abilita (disabilita) pagina",
      panel_visibilityName: "Mostra (nascondi) pannello",
      panel_enableName: "Abilita (disabilita) pannello",
      question_visibilityName: "Mostra (nascondi) domanda",
      question_enableName: "Abilita (disabilita) domanda",
      question_requireName: "Rendi la domanda obbligatoria",
      column_visibilityName: "Mostra (nascondi) colonna",
      column_enableName: "Abilita (disabilita) colonna",
      column_requireName: "Rendi la colonna obbligatoria",
      trigger_completeName: "Completa questionario",
      trigger_setvalueName: "Imposta la risposta",
      trigger_copyvalueName: "Copia la risposta",
      trigger_skipName: "Passa alla domanda",
      trigger_runExpressionName: "Esegui l'espressione",
      completedHtmlOnConditionName:
        'Imposta il markup della pagina "Questionario Completo"',
      page_visibilityDescription:
        "Rendi la pagina visibile quando l'espressione logica restituisce vero. Altrimenti, mantienila invisibile.",
      panel_visibilityDescription:
        "Rendi il pannello visibile quando l'espressione logica restituisce vero. Altrimenti, mantienilo invisibile.",
      panel_enableDescription:
        "Rendi il pannello e tutti gli elementi al suo interno abilitati quando l'espressione logica restituisce vero. Altrimenti, mantienili disabilitati.",
      question_visibilityDescription:
        "Rendi visibile la domanda quando l'espressione logica restituisce vero. Altrimenti, mantienila invisibile.",
      question_enableDescription:
        "Rendi la domanda abilitata quando l'espressione logica restituisce vero. Altrimenti, mantienila disabilitata.",
      question_requireDescription:
        "La domanda diventa obbligatoria quando l'espressione logica restituisce vero.",
      trigger_completeDescription:
        "Quando l'espressione logica restituisce vero, il questionario diventa completo e l'utente finale vede la 'Pagina di ringraziamento'.",
      trigger_setvalueDescription:
        "Quando i valori della domanda, utilizzati nell'espressione logica, vengono modificati e l'espressione logica restituisce vero, il valore viene impostato sulla domanda selezionata.",
      trigger_copyvalueDescription:
        "Quando i valori della domanda, utilizzata nell'espressione logica, vengono modificati e l'espressione logica restituisce vero, il valore di una domanda selezionata viene copiato in un'altra domanda selezionata.",
      trigger_skipDescription:
        "Quando l'espressione logica restituisce vero, il questionario passa / si focalizza sulla domanda selezionata.",
      trigger_runExpressionDescription:
        "Quando l'espressione logica restituisce vero, viene eseguita l'espressione personalizzata. È possibile impostare il risultato dell'espressione nella domanda selezionata.",
      completedHtmlOnConditionDescription:
        "Se l'espressione logica restituisce vero, il testo di default per la 'Pagina di ringraziamento' viene modificato in quello indicato.",
      itemExpressionText: "Quando l'espressione: '{0}' restituisce vero:",
      itemEmptyExpressionText: "Nuova regola",
      page_visibilityText: "rendi la pagina {0} visibile",
      panel_visibilityText: "rendi il pannello {0} visibile",
      panel_enableText: "rendi il pannello {0} abilitato",
      question_visibilityText: "rendi la domanda {0} visibile",
      question_enableText: "rendi la domanda {0} abilitata",
      question_requireText: "rendi la domanda {0} obbligatoria",
      column_visibilityText: "rendi la colonna {0} della domanda {1} visibile",
      column_enableText: "rendi la colonna {0} della domanda {1} abilitata",
      column_requireText: "rendi la colonna {0} della domanda {1} obbligatoria",
      trigger_completeText: "il questionario viene completato",
      trigger_setvalueText: "imposta nella domanda: {0} valore {1}",
      trigger_copyvalueText:
        "copia nella domanda: {0} valore dalla domanda {1}",
      trigger_skipText: "questionario passa alla domanda {0}",
      trigger_runExpressionText1: "esegui l'espressione: '{0}'",
      trigger_runExpressionText2: " e imposta il risultato nella domanda: {0}",
      completedHtmlOnConditionText:
        "mostra il testo personalizzato per la 'Pagina di ringraziamento'.",
      showAllQuestions: "Tutte le Domande",
      showAllActionTypes: "Tutti i Tipi di Azione",
      conditions: "Condizione(i)",
      actions: "Azione(i)",
      expressionEditorTitle: "Definisci condizione(i)",
      actionsEditorTitle: "Definisci azione(i)",
      deleteAction: "Cancella Azione",
      addNewAction: "Aggiungi Azione",
      selectedActionCaption: "Seleziona azione...",
      expressionInvalid: "L'espressione logica è vuota o invalida. Correggila.",
      noActionError: "Aggiungi almeno un'azione.",
      actionInvalid: "Risolvi i problemi nell'azione(i)",
      expressionSetup: "Impostazione espressione",
      actionsSetup: "Impostazione azioni",
    },
  },
  // strings for property editors
  pe: {
    clearIfInvisible: "Cancella se Invisibile",
    columnsVisibleIf: "Colonne visibili se",
    rowsVisibleIf: "Righe visibili se",
    choicesByUrl: "Opzioni da URL",
    showValueInLink: "Mostra il valore nel link",
    displayMode: "Modalità display",
    isUnique: "È unico",
    showInMultipleColumns: "Mostra in più colonne",
    totalMaximumFractionDigits: "Numero massimo di cifre frazionarie",
    totalMinimumFractionDigits: "Numero minimo di cifre frazionarie",
    questions: "Domande",
    runExpression: "Esegui l'espressione",
    apply: "Applica",
    ok: "OK",
    save: "Salva",
    clear: "Cancella",
    saveTooltip: "Salva",
    cancel: "Annulla",
    set: "Imposta",
    reset: "Reimposta",
    change: "Modifica",
    refresh: "Aggiorna",
    close: "Chiudi",
    delete: "Elimina",
    add: "Aggiungi",
    addNew: "Aggiungi Nuovo",
    addItem: "Clicca per aggiungere un'opzione...",
    removeItem: "Clicca per rimuovere un'opzione...",
    dragItem: "Trascina l'opzione",
    addOther: "Altro",
    addSelectAll: "Seleziona Tutti",
    addNone: "Nessuno",
    removeAll: "Elimina tutto",
    edit: "Modifica",
    back: "Torna indietro senza salvare",
    backTooltip: "Torna indietro senza salvare",
    saveAndBack: "Salva e torna indietro",
    saveAndBackTooltip: "Salva e torna indietro",
    doneEditing: "Fatto",
    editChoices: "Modifica Scelte",
    showChoices: "Mostra Scelte",
    move: "Muovi",
    empty: "<empty>",
    emptyValue: "Il valore è vuoto",
    fastEntry: "Inserimento manuale",
    fastEntryNonUniqueError: "Il valore '{0}' non è univoco",
    fastEntryChoicesCountError: "Limita il numero di opzioni da {0} a {1}",
    formEntry: "Inserimento dati",
    testService: "Prova il servizio",
    itemSelectorEmpty: "Seleziona elemento",
    conditionActionEmpty: "Seleziona azione",
    conditionSelectQuestion: "Seleziona domanda...",
    conditionSelectPage: "Seleziona pagina...",
    conditionSelectPanel: "Seleziona pannello...",
    conditionValueQuestionTitle: "Inserisci/seleziona valore",
    expressionHelp:
      "Inserisci un’espressione. Puoi usare le parentesi graffe per ottenere l’accesso ai valori delle domande: ‘{domanda1} + {domanda2}’. Le espressioni supportano anche le funzioni: iif(), today(), age(), min(), max(), count(), avg(), e altre.",
    aceEditorHelp:
      "Premi ctrl+spazio per ottenere un suggerimento sul completamento dell'espressione",
    aceEditorRowTitle: "Riga corrente",
    aceEditorPanelTitle: "Pannello Corrente",
    showMore: "Per maggiori dettagli, guarda la documentazione",
    assistantTitle: "Domande disponibili:",
    cellsEmptyRowsColumns: "Dovrebbe esserci almeno una colonna o riga",
    showPreviewBeforeComplete:
      "Vedi l'anteprima delle risposte prima di inviare il questionario",
    propertyIsEmpty: "Per favore, inserisci un valore",
    propertyIsNoUnique: "Inserisci un valore univoco",
    propertyNameIsNotUnique: "Inserisci un nome univoco",
    listIsEmpty: "Aggiungi una nuova opzione",
    "listIsEmpty@choices": "Non sono state ancora aggiunte scelte",
    "addNew@choices": "Aggiungi una scelta",
    expressionIsEmpty: "Espressione vuota",
    value: "Valore",
    text: "Testo",
    rowid: "ID Riga",
    imageLink: "URL immagine o video",
    columnEdit: "Modifica colonna: {0}",
    itemEdit: "Modifica elemento: {0}",
    url: "URL",
    path: "Percorso",
    valueName: "Nome Valore",
    titleName: "Nome Titolo",
    imageLinkName: "Ottieni gli URL delle immagini dal seguente campo JSON:",
    allowEmptyResponse: "Consenti risposta vuota",
    titlePlaceholder: "Titolo",
    surveyTitlePlaceholder: "Titolo del questionario",
    pageTitlePlaceholder: "Pagina {num}",
    descriptionPlaceholder: "Descrizione",
    surveyDescriptionPlaceholder: "Descrizione",
    pageDescriptionPlaceholder: "Descrizione",
    showOtherItem: "Consenti l'opzione Altro",
    otherText: "Testo dell'opzione Altro",
    otherPlaceHolder: "Testo segnaposto area commenti",
    showNoneItem: "Consenti l'opzione Nessuno",
    noneText: "Testo dell'opzione Nessuno",
    showSelectAllItem: "Consenti l'opzione Seleziona tutti",
    selectAllText: "Testo dell'opzione Seleziona tutti",
    choicesMin: "Valore minimo per le opzioni generate automaticamente",
    choicesMax: "Valore massimo per le opzioni generate automaticamente",
    choicesStep: "Distanza valori opzioni generate automaticamente",
    name: "Nome",
    title: "Titolo",
    cellType: "Tipo di cella",
    colCount: "Numero di colonne",
    choicesOrder: "Ordinamento delle scelte",
    visible: "Visibile",
    isRequired: "Obbligatoria",
    isAllRowRequired: "Richiedi risposta per tutte le righe",
    requiredErrorText: '"Obbligatoria" messaggio di errore',
    startWithNewLine: "Visualizza la domanda su una nuova riga",
    rows: "Righe",
    cols: "Colonne",
    placeholder: "Testo segnaposto",
    showPreview: "Mostra anteprima",
    storeDataAsText: "Vedi il contenuto JSON come testo",
    maxSize: "Dimensione massima (in bytes)",
    imageHeight: "Altezza immagine",
    imageWidth: "Larghezza immagine",
    rowCount: "Numero delle righe",
    columnLayout: "Layout delle colonne",
    addRowLocation: "Posizione del tasto Aggiungi riga",
    addRowText: "Testo del tasto per aggiungere una nuova riga",
    removeRowText: "Testo del tasto per eliminare una riga",
    rateMin: "Valore minimo",
    rateMax: "Valore massimo",
    rateStep: "Distanza tra i valori",
    minRateDescription: "Descrizione del valore minimo",
    maxRateDescription: "Descrizione del valore massimo",
    inputType: "Tipo di inserimento",
    optionsCaption: "Testo segnaposto dell'opzione",
    showOptionsCaption: "Mostra l'opzione testo segnaposto",
    defaultValue: "Valore default",
    cellsDefaultRow: "Testi default",
    surveyEditorTitle: "Modifica le impostazioni del questionario",
    qEditorTitle: "Modifica domanda: {0}",
    maxLength: "Lunghezza massima (in caratteri)",
    buildExpression: "Build",
    editExpression: "Modifica",
    and: "e",
    or: "o",
    remove: "Elimina",
    addCondition: "Aggiungi Condizione",
    if: "se",
    then: "allora",
    setToName: "Domanda mirata",
    fromName: "Domanda da cui copiare la risposta",
    gotoName: "Domanda a cui passare",
    ruleIsNotSet: "La regola è sbagliata",
    includeIntoResult: "Includi nei risultati del questionario",
    showTitle: "Mostra/nascondi titolo",
    expandCollapseTitle: "Espandi/comprimi il titolo",
    locale: "Lingua Default",
    simulator: "Scegli il dispositivo",
    landscapeOrientation: "Orizzontale",
    portraitOrientation: "Verticale",
    mode: "Modalità (editabile/sola lettura)",
    clearInvisibleValues: "Cancella i valori invisibili",
    cookieName:
      "Nome cookie (per disabilitare esegui il questionario due volte in locale)",
    sendResultOnPageNext:
      "Invia i risultati del questionario alla pagina successiva",
    storeOthersAsComment: "Memorizza il valore Altro in campi separati",
    showPageTitles: "Visualizza titolo e descrizione pagina",
    showPageNumbers: "Visualizza numero pagina",
    pagePrevText: "Testo del tasto Pagina Precedente",
    pageNextText: "Testo del tasto Pagina Successiva",
    completeText: "Testo del tasto Completato",
    previewText: "Testo del tasto Anteprima risposte",
    editText: "Testo del tasto Modifica risposta",
    startSurveyText: "Testo del tasto Inizia Questionario",
    showNavigationButtons:
      "Visualizza tasti di navigazione (navigazione di default)",
    showPrevButton:
      "Visualizza tasto Pagina Precedente (l'utente può tornare alla pagina precedente)",
    firstPageIsStarted: "La prima pagina nel questionario è la pagina iniziale",
    showCompletedPage: "Mostra la pagina Questionario Completo",
    goNextPageAutomatic:
      "Rispondendo a tutte le domande, vai alla pagina successiva in automatico",
    showProgressBar: "Visualizza barra di avanzamento",
    questionTitleLocation: "Posizione del titolo della domanda",
    requiredText: "Simbolo domanda obbligatoria, ad esempio (*)",
    questionStartIndex: "La domanda inizia con l'indice (1, 2 oppure 'A', 'a')",
    showQuestionNumbers: "Visualizza il numero delle domande",
    questionTitleTemplate:
      "Template titolo della domanda, il default è: '{no}. {require} {title}'",
    questionErrorLocation: "Posizione del messaggio di errore",
    focusFirstQuestionAutomatic:
      "Al cambio pagina, posiziona il cursore sulla prima domanda",
    questionsOrder: "Ordine delle domande sulla pagina",
    maxTimeToFinish: "Tempo massimo per terminare il questionario",
    maxTimeToFinishPage:
      "Tempo massimo per terminare una pagina del questionario",
    page: {
      maxTimeToFinish: "Tempo massimo per terminare la pagina (in secondi)",
    },
    question: { page: "Pagina principale" },
    showTimerPanel: "Visualizzazione pannello timer",
    showTimerPanelMode: "Modalità visualizzazione pannello timer",
    renderMode: "Modalità di visualizzazione",
    allowAddPanel: "Consenti l'aggiunta di un pannello",
    allowRemovePanel: "Consenti la rimozione di un pannello",
    noEntriesText: "Testo segnaposto delle voci vuote",
    panelAddText: "Testo del tasto Aggiungi pannello",
    panelRemoveText: "Testo del tasto Rimuovi pannello",
    isSinglePage: "Visualizza tutti gli elementi su una pagina",
    html: "Markup HTML",
    expression: "Espressione",
    setValue: "Rispondi",
    dataFormat: "Formato immagine",
    allowAddRows: "Permetti di aggiungere righe",
    allowRemoveRows: "Permetti di eliminare righe",
    allowRowsDragAndDrop: "Consenti il trascinamento delle righe",
    responsiveImageSizeHelp:
      "Non si applica se si specifica l'esatta larghezza o altezza dell'immagine.",
    minImageWidth: "Larghezza minima dell'immagine",
    maxImageWidth: "Larghezza massima dell'immagine",
    minImageHeight: "Altezza minima dell'immagine",
    maxImageHeight: "Altezza massima dell'immagine",
    minValue: "Valore minimo",
    maxValue: "Valore massimo",
    minLength: "Lunghezza minima (in caratteri)",
    allowDigits: "Ammetti le cifre",
    minCount: "Numero minimo",
    maxCount: "Numero massimo",
    regex: "Espressione regolare",
    surveyvalidator: {
      text: "Messaggio di errore",
      expression: "Espressione di convalida",
    },
    totalText: "Testo della riga Totale",
    totalType: "Tipo Totale",
    totalExpression: "Espressione Totale",
    totalDisplayStyle: "Stile di visualizzazione del valore Totale",
    totalCurrency: "Valuta",
    totalFormat: "Stringa formattata",
    logo: "Logo (URL o stringa codificata in base64)",
    questionsOnPageMode: "Struttura questionario",
    maxTextLength: "Lunghezza massima della risposta (in caratteri)",
    maxOthersLength: "Lunghezza massima del commento (in caratteri)",
    autoGrowComment:
      "Espansione automatica dell'area dei commenti, se necessaria",
    textUpdateMode: "Aggiornare il valore del testo della domanda",
    focusOnFirstError: "Imposta il focus sulla prima risposta invalida",
    checkErrorsMode: "Esegui la convalida",
    navigateToUrl: "Naviga fino all'URL",
    navigateToUrlOnCondition: "URL Dinamico",
    completedBeforeHtml:
      "Markup da mostrare se l'utente ha già compilato questo questionario",
    completedHtml: "Markup della pagina Questionario Completo",
    completedHtmlOnCondition:
      "Markup dinamico della pagina Questionario Completo",
    loadingHtml:
      "Markup da mostrare durante il caricamento del modello del questionario",
    commentText: "Titolo dell'Area commento",
    autocomplete: "Tipo di completamento automatico",
    labelTrue: 'Etichetta "Vero"',
    labelFalse: 'Etichetta "Falso"',
    allowClear: "Mostra il tasto Cancella",
    displayStyle: "Stile di visualizzazione del valore",
    format: "Stringa formattata",
    maximumFractionDigits: "Numero massimo di cifre frazionarie",
    minimumFractionDigits: "Numero minimo di cifre frazionarie",
    useGrouping: "Mostra i separatori di raggruppamento",
    allowMultiple: "Consenti più file",
    allowImagesPreview: "Anteprima immagini",
    acceptedTypes: "Tipi di file accettati",
    waitForUpload: "Attendi il completamento del caricamento",
    needConfirmRemoveFile: "Conferma l'eliminazione del file",
    detailPanelMode: "Posizione del pannello di dettaglio",
    minRowCount: "Numero minimo di righe",
    maxRowCount: "Numero massimo di righe",
    confirmDelete: "Conferma eliminazione della riga",
    confirmDeleteText: "Testo del messaggio di conferma",
    paneldynamic: { confirmDelete: "Conferma eliminazione del pannello" },
    panelCount: "Numero iniziale di pannelli",
    minPanelCount: "Numero minimo di pannelli",
    maxPanelCount: "Numero massimo di pannelli",
    panelsState: "Stato di espansione del pannello interno",
    templateDescription: "Template descrizione",
    templateTitle: "Template titolo",
    panelPrevText: "Testo del tasto Pannello Precedente",
    panelNextText: "Testo del tasto Pannello Successivo",
    showRangeInProgress: "Mostra la barra di avanzamento",
    templateTitleLocation: "Posizione del titolo della domanda",
    panelRemoveButtonLocation: "Posizione del tasto Rimozione Pannello",
    hideIfRowsEmpty: "Nascondi la domanda se non ci sono righe",
    hideColumnsIfEmpty: "Nascondi le colonne se non ci sono righe",
    rateValues: "Valori personalizzati",
    hideIfChoicesEmpty: "Nascondi la domanda se non ci sono scelte",
    hideNumber: "Nascondi numero domanda",
    minWidth: "Larghezza minima (in valori accettati da CSS)",
    maxWidth: "Larghezza massima (in valori accettati da CSS)",
    width: "Larghezza (in valori accettati da CSS)",
    showHeader: "Mostra intestazioni colonna",
    horizontalScroll: "Mostra la barra di scorrimento orizzontale",
    columnMinWidth:
      "Larghezza minima della colonna (in valori accettati da CSS)",
    rowTitleWidth:
      "Larghezza dell'intestazione della riga (in valori accettati dai CSS)",
    valueTrue: 'Valore "Vero"',
    valueFalse: 'Valore "Falso"',
    minErrorText: '"Valore inferiore al minimo" messaggio di errore',
    maxErrorText: '"Valore superiore al massimo" messaggio di errore',
    otherErrorText: '"Commento vuoto" messaggio di errore',
    keyDuplicationError: '"Valore chiave non univoco" messaggio di errore',
    maxSelectedChoices: "Max. scelte selezionabili",
    showClearButton: "Mostra il tasto Cancella",
    showNumber: "Mostra numero pannello",
    logoWidth: "Larghezza logo (in valori accettati da CSS)",
    logoHeight: "Altezza logo (in valori accettati da CSS)",
    readOnly: "Sola lettura",
    enableIf: "Editabile se",
    emptyRowsText: '"Nessuna riga" messaggio',
    size: "Dimensione dell'input (in caratteri)",
    separateSpecialChoices:
      "Scelte speciali separate (Nessuno, Altro, Seleziona tutti)",
    choicesFromQuestion: "Copia le scelte dalla domanda seguente:",
    choicesFromQuestionMode: "Quale scelta copiare?",
    showCommentArea: "Mostra l'area commento",
    commentPlaceHolder: "Testo segnaposto area commento",
    displayRateDescriptionsAsExtremeItems:
      "Mostra le descrizioni come valori estremi",
    rowsOrder: "Ordine righe",
    columnsLayout: "Layout colonna",
    columnColCount: "Numero colonne annidate",
    state: "Estensione del pannello",
    correctAnswer: "Risposta corretta",
    defaultPanelValue: "Valori di default",
    cells: "Testi Celle",
    keyName: "Colonna chiave",
    logoPosition: "Posizione Logo",
    addLogo: "Aggiungi logo...",
    changeLogo: "Modifica logo...",
    logoPositions: {
      none: "Rimuovi logo",
      left: "Sinistra",
      right: "Destra",
      top: "In alto",
      bottom: "In basso",
    },
    tabs: {
      general: "Generale",
      fileOptions: "Opzioni",
      html: "Modifica Html",
      columns: "Colonne",
      rows: "Righe",
      choices: "Scelte",
      items: "Opzioni",
      visibleIf: "Visibile se",
      enableIf: "Editabile se",
      requiredIf: "Obbligatoria se",
      rateValues: "Valori della classifica",
      choicesByUrl: "Opzioni da URL",
      matrixChoices: "Opzioni predefinite",
      multipleTextItems: "Voci di testo",
      numbering: "Numerazione",
      validators: "Validatori",
      navigation: "Navigazione",
      question: "Domanda",
      pages: "Pagine",
      timer: "Timer/Quiz",
      calculatedValues: "Valori Calcolati",
      triggers: "Trigger",
      templateTitle: "Template titolo",
      totals: "Totale",
      logic: "Logica",
      layout: "Layout",
      data: "Dati",
      validation: "Validazione",
      cells: "Testi Cella",
      showOnCompleted: "Questionario Completo",
      logo: "Logo nel Titolo Questionario",
      slider: "Cursore",
      others: "Altri",
    },
    editProperty: "Modifica propietà '{0}'",
    items: "[ Elemento: {0} ]",
    choicesVisibleIf: "Scelte visibili se",
    choicesEnableIf: "Scelte selezionabili se",
    columnsEnableIf: "Colonne visibili se",
    rowsEnableIf: "Righe visibili se",
    indent: "Aggiungi rientri",
    panel: { indent: "Aggiungi rientri esterni" },
    innerIndent: "Aggiungi rientri interni",
    defaultValueFromLastRow: "Prendi i valori predefiniti dall'ultima riga",
    defaultValueFromLastPanel:
      "Prendi i valori predefiniti dall'ultimo pannello",
    enterNewValue: "Inserisci il valore.",
    noquestions: "Non c'è alcuna domanda nel questionario.",
    createtrigger: "Il trigger non è impostato",
    titleKeyboardAdornerTip: "Premi il tasto Invio per modificare",
    keyboardAdornerTip:
      "Premi il tasto Invio per modificare l'elemento, premi il tasto Cancella per eliminare l'elemento, premi alt più freccia su o freccia giù per spostare l'elemento.",
    triggerOn: "Attivazione",
    triggerMakePagesVisible: "Rendi visibili le pagine:",
    triggerMakeQuestionsVisible: "Rendi visibili le domande:",
    triggerCompleteText: "Completa il questionario.",
    triggerNotSet: "Non impostato",
    triggerRunIf: "Esegui se",
    triggerSetToName: "Cambia il valore di: ",
    triggerFromName: "Copia valore da: ",
    triggerRunExpression: "Esegui questa Espressione:",
    triggerSetValue: "a: ",
    triggerGotoName: "Vai alla domanda:",
    triggerIsVariable:
      "Non inserire la variabile del risultato del questionario",
    triggerRunExpressionEmpty: "Inserisci un'espressione valida",
    emptyExpressionPlaceHolder: "Digita qui l'espressione...",
    noFile: "Nessun file scelto",
  },
  pv: {
    contain: "Comprimi",
    cover: "Ricopri",
    fill: "Riempi",
    auto: "Auto",
    static: "Statico",
    responsive: "Responsive",
    dropdown: "Tendina",
    checkbox: "Casella di controllo",
    radiogroup: "Opzione multipla",
    comment: "Commento",
    boolean: "Booleano",
    expression: "Espressione (sola lettura)",
    rating: "Valutazione",
    selected: "Selezionata",
    unselected: "Non selezionata",
    image: "Immagine",
    video: "Video",
    youtube: "Youtube",
    never: "Mai",
    always: "Sempre",
    sum: "Somma",
    count: "Totale",
    min: "Min",
    max: "Max",
    avg: "Media",
    true: "vero",
    false: "falso",
    inherit: "Default",
    show: "Visibile",
    hide: "Nascosto",
    default: "Default",
    initial: "Iniziale",
    random: "Random",
    collapsed: "Ridotto",
    expanded: "Esteso",
    none: "Nessuno",
    asc: "Ascendente",
    desc: "Discendente",
    indeterminate: "Indeterminato",
    decimal: "decimale",
    currency: "valuta",
    percent: "percentuale",
    firstExpanded: "Il primo pannello è esteso",
    off: "Nascondi il numero delle domande",
    onpanel: "Inizia su ogni pannello",
    onPanel: "Inizia su ogni pannello",
    onSurvey: "Continua lo svolgimento del questionario",
    list: "Lista",
    progressTop: "Navigatore del pannello + Barra di avanzamento in alto",
    progressBottom: "Navigatore del pannello + Barra di avanzamento in basso",
    progressTopBottom:
      "Navigatore del pannello + Barra di avanzamento in alto e in basso",
    horizontal: "Orizzontale",
    vertical: "Verticale",
    top: "In alto",
    bottom: "In basso",
    topBottom: "In alto e in basso",
    both: "Entrambe",
    left: "Sinistra",
    right: "Destra",
    color: "colore",
    date: "data",
    datetime: "data e ora",
    "datetime-local": "data e ora-locale",
    email: "email",
    month: "mese",
    number: "numero",
    password: "password",
    range: "intervallo",
    tel: "tel",
    text: "testo",
    time: "tempo",
    url: "url",
    week: "settimana",
    hidden: "Nascosto",
    on: "Inizia da capo in ogni pagina",
    onPage: "Continua dalla pagina precedente",
    edit: "Editabile",
    display: "Sola lettura",
    onComplete: "Al termine del questionario",
    onHidden: "Quando la domanda diventa nascosta",
    onHiddenContainer:
      "Quando la domanda, o il suo pannello/pagina, diventa nascosta",
    clearInvisibleValues: { none: "Mai" },
    all: "Tutto",
    page: "Pagina",
    survey: "Questionario",
    onNextPage: "Quando si passa alla pagina successiva",
    onValueChanged: "Dopo la modifica di una risposta",
    onValueChanging: "Prima della modifica di una risposta",
    standard: "Struttura originale",
    singlePage: "Tutte le domande in un'unica pagina",
    questionPerPage: "Ogni singola domanda in una pagina",
    noPreview: "No anteprima",
    showAllQuestions: "Mostra tutte le domande",
    showAnsweredQuestions: "Mostra solo le domande con risposta",
    pages: "Pagine completate",
    questions: "Domande con risposte",
    requiredQuestions: "Domande obbligatorie con risposta",
    correctQuestions: "Risposte valide",
    buttons: "Pagine completate (tasto UI)",
    underInput: "Sotto l'input",
    underTitle: "Sotto il titolo",
    onBlur: "Quando perde focus",
    onTyping: "Mentre si digita",
    underRow: "Sotto la riga",
    underRowSingle: "Sotto la riga, solo un pannello è visibile",
    showNavigationButtons: { none: "Nascosto" },
    showProgressBar: { off: "Nascosto" },
    showTimerPanel: { none: "Nascosto" },
    showTimerPanelMode: { all: "Entrambe" },
    detailPanelMode: { none: "Nascosto" },
    addRowLocation: { default: "Dipende dal layout della matrice" },
    panelsState: {
      default: "Gli utenti non possono espandere o comprimere i pannelli",
      collapsed: "Tutti i pannelli sono compressi",
      expanded: "Tutti i pannelli sono estesi",
    },
  },
  // strings for operators
  op: {
    empty: "è vuoto",
    notempty: "non è vuoto ",
    equal: "è uguale a",
    notequal: "non è uguale a",
    contains: "contiene",
    notcontains: "non contiene",
    anyof: "Qualsiasi",
    allof: "Tutti",
    greater: "maggiore",
    less: "minore",
    greaterorequal: "maggiore o uguale",
    lessorequal: "minore o uguale",
    and: "e",
    or: "o",
  },
  // strings for embed window
  ew: {
    angular: "Versione per Angular",
    jquery: "Versione per jQuery",
    knockout: "Versione per Knockout",
    react: "Versione per React",
    vue: "Versione per Vue",
    bootstrap: "Per framework bootstrap",
    modern: "Tema moderno",
    default: "Tema default",
    orange: "Tema Orange",
    darkblue: "Tema Darkblue",
    darkrose: "Tema Darkrose",
    stone: "Tema Stone",
    winter: "Tema Winter",
    winterstone: "Tema Winter-Stone",
    showOnPage: "Visualizza in questa pagina",
    showInWindow: "Visualizza in una finestra",
    loadFromServer: "Carica JSON dal server",
    titleScript: "Scripts e stili",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Preview (Survey)
  ts: {
    selectPage: "Seleziona la pagina da testare:",
    showInvisibleElements: "Mostra elementi nascosti",
  },
  validators: {
    answercountvalidator: "Numero risposte",
    emailvalidator: "E-mail",
    expressionvalidator: "Espressione",
    numericvalidator: "Numerico",
    regexvalidator: "Regex",
    textvalidator: "Testo",
  },
  triggers: {
    completetrigger: "Completa questionario",
    setvaluetrigger: "Imposta valore",
    copyvaluetrigger: "Copia risposta",
    skiptrigger: "Vai alla domanda",
    runexpressiontrigger: "Esegui espressione",
    visibletrigger: "Cambia visibilità",
  },
  pehelp: {
    cookieName:
      "I cookie impediscono agli utenti di compilare due volte lo stesso questionario.",
    format: "Usa {0} come segnaposto per il valore effettivo.",
    totalText:
      "Visibile solo quando almeno una colonna ha il tipo Totale o l'espressione Totale.",
    acceptedTypes:
      "Per ulteriori informazioni, consultare la descrizione dell'attributo [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount:
      "Applicabile solo ai tipi di cella Opzione multipla e Casella di controllo.",
    autocomplete:
      "Per ulteriori informazioni, consultare la descrizione dell'attributo [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    valueName:
      "Se non si imposta questa proprietà, la risposta sarà memorizzata in un campo specificato dalla proprietà Nome.",
    keyName:
      'Se la colonna specificata contiene valori identici, il questionario produce l\'errore "Valore chiave non univoco".',
  },
  //Properties
  p: {
    title: {
      name: "Titolo",
      title: "Lascialo vuoto, se è uguale a 'Nome'",
    },
    rowCount: "Numero riga",
    panelCount: "Numero pannello",
    navigationButtonsVisibility: "Visibilità Pulsanti di navigazione",
    visibleIf: "Visibile Se",
    description: "Descrizione",
    requiredIf: "Obbligatoria Se",
    validators: "Validatori",
    titleLocation: "Posizione del titolo",
    choices: "Scelte",
    label: "Etichetta",
    currency: "Valuta",
    columns: "Colonne",
    itemSize: "Dimensione opzione",
    templateTitle: "Titolo del template",
    triggers: "Triggers",
    defaultRowValue: "Valore predefinito Riga",
    multiSelect: "Consenti selezione multipla",
    showLabel: "Mostra le didascalie delle immagini",
    logoFit: "Adattamento del logo",
    pages: "Pagine",
    calculatedValues: "Valori calcolati",
    questionDescriptionLocation: "Posizione descrizione domanda",
    progressBarType: "Tipo barra di avanzamento",
    questionTitlePattern: "Modello titolo della domanda",
    widthMode: "Larghezza questionario",
    navigationTitle: "Titolo navigazione",
    navigationDescription: "Descrizione navigazione",
    useDisplayValuesInDynamicTexts: "Usa Valori di Riferimento nel titolo",
    descriptionLocation: "Posizione della descrizione",
    defaultValueExpression: "Espressione valore predefinito",
    bindings: "Collegamenti",
    allowAddRows: "Permetti Aggiungere Righe",
    allowRemoveRows: "Permetti Eliminare Righe",
    detailPanelShowOnAdding: "Dettaglio Mostra Pannello su Aggiunta",
    allowRowsDragAndDrop: "Permetti Trascinamento Righe",
    otherPlaceHolder: "Testo segnaposto Altro",
    contentMode: "Modalità contenuto",
    imageFit: "Adattamento dell'immagine",
    min: "min",
    max: "max",
    minValueExpression: "Valore min Espressione",
    maxValueExpression: "Valore max Espressione",
    step: "Distanza",
    dataList: "Lista dati",
    autoGrow: "Espansione automatica",
    multiLine: "Multilinea",
    height: "Altezza",
    penColor: "Colore penna",
    backgroundColor: "Colore sfondo",
    showCaption: "Mostra didascalia",
    iconName: "Nome icona",
    iconSize: "Grandezza icona",
  },
};

editorLocalization.locales["it"] = italianTranslation;
