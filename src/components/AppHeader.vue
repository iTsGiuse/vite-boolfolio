<script>

    export default{
        name: 'AppHeader'
    }

</script>

<template>

    <header>
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <ul class="nav-bar d-flex gap-5 align-items-center">
                    <li>
                        <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link class="nav-link active" aria-current="page" :to="{ name: 'list-project' }">Projects</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<style lang="scss" scoped>

    ul{
        list-style: none;
    }

</style>