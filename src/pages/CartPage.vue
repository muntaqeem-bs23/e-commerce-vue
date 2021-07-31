<template>
  <div>
    <div>This is the cart page {{id}}</div>
    <input v-model="name" type='text'/>
  </div>
  
  
</template>

<script>
export default {
  name: 'CartPage',

  created: function() {
    this.id = this.$route.params.id;
  },
  data: function() {
    return {
      id: '',
      name: ''
    }
  },
  watch: {
    name: function(newVal, old) {
      console.log('asdfads', newVal, old);
    }
  }
}
</script>

<style>

</style>