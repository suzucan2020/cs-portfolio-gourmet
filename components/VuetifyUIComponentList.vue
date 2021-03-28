<template>
  <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list dense>
      <v-subheader>Vuetify UI Component</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          nuxt
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Carousels Page 000', icon: 'mdi-cursor-default-click-outline', link: '/carousels000' },
        { text: 'Carousels Page 001', icon: 'mdi-cursor-default-click-outline', link: '/carousels001' },
        { text: 'Card Page', icon: 'mdi-cursor-default-click-outline', link: '/card' },
      ],
    }),
  }
</script>
