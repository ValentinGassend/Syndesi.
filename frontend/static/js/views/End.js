import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("End");
    }

    async getHtml() {
        return `
            <h1>End</h1>
        `;
    }
}