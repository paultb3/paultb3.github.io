document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-list a");
  const outputDiv = document.getElementById("output");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Evita que el enlace recargue la página
      const href = link.getAttribute("href"); // Obtén la URL del enlace
      const section = href.split("/").pop().split(".")[0]; // Nombre de la sección (inicio, noticias, etc.)
      const cssFile = `./CSS/${section}.css`; // Ruta del archivo CSS específico

      // Fetch para cargar el contenido HTML
      fetch(href)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((html) => {
          outputDiv.innerHTML = html; // Carga el contenido en el div 'output'

          // Cargar o reemplazar el estilo CSS dinámico
          let existingLink = document.querySelector("#dynamic-css");
          if (existingLink) {
            existingLink.href = cssFile; // Reemplaza el enlace si ya existe
          } else {
            let linkElement = document.createElement("link");
            linkElement.rel = "stylesheet";
            linkElement.id = "dynamic-css";
            linkElement.href = cssFile;
            document.head.appendChild(linkElement); // Agrega el nuevo enlace
          }
        })
        .catch((error) => {
          outputDiv.innerHTML = `<p>Error al cargar el contenido: ${error.message}</p>`;
          console.error(error);
        });
    });
  });
});
