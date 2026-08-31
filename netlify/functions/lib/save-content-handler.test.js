import test from "node:test";
import assert from "node:assert/strict";
import { createSaveContentHandler } from "./save-content-handler.js";

function fakeReq({ method = "POST", body } = {}) {
  return {
    method,
    json: async () => {
      if (body === undefined) throw new SyntaxError("Unexpected end of JSON input");
      return body;
    },
  };
}

test("rejects non-POST requests", async () => {
  const handler = createSaveContentHandler({
    getStore: () => ({ setJSON: async () => {} }),
    getUser: async () => ({ email: "hua@example.com" }),
    adminEmails: ["hua@example.com"],
  });
  const res = await handler(fakeReq({ method: "GET" }), {});
  assert.equal(res.status, 405);
});

test("rejects unauthenticated requests", async () => {
  const handler = createSaveContentHandler({
    getStore: () => ({ setJSON: async () => {} }),
    getUser: async () => null,
    adminEmails: ["hua@example.com"],
  });
  const res = await handler(fakeReq({ body: { heroTitle: "x" } }), {});
  assert.equal(res.status, 401);
});

test("rejects a signed-in user who isn't an admin", async () => {
  const handler = createSaveContentHandler({
    getStore: () => ({ setJSON: async () => {} }),
    getUser: async () => ({ email: "someone-else@example.com" }),
    adminEmails: ["hua@example.com"],
  });
  const res = await handler(fakeReq({ body: { heroTitle: "x" } }), {});
  assert.equal(res.status, 403);
});

test("rejects a malformed JSON body", async () => {
  const handler = createSaveContentHandler({
    getStore: () => ({ setJSON: async () => {} }),
    getUser: async () => ({ email: "hua@example.com" }),
    adminEmails: ["hua@example.com"],
  });
  const res = await handler(fakeReq({ body: undefined }), {});
  assert.equal(res.status, 400);
});

test("saves content for the authorized admin and returns ok", async () => {
  let savedKey, savedValue;
  const handler = createSaveContentHandler({
    getStore: () => ({
      setJSON: async (key, value) => { savedKey = key; savedValue = value; },
    }),
    getUser: async () => ({ email: "hua@example.com" }),
    adminEmails: ["hua@example.com"],
  });
  const content = { heroTitle: "New Title" };
  const res = await handler(fakeReq({ body: content }), {});
  assert.equal(res.status, 200);
  const responseBody = await res.json();
  assert.deepEqual(responseBody, { ok: true });
  assert.equal(savedKey, "content");
  assert.deepEqual(savedValue, content);
});

test("saves content for any authorized admin in a multi-admin list", async () => {
  let savedValue;
  const handler = createSaveContentHandler({
    getStore: () => ({
      setJSON: async (_key, value) => { savedValue = value; },
    }),
    getUser: async () => ({ email: "second-admin@example.com" }),
    adminEmails: ["hua@example.com", "second-admin@example.com"],
  });
  const content = { heroTitle: "New Title" };
  const res = await handler(fakeReq({ body: content }), {});
  assert.equal(res.status, 200);
  assert.deepEqual(savedValue, content);
});
