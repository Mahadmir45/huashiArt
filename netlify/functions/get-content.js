import { getStore } from "@netlify/blobs";
import { createGetContentHandler } from "./lib/get-content-handler.js";

export default createGetContentHandler({ getStore });
