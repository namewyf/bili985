---
title: B站网课播放
---

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const bvid = route.query.bvid;
const time = ref(0);
// 确保 bvid 存在并且是一个字符串
if (typeof bvid !== 'string') {
  console.error('Invalid BV ID:', bvid);
} else {
  console.log('BV ID:', bvid);
}
</script>
<button @click="time = 180">Click me!</button>
<BiliBili :bvid="bvid" page="1" v-if="typeof bvid === 'string'" :time="time" />