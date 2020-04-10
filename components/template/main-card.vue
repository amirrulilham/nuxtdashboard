<template>
  <v-card flat>
    <v-container>
      <v-sheet elevation="5">
        <v-tabs background-color="cyan" dark>
          <v-tabs-slider color="yellow accent-3"></v-tabs-slider>
          <v-tab class="ml-2" v-text="tabtext" />
        </v-tabs>
      </v-sheet>
      <slot></slot>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["tabtext"]
};
</script>

<style></style>
