import { JSDOM } from 'jsdom';
import { value, guestCast, give, sourceChangeable, sourceAll, patron } from 'silentium';

const jsdomDocument = (body = "") => {
  return (g) => {
    value(
      body,
      guestCast(g, (body2) => {
        give(
          new JSDOM(`<!DOCTYPE html><body>${body2}</body></html>`).window.document,
          g
        );
      })
    );
  };
};

const jsDomElement = (documentSrc, htmlSrc) => {
  const result = sourceChangeable();
  const all = sourceAll([documentSrc, htmlSrc]);
  value(
    all,
    patron(([document, html]) => {
      const div = document.createElement("div");
      div.innerHTML = html;
      result.give(div.children[0]);
    })
  );
  return result;
};

export { jsDomElement, jsdomDocument };
//# sourceMappingURL=silentium-jsdom.js.map
