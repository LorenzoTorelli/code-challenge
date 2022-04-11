<template>
  <div id="main"  >
    <div class="main-container">
      <div class="top-main">
        <select id="filtering" v-model="filtro" >
          <option value="" selected>All</option>
          <option v-for="(journal,index) in news" :key="index" :value="journal.source.name" >{{journal.source.name}}</option>
        </select>
        <select id="sorting" v-model="sortType">
          <option value="" selected>Date</option>
          <option value="title">Title</option>
        </select>
      </div>
      <ul>
        <li v-for="(notizia,index) in filterArticles" :key="index">
          <NewsCard @click.native="showArticle(index)" :data="notizia" :indice="index"/>
        </li>
      </ul>
    </div>
    <SingleArticle v-if="this.data.showArticle == true" :dataArticle="news[this.idArticle]" />
   
  </div>
</template>

<script>
import data from '../../share/data.js'
import axios from 'axios'
import NewsCard from '../sections/NewsCard.vue'
import SingleArticle from '../sections/SingleArticle.vue'
export default {

  name:'MainComp',
  components: {
    NewsCard,
    SingleArticle
  },

  data()  {
    return {
      news:[],
      idArticle: '',
      data,
      filtro:"",
      sortType:""
    }
  },

  created() {
    this.getNewsData()
  },

  methods: {
    async getNewsData() {
      const { data } = await axios.get("http://localhost:3000/api/getAllNews");
      this.news = data;
    },
    showArticle(index) {
      this.data.showArticle = true
      this.idArticle = parseInt(index)
    },
    closeArticle() {
      this.showArticleBoolean = false
    },

  },
  computed: {
    filterArticles() {
      return this.news
      .filter( (e) => {
        if (e.source.name.toLowerCase().includes(this.filtro.toLowerCase())) { return e;}})
      .sort((e,f) => {
        if(this.sortType == 'title') {
          return e.title.localeCompare(f.title)
        }
  
      })
    }
  }

  
}
</script>

<style lang="scss" scoped>
  #main {
    padding-top: 4rem;

    .main-container {
      width: 100%;
      position: relative;
      
      @media screen and (min-width: 720px) {
        width: 70%;
        margin: auto;
      }
      
      .top-main {
        display: flex;
        justify-content: center;
        margin: 2em ;
        position: relative;
        #filtering, #sorting {
          margin: 10px;
          border:1px solid rgb(19, 20, 23);
          padding: 0.5em 1em;
          // color: white;
          border-radius: 20px;
          // width: 100%;
          height: 100%;
          // appearance: none;
          outline: 0;
        }


      
      }
        li {
          list-style: none;
          border-bottom: 1px solid rgba(19, 20, 23, 0.2);
        }
    }
  }
</style>