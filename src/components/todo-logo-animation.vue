<template>
  <transition name="logo">
    <div class="todo-logo-animation" v-if='show'>
      <p class="logo">
        <span>my-<font>todo</font></span>
      </p>
      <p class="desc">比简单还简单的事务管理</p>
      <p class="auther">作者：江震泳</p>
    </div>
  </transition>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  name: "todoLogoAnimation",
  data() {
    return {
      show: true,
      time: 3000
    };
  },
  mounted() {
    let count = setInterval(() => {
      this.show = false;
      clearInterval(count);
    }, this.time);
  }
};
</script>
