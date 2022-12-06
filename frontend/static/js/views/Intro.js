import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Intro");
    }

    async getHtml() {
        return `
            <div class="intro">
            <img class="hero-illustration" src="/static/image/red_body.svg">
    <section class="hero view">
        <div class="hero-wrapperTitle">
            <h1 class="hero-title">Syndesi.</h1>
            <span class="hero-subtitle">Une expérience écologique</span>
        </div>
        <picture>
            <img class="hero-scroll" src="/static/image/scroll.svg">
        </picture>
    </section>
    <section class="name view">
        <div class="name-content container">
            <h2 class="name-title">Salut,</h2>
            <div class="name-wrapperParagraph">
                <p class="name-text"> Si tu es arrivé sur ce site c’est certainement parce que tu fais partis de la
                    jeune
                    génération de personne qui souhaite agir pour l’urgence écologique, tout simplement jouer un rôle
                    dans
                    l’existence du monde demain.
                </p>
                <p class="name-text">
                    Tu aimerais certainement voir une prise de conscience et de position générale face à cette situation
                    d’urgence, notamment de la part des grands acteurs.Tu souhaiterais pouvoir te rendre compte par toi
                    même
                    de l’impact que peut avoir ton engagement quotidien face à l’innaction des grands pollueurs. Tu
                    aimerais
                    voir un gouvernement qui évolue pour aider et encourager chaque individu qui s’engage d’hors et déjà
                    pour l’écologie. Finalement, tu souhaiterais ne plus te sentir critiquer, jugé, ou stigmatisé
                    lorsque tu
                    évoques le sujet de l’urgence écologique dans ton entourage.
                </p>
                <p class="name-text">
                    Si tu t’es reconnu dans ces quelques lignes, alors je te propose de te laisser porter par notre
                    experience écologique qui, nous l’espérons, apportera des réponses à tes questions. Si tu ne t’es
                    pas
                    sentis concerné mais que tu restes intéréssé par la cause je t’invite à faire de même, qui sait tu
                    sera
                    peut-être surpris.</p>
                <p class="name-text bold">
                    Mais tout d’abbord commençons par faire les présentations.
                    Nous sommes Baptiste, Valentin et Mélisse. Ravis de faire ta connaissance !</p>
            </div>
        </div>
        <div class="name-wrapperInfo">
            <h2 class="name-info">Et toi, comment veux-tu qu'on t'appelles ?</h2>
            <input class="name-input" type="text" placeholder=".............."/>
        </div>
    </section>
    <section class="description view container">
        <div class="description-wrapperParagraph">

            <div class="description-wrapperText">
                <h2 class="description-title">Lorem <span class="description-title __Name">iel</span></h2>
                <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                    molestie,
                    dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                    lacus,
                    ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                    aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                    molestie,
                    dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                    lacus,
                    ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                    aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div class="description-column">
                <div class="description-column-illustration">
                    <img src="/static/image/red_body.svg" class="__red"/>
                    <img src="/static/image/red_body.svg" class="__red"/>
                    <img src="/static/image/red_body.svg" class="__red"/>
                    <img src="/static/image/red_body.svg" class="__red"/>
                    <img src="/static/image/whole.svg" class="__white"/>
                </div>
                <p class="description-column-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                    turpis
                    molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet
                    feugiat
                    lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. </p>
            </div>
        </div>
        <a href="/home" class="description-btn button-primary">commencer l'expérience</a>
    </section>
</div>
        `;
    }
}