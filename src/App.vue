<template>
  <SchedulingTable
    @add="add"
    @remove="remove"
    @edit="showEditCourseModal"
    v-model="courses"
  ></SchedulingTable>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      courses: [
        {
          name: "早读",
          day: 3,
          start: [6, 0],
          end: [6, 45],
        },
      ],
    };
  },
  created() {},
  methods: {
    add(data) {
      console.log("add", data);
    },
    remove(index, data) {
      console.log("remove", index, data);
      this.courses.splice(index, 1);
    },
    showEditCourseModal(index, data) {
      console.log("edit", index, data);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
