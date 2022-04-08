import axios from 'axios'

export default {
    async getNews() {
      let res = await axios.get("http://localhost:3000/api/getAllNews");
      return res.data;
    }
}