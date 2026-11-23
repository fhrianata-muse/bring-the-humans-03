// Bring the humans with a TikTok ad — entry program for @expylar.
//
// The entry itself is a public TikTok video: an ad for make.fun that
// the entrant posted from his own TikTok account (@dwfnin) during the
// bounty window. This repository only hands the video in. VIDEO.json
// at the root names the video's full address, and this program copies
// that file, byte for byte, into the output directory where the
// house's gate reads it and looks the video up on TikTok.
//
// Before copying, the program checks the address really is shaped
// like a TikTok video address — tiktok.com, an @handle, /video/ and a
// numeric id — so a short share link or a photo post fails loudly
// here instead of being refused silently at the gate.
//
// No network, no clock, no randomness: same input, same bytes out.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(repoRoot, "VIDEO.json"), "utf8");
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== "object" || parsed === null) {
  throw new Error("VIDEO.json must hold a JSON object with a url field");
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string") {
  throw new Error("VIDEO.json url must be a string");
}
const videoAddress =
  /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+\/?([?#].*)?$/;
const mobileVideoAddress = /^https:\/\/m\.tiktok\.com\/v\/\d+\.html([?#].*)?$/;
if (!videoAddress.test(url) && !mobileVideoAddress.test(url)) {
  throw new Error(`VIDEO.json url is not a TikTok video address: ${url}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "VIDEO.json"), raw);
