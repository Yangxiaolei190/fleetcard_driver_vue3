# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


## 编程语言：TypeScript 4.x + JavaScript
## 构建工具：Vite 3.x
## 前端框架：Vue 3.x
## 路由工具：Vue Router 4.x
## 状态管理：pinia 2.0.23
## UI 框架：Element Plus
## CSS 预编译：Stylus / Sass / Less
## HTTP 工具：Axios
## Git Hook 工具：husky + lint-staged
## 代码规范：EditorConfig + Prettier + ESLint + Airbnb JavaScript Style Guide
## 提交规范：Commitizen + Commitlint
## 单元测试：vue-test-utils + jest + vue-jest + ts-jest
## 自动部署：GitHub Actions