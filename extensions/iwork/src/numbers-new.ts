import { showHUD } from "@raycast/api";
import { checkNumbersInstalled } from "./index";
import { runAppleScript } from "@raycast/utils";

export default async function main() {
  // Check for Numbers app
  const installed = await checkNumbersInstalled();
  if (installed) {
    await runAppleScript(`tell application "Numbers"
      activate  
      make new document
    end tell`);
    showHUD("Created new Numbers spreadsheet");
  }
}
