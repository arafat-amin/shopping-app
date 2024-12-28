<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const removeItem = (id: number) => {
  cartStore.removeItem(id)
}
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold text-center mb-6">Your Cart</h1>
    <div v-if="cartStore.items.length" class="space-y-4">
      <div v-for="item in cartStore.items" :key="item.id" class="border p-4 rounded shadow">
        <h2 class="text-xl font-bold">{{ item.name }}</h2>
        <p>Price: ${{ item.price }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Total: ${{ item.price * item.quantity }}</p>
        <button
          class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          @click="removeItem(item.id)"
        >
          Remove
        </button>
      </div>
    </div>
    <div v-else>
      <p class="text-center text-gray-600">Your cart is empty!</p>
    </div>
    <div class="text-right mt-4">
      <p class="text-xl font-bold">Total: ${{ cartStore.totalPrice }}</p>
    </div>
  </div>
</template>
