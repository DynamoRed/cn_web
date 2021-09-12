<template>
    <footer>
        <div class="footer-container">
            <div>
                <h3>Devenez <strong>Adhérent Aéro</strong> dès aujourd'hui.</h3>
                <div class="advantages-list">
                    <span v-for="adv in advantages" :key="adv"><img src="~/assets/icons/System/check-line.svg" class="icon">{{adv}}</span>
                </div>
            </div>
            <div>
                <NuxtLink to="/shop" class="btn-secondary plain">Essayer<img src="~/assets/icons/System/arrow-right-circle-line.svg" class="icon"></NuxtLink>
                <NuxtLink to="/support" class="btn-secondary">Support<img src="~/assets/icons/System/arrow-right-circle-light-line.svg" class="icon"></NuxtLink>
            </div>
        </div>
        <div class="credits">
            <span>Développé et Désigné avec ❤️ par notre équipe. Conoda Rôleplay ©️ Tous droits réservés</span>
            <span><a href="" download>Conditions Générales d'Utilisation</a><a href="" download>Conditions Générales de Vente</a></span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data(){
            return {
                advantages: ["2M$ Hebdomadaire", "150% de rentabilité", "+1 Personnage"],
            }
        }
    }
</script>

<style lang="css" scoped>
    footer {
        width: 100%;
        min-height: 200px;
        background-color: var(--black-color);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    footer .footer-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 16px;
        width: 60vw;
        margin-top: -75px;
        padding: 48px;
        background: linear-gradient(315deg, var(--secondary-color) 0%, var(--primary-color) 100%);
        background-blend-mode: soft-light, normal;
        color: var(--background-color);
        box-shadow: 0px 8px 8px rgb(0 0 0 / 40%);
    }

    .footer-container div {
        display: flex;
        flex-direction: row;
    }

    .footer-container .btn-secondary {
        margin-right: 12px;
    }

    .footer-container div:nth-child(1) {
        justify-content: center;
        flex-direction: column;
    }

    .footer-container div h3 {
        font-size: 20px;
        margin-bottom: 12px;
        font-weight: 400;
    }

    .footer-container div .advantages-list {
        font-size: 14px;
        color: var(--black-color);
        align-items: center;
    }

    .footer-container div .advantages-list span {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 18px;
    }

    .footer-container div .advantages-list span > img.icon {
        margin-right: 6px;
    }

    .footer-container div .advantages-list span:last-child > img.icon {
        margin-right: 4px;
    }

    .footer-container div:nth-child(2) {
        justify-content: flex-end;
        align-items: center;
    }

    footer .credits {
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    footer .credits span {
        color: #7f828b;
        font-size: 14px;
        letter-spacing: -0.4px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    footer .credits span a {
        color: #7f828b;
        font-size: 14px;
        letter-spacing: -0.4px;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    footer .credits span a:hover {
        color: var(--background-color);
    }

    footer .credits span a::before {
        content: "•";
        color: #7f828b;
        font-size: 18px;
        margin: 3px 5px 0;
    }

    footer .credits span a:first-child::before {
        content: "";
        margin: 0;
    }
</style>