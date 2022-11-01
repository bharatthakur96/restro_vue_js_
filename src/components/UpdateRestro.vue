<template>
  <header-page />
  <h1>welcome to the Update rRestro page</h1>
</template>
  
  <script>
import HeaderPage from "./HeaderPage.vue";
export default {
  components: {
    HeaderPage,
  },
  name: "UpdateRestro",
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