export default {
    availableProducts(state){
      return state.products.filter(product => product.inventory > 0);
    },
    productsCount(){

    },
    cartProducts(state){
      return state.cart.map(cartItem =>{
        const product = state.products.find(product => product.id === cartItem.id);
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      });
    },
    cartTotal(state, getters){
      // let total = 0
      // getters.cartProducts.array.forEach(product => {
      //     total += product.price * product.quantity;
      // });
      // return total;
      return getters.cartProducts.reduce((total, product)=> total + product.price * product.quantity,0);
    },
    productInStock(){
      return (product)=>{
        return product.inventory > 0;
      }
    }
  }