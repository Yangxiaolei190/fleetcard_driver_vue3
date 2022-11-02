<!--
 * @Author: Yongon
 * @LastEditors: yanglei m.justin.yang@outlook.com
 * @Description: file content
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      return {};
    }
  });
</script>

<style scoped lang="scss">
  /* 公共css */
  // @import '@/assets/styles/commom.scss';

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
