<template>
  <header-page />
  <h1>welcome to the Update Restro page</h1>
  <div class="restro">
    <form>
      <input
        type="text"
        placeholder="Enter Restro Name"
        v-model="restaurants.name"
        name="name"
      />
      <input
        type="text"
        placeholder="Enter Address"
        v-model="restaurants.address"
        name="Address"
      />
      <input
        type="text"
        placeholder="Enter Contact Number"
        v-model="restaurants.contact"
        name="contact"
      />
      <button type="button" v-on:click="updateRestro">Update Restro</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
export default {
  name: "UpdateRestro",
  components: {
    HeaderPage,
  },
  data() {
    return {
      restaurants: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestro() {
      let result = await axios.put(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {
          name: this.restaurants.name,
          address: this.restaurants.address,
          contact: this.restaurants.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );
    this.restaurants = result.data;
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