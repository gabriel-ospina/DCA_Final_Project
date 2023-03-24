export var DescriptionAttribute;
(function (DescriptionAttribute) {
    DescriptionAttribute["description"] = "description";
})(DescriptionAttribute || (DescriptionAttribute = {}));
class Description extends HTMLElement {
    static get observedAttributes() {
        const descrattrs = {
            description: null,
        };
        return Object.keys(descrattrs);
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
            <link rel="stylesheet" href="../src/components/Description/description.css">
            
            <p>${this.description}</p>
            `;
        }
    }
}
customElements.define("descrp", Description);
export default Description;
