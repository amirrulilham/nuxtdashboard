<template>
  <v-card :color="color" :elevation="elevation" dark>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          class="headline black--text font-weight-bold"
          v-text="title"
        />

        <v-card-subtitle
          class="grey--text text--darken-1 py-0"
          v-text="subtitle"
        />
        <v-card-actions class="d-flex justify-center">
          <v-chip v-if="stat == 'increase'" color="success" small>
            (30 days)
            <v-icon small right>mdi-trending-up</v-icon>
          </v-chip>
          <v-chip v-if="stat == 'decrease'" color="warning" small>
            (30 days)
            <v-icon small right>mdi-trending-down</v-icon>
          </v-chip>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="src"></v-img>
      </v-avatar>
    </div>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  props: ["color", "elevation", "dark", "title", "subtitle", "src", "stat"]
};
</script>

<style></style>
