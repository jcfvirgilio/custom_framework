import { BaseStyles } from './styles/base.js';
import { safeInjectHTML } from '../../../sdk/dom/safeInjectHtml/safeInjectHtml.js';
/**
 * Ejemplo completo de implementación
 * @example
 * // 1. Obtener instancia
 * const layout = document.querySelector('ui-layout');
 *
 * // 2. Configurar slots
 * layout.setSlot('header', '<h1>Título</h1>');
 *
 * // 3. Cambiar tema dinámicamente
 * layout.setAttribute('theme', ':host { --header-bg: #333; }');
 */
/**
 * Componente base Layout que permite organizar contenido en áreas (slots) predefinidas.
 * @class Layout
 * @extends HTMLElement
 *
 * @example
 * // Uso básico en HTML
 * <ui-layout id="mainLayout"></ui-layout>
 *
 * // Configuración desde JavaScript
 * const layout = document.getElementById('mainLayout');
 * layout.setSlot('header', '<h1>Mi App</h1>');
 */
class Layout extends HTMLElement {
  /**
   * Atributos observados para re-renderizado automático
   * @static
   * @memberof Layout
   */
  static observedAttributes = ['template', 'theme'];

  /**
   * Crea una instancia del Layout
   * @constructor
   */
  constructor() {
    super();
    /**
     * Shadow Root del componente
     * @type {ShadowRoot}
     */
    this.attachShadow({ mode: 'open' });
    /**
     * Mapa que almacena el contenido de los slots
     * @type {Map<string, string>}
     */
    //this.slots = new Map();
  }

  /**
   * Callback se ejcuta cuando el elemento es insertado en el DOM
   * @memberof Layout
   */
  connectedCallback() {
    this.render();
  }

  /**
   * Callback ejecutado cuando cambian los atributos observados
   * @param {string} name - Nombre del atributo cambiado
   * @param {string} oldVal - Valor anterior
   * @param {string} newVal - Valor nuevo
   * @memberof Layout
   */
  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      this.render();
    }
  }
  /**
   * Establece o actualiza el contenido de un slot
   * @param {string} name - Nombre del slot (header/main/footer)
   * @param {string} contentHTML - Contenido HTML como string
   * @memberof Layout
   * @example
   * layout.setSlot('main', '<p>Contenido principal</p>');
   */
  setSafeSlot(name, contentHTML) {
    const frag = safeInjectHTML(contentHTML);

    // Buscar el slot y agregar el contenido seguro
    const targetSlot = this.shadowRoot.querySelector(`[data-slot="${name}"]`);
    if (targetSlot) {
      targetSlot.innerHTML = ''; // Limpiar contenido anterior
      targetSlot.appendChild(frag); // Insertar contenido sanitizado y parseado
    }
  }

  /**
   * Carga un HTML externo de forma segura y lo inserta en el slot
   * @param {string} name - Nombre del slot
   * @param {string} url - URL del HTML externo
   */
  async loadSafeSlotFromFile(name, url) {
    try {
      //carga el contenido desde un archivo externo
      const html = await fetch(url).then((response) => response.text());

      //usa el safeInjectHTML para sanitizar y parsear el contenido
      const frag = safeInjectHTML(html);

      const targetSlot = this.shadowRoot.querySelector(`[data-slot="${name}"]`);
      if (targetSlot) {
        targetSlot.innerHTML = ''; // Limpiar contenido anterior
        targetSlot.appendChild(frag); // Insertar contenido sanitizado y parseado
      }
    } catch (err) {
      console.error(`Error al cargar slot "${name}" desde ${url}:`, err);
    }
  }

  /**
   * Devuelve la plantilla HTML por defecto del layout
   * @private
   * @return {string} Template HTML con la estructura básica
   * @memberof Layout
   */
  getDefaultTemplate() {
    return `
        <div class="layout">
            <header data-slot="header"></header>
            <main  data-slot="main"></main>
            <footer data=slot="footer"></footer>
        </div>
    `;
  }

  /**
   * Renderiza o actualiza todo el componente
   * @private
   * @memberof Layout
   */
  render() {
    const template = this.getAttribute('template') || this.getDefaultTemplate();

    this.shadowRoot.innerHTML = `
        <style>
             ${BaseStyles}
             ${this.getAttribute('theme') || ''}
        </style>
        ${template}
    `;
  }
} //fin class

// Registro seguro y automático del componente
if (!customElements.get('ui-layout')) {
  customElements.define('ui-layout', Layout);
}

/**
 * Exporta la clase Layout para uso modular
 * Exportación limpia para treeshaking
 * @type {CustomElementConstructor}
 */
export { Layout };
