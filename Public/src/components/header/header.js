export var HeaderAttribute;
(function (HeaderAttribute) {
    HeaderAttribute["img"] = "img";
    HeaderAttribute["account"] = "account";
})(HeaderAttribute || (HeaderAttribute = {}));
class Header extends HTMLElement {
    static get observedAttributes() {
        const headerattrs = {
            img: null,
            account: null,
        };
        return Object.keys(headerattrs);
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
            <header>
                <svg>
                    <path d="${this.img}"></path>
                <svg>
                <button>${this.account || "XOXO"}</button>
            </header>
            `;
        }
    }
}
customElements.define("my-header", Header);
export default Header;
