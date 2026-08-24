import test from "node:test";
import assert from "node:assert/strict";
import { createGetContentHandler } from "./get-content-handler.js";

test("returns stored content as JSON when present", async () => {
  const fakeStore = { get: async () => ({ heroTitle: "Custom Title" }) };
  const handler = createGetContentHandler({ getStore: () => fakeStore });
  const res = await handler({}, {});
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.deepEqual(body, { heroTitle: "Custom Title" });
});

test("returns an empty object when nothing is stored yet", async () => {
  const fakeStore = { get: async () => null };
  const handler = createGetContentHandler({ getStore: () => fakeStore });
  const res = await handler({}, {});
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.deepEqual(body, {});
});

test("returns an empty object when the store read throws", async () => {
  const fakeStore = { get: async () => { throw new Error("boom"); } };
  const handler = createGetContentHandler({ getStore: () => fakeStore });
  const res = await handler({}, {});
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.deepEqual(body, {});
});
