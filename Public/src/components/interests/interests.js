export var interestAtt;
(function (interestAtt) {
    interestAtt["tag"] = "tag";
})(interestAtt || (interestAtt = {}));
class AppTag extends HTMLElement {
    static get observedAttributes() {
        const tagAtt = {
            tag: null,
        };
        return Object.keys(tagAtt);
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
        if (this.shadowRoot)
            this.shadowRoot.innerHTML = `
        <div class="tag-section">
            <div>${this.tag}</div>     
        </div>
        `;
    }
}
customElements.define("app-tag", AppTag);
export default AppTag;
