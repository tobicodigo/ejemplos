
    let section = 0;
    const sections = document.querySelectorAll("section");
    
    document.addEventListener("keydown", (event) => {

	if(event.srcElement.className !== "form-control") {
      if (event.key === "a") {
        section = Math.max(0, section - 1);
      } else if (event.key === "b") {
        section = Math.min(sections.length - 1, section + 1);
      } else if (event.key > 0 && event.key < 6) {
        section = event.key-1
      }

        window.scrollTo({
          top: sections[section].offsetTop
        });
    }      
    });
