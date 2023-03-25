<template>
  <the-nav></the-nav>
  
  <main>
    <router-view></router-view>
    <!-- <add-resource></add-resource>
    <the-resource></the-resource> -->
  </main>
  <!-- <the-footer></the-footer> -->
</template>

<script>
import TheNav from './components/nav/TheNav.vue'
// import TheFooter from './components/footer/TheFooter.vue'
// import AddResource from './components/nature-resource/AddResource.vue'
// import TheResource from './components/nature-resource/TheResource.vue'
import './components/styles/styles.css'

export default {

  components: {
    TheNav,
    // TheFooter,
    // AddResource,
    // TheResource
  },

  mounted() {
    // Redirect to about page after 3 seconds
    setTimeout(() => {
      this.$router.push('/ResourceResult');
    }, 5000);
  }

}
</script>

<style>

</style>
