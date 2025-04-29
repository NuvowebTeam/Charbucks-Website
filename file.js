// Get the modal and modal content
var modal = document.getElementById("myModal");
var modalContent = document.querySelector('.modal-content');

// Get the button that opens the modal
var btn = document.getElementById("readMoreBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";  // Show the modal
    setTimeout(function () {
        modalContent.classList.add('show');  // Apply fade-in for modal content
    }, 10);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalContent.classList.add('fade-out');  // Add fade-out to modal content
    modal.classList.add('fade-out');         // Add fade-out to background
    setTimeout(function () {
        modal.style.display = "none";  // Hide the modal
        modalContent.classList.remove('fade-out');  // Reset fade-out class
        modal.classList.remove('fade-out');         // Reset fade-out class
    }, 500);  // Wait for the animation to finish before hiding
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modalContent.classList.add('fade-out');  // Add fade-out to modal content
        modal.classList.add('fade-out');         // Add fade-out to background
        setTimeout(function () {
            modal.style.display = "none";  // Hide the modal
            modalContent.classList.remove('fade-out');  // Reset fade-out class
            modal.classList.remove('fade-out');         // Reset fade-out class
        }, 500);  // Wait for the animation to finish before hiding
    }
}
// Get the content box
var contentBox = document.getElementById("myContentBox");

// Get the button that opens the content box
var btn = document.getElementById("readMoreBtn");

// Get the <span> element that closes the content box
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the content box
btn.onclick = function () {
    contentBox.style.display = "block";  // Show the content box
    setTimeout(function () {
        document.querySelector('.content-box').classList.add('show');  // Slide down
    }, 10);
}

// When the user clicks on <span> (x), close the content box
closeBtn.onclick = function () {
    contentBox.style.display = "none";  // Hide the content box
    document.querySelector('.content-box').classList.remove('show');
}

// When the user clicks anywhere outside of the content box, close it
window.onclick = function (event) {
    if (event.target == contentBox) {
        contentBox.style.display = "none";
        document.querySelector('.content-box').classList.remove('show');
    }
}
