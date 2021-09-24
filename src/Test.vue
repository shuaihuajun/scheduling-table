<template>
  <div>
    <SchedulingTable
      @add="add"
      @remove="remove"
      @edit="showEditCourseModal"
      :initialCourses="courses"
    ></SchedulingTable>
  </div>
</template>
<script>
import SchedulingTable from "./SchedulingTable.vue";
export default {
  name: "Test",
  components: { SchedulingTable },
  methods: {
    add() {},
    remove() {},
    showEditCourseModal() {},
  },
  data() {
    return {
      courses: [
        {
          name: "早读",
          day: 3,
          start: [6, 0],
          end: [6, 45],
        },
        {
          name: "语文",
          day: 4,
          start: [8, 30],
          end: [9, 15],
        },
        {
          name: "语文",
          day: 4,
          start: [9, 25],
          end: [10, 10],
        },
        {
          name: "自习",
          day: 4,
          start: [19, 0],
          end: [20, 30],
        },
        {
          name: "语文",
          day: 1,
          start: [8, 30],
          end: [9, 15],
        },
        {
          name: "语文",
          day: 5,
          start: [13, 30],
          end: [14, 15],
        },
        {
          name: "语文",
          day: 5,
          start: [14, 25],
          end: [15, 10],
        },
        {
          name: "语文",
          day: 2,
          start: [9, 30],
          end: [10, 15],
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>