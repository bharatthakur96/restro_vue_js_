<template>
  <header-page />
  <h1>Add New Restaurant</h1>
  <div class="restro">
    <form>
      <input
        type="text"
        placeholder="Enter Restro Name"
        v-model="name"
        name="name"
      />
      <input
        type="text"
        placeholder="Enter Address"
        v-model="address"
        name="Address"
      />
      <input
        type="text"
        placeholder="Enter Contact Number"
        v-model="contact"
        name="contact"
      />
      <button type="button" v-on:click="addRestro">Add New Restro</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
export default {
  name: "AddRestro",
  components: {
    HeaderPage,
  },
  data() {
    return {
      name: "",
      address: "",
      contact: "",
    };
  },
  methods: {
    async addRestro() {
      let result = await axios.post("http://localhost:3000/restaurants", {
        name: this.name,
        address: this.address,
        contact: this.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style>
.restro input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.restro button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>