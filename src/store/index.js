import { createStore } from 'vuex'
// Allows user state to b e saved to local storage
import createPersistedState from "vuex-persistedstate";
import router from "@/router";


export default createStore({
  state: { 
    product: null,
    products: null,
    user: null,
    token: null,
    cart: [],
  },
  getters: {},
  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    Logout(state){ 
     (state.user = ""), (state.token = "")
    },

  },
  actions: {
    // cart
    getCart: async (context) => {
      fetch(`https://fullstack-3wp.herokuapp.com/products`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    addToCart: async (context, id) => {
      console.log(id);
      // this.state.cart.product.push(id);
      // context.dispatch("updateCart", this.state.cart);
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter(
        (product) => product.product_id != id
      );
      context.commit("removeFromCart", newCart);
    },
     // get get all products
     getProducts: async (context , id ) => {
      fetch(`https://fullstack-3wp.herokuapp.com/products`)
        .then((res) => res.json())
        .then((data) => context.commit("setProducts", data));
    },
    // get singleproduct
    getProduct: async (context , id ) => {
      fetch(`https://fullstack-3wp.herokuapp.com/products/` + id)
        .then((res) => res.json())
        .then((data) => context.commit("setProduct", data));
    },
    // get necklaces
    getNecklaces: async (context) => {
      fetch(`https://fullstack-3wp.herokuapp.com/products/products/necklace`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    //  only bracelets
    getBracelets: async (context) => {
      fetch(`https://fullstack-3wp.herokuapp.com/products/products/bracelet`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    // only earrings
    getEarrings: async (context) => {
      fetch(`https://fullstack-3wp.herokuapp.com/products/products/earrings`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    // only rings
    getRings: async (context) => {
      fetch(`https://fullstack-3wp.herokuapp.com/products/products/rings`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    // only set
    getSet: async (context) => {
      fetch(`https://fullstack-3wp.herokuapp.com/products/products/2pc`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
     // LOGIN USER
     Login: async (context, payload) => {
      fetch(`https://fullstack-3wp.herokuapp.com/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            // Saveing token to the store
            context.commit("setToken", data.token);

            // Once token
            // Verify Route
            fetch(`https://fullstack-3wp.herokuapp.com/users/users/verify`, {
              headers: {
                "Conten-Type": "application/json",
                "x-auth-token": data.token,
              },
            })
            .then((res) => res.json())
            .then((data) => {
              context.commit("setUser", data.user);
              console.log(data.user)
              alert(data.user.email);
              router.push("/home");
                // router.push({
                //   name: "users",
                // });
              });
          }
         
        });
    },
    Register: async (context, payload) => {
      fetch(`https://fullstack-3wp.herokuapp.com/users/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         fullname:payload.fullname,
         dob:payload.dob,
         age:payload.age,
         gender: payload.gender,
         image:payload.image,
         email: payload.email,
         password: payload.password
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    },
  },
  modules: {
    // Allows user state to b e saved to local storage
  },  plugins: [createPersistedState()],
})
