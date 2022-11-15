import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Intro");
    }

    async getHtml() {
        return `
            <section class="hero">Intro</section>
            
        `;
    }
}