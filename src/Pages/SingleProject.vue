<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            projects: null
        };
    },
    methods: {
        getProjectDetails() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                this.projects = response.data.projects;
            });
        }
    },
    mounted() {
        this.getProjectDetails();
    }
}
</script>

<template>
    <div class="container my-5">
        <div v-if="projects">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{projects.name}}</h5>
                            <div v-if="projects.type">
                                <p class="card-text" v-for="tipo in projects.type">{{tipo.name}}</p>
                            </div>
                            <div v-if="projects.technologies">
                                <p class="card-text d-flex" v-for="technology in projects.technologies">{{technology.name}}</p>
                            </div>
                            <p class="card-title">{{projects.summary}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-5"> 
            <div class="col-12 text-center">
                <router-link :to="{ name: 'list-project'}"><button class="px-3 py-2">torna</button></router-link>
            </div>
        </div>
    </div>
</template>