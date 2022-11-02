const ls = localStorage;
const ss = sessionStorage;

export default {
  /**
   * @object 操作localStorage,sessionStorage,cookie封装
   * @method  ls 操作localStorage
   * @method  ss 操作sessionStorage
   * @method  ck 操作cookie
   */
  ls: {
    // 获取储存信息
    get(key: string) {
      return JSON.parse(ls.getItem(key) || '');
    },

    // 设置储存信息
    set(key: string, value: any) {
      if (!value && value === undefined) {
        return;
      }
      const arr = JSON.stringify(value);
      ls.setItem(key, arr);
    },

    // 删除储存信息
    remove(key: string) {
      ls.removeItem(key);
    },

    // 删除所有储存信息
    removeAll() {
      ls.clear();
    }
  },
  ss: {
    get(key: string) {
      return JSON.parse(ss.getItem(key) || '');
    },

    set(key: string, value: any) {
      if (!value && value === undefined) {
        return;
      }
      const arr = JSON.stringify(value);
      ss.setItem(key, arr);
    },

    remove(key: string) {
      ss.removeItem(key);
    },

    removeAll() {
      ss.clear();
    }
  }
};
