<template>
  <section class="container">
    <h1>Print All</h1>
    <div>
      {{ users }}
    </div>
    <h1>Print id 1</h1>
    <dir>
      {{ users[0].id }}, {{ users[0].name }}
    </dir>
    <h1>Print v-for</h1>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.id }} , {{ user.name }}
        </li>
      </ul>
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
