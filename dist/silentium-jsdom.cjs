'use strict';

var jsdom = require('jsdom');
var silentium = require('silentium');

const jsdomDocument = (body = "") => {
  return (g) => {
    silentium.value(
      body,
      silentium.guestCast(g, (body2) => {
        silentium.give(
          new jsdom.JSDOM(`<!DOCTYPE html><body>${body2}</body></html>`).window.document,
          g
        );
      })
    );
  };
};

const jsDomElement = (documentSrc, htmlSrc) => {
  const result = silentium.sourceChangeable();
  const all = silentium.sourceAll([documentSrc, htmlSrc]);
  silentium.value(
    all,
    silentium.patron(([document, html]) => {
      const div = document.createElement("div");
      div.innerHTML = html;
      result.give(div.children[0]);
    })
  );
  return result;
};

exports.jsDomElement = jsDomElement;
exports.jsdomDocument = jsdomDocument;
//# sourceMappingURL=silentium-jsdom.cjs.map
