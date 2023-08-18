let acc = document.getElementsByClassName("accordion");
let i;
let currentPanel = null;

for (i = 0; i < acc.length; i++) {
  // Loop through all accordion buttons and add event listeners to them
  acc[i].addEventListener("click", function () {
    // When the user clicks on an accordion button, toggle between hiding and showing the active panel
    // Close the current active panel
    if (currentPanel && currentPanel != this.nextElementSibling) {
      currentPanel.style.maxHeight = null;
      currentPanel.previousElementSibling.classList.remove("active");
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      // If the panel is open, close it
      panel.style.maxHeight = null;
    } else {
      // If the panel is closed, open it
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    currentPanel = panel.style.maxHeight ? panel : null;
  });
}
