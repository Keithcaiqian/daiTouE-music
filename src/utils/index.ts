import { defineAsyncComponent, h } from "vue";
import Error from "@/components/common/Error.vue";
import Loading from "@/components/common/Loading.vue";

// 得到一个异步页面
export function getAsyncPage(path: string) {
  return defineAsyncComponent({
    loader: () => import(path),
    loadingComponent: Loading,  
  });
}

// 得到一个异步组件
export function getAsyncComponent(path: string) {
  return defineAsyncComponent({
    loader: () => import(path),
    loadingComponent: Loading, // 当promise在pending状态时，将显示这里的组件
    errorComponent: { //加载错误
      render() {
        return h(Error, "出错了！！！");
      },
    },
  });
}
