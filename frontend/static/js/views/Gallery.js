import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Gallery");
    }

    async getHtml() {
        return `
            <h1>Gallery</h1>
            <div id="main" style="width: 600px;height:400px;"></div>

            

            
        `;
    }
}