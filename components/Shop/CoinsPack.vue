<template>
    <div :class="`pack ${pack.favorite ? 'favorite' : ''}`">
        <h5 class="price">{{pack.price.toLocaleString('en-US')}}€</h5>
        <div class="top">
            <img draggable="false" :src="require(`~/assets/attachments/${pack.image}`)" />
            <span class="coins">{{pack.coins.toLocaleString('en-US')}} <span class="unity">Coins</span></span>
            <span v-if="pack.freecoins" class="freecoins">+{{pack.freecoins.toLocaleString('en-US')}} Coins Offerts !</span>
            <span v-if="pack.favorite" class="favorite-ad">Pack populaire !</span>
        </div>
        <div class="bottom">
            <a class="add-to-cart" @click="addCartItem(pack)">
                <img :src="require(`~/assets/icons/Finance/shopping-cart-2-line.svg`)" />
                <span>Ajouter au panier</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CoinsPack",
        props: ['pack'],
        methods: {
            addCartItem(pack){
                this.$store.commit('cart/add', pack)
                let notification = {
                    type: 'success', 
                    content: 'Article ajouté au panier !'
                }
                this.$store.commit('notifications/add', notification)
                setTimeout(() => {
                    this.$store.commit('notifications/remove', notification)
                }, 2500);
            },
        }
    }
</script>

<style lang="css" scoped>
    .pack {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 24px;
        width: 210px;
        min-height: 350px;
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: -4.08333px -4.08333px 12.25px #FFFFFF, 6.125px 6.125px 12.25px rgba(174, 174, 192, 0.4), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2);
        border-radius: 8px 40px 16px 32px;
        transition: transform .3s;
        position: relative;
        border: rgba(0, 0, 0, 0) 3px solid;
    }

    .pack.favorite {
        border-color: #ffae00;
    }

    .pack .top,
    .pack .bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pack img {
        max-height: 150px;
    }

    .pack h5.price {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #EDEEF2;
        background-blend-mode: soft-light, normal;
        box-shadow: inset -2.66667px -2.66667px 2.66667px rgba(255, 255, 255, 0.7), inset 4px 4px 2.66667px rgba(174, 174, 192, 0.2);
        color: #fff;
        width: 72px;
        height: 72px;
        margin-top: -36px;
        margin-left: -36px;
        border-radius: 50%;
        font-weight: 800;
        color: var(--primary-color);
    }

    .pack .top span {
        font-family: 'MVB';
        font-weight: bold;
        font-size: 26px;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0.04em;
        color: var(--primary-color);
    }

    .pack .top span.unity {
        color: #7f828b;
    }

    .pack .top span.freecoins {
        font-family: 'Geometria';
        font-size: 14px;
        line-height: 24px;
        color: #fff;
        letter-spacing: 0;
        background-color: #d10000;
        height: 24px;
        margin-top: -4px;
        border-radius: 24px;
        padding: 4px 20px;
    }

    .pack .top span.favorite-ad {
        font-family: 'Geometria';
        font-size: 14px;
        line-height: 24px;
        color: #fff;
        letter-spacing: 0;
        background-color: #ffae00;
        height: 24px;
        margin-top: -4px;
        border-radius: 24px;
        padding: 4px 20px;
    }

    .pack .top * {
        margin-bottom: 12px;
    }

    .pack .bottom {
        margin-top: 24px;
    }

    .pack p {
        text-align: left;
        width: 15vw;
        font-size: 16px;
        line-height: 20px;
        overflow-wrap: break-word;
    }

    .pack a.add-to-cart {
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: -2.66667px -2.66667px 8px #FFFFFF, 4px 4px 8px rgba(174, 174, 192, 0.4), inset 0px 0px 0px 0.533333px rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 24px;
        color: #000;
        font-size: 14px;
        text-decoration: none;
        transition: .4s;
        user-select: none;
    }

    .pack a.add-to-cart:active {
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #EDEEF2;
        box-shadow: inset -1.5px -1.5px 1.5px rgba(255, 255, 255, 0.7), inset 2.5px 2.5px 1.5px rgba(174, 174, 192, 0.2);
    }

    .pack a.add-to-cart > img {
        width: 22px;
        height: 22px;
        margin-right: 8px;
    }
</style>