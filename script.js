function generateQR() {
  const container = document.getElementById("qrcode");
  container.innerHTML = ""; // Borra el anterior
  const input = document.getElementById("inputText").value;
  if (!input) return;

  new QRCode(container, {
    text: input,
    width: 256,
    height: 256
  });

  // ACTIVAR el botón de descarga
  const downloadBtn = document.getElementById("download-btn");
  downloadBtn.disabled = false;
  downloadBtn.classList.add("enabled");
}


// Registrar Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
function downloadQR() {
  const qrContainer = document.querySelector("#qrcode img");
  
  if (!qrContainer) {
    alert("Primero genera un código QR.");
    return;
  }

  const url = qrContainer.src;
  const link = document.createElement("a");
  link.href = url;
  link.download = "qrprivado.png";
  link.click();
}