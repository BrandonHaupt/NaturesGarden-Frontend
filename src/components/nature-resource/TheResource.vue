<!-- This displays the data -->
<template>

    <section class="resource">

        <!-- <div>
            <button @click="loadResource">Load Submitted Experiences</button>
        </div> -->

        <p class="loading" v-if="isLoading">Loading...</p>
        <p v-else-if="!isLoading && error">{{error}}</p>
        <p v-if="!isLoading && (!results || results.length === 0)">No data found. Start adding some first.</p>

        <ul class="resource-cards" v-else-if="!isLoading && results && results.length > 0">
            <resource-result v-for="result in results"
                :key="result.id"
                :id='result.id'
                :url='result.url'
                :name='result.name'
                :edible='result.edible'
                :origin='result.origin'
                :benefits='result.benefits'
                :description='result.description'
            >
            </resource-result>
             <!-- <button class="delete" @click="deleteItem(id)">Delete</button> -->
        </ul>

       
    </section>

</template>


<script>
import ResourceResult from './ViewResource.vue'

const url = 'https://naturesgarden-backend.onrender.com/nature/'

export default {

    created(){
        this.loadResource()
        // const resourceId = this.$route.params.resourceId

        // const selectedResource = this.
    },

    components: {
        ResourceResult
    },

    data(){
        return{
            results: [],
            isLoading: false,
            error: null,
            // storedResources: [
            //     {
            //         id: 'test1',
            //         name: 'Dandelion',
            //         isEdible: 'Yes',
            //         nativeTo: 'Eurasia and North America',
            //         url: '',
            //         benefits: 'Providing antioxidants, Reducing cholesterol, Regulating blood sugar, Reducing inflammation, Lowering blood pressure, Aiding weight loss, Reducing cancer risk, Boosting the immune system, Aiding digestion, Keeping skin healthy, and Promoting liver health',
            //         description: 'Dandelions, also known as Taraxacum officinale, are a type of flowering plant native to Europe, Asia and North America. As a member of the daisy family of plants, dandelions are related to dahlias, thistle, ragweed, lettuce, artichokes and sunflowers. Dandelions produce many small yellow flowers, called florets, which collectively form one flower head. Once it has finished flowering, the flower head dries out, the florets drop off and a seed head is formed.'
            //     },
            // ]
        }
    },

    provide() {
        return{
            resources: this.storedResources,
            addResource: this.addResource,
            deleteItem: this.deleteItem
        }
    },

    methods: {

        loadResource(){
            this.isLoading = true
            this.error = null

            fetch(`${url}`)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
            })
            .then((data) => {
                this.isLoading = false
                const results = []
                for(const id in data){
                    results.push({
                        id: data[id].id,
                        name: data[id].name,
                        edible: data[id].edible,
                        origin: data[id].origin,
                        url: data[id].url,
                        benefits: data[id].benefits,
                        description: data[id].description
                    })
                }
                this.results = results
                console.log(results)
            })
            .catch((error) => {
                console.log(error)
                // We set isLoading to false because we arent loading anymore but we got an error
                this.isLoading = false
                this.error = 'Failed to fetch data - please try again later'
            })
        },

        // This should automatically load the data
        mounted(){
            this.loadResource()
        },


        deleteItem(id) {
            const url = `https://naturesgarden-backend.onrender.com/nature/${id}`;

            console.log(id)
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // Handle success
                const index = this.results.findIndex(item => item.id === id);
                this.results.splice(index, 1);
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
        }
    },


}

</script>