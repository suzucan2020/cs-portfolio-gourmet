<template>
  <div>
    <v-app-bar
      color="green lighten-4"
      dense
      dark
    >
      <v-app-bar-nav-icon class="black--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="black--text">Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="black">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon color="black">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
        class="black--text"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
