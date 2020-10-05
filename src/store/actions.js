import shop from "@/api/shop";

export default {
    fetchProducts(context){
      return new Promise((resolve)=>{
        shop.getProducts(products =>{
          context.commit("setProducts", products);
        });
        resolve();
      });
      
    },
    addProductToCart({state, getters, commit}, product){
      if(getters.productInStock(product)){
        const cartItem = state.cart.find(item => item.id === product.id );
        if(!cartItem){
          commit("pushProductToCart",product.id);
        }else{
          commit("increamentItemQuantity",cartItem);
        }
          commit("decrementProductInventory",product);
      }else{
        // show out of stock message
      }
    },
    checkout({state, commit}){
      shop.buyProducts(state.cart.cartItem, () =>{
        commit("emptyCart");
        commit("setCheckoutStatus",'success');
      }, () =>{
        commit("setCheckoutStatus",'failed');
      });
    }
  }