<template>
    <header>
        <div>
            <NuxtLink to="/" class="header-logo"><img src="/branding/logo.png"></NuxtLink>
            <nav>
                <NuxtLink to="/" class="btn-primary">Accueil</NuxtLink>
                <a href="https://forum.conoda-roleplay.fr" class="btn-primary">Forum</a>
                <NuxtLink to="/shop" class="btn-primary">Boutique</NuxtLink>
                <NuxtLink to="/wiki" class="btn-primary">Wikinoda</NuxtLink>
            </nav>
        </div>
        <div>
            <NuxtLink v-if="user.authenticated" to="/account" class="btn-primary"><img src="~/assets/icons/User/user-3-fill.svg"> Compte</NuxtLink>
            <NuxtLink v-if="user.authenticated" to="/auth/logout" class="btn-primary">Deconnexion</NuxtLink>
            <a v-else href="http://localhost:9876/api/auth/steam" class="btn-primary">Se Connecter</a>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        computed: {
            user(){
                return this.$store.state.user
            },
        },
    }
</script>

<style lang="css">
    .scrolled header {
        background-color: var(--background-color);
        height: 75px;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    }

    header {
        transition: background-color .4s, height .4s;
        z-index: 100;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 100px;
        width: calc(100% - 120px);
        position: fixed;
        top: 0;
        left: 0;
        padding: 0 60px;
    }

    header .header-logo {
        margin-right: 50px;
        height: 52px;
        width: 52px;
    }

    header .header-logo > img {
        height: 52px;
        width: 52px;
    }

    .scrolled header .header-logo {
        margin-right: 35px;
        height: 40px;
        width: 40px;
    }

    .scrolled header .header-logo > img {
        height: 40px;
        width: 40px;
    }

    header > div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    header > div > nav {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    header > div:nth-child(1) .btn-primary {
        margin-right: 32px;
    }

    header > div:nth-child(2) .btn-primary {
        margin-left: 32px;
    }

    header .btn-primary.nuxt-link-exact-active {
        color: #0077E0;
    }
</style>