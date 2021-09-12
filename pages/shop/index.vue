<template>
    <main>
        <section>
            <div class="main-title">
                <span>Conoda Shop</span>
                <h1>Rechargez votre compte !</h1>
                <p>Tous les achats se réalisent directement en jeu ! Vous avez simplement besoin de recharger votre compte en ConodaCoins. Nous vous proposons donc plusieurs packs distincts.</p>
            </div>
            <h5>Populaires</h5>
            <div class="packs-favorite">
                <ShopCoinsPack v-for="pack in packs" v-if="pack.favorite" :key="pack.title" :pack="pack" class="pack"/>
            </div>
            <h5>Packs</h5>
            <div class="packs">
                <ShopCoinsPack v-for="pack in packs" v-if="!pack.favorite" :key="pack.title" :pack="pack" class="pack"/>
            </div>
        </section>
        <section>
            <div class="cart">
                <div class="top">
                    <h3>Panier</h3>
                    <div class="cart-content">
                        <span class="no-items" v-if="cartTotalQuantity == 0">Aucun article dans votre panier</span>
                        <table v-if="cartTotalQuantity > 0">
                            <tr>
                                <th></th>
                                <th>Quantité</th>
                                <th>Prix</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <template v-for="item in cart" v-if="item.quantity > 0">
                                <tr :key="item.coins">
                                    <td>{{item.coins.toLocaleString('en-US')}} Coins</td>
                                    <td>{{item.quantity}}x</td>
                                    <td>{{(item.quantity * item.price.toLocaleString('en-US')).toFixed(2)}}€</td>
                                    <td title="Retirer"><img @click="removeCartItem(item)" :src="require(`~/assets/icons/System/delete-back-line.svg`)"></td>
                                </tr>
                                <tr v-if="item.freecoins" :key="item.freecoins">
                                    <td>{{item.freecoins.toLocaleString('en-US')}} Coins</td>
                                    <td>{{item.quantity}}x</td>
                                    <td class="free-price">Offert !</td>
                                </tr>
                            </template>
                            <tr v-for="discount in discounts" class="discount">
                                <td>{{discount.title}}</td>
                                <td></td>
                                <td>{{discount.amount < 0 ? `+${discount.amount*(-1)}` : `-${discount.amount}`}}{{discount.type == "plain" ? '€' : '%'}}</td>
                                <td v-if="discount.removable" title="Retirer"><img @click="removeCartDiscount(discount)" :src="require(`~/assets/icons/System/delete-back-line.svg`)"></td>
                                <td v-else></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="cart-total">
                                <td></td>
                                <td>Total:</td>
                                <td>{{cartTotal.toLocaleString('en-US')}}€</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="middle" v-if="cartTotalQuantity > 0">
                    <h4>Résumé</h4>
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Coins:</td>
                            <td>{{cartTotalCoins.toLocaleString('en-US')}}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Offerts:</td>
                            <td>{{cartTotalFreeCoins.toLocaleString('en-US')}}</td>
                            <td></td>
                        </tr>
                        <tr class="cart-total">
                            <td>Total:</td>
                            <td>{{cartTotalAllCoins.toLocaleString('en-US')}}</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div class="bottom">
                    <h4>Finaliser par:</h4>
                    <div class="discount-input">
                        <input type="text" placeholder="Code de réduction ?" v-model="discountCode" />
                        <a class="btn-primary"
                        @keydown.enter="addCartDiscount({
                            type: 'percent',
                            amount: -10,
                            title: `Code ${discountCode.toUpperCase().trim()}`,
                            removable: true,
                        })"
                                @click="addCartDiscount({
                            type: 'percent',
                            amount: -10,
                            title: `Code ${discountCode.toUpperCase().trim()}`,
                            removable: true,
                        })">
                            <span>Appliquer</span>
                        </a>
                    </div>
                    <a class="btn-primary">
                        <img :src="require(`~/assets/icons/Logos/paypal-fill.svg`)">
                        <span>PayPal</span>
                    </a>
                    <a class="btn-primary">
                        <img :src="require(`~/assets/icons/Finance/refund-fill.svg`)">
                        <span>Paysafecard</span>
                    </a>
                    <a class="btn-primary">
                        <img :src="require(`~/assets/icons/Finance/secure-payment-fill.svg`)">
                        <span>Carte Bancaire</span>
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        layout: 'main',
        computed: {
            cartTotal(){
                return this.$store.getters['cart/total']
            },
            cartTotalQuantity(){
                return this.$store.getters['cart/totalQuantity']
            },
            cart(){
                return this.$store.state.cart.items
            },
            discounts(){
                return this.$store.state.cart.discounts
            },
            cartTotalCoins(){
                return this.$store.getters['cart/totalCoins']
            },
            cartTotalFreeCoins(){
                return this.$store.getters['cart/totalFreeCoins']
            },
            cartTotalAllCoins(){
                return this.$store.getters['cart/totalAllCoins']
            },
        },
        methods: {
            removeCartItem(item){
                this.$store.commit('cart/remove', item)
                let notification = {
                    type: 'success', 
                    content: 'Article retiré du panier !'
                }
                this.$store.commit('notifications/add', notification)
                setTimeout(() => {
                    this.$store.commit('notifications/remove', notification)
                }, 2500);
            },
            addCartDiscount(discount){
                if(!discount
                || !discount.type
                || !discount.amount
                || !discount.title || discount.title.toUpperCase().trim().replace('CODE', '').length <= 0){
                    let notification = {
                        type: 'error', 
                        content: 'Réduction erronée !'
                    }
                    this.$store.commit('notifications/add', notification)
                    setTimeout(() => {
                        this.$store.commit('notifications/remove', notification)
                    }, 2500);
                } else {
                    this.$store.commit('cart/addDiscount', discount)
                    let notification = {
                        type: 'success', 
                        content: 'Réduction appliquée !'
                    }
                    this.$store.commit('notifications/add', notification)
                    setTimeout(() => {
                        this.$store.commit('notifications/remove', notification)
                    }, 2500);
                    
                    this.discountCode = ''
                }
            },
            removeCartDiscount(discount){
                this.$store.commit('cart/removeDiscount', discount)
                let notification = {
                    type: 'success', 
                    content: 'Réduction retirée !'
                }
                this.$store.commit('notifications/add', notification)
                setTimeout(() => {
                    this.$store.commit('notifications/remove', notification)
                }, 2500);
            },
        },
        data(){
            return {
                discountCode: '',
                pageTitle: "Boutique | Conoda Rôleplay",
                packs: [
                    {
                        image: "ccoins-bars.png", 
                        coins: 27000,
                        freecoins: 1500, 
                        price: 29.99,
                        favorite: true,
                    },
                    {
                        image: "ccoins-briefcase.png", 
                        coins: 45000,
                        freecoins: 3500, 
                        price: 49.99,
                        favorite: true,
                    },
                    {
                        image: "ccoins-unique.png", 
                        coins: 4500,
                        price: 4.99,
                    },
                    {
                        image: "ccoins.png", 
                        coins: 9000,
                        price: 9.99,
                    },
                    {
                        image: "ccoins-bag.png", 
                        coins: 18000,
                        freecoins: 1000, 
                        price: 19.99,
                    },
                    {
                        image: "ccoins-bank.png", 
                        coins: 100000,
                        freecoins: 10000,
                        price: 99.99,
                    },
                    {
                        image: "ccoins-faucet.png", 
                        coins: 200000,
                        freecoins: 50000,
                        price: 199.99,
                    },
                ],
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
    main {
        background: url('~/assets/background_blank.png');
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 100px 0 0;
    }

    main section {
        margin: 0 25px 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 0;
        width: fit-content;
        position: relative;
    }

    section .cart {
        padding: 50px 20px;
        min-height: calc(100vh - 200px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: -4.08333px -4.08333px 12.25px #FFFFFF, 6.125px 6.125px 12.25px rgba(174, 174, 192, 0.4), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        width: 300px;
    }

    .cart .top,
    .cart .bottom,
    .cart .middle {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cart .bottom a {
        margin: 8px 0;
        padding: 8px 16px;
        width: 100%;
    }

    .cart .bottom a img {
        margin-right: 8px;
    }

    .cart .bottom .discount-input {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        padding: 0 12px 6px;
        width: 200px;
        border-bottom: #7f828b 1px dashed;
    }

    .cart .bottom .discount-input a {
        margin-left: 8px;
        padding: 0 8px;
        height: 28px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 600;
    }

    .cart .bottom .discount-input input {
        width: 135px;
        padding: 0 8px;
        font-family: 'MVB';
        letter-spacing: 0.1em;
        font-size: 16px;
        outline: none;
        border: none;
        height: 28px;
        line-height: 28px;
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #EDEEF2;
        background-blend-mode: soft-light, normal;
        box-shadow: inset -1.66667px -1.66667px 1.66667px rgba(255, 255, 255, 0.7), inset 2.5px 2.5px 1.66667px rgba(174, 174, 192, 0.2);
    }

    .cart .bottom .discount-input input::placeholder {
        font-family: 'Geometria';
        letter-spacing: 0;
        font-size: 12px;
        line-height: 28px;
    }

    .cart h4 {
        margin-bottom: 12px;
        text-transform: uppercase;
        font-weight: 800;
        max-width: 150px;
    }

    .cart .top h3 {
        font-family: 'MVB';
        font-size: 32px;
        margin-bottom: 32px;
    }

    .cart span.no-items {
        font-size: 16px;
        line-height: 18px;
    }

    .cart th {
        font-size: 10px;
        text-transform: uppercase;
        font-weight: 700;
        border-bottom: #7f828b 1px solid;
    }

    .cart .middle {
        margin: 64px 0;
    }

    .cart .middle tr td {
        min-width: 90px;
    }

    .cart .middle tr td:last-child {
        min-width: 0;
        width: 0;
    }

    .cart .middle tr td:first-child {
        text-align: right;
    }

    .cart .free-price {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 800;
        color: #d10000;
        text-align: center;
    }

    .cart .cart-total td {
        margin-top: 32px;
        border-top: #7f828b 1px solid;
    }

    .cart th:last-child,
    .cart .cart-total td:last-child {
        border-top: #000 0px solid;
        border-bottom: #000 0px solid;
    }

    .cart tr td {
        text-align: left;
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        letter-spacing: 0px;
    }

    .cart tr td:nth-child(2) {
        text-align: center;
        font-size: 16px;
    }

    .cart tr td:nth-child(odd) {
        font-weight: 700;
    }

    .cart tr td:nth-child(even) {
        font-weight: 500;
    }

    .cart tr td:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .cart tr td img {
        height: 18px;
        width: 18px;
        margin-left: 7px;
        cursor: pointer;
    }

    .cart tr.discount td {
        color: #d10000;
        font-weight: 500;
    }

    section > .main-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 50vw;
        margin: 24px 0;
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

    section .packs-favorite {
        margin-bottom: 8px;
    }

    section h5 {
        text-align: left;
        width: 100%;
        font-size: 24px;
        color: #7f828b;
        font-weight: 800;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 6px;
        border-bottom: #7f828b 2px dashed;
    }

    section .packs,
    section .packs-favorite {
        margin-top: 4px;
        padding-top: 24px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: calc(330px * 2);
    }
    
    section .packs .pack,
    section .packs-favorite .pack {
        margin: 32px;
    }
</style>