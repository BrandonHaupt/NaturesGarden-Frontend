<template>

  <section class="show-resource-page">
    <div class="main-show-container" v-if="item">
      <section class="item-image">
        <img :src="item.url"/>
      </section>
      <section class="item-info">
        <h1>{{ item.name }}</h1>
        <p>{{ item.origin }}</p>
        <p>{{ item.edible }}</p>
        <p>{{ item.benefits }}</p>
        <p>{{ item.description }}</p>
      </section>
     
    </div>

    <div class="loading" v-else>
      <h1>Loading...</h1>
    </div>

    <form class="form-show" @submit.prevent="submitForm">
      <!-- <label for="name">Resource Name: </label> -->
        <input type="text" id="name" name="name" v-model.trim="item.name" placeholder="Resource Name">

        <!-- If it is edible -->
        <input type="text" id="edible" name="edible" v-model="item.edible" placeholder="is it edible?">
        
        <!-- origin -->
        <input type="text" id="origin" name="origin" v-model.trim="item.origin" placeholder="Where is the plant Native to?">

        <!-- URL -->
        <input type="text" id="url" name="url" v-model.trim="item.url" placeholder="Enter image address">

        <!-- Benefits -->
        <textarea name="benefits" id="benefits" cols="30" rows="1" placeholder="Enter the benefits of the plant" v-model="item.benefits" />

        <!-- description -->
        <textarea name="description" id="description" cols="30" rows="1" placeholder="Enter the description of the plant" v-model="item.description" />

        <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
        <p v-if="error">{{error}}</p>
        
        <button>Submit</button>
        <div class="form-submit-button">
        </div>
    </form>
  </section>

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


  methods: {
    submitForm() {
      const id = this.$route.params.id;
      const formData = {
          url: this.item.url,
          name: this.item.name, 
          edible: this.item.edible, 
          origin: this.item.origin,
          benefits: this.item.benefits,
          description: this.item.description
      };
      fetch(`https://naturesgarden-backend.onrender.com/nature/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          // Redirect to the log show page if the update is successful
          this.$router.push(`/ShowResource/${id}`);
        } else {
          throw new Error('Error updating nature data.');
        }
      })
      .catch(error => {
        console.error('Error updating nature data:', error);
      });
    }
  }
};
</script>

<style scoped>
  .item-image img{
    height: 700px;
    width: 700px;
    object-fit: cover;
  }

  .loading {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    padding: 20px 0;
    text-transform: uppercase;
    color: white;
    margin: 2rem 0;

    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, 
      rgba(31,82,18,1) 0%, 
      rgba(24,112,9,1) 20%, 
      rgba(33,130,16,1) 42%, 
      rgba(31,82,18,1) 100%
    );      
  }

 @keyframes placeHolderShimmer {
    0% {
      background-position: -800px 0
    }
    100% {
      background-position: 800px 0
    }
  }

 .show-resource-page{
    padding: 10px;
  }

  .main-show-container{
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem 0;
  }

  .item-info {
    width: 90%;
    padding-left: 10px;
  }
  .item-info h1{
    font-size: 3rem;
  }
  
  .form-show {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
 


@media (min-width: 80em){
  .show-resource-page{
    padding: 10px;
  }

  .main-show-container{
    display: flex;
    flex-direction: row;
    padding: 0 0 2rem 0;
  }

  .item-info {
    width: 50%;
    padding-left: 10px;
  }
  
  .form-show {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

}
</style>