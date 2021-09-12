<template>
    <div class="container">
        <nav>
            <NuxtLink v-for="category in wikiData.categories" v-if="categoryAsValidSubs(category)" :key="category.title" :class="activeCategory.title == category.title ? 'active' : ''" :to="`/wiki/${(category.title + '/' + category.subs[0].title).replace(/ /g, '-').toLowerCase()}`">
                <div class="top"><img :src="require(`~/assets/icons/System/arrow-right-s-line.svg`)">{{category.title}}</div>
                <div v-if="activeCategory.title == category.title" class="sub-nav">
                    <NuxtLink v-for="sub in category.subs" v-if="articleExist((category.title + '/' + sub.title).replace(/ /g, '-').toLowerCase())" :key="sub.title" :to="`/wiki/${(category.title + '/' + sub.title).replace(/ /g, '-').toLowerCase()}`">{{sub.title}}</NuxtLink>
                </div>
            </NuxtLink>
            <div class="version">Version <span>{{version}}</span></div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'LeftNav',
        props: ['wikiData', 'urlCategory', 'urlSub'],
        data(){
            return {
                version: 'beta-1.0.0',
            }
        },
        methods: {
            articleExist(subCategory){
                for(let i = 0; i < this.wikiData.contents.length; i++){
                    if(this.wikiData.contents[i].subCategory == subCategory){
                        return true
                    }
                }
                return false
            },
            categoryAsValidSubs(category){
                for(let i = 0; i < this.wikiData.categories.length; i++){
                    if(this.wikiData.categories[i].title == category.title){
                        for(let y = 0; y < category.subs.length; y++){
                            if(this.articleExist((category.title + '/' + category.subs[y].title).replace(/ /g, '-').toLowerCase())){
                                return true
                            }
                        }
                    }
                }
                return false
            },
        },
        computed: {
            activeCategory: {
                get(){
                    for(let i = 0; i < this.wikiData.categories.length; i++){
                        if(this.wikiData.categories[i].title.replace(/ /g, '-').toLowerCase() == this.urlCategory){
                            this.wikiData.categories[i].sub = this.wikiData.categories[i].subs[0];
                            for(let y = 0; y < this.wikiData.categories[i].subs.length; y++){
                                if(this.wikiData.categories[i].subs[y].title.replace(/ /g, '-').toLowerCase() == this.urlSub){
                                    this.wikiData.categories[i].sub = this.wikiData.categories[i].subs[y]
                                }
                            }
                            return this.wikiData.categories[i]
                        }
                    }
                    this.wikiData.categories[0].sub = this.wikiData.categories[0].subs[0]
                    return this.wikiData.categories[0]
                }
            },
        },
    }
</script>

<style lang="css" scoped>
    div.container::after {
        content: "Scrollez pour découvrir plus de catégories";
        border-top: #a9b5c6 1px dashed;
        margin-top: 10px;
        padding-top: 8px;
        position: absolute;
        width: 200px;
        font-size: 12px;
        color: #8e97a5;
    }

    nav {
        display: flex;
        flex-direction: column;
        min-width: 200px;
        min-height: 200px;
        padding: 20px 30px 20px 0;
        margin-right: 10px;
        max-height: calc(100vh - 230px);
        max-width: 250px;
        overflow-y: scroll;
    }

    nav a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        margin: 4px 0;
        color: #606f7b;
        text-decoration: none;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 16px;
        transition: color .3s;
    }

    nav a:hover{
        color: var(--secondary-color);
    }

    nav a.active:hover {
        color: var(--primary-color);
    }

    nav a .top {
        display: flex;
        flex-direction: row;
    }

    nav a img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
        margin-top: 3px;
        transition: transform .3s;
    }

    nav a.active {
        color: #606f7b;
        font-weight: 700;
    }

    nav a.active img {
        transform: rotate(90deg);
    }

    nav .sub-nav {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        padding-left: 14px;
    }

    nav .sub-nav a {
        text-transform: none;
        margin: 0;
        padding: 5px 0 5px 22px;
        margin: 2.5px 0;
        font-size: 14px;
        transition: color .3s;
        border-radius: 6px;
        font-weight: 500;
        transition: background-color .2s;
    } 

    nav .sub-nav a.nuxt-link-exact-active {
        color: var(--primary-color);
        background-color: rgba(0, 119, 224, .2);
    }

    nav .sub-nav a:hover {
        color: var(--primary-color);
        background-color: rgba(0, 119, 224, .1);
    }

    nav .version {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
        padding: 10px;
        background-color: rgba(0, 119, 224, .1);
        border-radius: 8px;
        font-size: 16px;
        border: rgba(0, 119, 224, .5) 1px solid;
    }
    
    nav .version span {
        color: var(--primary-color);
        margin-left: 5px;
    }
</style>