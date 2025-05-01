import { JSDOM } from 'jsdom';
import { value, guestCast, give, sourceChangeable, sourceAll, patron } from 'silentium';

const jsdomDocument = (body = "", domGuest) => {
  return (g) => {
    value(
      body,
      guestCast(g, (body2) => {
        const dom = new JSDOM(`<!DOCTYPE html><body>${body2}</body></html>`);
        if (domGuest) {
          give(dom, domGuest);
        }
        give(dom.window.document, g);
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
//# sourceMappingURL=silentium-jsdom.mjs.map
