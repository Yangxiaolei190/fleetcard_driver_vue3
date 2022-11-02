<template>
  <div class="ERROR_PAGE">
    <van-empty
      image="network"
      description="对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      return {};
    }
  });
</script>

<style scoped lang="scss"></style>
