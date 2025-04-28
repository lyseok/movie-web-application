import { Component } from "../core/core";

export default class TheFooter extends Component {
  constructor(){
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */`
      <div>
        <a href="https://github.com/lyseok">
          Github Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/lyseok">
          ${new Date().getFullYear()}
          YUNSEOK
        </a>
      </div>
    `;
  }
}