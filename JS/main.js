document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-list a");
    const outputDiv = document.getElementById("output");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault(); // Evita que el enlace navegue a otra página
        const href = link.getAttribute("href");
  
        fetch(href)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
          })
          .then(html => {
            outputDiv.innerHTML = html;
          })
          .catch(error => {
            outputDiv.innerHTML = `<p>Error al cargar el contenido: ${error.message}</p>`;
          });
      });
    });
  });
  