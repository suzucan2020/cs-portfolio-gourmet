<template>
  <v-carousel
    cycle
    interval="3000"
    hide-delimiter
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://picsum.photos/1920/1080?random',
          },
          {
            src: 'https://picsum.photos/1920/1080?random',
          },
          {
            src: 'https://picsum.photos/1920/1080?random',
          },
          {
            src: 'https://picsum.photos/1920/1080?random',
          },
        ],
      }
    },
  }
</script>
