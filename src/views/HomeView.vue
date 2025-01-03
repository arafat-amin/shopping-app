<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { products, Product } from '@/services/products'

const isLoading = ref(false)
const cartStore = useCartStore()

const activePopup = ref(false) // Reactive variable for popup visibility
const popupProduct = ref<Product | null>(null) // To hold the product being added

const addToCart = async (product: Product) => {
  isLoading.value = true // Start loading
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate delay
  cartStore.addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
  })
  isLoading.value = false

  // Set the popup data
  popupProduct.value = product
  activePopup.value = true

  // Automatically close the popup after 2 seconds
  setTimeout(() => {
    activePopup.value = false
    popupProduct.value = null // Clear product data
  }, 2000)

  // alert(`${product.name} added to cart!`)
}

// const addToCart = (product: Product) => {
//   alert(`Added ${product.name} to cart!`)
// }
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl text-green-500 font-bold text-center mb-6">Product Listing</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded-lg p-4 shadow hover:shadow-lg transition bg-gray-100"
      >
        <router-link :to="`/product/${product.id}`" class="block">
          <img
            :src="product.image"
            alt="Product Image"
            class="w-full h-40 object-cover rounded-md"
          />
        </router-link>

        <h2 class="text-xl text-gray-800 font-semibold mt-2">{{ product.name }}</h2>
        <p class="text-sm text-gray-600">${{ product.description }}</p>
        <p class="text-lg font-bold mt-1 text-blue-600">${{ product.price }}</p>
        <button
          class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          @click="addToCart(product)"
        >
          <span v-if="isLoading" class="spinner-border animate-spin"></span>
          <span v-else>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Added item popup -->
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-if="activePopup"
  >
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <!-- <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div> -->

    <div class="fixed top-0 right-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <button
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                @click="activePopup = false"
              >
                x
              </button>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold text-gray-900" id="modal-title">
                  {{ popupProduct?.name }}
                  <span class="text-green-500 text-sm block">
                    was added successfully to the cart
                  </span>
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ popupProduct?.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
