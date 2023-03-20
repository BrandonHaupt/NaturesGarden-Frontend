

<template>
    <section>

        <div>
            <form @submit.prevent='submitResource'>
                <!-- <label for="name">Resource Name: </label> -->
                <input type="text" id="name" name="name" v-model.trim="enteredName" placeholder="Resource Name">

                <!-- If it is edible -->
                <input type="checkbox" id="isEdible" value="true" name="isEdible" v-model="isTrue">
                <label for="true"> Edible?</label>
                
                <!-- Native to -->
                <input type="text" id="nativeTo" name="nativeTo" v-model.trim="nativeTo" placeholder="Where is the plant Native to?">

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

const url = 'https://naturesgarden-default-rtdb.firebaseio.com/'

export default {
    
    data() {
        return {
            enteredName: '',
            isTrue: false,
            nativeTo: '',
            url: '',
            benefits: '',
            description: '',
            invalidInput: false,
            error: null,
        }
    },

    methods: {
        submitResource(){
            if(this.enteredName === '' || !this.isTrue){
                this.invalidInput = true
                return
            }
            this.invalidInput = false
            this.error = null

            fetch(`${url}/resource.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.enteredName, 
                    isTrue: this.isTrue, 
                    nativeTo: this.nativeTo,
                    url: this.url,
                    benefits: this.benefits,
                    description: this.description
                }),
            }).catch(() => {
                this.error = 'Something went wrong, please try again later'
            })

            this.enteredName = ''
            this.isTrue = false
            this.nativeTo = ''
            this.url = ''
            this.benefits = ''
            this.description = ''

        }

    },

}



</script>
