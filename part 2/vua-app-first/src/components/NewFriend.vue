<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input v-model="enterName" type="text" />
        </div>
        <div>
            <label>Phone</label>
            <input v-model="enterPhone" type="tel" />
        </div>
        <div>
            <label>E-mail</label>
            <input v-model="enterEmail" type="email" />
        </div>
         <div>
            <button>Add contact</button>
        </div>
    </form>
</template>
<script>
    export default {
    emits: ['add-contact'],
        data() {
            return{
                enterName: '',
                enterPhone: '',
                enterEmail: ''
            }
        
        },
        methods: {
           submitData(){
            this.$emit('add-contact', this.enterName, this.enterPhone, this.enterEmail)
           }
        }
    }
</script>

