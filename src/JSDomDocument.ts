import { JSDOM } from "jsdom";
import { give, guestCast, GuestType, SourceType, value } from "silentium";

/**
 * Helps to get Document from html string
 */
export const jsdomDocument = (
  body: SourceType<string> = "",
): SourceType<Document> => {
  return (g: GuestType<Document>) => {
    value(
      body,
      guestCast(g, (body) => {
        give(
          new JSDOM(`<!DOCTYPE html><body>${body}</body></html>`).window
            .document,
          g,
        );
      }),
    );
  };
};
