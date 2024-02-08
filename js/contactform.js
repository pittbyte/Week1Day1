function showInputBox() {
    var selectElement = document.getElementById("contactMethod");
    var emailInput = document.getElementById("emailInput");
    var phoneInput = document.getElementById("phoneInput");

    // Hide all input boxes
    emailInput.classList.add("hidden");
    phoneInput.classList.add("hidden");

    // Show the selected input box
    var selectedValue = selectElement.value;
    if (selectedValue === "email") {
        emailInput.classList.remove("hidden");
    } else if (selectedValue === "phone") {
        phoneInput.classList.remove("hidden");
    }
}
function showModal() {
    var modal = document.getElementById('optionsModal');
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('optionsModal');
    modal.style.display = 'none';
}
function toggleBackground() {
    var selectElement = document.getElementById("contactMethod");

    // Set background color based on selected option
    var selectedValue = selectElement.value;

    // Remove blue background from all options
    var options = selectElement.getElementsByTagName("option");
    for (var i = 0; i < options.length; i++) {
        options[i].classList.remove("blue-background");
    }

    // Add blue background to the selected option
    if (selectedValue !== "") {
        selectElement.querySelector('option[value="' + selectedValue + '"]').classList.add("blue-background");
    }
}