<template>
  <div class="d-flex flex-column">
    <div>
      <span class="subtitle-1 font-weight-medium" v-text="text" />
    </div>
    <div class="mt-1">
      <v-progress-linear
        :value="value"
        :color="color"
        :height="height"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
    props: ['value', 'color', 'height', 'text']
};
</script>

<style></style>
