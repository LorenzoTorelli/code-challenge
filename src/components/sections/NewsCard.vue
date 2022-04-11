<template>
  <div class = " box" >
      <div class="image">
          <img :src="data.urlToImage" :alt="data.title">
      </div>
      <div class="text">
          <h3 class="title">{{data.title}}</h3>
          <div class="text-section">
            <p class="description">{{data.description}}</p>
            <div class="info">
              <h4 class="info-text">{{data.author}}</h4>
              <span class="info-text"> - </span>
              <h4 class="info-text">{{data.source.name}}</h4>
              <span class="info-text"> - </span>
              <h5 class="info-text">{{formatData(data.publishedAt)}}</h5>
            </div>
          </div>
      </div>
  </div>
  
</template>

<script>
export default {
    name:'NewsCard',
    props: {
        data: Object,
    },
    methods: {
      formatData(date) {
        return date.split('T')[0]
      },
 
    },
}
</script>

<style lang="scss" scoped>

.box {
  min-height: 500px;
  margin: 20px;
  border: 1px solid black ;
  padding: 25px;
  border-radius: 20px;

  @media screen and (min-width: 720px) {
    display: flex;
    height: 300px;
    min-height: 0;
    border: none;
    position: relative;
  }
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}


  .image{
    height: 250px;

    @media screen and (min-width: 720px) {
      height: 100%;
      width: 30%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px 20px 0px 0px;
      margin-bottom: 15px;

      @media screen and (min-width: 720px) {
        border-radius: 0;

      }
    }
  }
  .text {
      height: 100%;
      margin-top: 20px;
      @media screen and (min-width: 720px) {
        width: 70%;
        margin-left: 20px;
        margin-top: 0;

      }
      .title {
        margin-top: 20px;

        @media screen and (min-width: 720px) {
          position: absolute;
          padding: 10px;
          background-color: white;
          top: 20%;
          left: 20%;
        }
      }
      .text-section {
        margin-top: 20px;

        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        .info {
            display: flex;
            margin-top: 20px;

            .info-text {
              text-transform: uppercase;
              font-size: 10px;
              font-style: italic;
              margin-right: 5px;
              @media screen and (min-width: 720px) {
                margin: 20px 5px;
                font-size: 13px;
              }
            }

      }

    }
  }

}

</style>