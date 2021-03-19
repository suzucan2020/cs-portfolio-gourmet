<template>
  <section class="container">
    <div>
      {{ users }}
    </div>
  </section>
</template>

<script>
const axios = require('axios')
let url = 'https://jsonplaceholder.typicode.com/users'

export default {
  asyncData({ params }){
    return axios.get(url)
      .then((res) => {
        return { users: res.data }
    })
  }
}
</script>
