

<template>
    <section>

        <div>
            <form @submit.prevent='submitResource'>
                <!-- <label for="name">Resource Name: </label> -->
                <input type="text" id="name" name="name" v-model.trim="name" placeholder="Resource Name">

                <!-- If it is edible -->
                <input type="text" id="edible" name="edible" v-model="edible" placeholder="is it edible?">
                
                <!-- origin -->
                <input type="text" id="origin" name="origin" v-model.trim="origin" placeholder="Where is the plant Native to?">

                <!-- URL -->
                <input type="text" id="url" name="url" v-model.trim="url" placeholder="Enter image address">

                <!-- Benefits -->
                <textarea name="benefits" id="benefits" cols="30" rows="1" placeholder="Enter the benefits of the plant" v-model="benefits" />

                <!-- description -->
                <textarea name="description" id="description" cols="30" rows="1" placeholder="Enter the description of the plant" v-model="description" />

                <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
                <p v-if="error">{{error}}</p>
                
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>

    </section>

</template>


<script>

const url = 'https://naturesgarden-backend.onrender.com/nature/'

export default {
    
    data() {
        return {
            url: '',
            name: '',
            edible: '',
            origin: '',
            benefits: '',
            description: '',
            invalidInput: false,
            error: null,
        }
    },

    methods: {
        submitResource(){

            if(this.name === ''){
                this.invalidInput = true
                return
            }
            this.invalidInput = false
            this.error = null

            fetch(`${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: this.url,
                    name: this.name, 
                    edible: this.edible, 
                    origin: this.origin,
                    benefits: this.benefits,
                    description: this.description
                }),
            }).catch(() => {
                this.error = 'Something went wrong, please try again later'
            })

            this.url = ''
            this.name = ''
            this.edible = ''
            this.origin = ''
            this.benefits = ''
            this.description = ''

        }

    },

}



</script>
