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
        return Object.keys(musicAtt);
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
            <link rel="stylesheet" href="../src/components/cardMusic/cardMusic.css">
            <div>
                <div class="music-card" style='background-image: url("${this.thumbnail}");'></div>
                <p>${this.mtitle}</p>
            </div>
            `;
    }
}
customElements.define("music-card", AppMusicCard);
export default AppMusicCard;
