<template>
  <v-carousel
    cycle
    interval="3000"
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
            src: 'https://picsum.photos/1920/1080?random=1',
          },
          {
            src: 'https://picsum.photos/1920/1080?random=2',
          },
          {
            src: 'https://picsum.photos/1920/1080?random=3',
          },
          {
            src: 'https://picsum.photos/1920/1080?random=4',
          },
          {
            src: 'https://picsum.photos/1920/1080?random=5',
          },
        ],
      }
    },
  }
</script>
