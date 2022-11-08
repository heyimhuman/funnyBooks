<template>
        <div class="activitylist">
        <h1>{{title}}</h1>
        <span>{{message}}</span>
        <hr size="1px" width="500px" align="left" />
    </div>
</template>

<script>

export default ({
    props: {
        title: {
            type: String,
            default: "default title"
        },
        message: {
            type: String,
            default: "here has not leave anything"
        },
        url: {
            type: String
        }
    },
    mounted() {
        console.log("title:"+this.title+"\nmessage:"+this.message+"\nurl:"+this.url);
    },
    data() {
        return {
            
        }
    }
})
</script>

<style scoped>
.activitylist {
    text-align: left;
    background-color: white;
    padding-bottom: 20px;
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
