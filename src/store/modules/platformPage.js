

const platformPage = defineStore("platformPage", {
  state: () => {
    return {
      //根据平台字典platformDictValue显示对应的首页
      homepage: {
        0: "defaultHomepage", //根据平台字典platformDictValue显示对应的首页,有值显示对应的首页,没有值显示默认首页
      },
      //主页布局
      layout: {},
    };
  },
  actions: {},
});

export default platformPage;
