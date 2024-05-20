/*
 * @Author: jiangwanqiang
 * @Date: 2024-05-20 18:05:06
 * @Last Modified by:   jiangwanqiang
 * @Last Modified time: 2024-05-20 18:05:06
 */
// 解决toFixed保留小数的问题
const formatToFixed = (money, decimals = 2) => {
  return (
    Math.round((parseFloat(money) + Number.EPSILON) * Math.pow(10, decimals)) /
    Math.pow(10, decimals)
  ).toFixed(decimals);
};

const Format = {
  // 格式化金额展示： 12341234.246 -> $ 12,341,234.25
  formatMoney: (money, symbol = "", decimals = 2) =>
    formatToFixed(money, decimals)
      .replace(/\B(?=(\d{3})+\b)/g, ",")
      .replace(/^/, `${symbol}`),
};

export default Format;
