<script>

    export default{
        name: 'SingleProject',
        props: {
            projectDetails: Object
        },
        methods: {
            /* Se il testo è più lungo di 100 caratteri tronca e aggiungi '...', sennò lascialo cosi com'è */
            truncateText(text) {

                if(text.length > 100) {
                    return text.substr(0, 60) + '...';
                }
                return text;
            }
        }
    }

</script>

<template>
    <div class="card">
        <!--  <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h5 class="card-title">{{projectDetails.name}}</h5>
            <p class="card-text" v-for="tipo in projectDetails.type">{{tipo.name}}</p>
            <p class="card-text d-flex" v-for="technology in projectDetails.technologies">{{technology.name}}</p>
            <p class="card-title">{{truncateText(projectDetails.summary)}}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>