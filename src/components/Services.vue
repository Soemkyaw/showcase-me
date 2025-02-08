<template>
  <section class="md:mx-8 md:my-10 my-10">
    <div class="max-w-[1400px] mx-auto bg-white rounded-md lg:px-26 md:16 px-5 py-12 dark:bg-gray-900" id="services">
      <div class="md:flex">
        <!-- Left Column -->
        <div class="md:w-1/2 mt-5 mb-10 pr-4 flex flex-col justify-center items-center">
          <h2 class="md:text-4xl text-2xl text-gray-800  text-center dark:text-gray-200">What I Provide</h2>
          <h2 class="md:text-4xl text-2xl text-gray-900  font-semibold text-center dark:text-gray-200">SERVICES</h2>
        </div>
        <!-- Right Column -->
        <div class="md:w-1/2 md:pl-4 max-h-52 overflow-y-auto customScroll  md:border-l md:border-gray-400 dark:border-gray-500">
          <div class="border-b border-gray-200 mb-5 md:py-10 md:px-5 dark:border-gray-700">
            <h3 class="font-medium dark:text-gray-200">Custom Web Application Development</h3>
            <p class="text-sm text-gray-800 my-2 dark:text-gray-400">
              I build dynamic and responsive web applications tailored to your
              business needs using PHP and Laravel.
            </p>
          </div>
          <div class="border-b border-gray-200 mb-5 md:pb-5 md:px-5 dark:border-gray-700">
            <h3 class="font-medium dark:text-gray-200">Bug Fixing and Troubleshooting</h3>
            <p class="text-sm text-gray-800 my-2 dark:text-gray-400">
              I identify and fix bugs to improve the functionality and user
              experience of your web applications.
            </p>
          </div>
          <div class="border-b border-gray-200 mb-5 md:pb-5 md:px-5 dark:border-gray-700">
            <h3 class="font-medium dark:text-gray-200">Maintenance and Support</h3>
            <p class="text-sm text-gray-800 my-2 dark:text-gray-400">
              I provide ongoing support and updates to keep your web application
              secure and up-to-date.
            </p>
          </div>
          <div class="border-b border-gray-200 mb-5 md:pb-5 md:px-5 dark:border-gray-700">
            <h3 class="font-medium dark:text-gray-200">RESTful API Development</h3>
            <p class="text-sm text-gray-800 my-2 dark:text-gray-400">
              I create secure and efficient APIs for integrating systems and
              services.
            </p>
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
.customScroll::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}
.customScroll::-webkit-scrollbar-thumb {
  background-color: #888; /* Color of the scrollbar thumb */
  border-radius: 3px; /* Rounded corners for the thumb */
}

.customScroll::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Thumb color on hover */
}

.customScroll::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Background color of the scrollbar track */
  border-radius: 4px; /* Rounded corners for the track */
}
</style>