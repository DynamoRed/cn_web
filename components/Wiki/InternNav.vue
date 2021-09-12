<template>
    <div>
        <section>
            Sur cette page
            <NuxtLink v-for="section in activeArticle.sections" :key="section.title.replace(/ /g, '-').toLowerCase()" :to="`#${section.title.replace(/ /g, '-').toLowerCase()}`" class="nav-title">{{section.title}}</NuxtLink>
        </section>
        <section>
            Partenaires
            <NuxtLink to="/" class="btn-primary">Devenir Partenaire</NuxtLink>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'InternNav',
        props: ['wikiData', 'urlCategory', 'urlSub'],
        computed: {
            activeArticle: {
                get(){
                    for(let i = 0; i < this.wikiData.contents.length; i++){
                        if(this.wikiData.contents[i].subCategory == this.urlCategory + '/' + this.urlSub){
                            return this.wikiData.contents[i];
                        }
                    }
                    return this.wikiData.contents[0];
                }
            },
        },
    }
</script>

<style lang="css" scoped>
    div {
        display: flex;
        flex-direction: column;
        padding: 20px;
        max-height: 75vh;
        max-width: 175px;
        overflow-y: scroll;
    }

    div section {
        display: flex;
        flex-direction: column;
        color: #a9b5c6;
        font-weight: 800;
        text-transform: uppercase;
        font-size: 12px;
        margin-bottom: 48px;
    }

    div section::before {
        content: "";
        display: block;
        width: 100%;
        border-top: #a9b5c6 1px dashed;
        margin-bottom: -24px;
    }

    div section a {
        text-transform: none;
        padding: 2px 0;
        margin-left: 14px;
        text-decoration: none;
        font-weight: 500;
        color: #606f7b;
        font-size: 14px;
        transition: transform .3s;
    }

    div section a:first-child {
        margin-top: 10px;
    }

    div section a:hover {
        transform: translateX(7.5px);
    }

    div section a.btn-primary {
        margin-left: 0;
        padding: 4px 8px;
        transition: color .3s;
    }

    div section a.btn-primary:hover {
        transform: translateX(0);
    }
</style>