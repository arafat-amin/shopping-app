<script setup lang="ts">
import { products, Product } from '@/services/products'

const addToCart = (product: Product) => {
  alert(`Added ${product.name} to cart!`)
}
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold text-center mb-6">Product Listing</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded-lg p-4 shadow hover:shadow-lg transition"
      >
        <img :src="product.image" alt="Product Image" class="w-full h-40 object-cover" />
        <h2 class="text-xl font-semibold mt-2">{{ product.name }}</h2>
        <p class="text-lg font-bold mt-1 text-gray-800">${{ product.price }}</p>
        <button
          class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          @click="addToCart(product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>


