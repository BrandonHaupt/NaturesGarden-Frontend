<template>
  <div v-if="item">
    <h1>{{ log.date }}</h1>
    <p>{{ log.time }}</p>
    <img :src="log.image" width="500"/>
  </div>
</template>

<script>
export default {
  name: 'ShowResource',
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
