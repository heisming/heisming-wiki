```vue
<template>
  <div>
    <button @click="change">Home</button>
    <div>
      <component :is="components[component]" ref="dynamicRef"></component>
    </div>
    <button @click="test">测试</button>
  </div>
</template>
<script lang='ts' setup>
import { defineComponent, ref, defineAsyncComponent } from 'vue';

const paramVersionOptions = [
  'HelloWorld',
  'YesterDay'
]

const components = paramVersionOptions.reduce((prev, key) => {
  console.log('prev', prev, 'key', key);
  prev[key] = defineAsyncComponent(() => import(`../components/${key}.vue`));
  return prev;

  // prev[key] = (paramVersionOptions[key] as string[]).reduce((pre, version) => {
  // console.log('prev', prev, 'version', version);
  //   pre[version] = defineAsyncComponent(() => import(`./${key}/${version}/index.vue`));
  //   return pre;
  // }, {} as any);
  // return prev;
}, {} as any);

const paramVersionOption: any = {
  PG101: ['1.0.0'],
  'JX-D008': ['1.0.0'],
  'JX-802': ['1.0.0'],
  'JX-802C': ['1.0.0'],
};

// 异步加载参数表单组件
const paramConfig = Object.keys(paramVersionOption).reduce((prev, key) => {
  // console.log('prev', prev, 'key', key);
  prev[key] = (paramVersionOption[key] as string[]).reduce((pre, version) => {
  // console.log('prev', prev, 'version', version);
    pre[version] = defineAsyncComponent(() => import(`./${key}/${version}/index.vue`));
    return pre;
  }, {} as any);
  return prev;
}, {} as any);

console.log("🚀 ~ file: Home.vue ~ line 28 ~ paramConfig ~ paramConfig", paramConfig)

const dynamicRef = ref();
const component = ref('HelloWorld');
const change = () => {
  component.value = component.value === 'HelloWorld' ? 'YesterDay' : 'HelloWorld';
}
const test = () => {
  console.log(dynamicRef.value)
  dynamicRef.value.goto();
}

</script>
<script lang='ts'>
// import HelloWorld from '../components/HelloWorld.vue';
// import YesterDay from '../components/Yesterday.vue';
// export default {
//   components: {
//     HelloWorld,
//     YesterDay
//   }
// }
defineComponent({
  name: 'HomeView', 
});
</script>
<style lang='scss' scoped>
</style>
```