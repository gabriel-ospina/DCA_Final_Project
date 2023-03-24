export var musicCard;
(function (musicCard) {
    musicCard["thumbnail"] = "thumbnail";
    musicCard["mtitle"] = "mtitle";
})(musicCard || (musicCard = {}));
class AppMusicCard extends HTMLElement {
    static get observedAttributes() {
        const musicAtt = {
            thumbnail: null,
            mtitle: null,
        };
        return;
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
            <div>
                <div class="music-card" style="${this.thumbnail}"></div>
                <p>${this.mtitle}</p>
            </div>
            `;
    }
}
customElements.define("music-card", AppMusicCard);
export default AppMusicCard;
