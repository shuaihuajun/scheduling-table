安装依赖
```
npm i
```

开发模式启动项目
```
npm run serve
```


从 NPM 下载该组件
```bash
npm i -S @lanserdi/scheduling-table
```

在你的 VUE 项目模板中使用该组件
```vue
<SchedulingTable
    @add="add"
    @remove="remove"
    @edit="showEditCourseModal"
    v-model="courses"
  ></SchedulingTable>
```
