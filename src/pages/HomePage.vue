<template>
  <div>
    <CatComponent :categories="categories"/>
    <FeaturedCat />
  </div>
  
</template>

<script>
import CatComponent from '../components/HomePageComponents/CatComponent.vue';
import FeaturedCat from '../components/HomePageComponents/FeaturedCat.vue';

export default {
  name: "HomePage",
  components: {
    CatComponent,
    FeaturedCat
  },
  data: function () {
    return {
      searchValue: "",
      slide: 0,
      sliding: null,
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
  methods: {
    onSlideStart(slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);
      this.sliding = false;
    },
    onSearch() {
      console.log("onSearch called");
    },
  },
};
</script>

<style scoped>
</style>