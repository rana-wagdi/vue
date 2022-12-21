import { createStore } from "vuex";
import productsModules from './modules/product';
import cartModules from './modules/cart'

const store = createStore({
    modules:{ 
        prods: productsModules,
        cart: cartModules
    }
})


export default store ;