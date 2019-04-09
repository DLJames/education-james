<template>
    <div class="message">
        <h1>{{ message }}</h1>
    </div>
</template>

<script> 
export default {
        data () {
            return {
                message: "This is test msg!"
            };
        },
        created () {
            var self = this
            this.$bus.$on('updateMessage', function(value) {
                self.message = value

            })
        }
    }; 
</script>