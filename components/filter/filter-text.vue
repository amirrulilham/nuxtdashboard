<template>
  <div>
    <span class="body-2 white--text font-weight-bold">{{ title }}</span>
    <v-menu top offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" text dark>
          {{ value }}
          <v-icon right>{{ icon }}</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in filter"
          :key="index"
          @click.stop=""
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ["title", "icon", "value", "items", "filter"],
};
</script>

<style></style>
