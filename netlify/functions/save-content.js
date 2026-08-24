import { getStore } from "@netlify/blobs";
import { getUser } from "@netlify/identity";
import { createSaveContentHandler } from "./lib/save-content-handler.js";

export default createSaveContentHandler({
  getStore,
  getUser,
  adminEmail: process.env.ADMIN_EMAIL,
});
