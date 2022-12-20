import { createStore } from "vuex";
import productsModules from './modules/product'

const store = createStore({
    modules:{ 
        prods: productsModules
    }
})


export default store ;