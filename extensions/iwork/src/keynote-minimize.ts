import { showHUD } from "@raycast/api";
import { checkKeynoteInstalled } from "./index";
import { runAppleScript } from "@raycast/utils";

export default async function main() {
  // Check for Keynote app
  const installed = await checkKeynoteInstalled();
  if (installed) {
    await runAppleScript('tell application "Keynote" to set the miniaturized of every window to true');
    showHUD("Minimized Keynote");
  }
}
