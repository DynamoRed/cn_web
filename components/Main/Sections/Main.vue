<template>
    <section>
        <div class="main-title">
            <span>Conoda Roleplay</span>
            <h1>Et si vous redécouvriez le roleplay ?</h1>
            <p>Conoda Roleplay c'est le roleplay nouvelle génération par et pour tous. Nouveautés, accessibilité, connectivité, tous ce dont vous avez besoin pour prendre du plaisir a jouer !</p>
            <a href="https://conoda-roleplay.fr/api/connect/164.132.206.138:27075" class="btn-primary btn-main">
                Jouer
                <img src="~/assets/icons/main_button_arrow.svg" class="right-icon" />
            </a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Main',
    }
</script>

<style lang="css" scoped>
    section {
        height: 100vh;
        min-height: 100vh;
        padding: 0 150px;
        align-items: flex-start;
    }

    section > .main-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 40vw;
        margin-top: 12px;
    }

    section > .main-title span {
        color: var(--primary-color);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        font-weight: 800;
        line-height: 24px;
    }

    section > .main-title h1 {
        font-family: 'MVB';
        letter-spacing: 0.04em;
        font-weight: bold;
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 6px;
    }

    section > .main-title p {
        font-weight: 500;
        margin-bottom: 24px;
        letter-spacing: 0.04em;
        line-height: 24px;
    }
</style>