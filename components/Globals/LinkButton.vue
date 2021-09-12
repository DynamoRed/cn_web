<template>
    <a :href="data.to" target="_blank">
        <img :src="require(`~/assets/icons/${data.embed}`)">
        <span>{{data.title}}</span>
    </a>
</template>

<script>
    export default {
        name: 'LinkButton',
        props: ['data'],
    }
</script>

<style lang="css" scoped>
    a {
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: -2.66667px -2.66667px 8px #FFFFFF, 4px 4px 8px rgba(174, 174, 192, 0.4), inset 0px 0px 0px 0.533333px rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 24px;
        text-decoration: none;
        transition: background .4s, color .4s, transform .3s;
    }

    a:hover {
        transform: translate(-3px, -3px);
    }

    a:active {
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #EDEEF2;
        box-shadow: inset -1.5px -1.5px 1.5px rgba(255, 255, 255, 0.7), inset 2.5px 2.5px 1.5px rgba(174, 174, 192, 0.2);
    }

    a > img {
        width: 22px;
        height: 22px;
        margin-right: 8px;
    }
</style>