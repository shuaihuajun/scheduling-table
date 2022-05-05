export function fixNumber(num) {
  num = "" + num;
  return num[1] ? num : "0" + num;
}
