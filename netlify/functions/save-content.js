import { getStore } from "@netlify/blobs";
import { getUser } from "@netlify/identity";
import { createSaveContentHandler } from "./lib/save-content-handler.js";

export default createSaveContentHandler({
  getStore,
  getUser,
  adminEmails: (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean),
});
