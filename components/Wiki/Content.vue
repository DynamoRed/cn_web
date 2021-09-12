<template>
    <article>
        <h1>{{articleContent.subTitle}}</h1>
        <template v-for="section in articleContent.sections">
            <h2 :id="section.title.replace(/ /g, '-').toLowerCase()">{{section.title}}</h2>
            <p v-html="section.content"></p>
            <div :class="`hint ${hint.type}`" v-for="hint in section.hints">
                <img class="icon" :src="require(`~/assets/icons/System/${hint.type}-fill.svg`)"/>
                <span>{{hint.content}}</span>
            </div>
        </template>
        <div class="bottom-nav">
            <NuxtLink v-if="wikiData.contents[articleIndex - 1]" :to="`/wiki/${wikiData.contents[articleIndex - 1].subCategory}`"><img class="icon" :src="require(`~/assets/icons/System/arrow-left-line.svg`)">{{wikiData.contents[articleIndex - 1].subTitle}}</NuxtLink>
            <span v-else>&nbsp;</span>
            <NuxtLink v-if="wikiData.contents[articleIndex + 1]" :to="`/wiki/${wikiData.contents[articleIndex + 1].subCategory}`" class="next">{{wikiData.contents[articleIndex + 1].subTitle}}<img class="icon" :src="require(`~/assets/icons/System/arrow-right-line.svg`)"></NuxtLink>
            <span v-else>&nbsp;</span>
        </div>
        <footer>
            <h3>Contributeurs</h3>
            <div class="contributors">
                <a v-for="contributor in articleContent.contributors" :key="contributor" class="contributor"><img :src="require(`~/assets/avatars/${contributor.id}.png`)"/><span>{{contributor.name}}</span></a>
            </div>
            <span class="error-in">Une erreur dans la documentation ? <a>Signalez le nous !</a></span>   
        </footer>        
    </article>
</template>

<script>
    export default {
        name: 'Content',
        props: ['wikiData', 'urlCategory', 'urlSub'],
        data(){
            return {
                articleIndex: 0,
            }
        },
        computed: {
            articleContent: {
                get(){
                    for(let i = 0; i < this.wikiData.contents.length; i++){
                        if(this.wikiData.contents[i].subCategory == this.urlCategory + '/' + this.urlSub){
                            this.articleIndex = i;
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
    article {
        display: flex;
        flex-direction: column;
        width: 45vw;
        max-width: 675px;
        min-height: 80vh;
        padding: 30px 20px;
        margin-bottom: 128px;
    }

    article .bottom-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 48px;
    }

    article .bottom-nav a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: fit-content;
    }

    article .bottom-nav a.next {
        justify-content: flex-end;
    }

    article .bottom-nav a img.icon {
        margin: 0 5px;
    }

    article .hint {
        display: flex;
        flex-direction: row;
        background-color: rgba(0, 119, 224, .1);
        border-left: rgba(0, 119, 224, 1) 5px solid;
        margin: 8px 0;
        padding: 8px;
    }

    article .hint.error {
        background-color: rgba(224, 0, 0, .1);
        border-left: rgba(224, 0, 0, 1) 5px solid;
    }

    article .hint.alert {
        background-color: rgba(224, 161, 0, .1);
        border-left: rgba(224, 161, 0, 1) 5px solid;
    }

    article .hint span {
        font-size: 14px;
    }

    article img.icon {
        margin: 0;
        width: 22px;
    }

    article .hint img.icon {
        margin: 2px 14px 0 6px;
        width: fit-content;
    }

    article h1 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 16px;
    }

    article h2 {
        font-size: 24px;
        font-weight: 500;
        padding-top: 48px;
        margin: 0 0 22px;
    }

    article p {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    article footer {
        margin-top: 48px;
        border-top: rgba(0, 0, 0, .2) 1px solid;
        padding-top: 48px;
    }

    article footer .contributors {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 12px;
    }

    article footer .contributors a.contributor,
    article footer .contributors a.contributor:hover {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 4px;
        overflow: hidden;
        font-size: 16px;
        margin-right: 9px;
        margin-bottom: 9px;
        text-decoration: none;
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: -1.66667px -1.66667px 5px #FFFFFF, 2.5px 2.5px 5px rgba(174, 174, 192, 0.4), inset 0px 0px 0px 0.333333px rgba(255, 255, 255, 0.2);
        transition: transform .3s;
    }

    article footer .contributors a.contributor:after,
    article .bottom-nav a:after {
        border-bottom: 1px solid rgba(0,0,0,0);
    }

    article footer .contributors a.contributor:hover {
        transform: translate(-2px, -2px);
    }

    article footer .contributors a.contributor img {
        width: 28px;
        height: 28px;
        margin: 0;
    }

    article footer .contributors a.contributor span {
        font-weight: 400;
        font-size: 14px;
        margin: 0 8px;
        color: #000;
    }

    article footer span.error-in {
        font-size: 16px;
    }
</style>