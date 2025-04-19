// Función para manejar la subida de archivos
document.getElementById('fileUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      // Aquí puedes agregar lógica para subir el archivo al servidor o gestionarlo
      alert(`¡Archivo ${file.name} subido correctamente!`);
    }
  });
  
  // Función para enviar mensaje de WhatsApp
// Función para enviar mensaje de WhatsApp al hacer clic en el botón
document.getElementById('whatsapp').addEventListener('click', () => {
    // Abre el chat de WhatsApp en el navegador con el número que configuraste
    window.location.href = 'https://wa.me/51901462362'; // Sustituye por tu número
  });
    
  
  
  