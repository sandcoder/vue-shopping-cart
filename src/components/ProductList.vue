<template>
  <div class="project-list">
    <h2>Product list</h2>
    <img v-if="loading" :src="require('@/assets/loader.gif')" >
    <ul>
      <li v-for="product in allProducts" :key="product.id">
        {{ product.title}} - {{ product.price | currency }} - {{ product.inventory }}
        <button @click="addProductToCart(product)" :disabled="!productInStock(product)">Add</button>
      </li>
      
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'ProductList',
  data(){
    return {
      loading: false
    }
  },
  // computed: mapState({
  //   allProducts: state => state.products,
  //   productInStock: 
  // }),
  computed:{
    ...mapState({
      allProducts: state => state.products
    }),
    ...mapGetters({
      productInStock: 'productInStock'
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart'
    })
  },
  created(){
    this.loading = true;
    this.fetchProducts().then(() => this.loading = false);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
