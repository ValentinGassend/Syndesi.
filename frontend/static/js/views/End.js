import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("End");
    }

    async getHtml() {
        return `
                <div class="endFrame">
                <img class="end-illustration" src="./static/image/whole_brained.svg" alt="" srcset="">
                    <section class="hero container view">
                        <h1 class="hero-title">Félicitation Iel</h1>
                        <p class="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                            dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                            interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                    </section>
                    <section class="thanks container view">
                        <h1 class="thanks-title">Merci Iel</h1>
                        <div class="thanks-wrapperParagraph">
                            <p class="thanks-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                                molestie, dictum est a, mattis
                                tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                                elit
                                sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                            <p class="thanks-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                                molestie, dictum est a, mattis
                                tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                                elit
                                sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                        </div>
                    </section>
                    <section class="ending container view">
                        <div class="ending-wrapperText">
                            <h1 class="ending-title">Conclusion</h1>
                            <p class="ending-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                                molestie,
                                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                                ut
                                interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        </div>
                        <div class="ending-footer">
                            <p class="ending-footer--text">Développé par Valentin</p>
                            <p class="ending-footer--text">Designé par Baptiste et Melisse</p>
                            <a href="/" class="ending-footer--text">Mentions légales</a>
                            <a href="/" class="ending-footer--text">Sources & outils</a>
                        </div>
                    </section>
                </div>
        `;
    }
}