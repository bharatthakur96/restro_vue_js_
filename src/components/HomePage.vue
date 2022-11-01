<template>
  <header-page />
  <h1>Hello, {{ name }}</h1>
  <div class="restro">
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
export default {
  components: {
    HeaderPage,
  },
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  name: "HomePage",
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurants = result.data;
  },
};
</script>

<style>
.restro {
  justify-content: center;
  display: flex;
}

table {
  width: 75%;
  padding: 10px;
  border-spacing: 5px;
}

td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #04aa6d;
  color: white;
}
</style>