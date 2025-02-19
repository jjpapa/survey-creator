import { Selector } from "testcafe";
import { url, getTabbedMenuItemByText, getBarItemByTitle, setJSON, takeElementScreenshot, wrapVisualTest } from "../../helper";

const title = "Translation tab Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "title": "Question 1"
        },
        {
          "type": "radiogroup",
          "name": "question3",
          "choices": [
            "item1",
            "item2",
            "item3"
          ]
        },
        {
          "type": "checkbox",
          "name": "question2",
          "title": {
            "default": "Question 3",
            "ru": "Вопрос 3"
          },
          "choices": [
            "item1",
            "item2",
            "item3"
          ]
        }
      ]
    }
  ]
};

test("strings view", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);
    await setJSON(json);

    const stringsView = Selector(".svc-creator-tab__content.svc-translation-tab");

    await t.click(getTabbedMenuItemByText("Translation"));
    await takeElementScreenshot("translation-tab.png", stringsView, t, comparer);

    await t.resizeWindow(800, 1440);
    await takeElementScreenshot("translation-tab-small-screen.png", stringsView, t, comparer);

    await t.resizeWindow(2560, 1440);
    await t.click(getBarItemByTitle("Used Strings Only"));
    await t.click(Selector(".sv-list__item").withText("All Strings"));
    await takeElementScreenshot("translation-tab-show-all-strings.png", stringsView, t, comparer);
  });
});