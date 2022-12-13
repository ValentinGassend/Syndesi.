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
            <h2 class="name-title underline">Hey toi,</h2>
            <div class="name-wrapperParagraph">
                <p class="name-text"> Si tu es arrivé.e sur <b>Syndesi</b>, c’est certainement que tu fais partie de la <b>jeune génération</b> souhaitant agir pour l’urgence écologique, <b>jouer un rôle</b> dans l’existence du monde demain.
                </p>
                <p class="name-text">
                    Ce <b>projet étudiant</b> vise à <b>accompagner quiconque</b> se sentant concerné par l’urgence climatique et souhaitant en apprendre plus sur le rôle qu’iel peut jouer. 
<b>Notre propre contribution</b> à la prise de conscience de la société. 
                </p>
                <p class="name-text bold">
                    Dans l’unique but de personnaliser ton experience, nous avons besoin de te demander... </p>
            </div>
        </div>
        <div class="name-wrapperInfo">
            <h2 class="name-info">LE NOM PAR LEQUEL TU VEUX TE FAIRE APPELER</h2>
            <form action="">
            <input class="name-input" type="text" placeholder="________________"/>
            <input class="name-input--valid" type="" value="OK"/>
            </form>
        </div>
    </section>
    <section class="description view container">
        <div class="description-wrapperParagraph">

            <div class="description-wrapperText">
                <h2 class="description-title underline">Le concept</h2>
                <div class="description-column">
                <div class="description-column-illustration">
                    <img src="/static/image/whole.svg" class="__white"/>
                    <img src="/static/image/whole.svg" class="__white"/>
                    <img src="/static/image/whole.svg" class="__white"/>
                    <img src="/static/image/whole.svg" class="__white"/>
                    <img src="/static/image/red_body.svg" class="__red"/>
                </div>
                <div class="description-column-text">
                <p class="description-column-text--hug">4 JEUNES SUR 5</p>
                <p class="description-column-text--sub">ont une pensée concernant  l’écologie dans leur journée</p>
                </div>
            </div>
                <p class="description-text">Afin <b>d’étoffer le concept</b> de notre projet et de créer <b>l’expérience la plus efficace possible</b>, nous avons réalisé une <b>enquête</b> visant à affiner notre connaissance de <b>l’état d’esprit de notre jeune génération</b> face à l’urgence écologique. Grâce à cela, nous nous sommes rendu compte de <b>la place qu’occupait cette problématique dans nos esprits</b>.</p>
                <p class="description-text">Pour vivre <b>l’expérience à son plein potentiel</b>, installe-toi confortablement <b>sur un ordinateur</b> et mets <b>des écouteurs</b>.</p>
            </div>
            
        </div>
        <a href="/home" class="description-btn button-primary">DÉBUTER L’EXPERIENCE</a>
    </section>
</div>
        `;
    }
}