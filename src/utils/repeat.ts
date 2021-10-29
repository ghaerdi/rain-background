export default function repeat(func: Function, times: number) {
  func();
  times && times-- && repeat(func, times);
}
