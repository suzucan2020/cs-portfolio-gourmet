<template>

  <v-container>

    <v-row>
      <v-carousel
        cycle
        interval="5000"
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
    </v-row>

    <v-row>
      <OurTeam />
    </v-row>

    <v-row justify="center">
      <v-subheader>Demonstration !</v-subheader>
    </v-row>

    <v-row>
      <v-col>
        <SampleSiteList />
      </v-col>
      <v-col>
        <VuetifyUIComponentList />
      </v-col>
      <v-col>
        <NuxtPracticeList />
      </v-col>
    </v-row>

    <v-row>
      <Roller text="This is ..." :charList="['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']" transition="2" />
    </v-row>

  </v-container>

</template>

<script>
  import OurTeam from "@/components/OurTeam.vue";
  import SampleSiteList from "@/components/SampleSiteList.vue";
  import VuetifyUIComponentList from "@/components/VuetifyUIComponentList.vue";
  import NuxtPracticeList from "@/components/NuxtPracticeList.vue";
  export default {
    components: {
      OurTeam,
      SampleSiteList,
      VuetifyUIComponentList,
      NuxtPracticeList
    },
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
