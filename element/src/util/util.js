export default{
  Sleep (time) {
    // 睡眠
    return new Promise((resolve) => { setTimeout(resolve, time) })
  }
}
