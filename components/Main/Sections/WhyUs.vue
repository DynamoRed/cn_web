<template>
    <section>
        <h1 class="section-title">Pourquoi nous ?</h1>
        <div class='section-content'>
            <MainWhyUsValue v-for="data in whyUsValues" :key="data.title" :data="data" class="why-us-value-container"/>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'WhyUs',
        data(){
            return {
                whyUsValues: [
                    {image: "exclusivity.png", title: "Exclusivité", description: `Avec 95% de nos contenus "fait-maison", nous vous offrons une multitude de nouveautés chaque mois.`},
                    {image: "connectivity.png", title: "Connectivité", description: `Toutes nos plateformes sont interconnectées.
                    La gestion de vos personnages est possible depuis notre site !`},
                    {image: "facility.png", title: "Facilité", description: `Afin de vous aider a débuter ou a vous perferctionner, nos rédacteurs mettent a votre disposition le Wikinoda.`},
                    {image: "security.png", title: "Securité", description: `Nous faisons de la sécurité de nos plateformes une priorité.
                    Notre équipe d'administration ainsi que nos plateformes sont sécurisées et téstées régulièrement.`},
                ],
            }
        },   
    }
</script>

<style lang="css" scoped>
    .section-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }

    .section-content > *.why-us-value-container {
        margin-right: 32px;
    }

    .section-content > *.why-us-value-container:last-child {
        margin-right: 0;
    }
</style>