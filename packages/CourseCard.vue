<template>
  <div class="course-content">
    <div>{{ course.name }}</div>
    <div>
      {{ fixNumber(course.start[0]) }}:{{ fixNumber(course.start[1]) }} -
      {{ fixNumber(course.end[0]) }}:{{ fixNumber(course.end[1]) }}
    </div>
    <div class="actions clearfix">
      <div @click="removeCourse(index)" class="action delete">
        删除
      </div>
      <div @click="editCourse(index)" class="action edit">编辑</div>
    </div>
  </div>
</template>
<script>
import { fixNumber } from "./utils.js";

export default {
  name: "CourseCard",
  emits: ["add", "edit", "remove"],
  props: {
    course: Object,
    index: Number,
  },
  methods: {
    fixNumber,
    formatTime(num) {
      num = "" + num;
      return num[1] ? num : "0" + num;
    },
    editCourse(i) {
      this.$emit("edit", i);
    },
    removeCourse(i) {
      this.$emit("remove", i);
    },
  },
};
</script>
<style scoped>
.course-content {
  position: relative;
  background-color: #3f51b5;
  color: #fff;
  border-radius: 4px;
  height: 100%;
  padding: 4px 6px;
  font-size: 12px;
  transition: all 170ms;
  overflow: hidden;
}
.course-content .actions {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.7);
}
.course-content .action {
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.course-content .action:hover {
  color: #fff;
}
.course-content .action.delete:hover {
  background: crimson;
}
.course-content .action.edit:hover {
  background-color: #3f51b5;
}
.course-content:hover {
  cursor: pointer;
}
.course-content:hover .actions {
  display: block;
}
</style>
