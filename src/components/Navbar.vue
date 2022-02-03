<template lang="">
  <div>
    <div class="min-h-full">
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <h2 class="text-2xl text-blue-300">Vue-POSTS</h2>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <router-link
                    :to="{ name: 'Home'}"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                    >Home</router-link
                  >

                  <router-link
                    :to="{ name: 'Blog'}"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >Blog</router-link
                  >

                  <router-link
                    :to="{ name: 'About'}"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >About</router-link
                  >
                </div>
              </div>
            </div>

            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button
                type="button"
                class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                @click="navbarMobileClick"
              >
                <span class="sr-only">Open main menu</span>
                <!--
                        Heroicon name: outline/menu
          
                        Menu open: "hidden", Menu closed: "block"
                      -->
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <!--
                        Heroicon name: outline/x
          
                        Menu open: "block", Menu closed: "hidden"
                      -->
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu">
          <div
            class="px-2 pt-2 pb-3 space-y-1 sm:px-3"
            :class="navbarMobile ? 'block' : 'hidden'"
          >
            <div class="flex justify-center">
              <router-link
                to="/"
                class="text-gray-300 hover:bg-gray-700 w-full hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
                >Home</router-link
              >
            </div>
            <div class="flex justify-center">
              <router-link
                to="/blog"
                class="text-gray-300 hover:bg-gray-700 w-full hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Blog</router-link
              >
            </div>
            <div class="flex justify-center">
              <router-link
                to="/about"
                class="text-gray-300 hover:bg-gray-700 w-full hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >About</router-link
              >
            </div>
          </div>
        </div>
      </nav>

      <header class="bg-gray-900 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-100">{{ $route.name }}</h1>
          <div class="">
              <button @click="previous" class=" text-blue-300">Previous</button><span class="text-white"> /</span>
              <button @click="next" class=" text-blue-300 ml-1"> next</button>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbarMobile: false,
    };
  },
  methods: {
    navbarMobileClick() {
      this.navbarMobile = !this.navbarMobile;
    },
    previous(){
        this.$router.go(-1)

    },

    next(){
        this.$router.go(1)
    },
  },
};
</script>
<style lang=""></style>
