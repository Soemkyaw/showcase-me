<template>
  <section class="md:mx-8 md:my-10 my-10">
    <h3
      class="text-center md:text-4xl text-2xl text-gray-800 uppercase mx-5 mb-5 dark:text-gray-100"
    >
      What Technical Skills I Use
    </h3>
    <div
      class="bg-gray-100 text-black/90 rounded-xl mt-3 mx-5 dark:bg-gray-800 dark:text-white/90"
    >
      <div
        class="lg:px-26 md:px-18 px-3 py-12 grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5"
      >
        <!-- card go here  -->
        <div
          v-for="skill in technicalSkills"
          :key="skill"
          class="px-5 py-3 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="md:w-6 md:h-6 w-5 h-5 inline text-green-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span class="ml-1 text-sm uppercase">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props) {
    let technicalSkills = ref([
      "html",
      "css",
      "javascript",
      "jquery",
      "bootstrap",
      "tailwind",
      "vue",
      "php",
      "laravel",
      "mysql",
    ]);

    return { technicalSkills };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .lg\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>