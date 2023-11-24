chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'clickButton') {
      startInterval()
      // downloadVideo()
      // test()
      // var button = document.querySelector('.VAtmtpqL');
      // if (button) {
      //   console.log('Button found.');
      //   button.click();
      // } else {
      //   console.error('Button with class VAtmtpqL not found.');
      // }
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

function startInterval() {
  const string = '生成一个程序员加班的视频；生成一个程序员掉头发的视频；生成一个游泳的视频；生成一个打篮球的视频；生成一个打羽毛球的视频；生成一个打乒乓球的视频；生成一个打网球的视频；生成一个打高尔夫球的视频；生成一个打保龄球的视频；生成一个打棒球的视频；生成一个打橄榄球的视频；生成一个打足球的视频；生成一个打排球的视频；生成一个打冰球的视频；生成一个打壁球的视频；生成一个打毽子的视频；生成一个打藤球的视频'
  const array = string.split('；')
  let currentIndex = 0
  function target () {
    if (currentIndex >= array.length) {
      currentIndex = 0 // 循环
      // clearInterval(timer)
      // alert('已经生成完毕')
    } else {
      // 获取输入框并输入
      var input = document.querySelector('.wBs12eIN');
      if (input) {
        input.value = array[currentIndex];
        input.innerHTML = array[currentIndex];
        input.textContent = array[currentIndex];
        input.dispatchEvent(new Event('input', { bubbles: true }));
      } else {
        console.error('Input with class wBs12eIN not found.');
      }
      // 获取发送按钮并发送
      var button = document.querySelector('.VAtmtpqL');
      if (button) {
        console.log('Button found.');
        button.click();
      } else {
        console.error('Button with class VAtmtpqL not found.');
      }
      console.log('click');
  
      setTimeout(() => {
        // 获取视频并下载
        const videoName = array[currentIndex-1] + '.mp4'
        downloadVideo(videoName)
      }, 180000 - 1000)
      currentIndex++
    }   
  }
  target()
  const timer = setInterval(target, 180000)
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
function downloadVideo(videoName) {
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
    const name = videoName || document.querySelector('.wBs12eIN').value + '.mp4'
    // 输出视频地址
    console.log('Video Source:', updatedUrlString);
    daonload(updatedUrlString, name);
  } else {
    console.error('Video element with class vjs-tech not found.');
  }
}