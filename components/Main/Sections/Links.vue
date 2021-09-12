<template>
    <section>
        <h1 class="section-title">Réseaux et Liens</h1>
        <div class='section-content'>
            <LinkButton v-for="link in links" :key="link.title" :data="link" />
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Links',
        data(){
            return {
                links: [
                    {title: "Discord", embed:"Logos/discord-fill.svg", to: "https://discord.gg/wcPEjuUtfZ"},
                    {title: "Twitter", embed:"Logos/twitter-fill.svg", to: "https://twitter.com/"},
                    {title: "Groupe Steam", embed:"Logos/steam-fill.svg", to: "https://steamcommunity.com/"},
                    {title: "Forum", embed:"Communication/chat-1-fill.svg", to: "https://forum.conoda-roleplay.fr/"},
                    {title: "Wiki", embed:"Business/archive-fill.svg", to: "https://conoda-roleplay.fr/wiki/"},
                    {title: "Collection Steam", embed:"Logos/steam-fill.svg", to: "https://steamcommunity.com/"},
                ],
            }
        }
    }
</script>

<style lang="css" scoped>
    section {
        justify-content: flex-start;
    }

    .section-content {
        display: grid;
        gap: 18px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-auto-flow: row;
        margin-bottom: 200px;
    }
</style>