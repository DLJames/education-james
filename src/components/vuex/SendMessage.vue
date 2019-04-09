<template>
    <div class="form">
        <div class="form-control">
            <input v-model="message" >
            <button @click="updateMessage()">Send Message</button>
        </div>
    </div>
</template>
<script>
export default {
        data () {
            return {
                message: "This is test msg!"
            };
        },
        methods: {
            updateMessage () {
                this.$bus.$emit("updateMessage", this.message);
            }
        }
    };
 </script>