<template>
  <section class="md:mx-8 my-10">
    <div class="max-w-[1400px] mx-auto rounded-md lg:px-26 md:px-16 px-5  py-12" id="about">
      <h3 class="text-center md:text-4xl text-2xl text-gray-800 mb-5 dark:text-gray-100">ABOUT ME</h3>
      <div class="md:flex">
        <!-- Left Column -->
        <div
          class="md:w-1/2 flex flex-col justify-center items-center text-gray-700 my-5 dark:text-gray-400"
          style="text-align: justify;"
        >
          <div>
            Hi, I’m <span class="text-black dark:text-gray-100">Soe Moe Kyaw</span>, a
            <span class="text-black dark:text-gray-100">PHP/Laravel Web Developer</span> passionate
            about building dynamic, scalable, and user-friendly web
            applications. I specialize in using the Laravel framework to create
            clean, efficient, and maintainable code.
          </div>
          <div class=" my-3">
            With expertise in
            <span class="text-black dark:text-gray-100">PHP, MySQL, HTML, CSS, JavaScript</span>,
            and modern development tools, I transform ideas into functional and
            visually appealing solutions. I’m always learning and exploring new
            technologies to stay ahead in the ever-evolving tech landscape.
          </div>
        </div>
        <!-- Right Column -->
        <div class="md:w-1/2">
          <div class="relative w-fit mx-auto">
            <div
              class="absolute top-5 left-5 w-full h-full border-2 border-black dark:border-gray-300"
            ></div>
            <img
              class="relative border-2 border-black w-56 dark:border-gray-300"
              src="../../public/images/about_me.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>