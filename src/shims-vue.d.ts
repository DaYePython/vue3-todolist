<<<<<<< HEAD
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
=======
declare module '*.vue' {
  import { DefineComponent } from 'vue'
>>>>>>> a3cb8fa ([Function] Complete Project)
  const component: DefineComponent<{}, {}, any>
  export default component
}
