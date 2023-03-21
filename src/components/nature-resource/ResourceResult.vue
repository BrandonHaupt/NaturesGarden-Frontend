<template>
    <article class="card">
        <div class="card__inner">

            <div class="card__body card__body--front">
                <img :src='url' />
                <h2>{{name}}</h2>
            </div>

            <div class="card__body card__body--back">
                <div class="card__title">
                    <p class="id">ID: {{id}}</p>
                    <div class="line1">
                        <p class="nativeTo">Native To: {{nativeTo}}</p>
                        <p class="edible">Edible: {{isTrue}}</p>
                    </div>
                    <p class="benefits">{{benefits}}</p>
                    <p class="description">{{description}}</p>
                </div>
                <div class="buttons">
                    <button class="edit">Edit</button>
                    <button class="delete" @click="deleteItem(id)">Delete</button>
                </div>
            </div>
        </div>
    </article>

</template>

<script>



// import axios from 'axios';
// import { initializeApp } from 'firebase/app';

export default {
    props: ['id','name', 'isTrue', 'nativeTo', 'url', 'benefits', 'description'],


       data(){
        return{
            results: []
        }
    },


//   computed: {
//     ratingClass() {
//       return 'highlight rating--' + this.rating;
//     },
//   },

    methods: {
        // deleteResource(resId){
        //     // const resIndex = this.loadResource.findIndex(res => res.id === resId)
        //     // this.loadResource.splice(resIndex, 1)
        //     console.log(resId)
        //     // fetch(`${url}${resId}`, {method: 'DELETE'})
        //     // .then(() => console.log(this.resId))

        //     // DELETE request using fetch with async/await
        //     // fetch(`${url}resource/${resId}`, { method: 'DELETE' });

        //     fetch(`${url}resource/${resId}`, { method: 'DELETE' })
        //     .then(async response => {
        //         const isJson = response.headers.get('content-type').includes('application/json');
        //         const data = isJson && await response.json();

        //         // check for error response
        //         if (!response.ok) {
        //             // get error message from body or default to response status
        //             const error = (data && data.message) || response.status;
        //             return Promise.reject(error);
        //         }

        //         this.status = 'Delete successful';
        //     })
            
        // }

        
    deleteItem(id) {
    const url = `https://naturesgarden-default-rtdb.firebaseio.com/resource/${id}.json`;

    // firebase.auth().currentUser.getIdToken(true)

    fetch(url, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Handle success
    })
    .catch(error => {
        console.error(error);
        // Handle error
    });
    }

       
    }
};
</script>