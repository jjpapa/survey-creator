import { generalGroupName, getPropertyGridCategory, setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "String Editor";

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    }
  ]
};

const json2 = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      description: "desc",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    }
  ]
};
const json3 = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      description: "desc",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    },
    {
      "type": "matrixdropdown",
      "name": "question1",
      "columns": [
        {
          "name": "Column 1"
        },
        {
          "name": "Column 2"
        },
        {
          "name": "Column 3"
        }
      ],
      "choices": [
        1,
        2,
        3,
        4,
        5
      ],
      "rows": [
        "Row 1",
        "Row 2"
      ]
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Edit question title", async (t) => {
  await setJSON(json);
  const title = json.questions[0].name;
  const svStringSelector = Selector(".sv-string-editor").withText(title);
  const prefix = "prefix";

  await t
    .click(getPropertyGridCategory(generalGroupName))
    .click(svStringSelector)
    .typeText(svStringSelector, prefix, { caretPos: 0 })
    .pressKey("esc")
    .expect(Selector("textarea[aria-label=Title]").value).eql("", "Question title in property grid still empty")

    .click(svStringSelector)
    .click(svStringSelector)
    .typeText(svStringSelector, prefix, { caretPos: 0 })
    .pressKey("ctrl+enter")
    .expect(Selector("textarea[aria-label=Title]").value).eql(prefix + title, "Question title in property grid is updated")

    .click(svStringSelector)
    .pressKey("ctrl+a")
    .pressKey("delete")
    .pressKey("ctrl+enter")
    .expect(Selector(".sv-string-editor").withText(title).visible).ok("Question title is reset to question name")

    .click(svStringSelector)
    .pressKey("ctrl+a")
    .pressKey("delete")
    .pressKey("ctrl+enter")
    .expect(Selector(".sv-string-editor").withText(title).visible).ok("Question title still contains question name");
});

test("Check string editor visibility", async (t) => {
  await setJSON(json);

  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).notOk();

  const newJson = JSON.parse(JSON.stringify(json));
  newJson.questions[0]["description"] = "Desc";
  await setJSON(newJson);
  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).ok();

  await ClientFunction((json) => {
    window["Survey"].Serializer.findProperty("question", "description").placeholder = "Q placeholder";
    window["creator"].JSON = json;
  })(json);
  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).ok();
});

test("Check string editor visibility on defferent ReadOnly cases", async (t) => {
  var json_t = {
    questions: [
      {
        type: "checkbox",
        name: "q1",
        choices: [
          "item1",
          "item2"
        ]
      },
      {
        type: "radiogroup",
        name: "q2",
        choices: [
          "item3",
          "item4"
        ]
      }
    ]
  };
  await setJSON(json_t);

  await t
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item1").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item2").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item3").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item4").withAttribute("contenteditable", "true").exists).ok();

  await ClientFunction(() => {
    window["Survey"].Serializer.getProperty("itemvalue", "text").readOnly = true;
  })();
  await setJSON(json_t);

  await t
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item1").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item3").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item4").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item2").withAttribute("contenteditable", "false").exists).ok();

  await ClientFunction(() => {
    window["Survey"].Serializer.getProperty("itemvalue", "text").readOnly = false;
    window["Survey"].Serializer.getProperty("checkbox", "choices").readOnly = true;
  })();
  await setJSON(json_t);

  await t
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item1").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item2").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item3").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item4").withAttribute("contenteditable", "true").exists).ok();

  await ClientFunction(() => {
    window["Survey"].Serializer.getProperty("checkbox", "choices").readOnly = false;
    window["creator"].onGetPropertyReadOnly.add(function (editor, options) {
      if (options.obj.getType() === "radiogroup" && options.propertyName == "choices")
        options.readOnly = true;
    });
  })();
  await setJSON(json_t);

  await t
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item1").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item2").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item3").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("item4").withAttribute("contenteditable", "false").exists).ok();

});

test("Check creator events on string editor", async (t) => {
  const msg = "Description length can not be greater than 10 characters";
  await ClientFunction((json, msg) => {
    window["creator"].JSON = json;
    window["creator"].onPropertyValidationCustomError.add(function (sender, options) {
      if (options.obj.isQuestion && options.propertyName == "description" && options.value.length > 10) {
        options.error = msg;
      }
    });
  })(json2, msg);

  const svStringSelector = Selector(".sv-string-editor").withText("desc");

  await t
    .click(svStringSelector)
    .click(svStringSelector)
    .typeText(svStringSelector, "1234567890", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sd-question__description .svc-string-editor").withText(msg).visible).ok();
});

test("Check string editor on isRequired", async (t) => {
  const msg = "Please enter a value";
  await ClientFunction((json, msg) => {
    window["Survey"].Serializer.findProperty("question", "description").isRequired = true;
    window["creator"].JSON = json;
  })(json2, msg);

  const svStringSelector = Selector(".sv-string-editor").withText("desc");

  await t
    .click(svStringSelector)
    .expect(svStringSelector.focused).ok()
    .pressKey("ctrl+a delete")
    .pressKey("enter")
    .expect(Selector(".sd-question__description .svc-string-editor").withText(msg).visible).ok();
});

test("Check string editor not loosing focus and selects underlying items", async (t) => {
  await setJSON(json3);

  const svStringSelector = Selector(".sv-string-editor").withText("string_editor");
  const svItemSelector = Selector(".sv-string-editor").withText("item1");

  await t
    .click(svStringSelector)
    .expect(svStringSelector.focused).ok()
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .pressKey("tab")
    .expect(Selector(".sv-string-editor").withText("desc").focused).ok()
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .click(svItemSelector)
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .expect(svItemSelector.focused).ok()
    .click(Selector(".sv-string-editor").withText("Column 1"))
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 1").visible).ok()
    .click(Selector(".sv-string-editor").withText("Column 2"))
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 2").visible).ok()
    .pressKey("tab")
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 3").visible).ok();
});

test("Check string editor inplaceEditForValues property", async (t) => {
  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("item1");

  await t
    .click(svItemSelector)
    .click(svItemSelector)
    .typeText(svItemSelector, "new", { caretPos: 0 })
    .pressKey("enter")
    .expect(ClientFunction(() => {
      var itemvalue = window["creator"].survey.getQuestionByName("string_editor").choices[0];
      return { value: itemvalue.value, text: itemvalue.text };
    })()).eql({ value: "item1", text: "newitem1" });

  await ClientFunction(() => {
    window["creator"].inplaceEditForValues = true;
  })();

  await t
    .click(Selector(".sv-string-editor").withText("newitem1"))
    .click(Selector(".sv-string-editor").withText("newitem1"))
    .typeText(Selector(".sv-string-editor").withText("newitem1"), "Ok", { caretPos: 0 })
    .pressKey("enter")
    .expect(ClientFunction(() => {
      var itemvalue = window["creator"].survey.getQuestionByName("string_editor").choices[0];
      return { value: itemvalue.value, text: itemvalue.text };
    })()).eql({ value: "Oknewitem1", text: "newitem1" });
});

test("Check item string editor focus out on near click", async (t) => {
  let json = {
    "elements": [
      {
        "type": "checkbox",
        "name": "question1",
        "choices": ["item1"]
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("item1");

  await t
    .click(svItemSelector)
    .expect(svItemSelector.focused).ok()
    .click(Selector(".svc-item-value-wrapper").withText("item1"), { offsetX: 200 })
    .expect(svItemSelector.focused).notOk();
});

test("Check markdown events", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => options.html = options.text.replaceAll("*", "$"));
    });
  })();

  await setJSON({
    "description": "*abc*",
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  });

  await t
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("*abc*").visible).ok()
    .click(Selector(".sv-string-editor").withText("*abc*"))
    .typeText(Selector(".sv-string-editor").withText("*abc*"), "d", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText("d$abc$").visible).ok();
});

test("Check markdown back events", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => options.html = options.text.replaceAll("*", "$"));
    });
    window["creator"].onHtmlToMarkdown.add((survey, options) => options.text = options.html.replaceAll("$", "*"));
  })();
  var getValue = ClientFunction(() => {
    return window["creator"].survey.description;
  });

  await setJSON({
    "description": "*abc*",
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  });

  await t
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("$abc$").visible).ok()
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .typeText(Selector(".sv-string-editor").withText("$abc$"), "d", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText("d$abc$").visible).ok()
    .expect(getValue()).eql("d*abc*");
});

test("Check markdown events with HTML", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => options.html = options.text.replaceAll("*", "$"));
    });
  })();

  var getValue = ClientFunction(() => {
    return window["creator"].survey.description;
  });

  await setJSON({
    "description": "*a<b>b</b>c*",
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  });

  await t
    .expect(getValue()).eql("*a<b>b</b>c*")
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("*abc*").visible).ok()
    .click(Selector(".sv-string-editor").withText("*abc*"))
    .wait(100)
    .pressKey("esc")
    .wait(100)
    .expect(Selector(".sv-string-editor").withText("$abc$").visible).ok()
    .expect(getValue()).eql("*a<b>b</b>c*")
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("*abc*").visible).ok()
    .click(Selector(".sv-string-editor").withText("*abc*"))
    .typeText(Selector(".sv-string-editor").withText("*abc*"), "d", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText("d$abc$").visible).ok()
    .expect(getValue()).eql("d*a<b>b</b>c*");
});

test("Test selection", async (t) => {
  let json = {
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("question1");

  await t
    .click(svItemSelector)
    .expect(ClientFunction(() => {
      return window.getSelection().toString();
    })()).eql("question1")
    .wait(300)
    .click(svItemSelector)
    .expect(ClientFunction(() => {
      return window.getSelection().toString();
    })()).eql("");
});

test("Test styles", async (t) => {
  let json = {
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("question1");

  await t
    .expect(await svItemSelector.getStyleProperty("user-select")).eql("text");
});

test("Test selection after tab", async (t) => {
  let json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ],
        "title": "page_title",
        "description": "page_desc"
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("page_title");

  await t
    .click(svItemSelector)
    .expect(ClientFunction(() => {
      return window.getSelection().toString();
    })()).eql("page_title")
    .wait(300)
    .pressKey("tab")
    .expect(ClientFunction(() => {
      return window.getSelection().toString();
    })()).eql("page_desc");
});

test("Test string change event", async (t) => {
  let json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "matrix",
            "name": "question1",
            "columns": [
              "Column 1",
              "Column 2",
              "Column 3"
            ],
            "rows": [
              "Row 1",
              "Row 2"
            ]
          }
        ]
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("page_title");
  await ClientFunction(() => {
    window["creator"].survey.getAllQuestions()[0].columns[0].text = "newTitle";
  })();
});

test("Focus on new question", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Radiogroup"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
});

test("Focus on new question dragged", async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
});

test("Do not focus on existing question dragged", async (t) => {
  await setJSON({
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          },
          {
            "type": "text",
            "name": "question2"
          },
          {
            "type": "text",
            "name": "question3"
          }
        ]
      }
    ]
  });

  const questionName = "question1";
  const q1 = Selector("[data-sv-drop-target-survey-element=\"question1\"]");
  const q3 = Selector("[data-sv-drop-target-survey-element=\"question3\"]");
  const dragZone = q1.find(".svc-question__drag-element");

  await t
    .hover(q1, { speed: 0.5, offsetX: 5, offsetY: 5 })
    .hover(dragZone, { speed: 0.5 })
    .dragToElement(dragZone, q3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 1,
      speed: 0.5
    });

  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).notOk();
});

test("Focus switch on select base", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Radiogroup"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("item1").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("item2").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("item3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("item4").focused).ok()
    .pressKey("Ctrl+Enter")
    .expect(Selector(".sv-string-editor").withText("item5").visible).notOk();
});

test("Disable edit inactive items", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Checkbox"))
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Select All").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("None").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Other").withAttribute("contenteditable", "false").exists).ok()
    .click(Selector(".svc-item-value-controls__add").nth(0))
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Select All").withAttribute("contenteditable", "true").exists).ok()
    .click(Selector(".svc-item-value-controls__add").nth(1))
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("None").withAttribute("contenteditable", "true").exists).ok()
    .click(Selector(".svc-item-value-controls__add").nth(1))
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Other").withAttribute("contenteditable", "true").exists).ok();
});

test("Focus switch on rating base", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Rating"));
  await t.pressKey("Enter");
  const svStringSelector = Selector(".svc-rating-question-content .sv-string-editor").withText("2");
  await t
    .expect(svStringSelector.visible).ok()
    .click(svStringSelector)
    .expect(svStringSelector.focused).ok();
  await t
    .pressKey("tab")
    .expect(Selector(".svc-rating-question-content .sv-string-editor").withText("3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".svc-rating-question-content .sv-string-editor").withText("4").focused).notOk();
});

test("Delete items on backspace", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Radiogroup"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter").pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("item2").focused).ok()
    .expect(Selector(".sv-string-editor").withText("item1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("item2").visible).ok()
    .expect(Selector(".sv-string-editor").withText("item3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("item1").focused).ok()
    .expect(Selector(".sv-string-editor").withText("item2").visible).notOk()
    .expect(Selector(".sv-string-editor").withText("item1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("item3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("item3").focused).ok()
    .expect(Selector(".sv-string-editor").withText("item1").visible).notOk()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("item3").visible).notOk();
});

test("Focus switch on multiple text", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Multiple Text"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("text1").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("text2").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("text3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("text4").focused).ok()
    .pressKey("Ctrl+Enter")
    .expect(Selector(".sv-string-editor").withText("text5").visible).notOk();
});

test("Delete  multiple text items on backspace", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Multiple Text"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter").pressKey("Enter").pressKey("Enter").pressKey("shift+tab")
    .expect(Selector(".sv-string-editor").withText("text2").focused).ok()
    .expect(Selector(".sv-string-editor").withText("text1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("text2").visible).ok()
    .expect(Selector(".sv-string-editor").withText("text3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("text1").focused).ok()
    .expect(Selector(".sv-string-editor").withText("text2").visible).notOk()
    .expect(Selector(".sv-string-editor").withText("text1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("text3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("text3").focused).ok()
    .expect(Selector(".sv-string-editor").withText("text1").visible).notOk()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("text3").visible).notOk();
});

test("Focus switch on matrix columns and rows", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Single-Choice Matrix"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 1").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 2").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 4").focused).ok()
    .pressKey("Ctrl+Enter")
    .expect(Selector(".sv-string-editor").withText("Column 5").visible).notOk()
    .click(Selector(".sv-string-editor").withText("Row 1"))
    .expect(Selector(".sv-string-editor").withText("Row 1").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Row 2").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Row 3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Row 4").focused).ok()
    .pressKey("Ctrl+Enter")
    .expect(Selector(".sv-string-editor").withText("Row 5").visible).notOk();
});

test("Delete matrix Columns on backspace", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Single-Choice Matrix"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter").pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 2").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Column 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Column 2").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Column 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Column 1").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Column 2").visible).notOk()
    .expect(Selector(".sv-string-editor").withText("Column 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Column 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Column 3").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Column 1").visible).notOk()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Column 3").visible).notOk();
});

test("Delete matrix rows on backspace", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Single-Choice Matrix"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("tab").pressKey("tab").pressKey("tab").pressKey("tab");
  await t.pressKey("Enter").pressKey("Enter").pressKey("shift+tab")
    .expect(Selector(".sv-string-editor").withText("Row 2").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Row 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Row 2").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Row 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Row 1").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Row 2").visible).notOk()
    .expect(Selector(".sv-string-editor").withText("Row 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Row 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Row 3").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Row 1").visible).notOk()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Row 3").visible).notOk();
});
test("Paste multiline selectbase", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Radiogroup"));

  await t
    .click(Selector(".sv-string-editor").withText("item2"))
    .typeText(Selector(".sv-string-editor").withText("item2"), "a\nb\nc", { caretPos: 2, paste: true });
  await t.expect(Selector(".sv-string-editor").withText("item3").focused).ok();
  await t.expect(ClientFunction(() => {
    return JSON.stringify(window["creator"].survey.getAllQuestions()[0].choices.map(c => c.text));
  })()).eql("[\"item1\",\"ita\",\"b\",\"cem2\",\"item3\"]");
});
test("Undo after new item add", async (t) => {
  await t
    .click(Selector(".svc-toolbox__tool").withText("Radiogroup"))
    .click(Selector(".svc-item-value-controls__add").filterVisible().nth(1))
    .expect(Selector(".svc-item-value-controls__remove").count).eql(4)
    .click(Selector("button[title=Undo]"))
    .expect(Selector(".svc-item-value-controls__remove").count).eql(3);
});
