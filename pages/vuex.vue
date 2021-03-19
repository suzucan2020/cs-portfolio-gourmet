<template>
  <section class="container">
    <div>

      <!-- <p>{{ $store.state.message }}</p> -->
      <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
      <!-- <button v-on:click="$store.commit('updateMessage', 'Commit with payload')">Update</button> -->
      <!-- <button v-on:click="$store.dispatch('updateMessageAction')">Dispatch</button> -->

      <p>{{ $store.state.hello.message }}</p>
      <button v-on:click="$store.dispatch('hello/updateMessageAction', 'hello dispatch')">Dispatch</button> -->

    </div>
  </section>
</template>

<script>
export default {
}
</script>
