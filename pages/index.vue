<template>
    <main :style="{ backgroundImage: `url('https://conoda-roleplay.fr/api/generateBackground?count=${playersConnected.count}')`}">
        <SectionMain/>
        <SectionWhyUs/>
        <!-- <SectionSupports/> -->
        <SectionLinks/>
    </main>
</template>

<script>
    import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

    export default {
        layout: 'main',
        mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
        data(){
            return {
                playersConnected: {
                    count: 56,
                },
                pageTitle: "Conoda Rôleplay",
            }
        },
        head() {
            return {
                title: this.pageTitle,
            }
        },
    }
</script>

<style lang="css">
    p img.embed {
        margin: 24px 0 12px;
        width: 100%;
    }

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: url('https://conoda-roleplay.fr/api/generateBackground?count=0');
        background-size: cover;
        background-repeat: no-repeat;
    }

    main > section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        min-height: 50vh;
    }

    main > section .section-title {
        color: var(--secondary-color);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        font-weight: 800;
        font-size: 36px;
        line-height: 44px;
        margin: 50px 0;
        background:linear-gradient(315deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    main > section:nth-child(even) .section-title {
        color: var(--primary-color);
    }
</style>