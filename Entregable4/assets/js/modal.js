// This function creates the modal dialog

function createModal() {
    console.log("create modal");

    // Create a <div> elements for the modal 
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const closeButton = document.createElement("span");
    closeButton.innerText = "x";
    closeButton.classList.add("close");
    closeButton.addEventListener("click", closeModal);

    // Create an <ul> element to hold the list of titles
    const titleList = document.createElement("ul");
    titleList.id = "titleList";

    // Add everything to modal and body
    modalContent.appendChild(closeButton);
    modalContent.appendChild(titleList);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
}

// This function opens the modal and displays a list of h2 titles
function openModal() {
    console.log("openModal");

    // Get the title list element
    const titleList = document.getElementById("titleList");
    titleList.innerHTML = "";

  // Add H2 elements to list
    const h2Elements = document.querySelectorAll("h2");

    h2Elements.forEach(function (h2) {
        const title = h2.innerText;
        const listItem = document.createElement("li");
        listItem.innerText = title;
        titleList.appendChild(listItem);
    });

    // Display modal
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

// This function closes the modal
function closeModal() {
    console.log("closeModal");

    // Get the modal element and hide it
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

createModal();
setTimeout(openModal, 1000);
setTimeout(closeModal, 3000);