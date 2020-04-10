<template>
  <div>
    <v-alert
      v-model="alertaShow"
      :dismissible="dismissible"
      :color="color"
      :border="border"
      :elevation="elevation"
      :colored-border="coloredBorder"
      :icon="icon"
    >
      <span v-html="alertText" />
    </v-alert>
  </div>
</template>

<script>
export default {
  props: [
    "alertShow",
    "dismissible",
    "color",
    "border",
    "elevation",
    "coloredBorder",
    "icon",
    "alertje",
    "alertText"
  ],
  computed: {
    alertaShow: {
      get() {
        return this.$attrs.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style></style>
