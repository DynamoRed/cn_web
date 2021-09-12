<template lang="fr">
    <main>
        <WikiLeftNav :wikiData="wikiData" :urlCategory="$route.params.category" :urlSub="$route.params.sub"/>
        <WikiContent :wikiData="wikiData" :urlCategory="$route.params.category" :urlSub="$route.params.sub"/>
        <WikiInternNav :wikiData="wikiData" :urlCategory="$route.params.category" :urlSub="$route.params.sub"/>
    </main>
</template>

<script>
    export default {
        layout: 'main',
        data(){
            return {
                pageTitle: "Wikinoda | Conoda Rôleplay",
                wikiData: {
                    categories: [
                        {title: 'Category 1', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                            {title: 'Sub 3'},
                            {title: 'Sub 4'},
                            {title: 'Sub 5'},
                            {title: 'Sub 6'},
                        ]},
                        {title: 'Category 2', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 3', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 4', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 5', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 6', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 7', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 8', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 9', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 10', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 11', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 12', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 13', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 14', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                        {title: 'Category 15', subs: [
                            {title: 'Sub 1'},
                            {title: 'Sub 2'},
                        ]},
                    ],
                    contents: [
                        {
                            subCategory: 'category-1/sub-1',
                            subTitle: 'Sub 1',
                            contributors: [
                                {
                                    name: 'Johnny Howard',
                                    id: 1,
                                },
                                {
                                    name: 'Louis Krakovith',
                                    id: 2,
                                },
                                {
                                    name: 'Bryan Howard',
                                    id: 3,
                                },
                                {
                                    name: 'Raphael Carnado',
                                    id: 4,
                                },
                                {
                                    name: 'Tristan Yusky',
                                    id: 5,
                                },
                            ],
                            sections: [
                                {
                                    title: 'Titre 1',
                                    content: `Incididunt <strong>culpa laborum adipisicing</strong> cupidatat culpa minim minim irure <em>labore excepteur ea aliquip</em>. Sit aliqua mollit anim eu enim consequat consequat dolore consequat labore tempor sit ad officia. Commodo eu deserunt in aliquip ea minim eu amet. <img src="https://i.imgur.com/yrgZSNn.jpeg" class="embed"> Sint eiusmod nostrud veniam mollit sunt esse aliquip eu reprehenderit deserunt Lorem officia.`,
                                    hints: [
                                        {content: 'Lorem eiusmod quis nulla sunt commodo esse occaecat aute exercitation irure. Cupidatat veniam dolore enim consequat esse duis.',
                                        type: 'information'},
                                        {content: 'Esse ex adipisicing mollit nisi. Officia do deserunt magna ipsum sint. Aliqua culpa excepteur laboris reprehenderit esse voluptate officia laboris.',
                                        type: 'error'},
                                    ],
                                },
                                {
                                    title: 'Titre 2',
                                    content: `Et id cillum irure <a>nulla ullamco cupidatat sit</a> laborum. Officia ipsum aliquip dolore elit amet commodo sit nisi occaecat officia. Commodo labore eu tempor esse laborum sunt sit amet. Sit ea nostrud nulla magna occaecat velit. In laboris ullamco ad occaecat.`,
                                    hints: [
                                        {content: 'Ad nulla ad aute nisi. Pariatur nisi laborum dolor esse esse ea.',
                                        type: 'alert'},
                                    ],
                                },
                            ]
                        },
                        {
                            subCategory: 'category-1/sub-2',
                            subTitle: 'Sub 2',
                            contributors: [
                                {
                                    name: 'Johnny Howard',
                                    id: 1,
                                },
                                {
                                    name: 'Louis Krakovith',
                                    id: 2,
                                },
                                {
                                    name: 'Bryan Howard',
                                    id: 3,
                                },
                            ],
                            sections: [
                                {
                                    title: 'Titre 1',
                                    content: 'Incididunt <strong>culpa laborum adipisicing</strong> cupidatat culpa minim minim irure <em>labore excepteur ea aliquip</em>. Sit aliqua mollit anim eu enim consequat consequat dolore consequat labore tempor sit ad officia. Commodo eu deserunt in aliquip ea minim eu amet.',
                                    hints: [],
                                },
                                {
                                    title: 'Titre 2',
                                    content: 'Et id cillum irure <a>nulla ullamco cupidatat sit</a> laborum. Officia ipsum aliquip dolore elit amet commodo sit nisi occaecat officia. Commodo labore eu tempor esse laborum sunt sit amet. Sit ea nostrud nulla magna occaecat velit. In laboris ullamco ad occaecat.',
                                    hints: [],
                                },
                                {
                                    title: 'Titre 3',
                                    content: 'Et id cillum irure <a>nulla ullamco cupidatat sit</a> laborum. Officia ipsum aliquip dolore elit amet commodo sit nisi occaecat officia. Commodo labore eu tempor esse laborum sunt sit amet. Sit ea nostrud nulla magna occaecat velit. In laboris ullamco ad occaecat.',
                                    hints: [],
                                },
                            ]
                        },
                        {
                            subCategory: 'category-1/sub-3',
                            subTitle: 'Sub 3',
                            contributors: [
                                {
                                    name: 'Johnny Howard',
                                    id: 1,
                                },
                                {
                                    name: 'Louis Krakovith',
                                    id: 2,
                                },
                                {
                                    name: 'Bryan Howard',
                                    id: 3,
                                },
                            ],
                            sections: [
                                {
                                    title: 'Titre 1',
                                    content: 'Incididunt <strong>culpa laborum adipisicing</strong> cupidatat culpa minim minim irure <em>labore excepteur ea aliquip</em>. Sit aliqua mollit anim eu enim consequat consequat dolore consequat labore tempor sit ad officia. Commodo eu deserunt in aliquip ea minim eu amet.',
                                    hints: [],
                                },
                                {
                                    title: 'Titre 2',
                                    content: 'Et id cillum irure <a>nulla ullamco cupidatat sit</a> laborum. Officia ipsum aliquip dolore elit amet commodo sit nisi occaecat officia. Commodo labore eu tempor esse laborum sunt sit amet. Sit ea nostrud nulla magna occaecat velit. In laboris ullamco ad occaecat.',
                                    hints: [],
                                },
                            ]
                        },
                        {
                            subCategory: 'category-2/sub-1',
                            subTitle: 'Sub 1',
                            contributors: [
                                {
                                    name: 'Johnny Howard',
                                    id: 1,
                                },
                                {
                                    name: 'Louis Krakovith',
                                    id: 2,
                                },
                                {
                                    name: 'Bryan Howard',
                                    id: 3,
                                },
                            ],
                            sections: [
                                {
                                    title: 'Titre 1',
                                    content: 'Incididunt <strong>culpa laborum adipisicing</strong> cupidatat culpa minim minim irure <em>labore excepteur ea aliquip</em>. Sit aliqua mollit anim eu enim consequat consequat dolore consequat labore tempor sit ad officia. Commodo eu deserunt in aliquip ea minim eu amet.',
                                    hints: [],
                                },
                                {
                                    title: 'Titre 2',
                                    content: 'Et id cillum irure <a>nulla ullamco cupidatat sit</a> laborum. Officia ipsum aliquip dolore elit amet commodo sit nisi occaecat officia. Commodo labore eu tempor esse laborum sunt sit amet. Sit ea nostrud nulla magna occaecat velit. In laboris ullamco ad occaecat.',
                                    hints: [],
                                },
                            ]
                        },
                        {
                            subCategory: 'category-12/sub-1',
                            subTitle: 'Sub 1',
                            contributors: [
                                {
                                    name: 'Johnny Howard',
                                    id: 1,
                                },
                                {
                                    name: 'Louis Krakovith',
                                    id: 2,
                                },
                                {
                                    name: 'Bryan Howard',
                                    id: 3,
                                },
                            ],
                            sections: [
                                {
                                    title: 'Titre 1',
                                    content: 'Incididunt <strong>culpa laborum adipisicing</strong> cupidatat culpa minim minim irure <em>labore excepteur ea aliquip</em>. Sit aliqua mollit anim eu enim consequat consequat dolore consequat labore tempor sit ad officia. Commodo eu deserunt in aliquip ea minim eu amet.',
                                    hints: [],
                                },
                                {
                                    title: 'Titre 2',
                                    content: 'Et id cillum irure <a>nulla ullamco cupidatat sit</a> laborum. Officia ipsum aliquip dolore elit amet commodo sit nisi occaecat officia. Commodo labore eu tempor esse laborum sunt sit amet. Sit ea nostrud nulla magna occaecat velit. In laboris ullamco ad occaecat.',
                                    hints: [],
                                },
                            ]
                        },
                    ],
                },
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
        align-items: flex-start;
        justify-content: center;
        padding: 100px 0 0;
    }
</style>