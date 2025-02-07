import { ref } from "vue";
let works = ref([]);

let getWorks = () => {
    works.value = [
      {
        title: "Blog Project",
        description: "this is my description testing.",
        tags: ["html", "css", "js", "php", "laravel"],
        photo: "/images/b-mockup.png",
      },
      {
        title: "Job Hunting Project",
        description: "this is my description testing.",
        tags: ["html", "css", "js", "php", "laravel"],
        photo: "/images/j-mockup.png",
      },
      {
        title: "Restaurant System Project",
        description: "this is my description testing.",
        tags: ["html", "css", "js", "php", "laravel"],
        photo: "/images/r-mockup.png",
      },
      {
        title: "Media Project",
        description: "this is my description testing.",
        tags: ["html", "css", "js", "php", "laravel"],
        photo: "/images/m-mockup.png",
      },
    ];
  
  return {works};
};

export default getWorks;