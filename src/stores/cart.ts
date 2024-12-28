import { defineStore } from 'pinia'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

// Key for localstorage
const CART_STORAGE_KEY = 'shopping_cart'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },

  actions: {
    addItem(product: CartItem) {
      const existingItem = this.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }

      this.saveCartToLocalStorage()
    },
    removeItem(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId)
      this.saveCartToLocalStorage()
    },
    clearCart() {
      this.items = []
      this.saveCartToLocalStorage()
    },
    saveCartToLocalStorage() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items))
    },
    loadCartFromLocalStorage() {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        this.items = JSON.parse(savedCart)
      }
    },
  },
})
