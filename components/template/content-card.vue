<template>
  <v-card class="card-border fill-height">
    <v-card-title>
      <span v-text="title" />
      <v-spacer></v-spacer>
      <slot name="slot-filter"></slot>
    </v-card-title>
    <v-card-text class="px-1 pt-1">
      <slot name="slot-content"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: ['title']
};
</script>

<style scoped>
.card-border {
  border-radius: 15px !important;
}
</style>
