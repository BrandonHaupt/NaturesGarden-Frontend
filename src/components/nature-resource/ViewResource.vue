<template>
    <article class="card">
        <div class="card__inner">
            <div class="card__body card__body--front">
                <img class="card-img-url" :src='url' />
                <h2>{{name}}</h2>
            </div>

            <div class="card__body card__body--back">
                <div class="card__title">
                    <p class="id">ID: {{id}}</p>
                    <h2>{{name}}</h2>
                    <div class="line1">
                        <p class="nativeTo">Native To: {{origin}}</p>
                        <p class="edible">Edible: {{edible}}</p>
                    </div>
                    <p class="benefits">{{benefits}}</p>
                    <p class="description">{{description}}</p>
                </div>
                <div class="buttons">
                    <router-link class="view-button" :to="'/ShowResource/' + this.id">View</router-link>
                    <button class="delete-resource" @click="deleteItem(id)">Delete</button>
                </div>
            </div>
        </div>
    </article>
    
</template>

<script>

export default {
    props: ['id','name', 'edible', 'origin', 'url', 'benefits', 'description'],

    inject: ['deleteItem'],

};
</script>