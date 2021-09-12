<template>
    <div>
        <NuxtLink to="/" class="context-option">Accueil</NuxtLink>
        <a href="https://forum.conoda-roleplay.fr/" class="context-option">Forum</a>
    </div>
</template>

<script>
    export default {
        name: 'ContextMenu',
    }
</script>

<style lang="css" scoped>
    div {
        z-index: 200;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--black-color);
        border-radius: 10px 16px;
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0.9;
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: 4px 6px 8px rgb(0 0 0 / 40%);
    }

    div .context-option {
        background: none;
        text-align: left;
        min-width: 150px;
        padding: 8px 30px;
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        border-bottom: var(--primary-color) 1px solid;
    }

    div .context-option:last-child {
        border-bottom: none;
    }
</style>