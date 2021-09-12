<template>
    <div>
        <img draggable="false" :src="require(`~/assets/attachments/${data.image}`)" />
        <span>{{data.title}}</span>
        <p>{{data.description}}</p>
    </div>
</template>

<script>
    export default {
        name: "WhyUsValue",
        props: ['data'],
    }
</script>

<style lang="css" scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
        width: 15vw;
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: -4.08333px -4.08333px 12.25px #FFFFFF, 6.125px 6.125px 12.25px rgba(174, 174, 192, 0.4), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2);
        border-radius: 8px 40px 16px 32px;
        transition: transform .3s;
        cursor: pointer;
    }

    div:hover {
        transform: translate(-5px, -5px);
    }

    div > img {
        max-height: 150px;
    }

    div > * {
        margin-bottom: 10px;
    }

    div > span {
        font-family: Marvin Visions Big;
        font-weight: bold;
        font-size: 26px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #0077E0;
    }

    div > p {
        text-align: left;
        width: 15vw;
        font-size: 16px;
        line-height: 20px;
        overflow-wrap: break-word;
    }
</style>