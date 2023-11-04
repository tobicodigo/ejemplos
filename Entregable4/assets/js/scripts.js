// Start weatherBar & Quiz
getLocation();

let section = 0;
const sections = document.querySelectorAll("section");

// remove easteregg
delete sections[0];

if(window.location.hash ==="#easteregg") {
getCountries();
}




// Addevent listener 
document.addEventListener("keydown", (event) => {

  // Check if the focused element is not a form control (input field)
  if (event.srcElement.className !== "form-control") {
    if (event.key === "a") {
      section = Math.max(0, section - 1);
    }
    else if (event.key === "b") {
      section = Math.min(sections.length - 1, section + 1);
    }
    else if (event.key === "h") {
      openModal();
    }
    else if (event.key > 0 && event.key < 6) {
      section = event.key - 1; 
      // Update the URL to selected section
      window.location.hash = sections[section].id; 
    }

    // Scroll the window to the top of the selected section
    window.scrollTo({
      top: sections[section].offsetTop,
    });
  }
});


console.log(window.location.hash)
