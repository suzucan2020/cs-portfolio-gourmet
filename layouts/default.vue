<template>
  <v-app light>
    <Header />
      <!-- <v-main> -->
      <!--   <v-container> -->
      <!--     <nuxt /> -->
      <!--   </v-container> -->
      <!-- </v-main> -->
    <Footer />
  </v-app>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import Header from "@/components/Header.vue";
  export default {
    components: {
      Header,
      Footer
      }
  };
</script>
