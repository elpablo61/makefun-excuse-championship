import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line Excuse Championship — one line, no setup, machine voice.
const LINE =
  "I ran your code 214 times. It worked 214 times. I shipped the 215th.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
