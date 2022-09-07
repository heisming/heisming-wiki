
```hash
yarn add jsoneditor 
npm i jsoneditor -S
pnpm i jsoneditor -S
```
```vue
<template>
  <div class="json-editor" :class="{ 'json-editor--max': max, 'json-editor--min': !max }" :style="height">
    <div ref="jsonEditorRef" class="json-editor_box"></div>
    <button v-if="options.mode == 'code' && plus" type="button" class="json-editor_max-btn" size="mini" @click="max = !max"></button>
  </div>
</template>

<script lang="ts" setup>
import JSONEditor, { JSONEditorOptions } from 'jsoneditor';
// import 'jsoneditor/dist/jsoneditor.min.css';
import { computed, nextTick, onBeforeUnmount, onMounted, PropType, ref, shallowRef, watch } from 'vue';

const props = defineProps({
  options: {
    type: Object as PropType<JSONEditorOptions>,
    default: () => ({}),
  },
  modelValue: [Object, Array, Number, String, Boolean],
  height: {
    type: String,
  },
  plus: {
    type: Boolean,
    default: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  statusBar: {
    type: Boolean,
    default: true,
  },
  mainMenuBar: {
    type: Boolean,
    default: true,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['error', 'input', 'update:modelValue', 'update:hasError']);

const editor = shallowRef<JSONEditor | null>(null);
// const style = ref<StyleSheet>();
const max = ref(false);
const internalChange = ref(false);

const jsonEditorRef = ref<HTMLDivElement>();

const height = computed(() => {
  if (props.height && !max.value) {
    return {
      height: props.height,
    };
  }
  return {};
});

watch(
  () => props.modelValue,
  value => {
    if (editor.value && value !== undefined && !internalChange.value) {
      editor.value.set(value);
    }
  },
  { deep: true }
);

watch(max, () => {
  nextTick(() => initView());
});

watch(
  () => props.options,
  () => {
    if (props.options && props.options.mode && editor.value) {
      editor.value.setMode(props.options.mode);
    }
  }
);
const onChange = () => {
  let error = null;
  let json = {};
  try {
    json = editor.value?.get();
  } catch (err) {
    error = err;
  }
  if (error) {
    emit('error', error);
  } else if (editor.value) {
    internalChange.value = true;
    emit('update:modelValue', json);
    nextTick(() => {
      internalChange.value = false;
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  props.options.onChange && props.options.onChange();
};
const initView = () => {
  if (!editor.value) {
    const cacheChange = props.options.onChange;
    delete props.options.onChange;
    const options: JSONEditorOptions = Object.assign(props.options, {
      onChange,
      onEditable: props.readonly ? () => false : () => true,
      statusBar: props.statusBar,
      mainMenuBar: props.mainMenuBar,
      onValidationError: (errors: any[]) => {
        emit('update:hasError', !!errors.length);
      },
    });
    editor.value = new JSONEditor(jsonEditorRef.value!, options);
    // eslint-disable-next-line vue/no-mutating-props
    props.options.onChange = cacheChange;
  }
  editor.value.set(props.modelValue !== undefined ? props.modelValue : {});
};
const destroyView = () => {
  if (editor.value) {
    editor.value.destroy();
    editor.value = null;
  }
};
// const refresh = () => {
//   editor.value?.set(props.modelValue);
// };

onMounted(() => {
  initView();
});

onBeforeUnmount(() => {
  destroyView();
});
</script>

<style lang="scss" scoped>
.json-editor {
  position: relative;
  min-width: 300px;
  width: 100%;
  &--max {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
  }
  &_box {
    height: 100%;
  }
  &_max-btn {
    display: none;
    position: absolute;
    top: 7px;
    right: 110px;
    color: #fff;
    width: 24px;
    height: 24px;
    /* background: rgba(0, 0, 0, 0) url(../assets/svg/plus.svg) no-repeat; */
    background-position: 3px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    &:hover {
      border: 1px solid #d7e6fe;
    }
  }
  &:hover {
    .json-editor_max-btn {
      display: block;
    }
  }
}

// :deep(.jsoneditor) {
//   border-color: #00b259;
//   .jsoneditor-menu {
//     background-color: #00b259;
//     border-bottom-color: #00b259;
//   }
// }
</style>

```