<template>
  <section class="collection">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="collection-sample-box big-box">
            <a href="#" class="d-inline-block">
              <div class="collection-sample-box-photo">
                <img :src="getImageSrc(featuredCategories[0].imagePath)" alt="" />
              </div>
              <div class="collection-sample-box-content">
                <h4>{{featuredCategories[0].name}}</h4>
                <span>Collection 2020</span>
                <span class="collection-sample-box-content-line"> </span>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="collection-sample-box small-box">
            <a href="#" class="d-inline-block">
              <div class="collection-sample-box-photo">
                <img :src="getImageSrc(featuredCategories[1].imagePath)" alt="" />
              </div>
              <div class="collection-sample-box-content">
                <h4>{{featuredCategories[1].name}}</h4>
                <span>Collection 2020</span>
                <span class="collection-sample-box-content-line"> </span>
              </div>
            </a>
          </div>
          <div class="collection-sample-box small-box mt-3">
            <a href="#" class="d-inline-block">
              <div class="collection-sample-box-photo">
                <img :src="getImageSrc(featuredCategories[2].imagePath)" alt="" />
              </div>
              <div class="collection-sample-box-content">
                <h4>{{featuredCategories[2].name}}</h4>
                <span>Collection 2020</span>
                <span class="collection-sample-box-content-line"> </span>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="collection-sample-box big-box">
            <a href="#" class="d-inline-block">
              <div class="collection-sample-box-photo">
                <img :src="getImageSrc(featuredCategories[3].imagePath)" alt="" />
              </div>
              <div class="collection-sample-box-content">
                <h4>{{featuredCategories[3].name}}</h4>
                <span>Collection 2020</span>
                <span class="collection-sample-box-content-line"> </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedCat",
  data: function () {
    return {
      featuredCategories: [
        {
          name: 'Man\'s',
          imagePath: 'men-collection.png'
        },
        {
          name: 'Jewellery',
          imagePath: 'jwellery-collection.png'
        },
        {
          name: 'Electronics',
          imagePath: 'electronics-collection.png'
        },
        {
          name: 'Woman\'s',
          imagePath: 'womens-collection.png'
        }
      ]
    }
    
  },
  methods: {
    getImageSrc(path) {
      return require(`../../assets/images/${path}`);
    }
  }
}
</script>

<style>
</style>