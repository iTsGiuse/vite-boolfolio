<script>

    import axios from 'axios';
    import SingleProject from '../components/SingleCard.vue';

    export default {
        name: 'ListProject',
        components: {
            SingleProject
        },
        data() {
            return {
                projects: [],
                currentPage: 0,
                prevPageUrl: null,
                nextPageUrl: null,
            };
        },
        methods: {
            getProjectFromApi(pageNumber) {
                axios.get('http://127.0.0.1:8000/api/projects', {
                    params: {
                        page: pageNumber
                    }
                })
                .then((response) => {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.prevPageUrl = response.data.results.prev_page_url;
                    this.nextPageUrl = response.data.results.next_page_url;
                });
            }
        },
        mounted() {
            this.getProjectFromApi(this.currentPage);
        }
    }

</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-4 my-3" v-for="project in projects" :key="project.id">
                    <SingleProject :projectDetails="project"></SingleProject>
                </div>
            </div>

            <nav class="mt-3">
                <ul class="pagination justify-content-between">
                    <li v-if="prevPageUrl" class="page-item">
                        <a class="page-link" @click="getProjectFromApi(currentPage - 1)">Previous</a>
                    </li>
                    <li v-if="nextPageUrl" class="page-item">
                        <a class="page-link" @click="getProjectFromApi(currentPage + 1)">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
       
    </main>
</template>

<style lang="scss" scoped>

</style>