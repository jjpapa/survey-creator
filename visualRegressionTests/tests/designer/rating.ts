import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "Rating Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1"
        }
      ]
    }
  ]
};
const jsonComment = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "hasComment": true
        }
      ]
    }
  ]
};

const jsonMulti = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "rateMax": 20
        }
      ]
    }
  ]
};

test("Rating adorners", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON(json);

    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
    const question = Selector("div[data-name=question1]");
    await takeScreenshot("rating-not-selected.png", question, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
    await takeScreenshot("rating-selected.png", question, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});

test("Rating adorners with comment", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON(jsonComment);

    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-comment-not-selected.png", question, t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
    await takeElementScreenshot("rating-comment-selected.png", question, t, comparer);
  });
});

test("Multi row rating adorner", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON(jsonMulti);
    await t.resizeWindow(1200, 900);
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
    const question = Selector("div[data-name=question1]");
    await takeScreenshot("rating-multiline.png", question, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());

    await t.resizeWindow(550, 900);
    await takeScreenshot("rating-multiline-mobile.png", question, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});