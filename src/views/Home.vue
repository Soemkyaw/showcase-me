<template>
  <main class="dark:bg-gray-900 relative">
    <Navbar></Navbar>
    <Hero></Hero>
    <Works></Works>
    <About></About>
    <Skills></Skills>
    <Services></Services>
    <Footer></Footer>

    <button
      class="w-12 h-12 bg-gray-800 fixed bottom-5 right-5 rounded-full flex justify-center items-center shadow-md shadow-gray-700 dark:shadow-gray-500"
      v-if="isScroll"
      @click="scrollTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-8 text-white"
      >
        <path
          fill-rule="evenodd"
          d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </main>
</template>

<script>
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Hero from "../components/Hero";
import { onMounted, ref } from "vue";
// @ is an alias to /src

export default {
  components: {
    Navbar,
    About,
    Footer,
    Services,
    Skills,
    Works,
    Hero,
  },

  setup(props) {
    let isScroll = ref(false);

    let scrollTop = () => {
      window.scrollTo({ top: 0 });
    };

    let handleScroll = () => {
      if (window.scrollY > 200) {
        isScroll.value = true;
      } else {
        isScroll.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return { scrollTop, isScroll };
  },
};
</script>
