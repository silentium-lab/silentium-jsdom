import { expect, test } from "vitest";
import { jsdomDocument } from "./JSDomDocument";
import { jsDomElement } from "./JSDomElement";
import { sourceSync } from "silentium";

test("JSDomElement.test", () => {
  const document = jsdomDocument(`<div class="menu"></div>`);
  const element = sourceSync(
    jsDomElement(document, "<div class='menu-link'>Link</div>"),
  );

  expect(element.syncValue().getAttribute("class")).toBe("menu-link");
});
