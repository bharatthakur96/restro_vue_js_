<template>
  <header-page />
  <h1>welcome to the Add Restro page</h1>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
export default {
  components: {
    HeaderPage,
  },
  name: "AddRestro",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style>
</style>