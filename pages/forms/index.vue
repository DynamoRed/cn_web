<template>
    <article>
        <header>
            <h1><img class="icon" :src="require(`~/assets/icons/Document/article-line.svg`)" /> Questionnaire Satisfaction</h1>
            <p>Duis ea ex eu dolor ut aute labore in velit in quis adipisicing incididunt proident. Ullamco magna duis id aliquip magna aute laboris esse. Proident proident consectetur voluptate labore eiusmod et mollit qui officia ullamco est eu cupidatat dolore. In cillum aute irure cupidatat esse laborum proident ea sit proident ad. Duis Lorem minim eiusmod incididunt. Irure cupidatat mollit eu elit tempor nostrud deserunt amet pariatur. Commodo reprehenderit ut cupidatat exercitation eiusmod adipisicing pariatur laborum dolore.</p>
        </header>
        <main>
            <div class="rowed-input">
                <label>1. Test de l'input</label>
                <input type="text" placeholder="Test"/>
            </div>
            <div class="rowed-input">
                <label>2. Test de l'input</label>
                <input type="text" placeholder="Test"/>
            </div>
            <div class="rowed-input">
                <label>3. Test de l'input</label>
                <input type="text" placeholder="Test"/>
            </div>
            <div class="rowed-input">
                <label>4. Test de l'input</label>
                <input type="text" placeholder="Test"/>
            </div>
        </main>
        <footer>
            <a class="btn-primary">
                <img :src="require(`~/assets/icons/System/arrow-left-fill.svg`)">
                <span>Précédent</span>
            </a>
            <a class="btn-primary">
                <span>Suivant</span>
                <img class="right-icon" :src="require(`~/assets/icons/System/arrow-right-fill.svg`)">
            </a>
        </footer>
    </article>
</template>

<script>
    export default {
        layout: 'forms',
    }
</script>

<style lang="css" scoped>
    article {
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #F0F1F5;
        background-blend-mode: soft-light, normal;
        box-shadow: -4.08333px -4.08333px 12.25px #FFFFFF, 6.125px 6.125px 12.25px rgba(174, 174, 192, 0.4), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        padding: 48px;
        width: 50vw;
        margin: 150px 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
    }

    article header h1 {
        margin: 24px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    article header h1 .icon {
        margin: 3px 8px 0 0;
    }

    article main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-top: 2px dashed grey;
        margin: 32px 0;
        padding: 32px 16px;
    }

    .rowed-input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 12px;
    }

    .rowed-input label {
        font-size: 16px;
    }

    .rowed-input input {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 24px;
        margin: 8px 0;
        border: none;
        outline: none;
        padding: 8px 12px;
        background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 100%), #EDEEF2;
        background-blend-mode: soft-light, normal;
        box-shadow: inset -2.66667px -2.66667px 2.66667px rgba(255, 255, 255, 0.7), inset 4px 4px 2.66667px rgba(174, 174, 192, 0.2);
    }

    .rowed-input input::placeholder {
        font-size: 14px;
        font-weight: 400;
    }

    article footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 32px;
    }

    article footer .btn-primary {
        padding: 8px 24px;
    }
</style>