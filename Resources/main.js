const pdfButton = document.getElementById('pdf_button');

let alertNoDownload = () => {
    alert('No Download Available');
};

pdfButton.addEventListener('click', alertNoDownload);