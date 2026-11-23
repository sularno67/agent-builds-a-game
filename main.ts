// Meteor Rush — make.fun entry program (Node 22, no dependencies).
// Its only job: copy POST.json from this repository into the output
// directory, so the house can read the entry's post address.
// It uses no network, no wall clock and no files outside the repository,
// so two runs always write the same bytes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
const src = join(botDir, "POST.json");
// Fail loudly on a malformed post file instead of copying a bad one:
// the entry is refused when POST.json does not parse or names no url.
const post = JSON.parse(readFileSync(src, "utf8"));
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be an object with a string url");
}
copyFileSync(src, join(outDir, "POST.json"));
