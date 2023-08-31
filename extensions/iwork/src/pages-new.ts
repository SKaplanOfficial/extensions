import { showHUD } from "@raycast/api";
import { checkPagesInstalled } from "./index";
import { runAppleScript } from "@raycast/utils";

export default async function main() {
  // Check for Pages app
  const installed = await checkPagesInstalled();
  if (installed) {
    await runAppleScript(`tell application "Pages"
      activate  
      make new document
    end tell`);
    showHUD("Created new Pages document");
  }
}
