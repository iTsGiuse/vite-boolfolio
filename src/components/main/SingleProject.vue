<script>

    export default{
        name: 'SingleProject',
        props: {
            projectDetails: Object
        },
    }

</script>

<template>
    <section id="single-card">
       <div class="container mt-3">
            <div class="row">
                <div class="col-4">
                    <div class="card">
                       <!--  <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <h5 class="card-title">{{projectDetails.name}}</h5>
                            <p class="card-text">{{projectDetails.type}}</p>
                            <p class="card-text">{{projectDetails.technologies}}</p>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    </section>
</template>

<style scoped lang="scss">

</style>