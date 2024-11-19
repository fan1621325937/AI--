import request from "@/utils/request";

//设置平台
export const setType = (type) => {
  return request({
    url: `/intellect/plat/setType/${type}`,
    method: "get",
  });
};

//根据用户id获取上传用户点击的菜单类型id(用于刷新直接显示页面)
export const getRefresh = (userId) => {
  return request({
    url: `/intellect/plat/getRefresh/${userId}`,
    method: "get",
  });
};

//根据用户ID获取对应的配置首页显示信息
export const getIndexType = (userId) => {
  return request({
    url: `/intellect/plat/getIndexType/${userId}`,
    method: "get",
  });
};
