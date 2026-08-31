export function createSaveContentHandler({ getStore, getUser, adminEmails }) {
  return async function handler(req, context) {
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const user = await getUser();
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }
    if (!adminEmails.includes(user.email)) {
      return new Response("Forbidden", { status: 403 });
    }

    let content;
    try {
      content = await req.json();
    } catch (_err) {
      return new Response("Invalid JSON body", { status: 400 });
    }
    if (!content || typeof content !== "object" || Array.isArray(content)) {
      return new Response("Invalid content shape", { status: 400 });
    }

    const store = getStore("hua-portfolio-content");
    await store.setJSON("content", content);
    return Response.json({ ok: true });
  };
}
