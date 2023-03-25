<template>
  <!-- <router-view>
  </router-view> -->
    <div v-if="item">
      <h1>{{ item.name }}</h1>
      <p>{{ item.benefits }}</p>
      <img :src="item.url" width="500"/>
    </div>

    <div class="loading" v-else>
      <h1>Loading...</h1>
    </div>
</template>

<script>
export default {
  name: 'ShowResource',

  inject: ['results'],

  data() {
    return {
      item: null
    };
  },
  
  created() {
    // Get the ID from the route params
    const id = this.$route.params.id;

    // Make a GET request to your backend API
    fetch(`https://naturesgarden-backend.onrender.com/nature/${id}`)
      .then(response => response.json())
      .then(data => {
        this.item = data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
