<template>
  <div>
    <button @click="addCourse">添加课程</button>
    <SchedulingTable
      @remove="remove"
      @edit="showEditCourseModal"
      v-model="datasource"
    ></SchedulingTable>
  </div>
</template>
<script>
import SchedulingTable from "./SchedulingTable.vue";
export default {
  name: "Test",
  components: { SchedulingTable },
  data() {
    return {
      datasource: [
        {
          name: "语文",
          day: 2,
          start: [9, 30],
          end: [10, 15],
        },
      ],
    };
  },
  methods: {
    addCourse() {
      this.datasource.push({
        name: "语文",
        day: 3,
        start: [9, 30],
        end: [10, 15],
      });
    },
    remove(i, course) {
      console.log(this.datasource);
      console.log(i, course);
    },
    showEditCourseModal(i, course) {
      console.log(i, course);
    },
  },
};
</script>
<style scoped>
</style>