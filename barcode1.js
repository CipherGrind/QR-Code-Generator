var qr;
var barcodeSize = 128; 

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
        width: barcodeSize,
        height: barcodeSize,
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
    document.getElementById('password').value = '';
}

//////////////////////////////////
//////////////////////////////////

function openSettings() {
    document.getElementById("settingsPopup").style.width = "330px";
}

function closeSettings() {
    document.getElementById("settingsPopup").style.width = "0px";
}

//////////////////////////////////
//////////////////////////////////

function selectSize(button, size) {
    barcodeSize = size;
    
    var sizeButtons = document.querySelectorAll("#sizeButtons button");
    sizeButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });
    
    button.classList.add("selected");
}

////////////////////////
////////////////////////

function downloadBarcode() {
    const barcode128 = document.getElementById('barcode');

    html2canvas(barcode128, {
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'barcode.png';
        link.click();
    }).catch(err => {
        console.error('Error generating image:', err);
        alert('An error occurred while generating the badge image.');
    });
}








