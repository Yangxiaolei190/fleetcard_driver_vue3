<!--
 * @Author: Yongon
 * @LastEditors: yanglei m.justin.yang@outlook.com
 * @Description: file content
-->
<template>
  <div></div>
</template>

<script setup lang="ts">
  import { useUserStore } from '../../store/modules/user';
  const userStore = useUserStore();
  const updateName = (isAction: boolean) => {
    if (isAction) {
      // action 修改 store 中的数据
      userStore.updateName('userStore.updateName方式');
    } else {
      // 未定义 action 时可以用 $patch 方法直接更改状态属性
      // $patch 修改 store 中的数据
      // wahahah
      userStore.$patch({
        name: 'userStore.$patch方式'
      });
    }
  };
</script>

<style scoped></style>
