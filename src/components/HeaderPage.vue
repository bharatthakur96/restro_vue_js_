<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add-restro">Add Restro</router-link>
    <router-link to="/update-restro">Update Restro</router-link>
    <a style="float: right" v-on:click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style>
.nav {
  background-color: #04aa6d;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 5px;
}
.nav a:hover {
  background-color: rgb(25, 23, 23);
  color: rgb(86, 191, 51);
}
</style>