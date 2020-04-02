<template>
  <div>
    <apexchart
      height="350"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
    props: ['options', 'series'],
};
</script>

<style></style>
