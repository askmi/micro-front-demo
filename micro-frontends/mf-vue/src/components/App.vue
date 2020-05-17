<template>
  <div class='container'>
    <img src='/assets/svg/vue.svg' alt='icon'/>
    <h1>{{message}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      message: "Micro-frontend Vue"
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>