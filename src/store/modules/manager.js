import { getRefresh } from "@/api/overallApi";
const manager = defineStore("manager", {
  state: () => {
    return {
      platformDictValue: 0, //平台字典值
    };
  },
  actions: {
    //设置平台字典
    setPlatformDictValue(platformDictValue) {
      this.platformDictValue = platformDictValue;
    },
    //每次刷新获取新数据
    async refreshPage(res) {
      let id = res.user.userId;
      if (id) {
        let dicValue = await getRefresh(id);
        if (dicValue) {
          this.setPlatformDictValue(dicValue.type);
        }
      }
    },
  },
});

export default manager;
