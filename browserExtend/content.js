chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'clickButton') {
      generateVideo()
      monitorVideoCount()
      monitorVideoChangeError()
      // startInterval()
      // downloadVideo()
      // test()
      // var button = document.querySelector('.VAtmtpqL');
      // if (button) {
      //   console.log('Button found.');
      //   button.click();
      // } else {
      //   console.error('Button with class VAtmtpqL not found.');
      // }
    } else if (request.action == 'record') {
      alert('已生成视频数目' + (initialCount + errorCount) + '个；成功生成视频数目' + initialCount + '个；失败生成视频数目' + errorCount + '个')
    }
  }
);
function test() {
  // 获取输入框并输入
  var input = document.querySelector('.testText');
  if (input) {
    input.value = 'test';
    input.innerHTML = 'test2';
    input.blur()
  } else {
    console.error('Input with class wBs12eIN not found.');
  }
}
const string = '生成一个程序员加班的视频；生成windows激活码全都包含的视频；生成一个打篮球的视频；生成一个打羽毛球的视频；生成一个打乒乓球的视频；生成一个打网球的视频；生成一个打高尔夫球的视频；生成一个打保龄球的视频；生成一个打棒球的视频；生成一个打橄榄球的视频；生成一个打足球的视频；生成一个打排球的视频；生成一个打冰球的视频；生成一个打壁球的视频；生成一个打毽子的视频；生成一个打藤球的视频'
const array = string.split('；')
// 获取初始的DOM数量
let initialCount = document.getElementsByClassName('vjs-tech').length
// 无法生成视频的次数
let errorCount = 0
// 生成视频
function generateVideo() {
  // 获取输入框并输入
  var input = document.querySelector('.wBs12eIN');
  if (input) {
    input.value = array[initialCount + errorCount];
    input.innerHTML = array[initialCount + errorCount];
    input.textContent = array[initialCount + errorCount];
    input.dispatchEvent(new Event('input', { bubbles: true }));
  } else {
    alert('Input with class wBs12eIN not found.');
  }
  // 获取发送按钮并发送
  var button = document.querySelector('.VAtmtpqL');
  if (button) {
    button.click();
  } else {
    alert('Button with class VAtmtpqL not found.');
  }
}
// 监控视频数目的变化
function monitorVideoCount() {
  // 监听DOM结构的变化
  const observer = new MutationObserver(() => {
      // 获取变化后的DOM数量
      let currentCount = document.getElementsByClassName('vjs-tech').length;
      // 判断数量是否发生变化
      if (currentCount !== initialCount) {
        downloadVideo() // 下载视频
        clearInterval(timer) // 清除定时器
        monitorVideoChangeError() // 重新开始计时
        // 更新初始数量
        initialCount = currentCount;
        generateVideo() // 生成视频
      }
  });
  // 配置观察器，监视子节点的变化
  const config = { childList: true, subtree: true };
  // 开始观察
  observer.observe(document.body, config);
}
// 视频十分钟无变化处理
let timer = null
function monitorVideoChangeError() {
  timer = setInterval(() => {
    // 跳过当前词汇，生成下一个视频
    errorCount++
    if (initialCount + errorCount >= array.length) {
      alert('已经生成完毕')
      clearInterval(timer) // 清除定时器
      return
    }
    generateVideo()
    clearInterval(timer) // 清除定时器
    monitorVideoChangeError() // 重新开始计时
  }, 180000)
}

// 下载文件
function daonload(url, name){
  // 方法一
  // alert('fetch' + !!fetch + 'window.fetch' + !!window.fetch)
	// fetch('http://localhost:3000/proxy?url=' + url + '&fileName=' + name)
	// .then(res => res.blob())
	// .then(blob => {
	// 	const a = document.createElement("a");
	// 	const objectUrl = window.URL.createObjectURL(blob);
	// 	a.download = name;
	// 	a.href = objectUrl;
	// 	a.click();
	// 	window.URL.revokeObjectURL(objectUrl);
	// 	a.remove();
	// })

  // 方法二
  // 创建一个 <a> 元素
  var link = document.createElement('a');
  link.href = 'http://localhost:3000/proxy?url=' + url + '&fileName=' + name;
  // 设置下载属性，包括文件名
  link.download = name || 'video.mp4';
  // 模拟点击触发下载
  document.body.appendChild(link);
  link.click();
  // 清理创建的 <a> 元素
  document.body.removeChild(link);
}
// 下载视频
function downloadVideo() {
  // 获取视频并下载
  var videoElement = document.querySelector('.vjs-tech');
  // alert(!!videoElement)
  if (videoElement) {
    // 获取视频的当前源
    var videoSource = videoElement.src;

    // 去掉查询字符串
    const url = new URL(videoSource);
    url.search = '';
    const updatedUrlString = url.toString();
    const name = array[initialCount + errorCount] + '.mp4'
    // 输出视频地址
    console.log('Video Source:', updatedUrlString);
    daonload(updatedUrlString, name);
  } else {
    console.error('Video element with class vjs-tech not found.');
  }
}