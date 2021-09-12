export let state = () => ({
    items: [],
    discounts: [
        {type: 'percent', amount: 5, title: `Réduction Aéro`, removable: false},
    ],
})

export const getters = {
    total(state){
        let total = 0.00
        for(let i = 0; i < state.items.length; i++){
            total += state.items[i].price * state.items[i].quantity
        }
        for(let i = 0; i < state.discounts.length; i++){
            if(state.discounts[i].type == "plain") total -= state.discounts[i].amount
            if(state.discounts[i].type == "percent") total -= total * (state.discounts[i].amount / 100)
        }
        return total.toFixed(2)
    },
    totalQuantity(state){
        let quantity = 0
        for(let i = 0; i < state.items.length; i++){
            quantity += state.items[i].quantity
        }
        return quantity
    },
    totalCoins(state){
        let total = 0
        for(let i = 0; i < state.items.length; i++){
            total += state.items[i].coins * state.items[i].quantity
        }
        return total
    },
    totalFreeCoins(state){
        let total = 0
        for(let i = 0; i < state.items.length; i++){
            if(state.items[i].freecoins) total += state.items[i].freecoins * state.items[i].quantity
        }
        return total
    },
    totalAllCoins(state){
        let total = 0
        for(let i = 0; i < state.items.length; i++){
            total += state.items[i].coins * state.items[i].quantity
            if(state.items[i].freecoins) total += state.items[i].freecoins * state.items[i].quantity
        }
        return total
    },
}

export const mutations = {
    add(state, pack){
        let id = Math.random().toString().substr(2, 8)
        let exist = false
        for(let i = 0; i < state.items.length; i++){
            if(state.items[i].coins == pack.coins && state.items[i].price == pack.price) exist = state.items[i]
        }
        if(exist){
            exist.quantity += 1
        } else {
            let item = {
                coins: pack.coins,
                price: pack.price,
                quantity: 1
            }
            if(pack.freecoins) item.freecoins = pack.freecoins
            state.items.push(item)
        }
    },
    remove(state, item){
        for(let i = 0; i < state.items.length; i++){
            if(state.items[i].coins == item.coins && state.items[i].price == item.price) state.items[i].quantity -= 1
        }
    },
    addDiscount(state, discount){
        state.discounts.push(discount)
    },
    removeDiscount(state, { discount }) {
        state.discounts.splice(state.discounts.indexOf(discount), 1)
    },
}

export const actions = {

}

export const modules = {

}