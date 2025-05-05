export class Slot extends HTMLElement {
  static observedAttributes = ['name', 'fallback'];

  constructor() {
    super();
    this.attachShadow({ shadow: 'open' });
  }

  connectedCallBack() {
    this.render();
    this.dispatchEvent(
      new CustomEvent('slot-connected', {
        detail: { name: this.name },
      }),
    );
  }

  get name() {
    return this.getAttribute('name') || 'default';
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
            :host {
            display: contents;
            }
            .fallback {
            display: none;
            }
            :host(:empty) .fallback {
            display: block;
            }
        </style>
        <slot></slot>
        <div class="fallback"> ${this.getAttribute('facllback') || ''}</div>
    `;
  }
}

customElements.define('ui-slot', Slot);
