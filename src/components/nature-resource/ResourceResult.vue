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
                    <button class="delete" @click="deleteResource(id)">Delete</button>
                </div>
            </div>
        </div>
    </article>

</template>

<script>

const url = 'https://naturesgarden-default-rtdb.firebaseio.com/'

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
        deleteResource(resId){
            // const resIndex = this.loadResource.findIndex(res => res.id === resId)
            // this.loadResource.splice(resIndex, 1)
            console.log(resId)
            // fetch(`${url}${resId}`, {method: 'DELETE'})
            // .then(() => console.log(this.resId))

            // DELETE request using fetch with async/await
            fetch(`${url}resource/${resId}`, { method: 'DELETE' });
            
        }
    }
};
</script>