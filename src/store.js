import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    store: 
    [
      {
        id: 1,
        name: 'T-shirt',
        inStock: 18,
        details: ['Made in USA', 'Crafted with care', "Knit by grandma's"],
        variants: 
        [
          {
            variantId: 1,
            variantColor: 'red',
            variantBackgroundColor: 'red',
            default: true
          }, {
            variantId: 2,
            variantColor: 'blue',
            variantBackgroundColor: 'blue',
            default: false
          }, {
            variantId: 3,
            variantColor: 'green',
            variantBackgroundColor: 'green',
            default: false
          }, {
            variantId: 4,
            variantColor: 'yellow',
            variantBackgroundColor: 'yellow',
            default: false
          },
        ]
      }, {
        id: 2, 
        name: 'Kewl Hat',
        inStock: 6,
        details: ['Made in USA', 'Crafted with care', "Knit by grandma's"],
        variants: 
        [
          {
            variantId: 1,
            variantColor: 'red',
            variantBackgroundColor: 'red',
            default: true
          }, {
            variantId: 2,
            variantColor: 'blue',
            variantBackgroundColor: 'blue',
            default: false
          }, {
            variantId: 3,
            variantColor: 'green',
            variantBackgroundColor: 'green',
            default: false
          }, {
            variantId: 4,
            variantColor: 'yellow',
            variantBackgroundColor: 'yellow',
            default: false
          },
        ]
      }, {
        id: 3,
        name: 'Wata Bottah',
        inStock: 1,
        details: ['Made in USA', 'Crafted with care', "Knit by grandma's"],
        variants: 
        [
          {
            variantId: 1,
            variantColor: 'red',
            variantBackgroundColor: 'red',
            default: true
          }, {
            variantId: 2,
            variantColor: 'blue',
            variantBackgroundColor: 'blue',
            default: false
          }, {
            variantId: 3,
            variantColor: 'green',
            variantBackgroundColor: 'green',
            default: false
          }, {
            variantId: 4,
            variantColor: 'yellow',
            variantBackgroundColor: 'yellow',
            default: false
          },
        ]
      }, {
        id: 4,
        name: 'Thingy majiger',
        inStock: 3,
        details: ['Made in USA', 'Crafted with care', "Knit by grandma's"],
        variants: 
        [
          {
            variantId: 1,
            variantColor: 'red',
            variantBackgroundColor: 'red',
            default: true
          }, {
            variantId: 2,
            variantColor: 'blue',
            variantBackgroundColor: 'blue',
            default: false
          }, {
            variantId: 3,
            variantColor: 'green',
            variantBackgroundColor: 'green',
            default: false
          }, {
            variantId: 4,
            variantColor: 'yellow',
            variantBackgroundColor: 'yellow',
            default: false
          },
        ]
      }, {
        id: 5,
        name: 'Doodad',
        inStock: 4,
        details: ['Made in USA', 'Crafted with care', "Knit by grandma's"],
        variants: 
        [
          {
            variantId: 1,
            variantColor: 'red',
            variantBackgroundColor: 'red',
            default: true
          }, {
            variantId: 2,
            variantColor: 'blue',
            variantBackgroundColor: 'blue',
            default: false
          }, {
            variantId: 3,
            variantColor: 'green',
            variantBackgroundColor: 'green',
            default: false
          }, {
            variantId: 4,
            variantColor: 'yellow',
            variantBackgroundColor: 'yellow',
            default: false
          },
        ]
      }, {
        id: 6,
        name: 'Widget',
        inStock: 1,
        details: ['Made in USA', 'Crafted with care', "Knit by grandma's"],
        variants: 
        [
          {
            variantId: 1,
            variantColor: 'red',
            variantBackgroundColor: 'red',
            default: true
          }, {
            variantId: 2,
            variantColor: 'blue',
            variantBackgroundColor: 'blue',
            default: false
          }, {
            variantId: 3,
            variantColor: 'green',
            variantBackgroundColor: 'green',
            default: false
          }, {
            variantId: 4,
            variantColor: 'yellow',
            variantBackgroundColor: 'yellow',
            default: false
          },
        ]
      }, {
        id: 7,
        name: 'Wadget',
        inStock: 2,
        details: ['Made in USA', 'Crafted with care', "Knit by grandma's"],
        variants: 
        [
          {
            variantId: 1,
            variantColor: 'red',
            variantBackgroundColor: 'red',
            default: false
          }, {
            variantId: 2,
            variantColor: 'blue',
            variantBackgroundColor: 'blue',
            default: false
          }, {
            variantId: 3,
            variantColor: 'green',
            variantBackgroundColor: 'green',
            default: false
          }, {
            variantId: 4,
            variantColor: 'yellow',
            variantBackgroundColor: 'yellow',
            default: true
          },
        ]
      }
    ] 
  },
  mutations: {

  },
  actions: {

  }
})
