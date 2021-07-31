<template>
  <section class="cat">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="category-list">
            <h3>
              <i class="fas fa-align-left"></i>
              CATEGORIES
            </h3>
            <ul>
              <li v-for="(item, index) in categories" :key="index">
                <a href="">{{ item }}</a>
              </li>
              <!-- <li>
                                <a href="">Women</a>
                            </li>
                            <li>
                                <a href="" class="cat-has-children">Electronics</a>
                                <ul>
                                    <li><a href="">Accessories</a></li>
                                    <li><a href="">Computer</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="">Jewellry</a>
                            </li>
                            <li>
                                <a href="">Kid's Wear</a>
                            </li>
                            <li>
                                <a href="">Sports</a>
                            </li>
                            <li>
                                <a href="">Toys</a>
                            </li> -->
            </ul>
          </div>
        </div>
        <div class="col-md-8">
          <div class="product-search">
            <div class="input-group">
              <input
                v-model="searchValue"
                type="text"
                class="product-search-input form-control"
                placeholder="Search Product"
              />
              <p>{{ searchValue }}</p>
              <div class="btn-group">
                <div>
                  <b-dropdown id="dropdown-1" text="Categories">
                    <b-dropdown-item
                      v-for="(item, index) in categories"
                      :key="index"
                      >{{ item }}</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
                <button class="btn search-button" @click="onSearch()">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="sale-carousel">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=54"
              >
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=58"
              ></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    categories: Array,
  },
  data: function () {
    return {
      searchValue: "",
      slide: 0,
      sliding: null,
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