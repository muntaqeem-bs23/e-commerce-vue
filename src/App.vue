<template>
  <div id="app">
    <HeaderComponent />
    <HomePage :categories="categories" />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HomePage from "./pages/HomePage.vue";

import "@/assets/css/all.css";
import "@/assets/css/bootstrap.css";
import "@/assets/css/cart.css";
import "@/assets/css/home.css";
import "@/assets/css/product.css";
import "@/assets/css/shop.css";
import "@/assets/css/style.css";
import "@/assets/css/wishlist.css";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HomePage,
  },
  data: function () {
    return {
      categories: [
        {
          name: "Men",
          children: []
        },
        {
          name: "Women",
          children: []
        },
        {
          name: "Electronics",
          children: [
            "Accessories",
            "Computer"
          ]
        }
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
