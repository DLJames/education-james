<template>
    <div class="g-wraper">
        <SendMessage></SendMessage>
        <ShowMessage></ShowMessage>
    </div>
</template>

<script>
import SendMessage from './SendMessage'
import ShowMessage from './ShowMessage'

export default {
    data () {
        return{}
    },
    components: {
        SendMessage, ShowMessage
    }
}
</script>

<style scoped>
    .g-wraper{
        width: 50%;
        margin: 0 auto;
        border: 1px solid;
        padding: 10px;
    }
</style>

