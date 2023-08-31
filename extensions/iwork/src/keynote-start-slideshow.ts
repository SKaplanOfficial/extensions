import { showHUD } from "@raycast/api";
import { checkKeynoteInstalled } from "./index";
import { runAppleScript } from "@raycast/utils";

export default async function Main() {
  // Check for Keynote app
  const installed = await checkKeynoteInstalled();
  if (installed) {
    showHUD(`Starting slideshow...`);

    // Starts the current slideshow
    const error = await runAppleScript(`tell application "Keynote"
          try
            start slideshow
          on error
            return 1
          end try
      end tell`);

    if (error) {
      showHUD("No slideshow to start!");
    }
  }
}
