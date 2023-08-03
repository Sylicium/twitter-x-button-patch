function tryPatchXButton() {
    let GlitchedXButton_list = [...document.getElementsByTagName("a")].filter(x => x.getAttribute("aria-label") == "Twitter")
    if(GlitchedXButton_list[0] == undefined) {
        setTimeout(() => {
            tryPatchXButton()
        }, 100)
        return;
    } else {
        console.log("[TWBP] Patched !")
        GlitchedXButton_list[0].onclick = () => {
            console.log("[TWBP] Clicked")
            chrome.runtime.sendMessage({ message: "closeIt" });
        }
    }
}
tryPatchXButton()