<template>
    <a href="#">
        <div class="activitylist">
        <h1>{{title}}</h1>
        <span>{{message}}</span>
    </div>
    </a>
</template>

<script>

export default ({
    props: {
        title: String,
        message: String
    },
    mounted() {
        console.log("title:"+this.title+"\nmessage:"+this.message);
    },
    data() {
        return {
            
        }
    }
})
</script>

<style scoped>
.activitylist {
    background-color: white;
    padding: 10px 20px;
    margin: 10px;
    border-bottom: 1px solid black;
}

h1 {
    color: black;
}

span {
    color: black;
    
}

a {
  text-decoration: none;
}

</style>
