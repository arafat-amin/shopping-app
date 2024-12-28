<script setup lang="ts">
import { useRoute } from 'vue-router';

import type { Product } from '@/services/products'
import { products } from '@/services/products';

const route = useRoute();
const productId = parseInt(route.params.id as string);

const product = products.find((p) => p.id === productId)

if (!product) {
  throw new Error('product not found!');
}
</script>

<template>
  <div class="container mx-auto py-8">
    <router-link :to="`/`" class="bg-white px-5 py-3 mb-5 inline-block">Back to Home</router-link>

    <h1 class="text-3xl text-white font-bold mb-6">{{ product.name }}</h1>
    <div class="flex flex-col md:flex-row gap-6">
      <img :src="product.image" alt="Product Image" class="w-full md:w-1/2 h-auto object-cover" />
      <div>
        <p class="text-lg mb-4">{{ product.description || 'No description available.' }}</p>
        <p class="text-2xl font-bold text-gray-500 mb-4">${{ product.price }}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
