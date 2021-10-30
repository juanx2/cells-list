import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsList-styles.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js'
import '@cells-components/coronita-icons';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-list></cells-list>
```

##styling-doc

@customElement cells-list
*/
export class CellsList extends LitElement {
  static get is() {
    return 'cells-list';
  }

  // Declare properties
  static get properties() {
    return {
      item1: {type:Array},
      item2: {type:Array},
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.item1=[];
    this.item2=[];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-list-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
     <div class="header">
      <img src="../src/imagen.jpeg">
      <div class="header-div" >
      <div class="line1">456 votes</div>
      <div class="line2">Preheadline</div>
      <div class="line3">Headline</div>
      <div class="line4">Paragraph title</div>
      <div class="list1">${this.item1.map((i)=>html`
      <div>${i}</div>
      `)}</div>
      <div class="list2">${this.item2.map((i)=>html`
      <div class="list-2"><bbva-core-icon icon="coronita:bullet1" class="marker-icon"></bbva-core-icon>${i}</div>
      `)}</div>
      <bbva-button-default class="btn-Detalle" >Detalle</bbva-button-default>
      </div>  
      </div>
    `;
  }
}
