<template>
  <section class="md:mx-8 my-5">
    <div class=" max-w-[1400px] mx-auto"  id="works">
      <h3 class="text-4xl font-semibold px-5 text-gray-800 dark:text-gray-100 text-center mb-5">
        SELECTED WORKS
      </h3>
      <!-- work card here  -->
      <div class="grid sm:grid-cols-2 gap-5 my-5 mx-5">
        <div
          v-for="work in works"
          :key="work.title"
          class="bg-blue-300 relative w-full rounded-md overflow-hidden aspect-w-16 aspect-h-9 group"
        >
          <img class="w-full h-full object-cover" :src="work.photo" alt="" />
          <div
            class="absolute inset-0 bg-black/70 z-10 p-5 flex flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <h3
              class="text-white font-medium text-2xl mb-3 sm:text-xl uppercase"
            >
              {{ work.title }}
            </h3>
            <div class="md:my-3 my-1">
              <span
                v-for="tag in work.tags"
                :key="tag"
                class="bg-gray-200 px-2 py-1 rounded-xl me-2 text-sm sm:text-xs"
                >{{ tag }}</span
              >
            </div>
            <p class="text-gray-300 my-3 text-sm sm:text-xs">
              {{ work.description }}
            </p>
            <div class="mt-auto">
              <button class="bg-white px-5 py-2 rounded text-sm sm:text-xs">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- seemore button  -->
      <div class="text-center">
        <button
          class="px-5 py-2 rounded-xl uppercase bg-black/90 text-gray-200 hover:bg-black/70 hover:text-white dark:bg-white/90 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900"
        >
          See more
        </button>
        <!-- <button class=" px-5 py-2 bg-black/90 text-gray-200 rounded-xl hover:bg-black/70 hover:text-white uppercase">See less</button> -->
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import getWorks from "../composables/getWorks";

export default {
  setup(props) {
    let { works } = getWorks();

    // onMounted(() => {
    //   console.log(works);
    // });

    return { works };
  },
};
</script>

<style>
</style>