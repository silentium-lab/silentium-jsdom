import { sourceSync } from "silentium";
import { jsdomDocument } from "./JSDomDocument";
import { expect, test } from "vitest";

test("JSDomDocument.test", () => {
  const document = sourceSync(
    jsdomDocument(`<div class="menu">
    <div id="prev-active" class="menu-link active">One</div>
  </div>`),
  );

  expect(document.syncValue().querySelector(".menu-link")?.textContent).toBe(
    "One",
  );
});
