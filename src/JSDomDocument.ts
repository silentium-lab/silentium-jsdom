import { JSDOM } from "jsdom";
import { give, guestCast, GuestType, SourceType, value } from "silentium";

/**
 * Helps to get Document from html string
 */
export const jsdomDocument = (
  body: SourceType<string> = "",
  domGuest?: GuestType<JSDOM>,
): SourceType<Document> => {
  return (g: GuestType<Document>) => {
    value(
      body,
      guestCast(g, (body) => {
        const dom = new JSDOM(`<!DOCTYPE html><body>${body}</body></html>`);
        if (domGuest) {
          give(dom, domGuest);
        }
        give(dom.window.document, g);
      }),
    );
  };
};
