import request from "@/utils/request";

//get方法
export function getMethod(data) {
  return request({
    url: data.url,
    method: "get",
    params: data?.params,
  });
}

//post方法
export function postMethod(data) {
  return request({
    url,
    method: "post",
    data: data.data ? data.data : {},
    params: data?.params ? data.params : {},
  });
}

//put方法
export function putMethod(data) {
  return request({
    url: data.url,
    method: "put",
    data: data?.data,
    params: data?.params ? data.params : {},
  });
}
