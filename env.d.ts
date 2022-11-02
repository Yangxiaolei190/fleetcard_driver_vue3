// 解决导入 jsx 组件后，提示 隐式具有'any'类型 问题 在 env.d.ts 文件中，声明没有类型的库导入为 any
declare module '*.jsx';

// src/types/env.d.ts 创建代码提示 env.d.ts
interface ImportMetaEnv {
  VITE_MODE_NAME: string;
  VITE_APP_ID: string;
  VITE_AGENT_ID: string;
  VITE_LOGIN_TEST: string;
  VITE_RES_URL: string;
  VITE_APP_TITLE: string;
}
