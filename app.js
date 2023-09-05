const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Hi Goal",
      vueLink: "https://v2.ko.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn";
      } else {
        return "Master";
      }
    },
  },
});

app.mount("#user-goal");
