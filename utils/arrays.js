export const isNotEmpty = (arr) => {
  const flag = Array.isArray(arr) && arr.length > 0;
  return flag;
};
