<template>
  <div>
    <h1>Shopping cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency  }} - {{ product.quantity }}
      </li>
    </ul>
    total - {{ total | currency  }}
    <button @click="checkout">Checkout</button>

    {{ checkoutStatus }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      total: 'cartTotal'
    }),
    ...mapState({
      checkoutStatus: 'checkoutStatus'
    })
  },
  methods: {
    ...mapActions({
      checkout: 'checkout'
    })
  }
  
}
</script>