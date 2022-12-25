<script>
// import router from '../../router/index'
export default {
    methods: {
        push() {
    console.log("will push")
    this.$router.push('/vueStudy')
}
    }
}
</script>

<template>
    <div>
        <h1>Hello world</h1>
        <form>
            text:<input type="text">
            <br />
            radio0:<input type="radio" name="radio">
            radio1:<input type="radio" name="radio">
            radio2:<input type="radio" name="radio">
        </form>
        <button @click="push()">Push</button>
    </div>
</template>