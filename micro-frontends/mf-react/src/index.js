import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'


class ReactComponent extends HTMLElement {

  constructor() {
    super();

    console.log('ReactComponent constructor.')

    let shadow = this.attachShadow({ mode: 'open' });
    let root = document.createElement("div")
    render(<App />, root)

    shadow.appendChild(root);

  }

  connectedCallback() {
    console.log('ReactComponent connected')
  }
}

window.customElements.define('mf-react', ReactComponent);