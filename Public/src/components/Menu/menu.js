export var MenuAttribute;
(function (MenuAttribute) {
    MenuAttribute["mainicon"] = "mainicon";
    MenuAttribute["chaticon"] = "chaticon";
    MenuAttribute["safeiconin"] = "safeiconin";
    MenuAttribute["safeiconout"] = "safeiconout";
})(MenuAttribute || (MenuAttribute = {}));
class Menu extends HTMLElement {
    static get observedAttributes() {
        const menuattrs = {
            mainicon: null,
            chaticon: null,
            safeiconin: null,
            safeiconout: null,
        };
        return Object.keys(menuattrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <nav>
                <div class="main-selec">
                    <svg width="17" height="22" viewBox="0 0 17 22"><path d="${this.mainicon}" fill="#816CAD"></path></svg>
                    <span>Main</span>
                </div>
                <svg viewBox="0 0 27 27" width="27" heigth="27"><path d="${this.chaticon}" fill="black" fill-opacity="0.36"></path></svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="${this.safeiconin}" fill="black" fill-opacity="0.36"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="${this.safeiconout}" fill="black" fill-opacity="0.36"/>
                </svg>
            </nav>
            `;
        }
    }
}
customElements.define("menu-nav", Menu);
export default Menu;
