
<script>
export default {
  // You can add component-specific logic here if needed
}
</script>

<style scoped>
/* You can add component-specific styles here if needed */
</style>

<template>
  <header class="bg-slate-50 p-4 text-zinc-600">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold">Nusa Penida Day Tour from Bali</div>

        <!-- Navigation Links -->
        <nav class="space-x-4">
          <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
          <NuxtLink to="/contact" class="hover:underline">AboutUs</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
