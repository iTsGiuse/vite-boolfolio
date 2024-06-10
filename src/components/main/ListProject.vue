<script>

    import axios from 'axios';
    import SingleProject from './SingleProject.vue';

    export default {
        name: 'ListProject',
        components: {
            SingleProject
        },
        data() {
            return {
                projects: []
            };
        },
        methods: {
            getProjectFromApi() {
                axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    this.projects = response.data.results;
                });
            }
        },
        mounted() {
            this.getProjectFromApi();
        }
    }

</script>

<template>
    <main>
        <SingleProject v-for="project in projects" :key="project.id" :projectDetails="project"></SingleProject>
    </main>
</template>

<style lang="scss" scoped>

</style>