import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = join(OUTPUT_DIR, OUTPUT_FILE);

const SENTENCE_OPEN =
  "Every afternoon at five, my grandmother called me in from the street ";
const SENTENCE_MIDDLE =
  "by shaking a tin of fried peanuts, and thirty years later I still stop ";
const SENTENCE_CLOSE = "when I hear metal rattling in a kitchen.";

const ENTRY = SENTENCE_OPEN + SENTENCE_MIDDLE + SENTENCE_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
