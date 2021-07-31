<template>
  <div>
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
                  <a href="" :class="{'cat-has-children' : item.children.length > 0}">{{ item.name }}</a>
                  <ul>
                    <li v-for="(entry, ind) in item.children" :key="ind"><a href="">{{entry}}</a></li>
                  </ul>
                </li>
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
                        >{{ item.name }}</b-dropdown-item
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
    <section class="feature">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="far fa-thumbs-up"></i>
              </div>
              <div class="feature-box-content">
                <h5>100% Money Back</h5>
                <p>Within 30 Days Guaranted</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="fas fa-headphones-alt"></i>
              </div>
              <div class="feature-box-content">
                <h5>24/7 SUPPORT</h5>
                <p>Get Help When You Need</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="far fa-credit-card"></i>
              </div>
              <div class="feature-box-content">
                <h5>Secure Payment</h5>
                <p>100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CatComponent",
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