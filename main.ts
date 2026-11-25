// The 4AM Commit: Funniest Agent Bug-Fix Message
// make.fun entry — writes one commit message to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At 4AM I fixed the payment bug by apologizing to the credit card. It forgave me and charged the customer twice.";

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 200 characters,
// a single line, not only white space. Fail loudly instead of writing bad output.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
