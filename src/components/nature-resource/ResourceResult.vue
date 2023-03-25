<template>
    <!-- <router-view></router-view> -->
    <add-resource></add-resource>
    <the-resource></the-resource>
    <!-- <view-resource></view-resource> -->
</template>

<script>

import AddResource from './AddResource.vue';
// import ViewResource from './ViewResource.vue';
import TheResource from './TheResource.vue'
// import axios from 'axios';
// import { initializeApp } from 'firebase/app';

export default {
    inject: ['deleteItem'],

    components: {
        AddResource,
        // ViewResource,
        TheResource
    },

    // data(){
    //     return{
    //         results: [],
    //         showModal: false,
    //     }
    // },

};
</script>