export function createGetContentHandler({ getStore }) {
  return async function handler(req, context) {
    try {
      const store = getStore("hua-portfolio-content");
      const content = await store.get("content", { type: "json" });
      return Response.json(content || {});
    } catch (_err) {
      return Response.json({});
    }
  };
}
