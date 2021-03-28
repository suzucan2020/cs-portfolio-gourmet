<template>
  <v-container>

    <v-layout row wrap>
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
    </v-layout>

    <v-layout row wrap>

  <v-container fluid>
    <v-row justify="center">
      <v-subheader>Our Team</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="https://picsum.photos/1920/1080?random=6"
                  >
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="message.name"></strong>
                <span
                  v-if="message.total"
                  class="grey--text"
                >
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
 
    </v-layout>

    <v-row justify="center">
      <v-subheader>Demonstration !</v-subheader>
    </v-row>

    <v-layout row wrap>
      <v-flex>
        <SampleSiteList />
      </v-flex>
      <v-flex>
        <VuetifyUIComponentList />
      </v-flex>
      <v-flex>
        <NuxtPracticeList />
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
  import SampleSiteList from "@/components/SampleSiteList.vue";
  import VuetifyUIComponentList from "@/components/VuetifyUIComponentList.vue";
  import NuxtPracticeList from "@/components/NuxtPracticeList.vue";
  export default {
    components: {
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
      messages: [
        {
          avatar: 'https://picsum.photos/1920/1080?random=6',
          name: 'suzucan2020',
          title: 'Our Skill',
          excerpt: 'Thank you for joining our community...',
        },
        {
          color: 'red',
          icon: 'mdi-account-multiple',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter',
        },
        {
          color: 'teal',
          icon: 'mdi-tag',
          name: 'Promos',
          new: 2,
          total: 4,
          title: 'Shop your way',
          exceprt: 'New deals available, Join Today',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
      }
    },
  }
</script>
