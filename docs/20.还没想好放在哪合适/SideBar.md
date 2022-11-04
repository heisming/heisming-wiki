index.vue
```vue
<template>
  <div>
    <el-scrollbar>
      <side-bar-menu>
        <side-bar-menu-item
          v-for="route in menuList"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></side-bar-menu-item>
      </side-bar-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import SideBarMenu from './SideBarMenu.vue';
import SideBarMenuItem from '../main/SideBarMenuItem.vue';
import type { RouteRecordRaw } from 'vue-router';
import { routes as routerRoutes } from '@/router/index';
import useSessionStore from '@/store/session';

const user = useSessionStore();

// 权限过滤
const hasPermission = (route: RouteRecordRaw) =>
  !route.meta || !route.meta.roles || route.children?.includes(user.role as string);

// 获得权限过滤后的菜单数据
const generateMenu = (routes: Array<RouteRecordRaw>) => {
  const res: Array<RouteRecordRaw> = [];
  routes.forEach(route => {
    const temp = { ...route };
    if (hasPermission(temp)) {
      if (temp.children) temp.children = generateMenu(temp.children);
      res.push(temp);
    }
  });
  return res;
};
const menuList = computed(() => generateMenu(routerRoutes));
</script>
<style lang="scss" scoped></style>
```

SideBarMenu.vue
```vue
<template>
  <el-scrollbar>
    <el-menu :default-active="route.path" router>
      <slot></slot>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<style lang="scss" scoped></style>
```

SideBarMenuItem.vue
```vue
<template>
  <!-- 如果父组件传递过来的item不存在meta/meta.hidden且不是404页面就不用渲染子组件了 -->
  <template v-if="(!item.meta || item.meta.hidden) && item.name !== path404">
    <!-- 如果children存在且不是空 -->
    <template v-if="item.children && item.children.length">
      <!-- 过滤掉带hidden属性为真的子路由，如果是空数组，就不会渲染，如果子路由大于2，先渲染父级路由，再渲染子路由 -->
      <el-sub-menu v-if="!onlyOneChild" :index="basePath">
        <template #title>
          <svg-icon v-if="item.meta?.icon" :name="item.meta?.icon"></svg-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
        <!-- 渲染子路由，使用嵌套 -->
        <side-bar-menu-item v-for="route in item.children" :key="route.path" :item="route" :base-path="route.path" />
      </el-sub-menu>
      <!-- 如果过滤完子路由只剩一个的话，直接使用第一个非隐藏子路由作为主路由渲染 -->
      <router-link v-else :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.path">
          <svg-icon v-if="onlyOneChild.meta?.icon" :name="onlyOneChild.meta.icon"></svg-icon>
          <template #title>
            <span>{{ onlyOneChild.meta?.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
    <!-- 那么item直接就是一个单一路由，直接使用route-link即可 -->
    <router-link v-else :to="item.path">
      <!-- :index仅仅只是用来标志唯一标识的 -->
      <el-menu-item :index="basePath">
        <!-- 图标 -->
        <svg-icon v-if="item.meta?.icon" :name="item.meta?.icon"></svg-icon>
        <!-- 插槽：自定义标题内容 -->
        <template #title>
          <span>{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </router-link>
  </template>
</template>
<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import SvgIcon from '@/components/SvgIcon.vue';

const props = defineProps<{
  item: RouteRecordRaw;
  basePath: string;
}>();

const { item, basePath } = toRefs(props);
const path404 = 'NotFount';

// 判断非隐藏属性子路由是否只有一个
const onlyOneChild = computed(() => {
  // 如果路由对象的children存在且过滤隐藏的属性的route后等于一就返回第一个，否则就返回所有
  if (item.value.children && item.value.children.filter(child => !child.meta?.hidden).length === 1)
    return item.value.children[0];
  return false;
});
</script>
<script lang="ts">
import { defineComponent } from 'vue';
defineComponent({
  name: 'DemoView',
});
</script>
<style lang="scss" scoped></style>
```
