import { give, GuestType, sourceSync, SourceType, value } from "silentium";
import { jsdomDocument } from "./JSDomDocument";
import { expect, test } from "vitest";

test("JSDomDocument.test", () => {
  const document = sourceSync(
    jsdomDocument(`<div class="menu">
    <div id="prev-active" class="menu-link active">One</div>
  </div>`),
  );

  sourceSync(handler({ document: document.syncValue() }));

  expect(document.syncValue().body.outerHTML).toContain('class="menu ttt"');
});

function handler(document: SourceType<{ document: Document }>) {
  return (g: GuestType<Document>) => {
    value(document, (doc) => {
      doc.document.querySelector(".menu")?.classList.add("ttt");
      give(doc.document, g);
    });
  };
}
