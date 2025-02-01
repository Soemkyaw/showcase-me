<template>
  <nav class="border-b border-b-gray-200 dark:bg-gray-900">
    <div
      class=" flex flex-wrap items-center justify-between md:mx-8 mx-5 py-4"
    >
    <div class=" lg:text-xl flex items-center">
            <img src="../assets/images/no_bg_profile.png" class=" w-16 h-16 bg-gray-500 border rounded-full object-cover">
            <span class=" ml-3 font-medium sm:text-xl">SOE MOE KYAW</span>
        </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
       <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li class=" md:mx-3">
            <router-link
              to="/"
              class="block py-2 text-gray-900 text-sm rounded"
              aria-current="page"
              >WORK</router-link
            >
          </li>
          <li class=" md:mx-3">
            <router-link
              to="/posts"
              class="block py-2 text-gray-900 text-sm rounded"
              >SERVICES</router-link
            >
          </li>
          <li class=" md:mx-3">
            <router-link
              to="/contact"
              class="block py-2 text-gray-900 text-sm rounded"
              >PROCESS</router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="inline-block bg-gray-900 text-white px-5 py-2 text-sm rounded"
              >WORK WITH ME</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>