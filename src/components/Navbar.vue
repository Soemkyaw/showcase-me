<template>
  <nav class="border-b border-b-gray-200 dark:border-b-gray-700">
    <div class="flex flex-wrap items-center justify-between md:mx-8 mx-5 py-4">
      <div class="lg:text-xl flex items-center">
        <img
          src="../../public/images/no_bg_profile.png"
          class="w-16 h-16 bg-gray-500 border border-black dark:border-white rounded-full object-cover"
        />
        <span class="ml-3 font-medium sm:text-xl dark:text-white"
          >SOE MOE KYAW</span
        >
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
          class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li class="md:mx-3">
            <div
              to="/"
              class="block py-2 text-gray-900 dark:text-gray-50 text-sm rounded"
              aria-current="page"
            >
              WORK
            </div>
          </li>
          <li class="md:mx-3">
            <div
              class="block py-2 text-gray-900 dark:text-gray-50 text-sm rounded"
            >
              SERVICES
            </div>
          </li>
          <li class="md:mx-3">
            <div
              class="block py-2 text-gray-900 dark:text-gray-50 text-sm rounded"
            >
              PROCESS
            </div>
          </li>
          <li class="md:mx-3 my-3">
            <div
              class="inline-block bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 px-5 py-2 text-sm rounded"
            >
              WORK WITH ME
            </div>
          </li>
          <li>
            <div class="cursor-pointer" v-if="!isDark" @click="toggleDark()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class=" cursor-pointer" v-else @click="toggleDark()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7 text-yellow-400"
              >
                <path
                  d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useDarkMode } from "@/composables/useDarkMode";

export default {
  setup(props) {
    let { isDark, toggleDark } = useDarkMode();

    return { isDark, toggleDark };
  },
};
</script>

<style>
</style>