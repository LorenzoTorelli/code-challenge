<template>
    <div class="background_blur">
        <div class="article">
            <div class="top-bar">
                <button class="button" @click="close()">Close</button>
            </div>
            <div class="main-container">
                <div class="image">
                    <img :src="dataArticle.urlToImage" :alt="dataArticle.title">
                </div>
                <div class="text-container">
                    <h2>{{dataArticle.title}}</h2>
                    <h5>{{dataArticle.description}}</h5>
                    <p>{{dataArticle.content}}</p>
                </div>

                <div class="info">
                    <h4 class="info-text">{{dataArticle.author}}</h4>
                    <span class="info-text"> - </span>
                    <h4 class="info-text">{{dataArticle.source.name}}</h4>
                    <span class="info-text"> - </span>
                    <h5 class="info-text">{{formatData(dataArticle.publishedAt)}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../share/data.js'

export default {
    name:"SingleArticle",
    props: {
        dataArticle:Object
    },
    data() {
        return {
            data
        }
    },
    methods: {
        formatData(date) {
            return date.split('T')[0]
        },
        close() {
            this.data.showArticle = false
        }

    }
}
</script>

<style lang="scss" scoped>
    .background_blur {
        position: fixed;
        background: rgba(19, 20, 23, 0.5);
        height: 100vh;
        width: 100%;
        top: 0;
        .article {
            width: 100%;
            height: 100%;
            background-color: white;
            position: fixed;
            top: 50%;
            left: 50%;
            z-index: 2;
            transform: translate(-50%, -50%);
            padding: 100px 30px;

            @media screen and (min-width: 720px) {
                padding: 30px;
                margin-top: 20px;
                height: 90%;
                width: 80%;
                border-radius: 20px;
                border: 1px solid black ;
            }
            .top-bar {
                display: flex;
                .button {
                    color: grey;
                    font-style: italic;
                    text-decoration: underline;
                    margin: 10px 10px;
                    cursor: pointer;                
                    border: none;  
                    font-size: 1rem;
                }

            }
            .main-container {
                height: 100%;
                overflow-y: auto;

                .image {
                    width: 100%;
                    height: 50%;
                    img{ 
                        border-radius: 20px;
                        object-fit: cover;
                        width: 100%;
                        height:100%
                    }
                }
                .text-container {
                    margin-top: 20px;
                    h2 {
                        font-size: 1.8rem;
                        @media screen and (min-width: 720px) {
                            font-size: 3rem;
                        }
                    }
                    h5,p {
                        margin-top: 1rem;
                        font-size: 1rem;
                        @media screen and (min-width: 720px) {
                            margin-top: 2%;
                            font-size: 1rem;
                        }
                    }
                 
                }
                .info {
                display: flex;
                align-content: end;
                margin-top:2rem;
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