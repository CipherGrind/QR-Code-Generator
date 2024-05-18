var qr;
var barcodeSize = 128; // Default barcode size

function generateBarcode() {
    var password = document.getElementById('password').value.trim();
    if (password === '') {
        alert('Please enter data.');
        return;
    }
    var qr = document.getElementById("barcode");
    qr.innerHTML = '';

    qr = new QRCode(document.getElementById("barcode"), {
        text: password,
        width: barcodeSize, // Use the stored barcode size
        height: barcodeSize, // Use the stored barcode size
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.L
    });
}


//////////////////////////////////
//////////////////////////////////


function clearBarcode() {
    if (qr) {
        qr.clear();
    }
    document.getElementById('barcode').innerHTML = '';
}

function clearData() {
    document.getElementById('password').value = ''; // Clear password input field
}


//////////////////////////////////
//////////////////////////////////


// Function to open settings pop-out window
function openSettings() {
    document.getElementById("settingsPopup").style.width = "330px";
}

// Function to close settings pop-out window
function closeSettings() {
    document.getElementById("settingsPopup").style.width = "0px";
}


//////////////////////////////////
//////////////////////////////////


// Function to select barcode size
function selectSize(button, size) {
    barcodeSize = size;
    
    // Remove 'selected' class from all buttons
    var sizeButtons = document.querySelectorAll("#sizeButtons button");
    sizeButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });
    
    // Add 'selected' class to the clicked button
    button.classList.add("selected");
}










