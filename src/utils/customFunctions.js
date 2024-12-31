// 清空对象中的key值
export function clearObjectValues(obj) {
  if (Array.isArray(obj)) {
    // 如果是数组，清空数组
    return [];
  } else if (typeof obj === "object" && obj !== null) {
    // 如果是对象，递归清空对象中的值
    const newObj = {};
    for (const key in obj) {
      newObj[key] = clearObjectValues(obj[key]);
    }
    return newObj;
  } else {
    // 如果是其他类型，返回 undefined
    return undefined;
  }
}
