// Get input element
let filterInput = document.getElementById('filterInput');
// Add eventListener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value of input
    let filterValue = document.getElementById('filterInput').nodeValue.toUpperCase();
    console.log(filterValue);
}