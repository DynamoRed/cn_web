<template>
    <div>
        <img src="~/assets/attachments/banner-invitation-discord.png" class="banner" />
        <Nuxt />
        <FormFooter />
    </div>
</template>

<script>
    export default {
        props: ['error'],
        data(){
            return {
                pageTitle: `Formulaire | Conoda Rôleplay`,
            }
        },
        head() {
            return {
                title: this.pageTitle,
            }
        },
    }
</script>

<style lang="css" scoped>
    div {
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: -42.6667px -42.6667px 128px #FFFFFF, 64px 64px 128px rgba(174, 174, 192, 0.4);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .banner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform: translateY(calc(-100% + 300px));
    }
</style>