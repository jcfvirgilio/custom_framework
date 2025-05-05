import DOMPurify from 'dompurify';

/**
 * Funcion que sanitiza y agrega el contenido HTML de forma segura a un slot de un componente
 * @param {string} html - nombre del slot (ej. 'header', 'footer')
 * @returns {void}
 */

export function safeInjectHTML(html) {
  try {
    // Sanitiza el contenido para evitar XSS y elimina los scripts automáticamente
    const sanitizedContent = DOMPurify.sanitize(html, {
      RETURN_DOM: false, // no devolver un objeto DOM, sino una cadena de texto segura
    });

    // Parsear el HTML sanitizado
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitizedContent, 'text/html');
    const frag = document.createDocumentFragment();

    // Insertar los nodos del contenido ya parseado y sanitizado
    doc.body.childNodes.forEach((node) => {
      frag.appendChild(node.cloneNode(true)); // Agrega el nodo de manera segura
    });

    return frag;
  } catch (error) {
    console.error('Error al sanitizar el HTML:', error);
  }
}
