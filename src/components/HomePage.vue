<script setup>

</script> 


<template>
  <div class="main">
    <div class="home-page">
    <header class="top">
      <form name="search" target="_blank" method="get" action="https://www.baidu.com/s">
        <input class="textfield" name="word" type="text" placeholder="随便搜，反正跳百度" />
        <input class="button" type="submit" value="submit" />
      </form>
    </header>
    <section class="summary">
      <span>这是学习html和vue的一个项目，记录学习过程的一些内容</span>
    </section>
    <section class="middle">
      <ul>
          <li v-for="item in items" :key="item.id">
            <router-link :to="item.url">
                <ActivityListItem :title="item.title" :message="item.message" :url="item.url"/>
            </router-link>
          </li>
        </ul>
    </section>
    <section class="page-number">
      <span>总数:{{items.length}}</span>
    </section>
    <footer class="bottom">
        <dl>
          <dt>网站</dt>
            <dd>
              <div v-for="item in links" :key="item.id" >
                <a :href="item.url" target="_blank" >{{item.title}}</a>
              </div>
            </dd>
        </dl>
    </footer>
  </div>
  </div>
</template>

<script>
import ActivityListItem from "../components/ActivityListItem.vue"

export default {
  data() {
    return {
      items: [
      {
          "title": "Element",
          "message": "keep it",
          "url": "/elementPage",
          "id": "1"
        },
        {
          "title": "Vue study",
          "message": "keep it",
          "url": "/vueStudy",
          "id": "1"
        }],
        links: [
          {
            "title": "myGithub",
            "url": "https://github.com/heyimhuman",
            "id": "1"
          },
          {
            "title": "vue.js",
            "url": "https://cn.vuejs.org/",
            "id": "2"
          },
          {
            "title": "菜鸟教程",
            "url": "https://www.runoob.com/js/js-howto.html",
            "id": "3"
          }
        ]
    };
  },
  components: {
    ActivityListItem
  }
};
</script>

<style scoped>

.main {
  clear: both;
}
.home-page {
  width: 1024px;
  align-content: center;
}

.top {
  width: 100%;
  height: 80px;
  background-color: black;
  /* position: relative; */
  display: flex;
  /* align-items: center; */
}

.top form {
  margin: auto 10px;
}

.textfield {
  width: 300px;
  height: 50px;
  padding: 0 10px;
}

.summary {
  font-size: 1.5rem;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.button {
  margin-left: 10px;
  width: 100px;
  height: 50px;
}

.summary span {
  margin: 20px;
}

.middle {
width: 100%;
height: 1000px;
  overflow: scroll;
}

.page-number {
  height: 50px;
  text-align: center;
}

.bottom {
  padding: 20px 10px;
  display: block;
  width: calc(100% - 20px);
  height: 200px;
  background-color: black;
}

ul {
  padding-left: 20px;
  padding-right: 20px;
}

li {
  padding: 0px;
  list-style: none;
}

dt {
  color: white;
  padding-left: 40px;
}

dl {
  float: left;
  width: 25%;
}

a {
  display: inline-block;
  color: white;
  height: 30px;
  width: 200px;
}
</style>
