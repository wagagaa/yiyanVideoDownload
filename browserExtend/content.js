chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'clickButton') {
      initialCount = document.getElementsByClassName('vjs-tech').length
      let currentErrorCount = 0
      for (let index = 0; index < document.getElementsByClassName('MuW1NXvm').length; index++) {
        if (document.getElementsByClassName('MuW1NXvm')[index].innerText === '当前您的指令超出了插件预设能力范围，您可展开插件执行状态，或换一个指令再次尝试。') {
          currentErrorCount++
        }
      }
      errorCount = currentErrorCount
      generateVideo()
      monitorVideoCount()
      clearInterval(timer)
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
    } else if (request.action == 'getError') {
      const errorWord = getErrorWord().join('；')
      alert(errorWord)
    } else if (request.action === "getRecordCount") {
      var count = document.querySelectorAll('.test').length;
      sendResponse({ count: '已生成' + (initialCount + errorCount) + '个；成功' + initialCount + '个；失败' + errorCount + '个；总共' + array.length + '个' });
    } else if (request.action == 'downloadVideo') {
      downloadVideoSection()
    }
  }
);
function downloadVideoSection () {
  const videoArr = [] // 同一个视频的多个分段集合
  // 点击按钮开始播放
  var button = document.querySelector('.UoIKNZvt');
  try {
    if (button) {
      button.click();
      const timer = setInterval(() => {
        // 实时获取视频的当前源
        // 获取第一个具有类名为 G5gVmeAJ 的元素
        var firstElement = document.querySelector('.G5gVmeAJ');
        // alert(firstElement)
  
        // 找出该元素下所有 video 元素
        var videoElements = firstElement.querySelectorAll('video');
  
        // 遍历每个 video 元素并获取其 URL
        let str = ''
        videoElements.forEach(function(videoElement) {
          var videoUrl = videoElement.src;
          videoArr.push(videoUrl)
          str += videoUrl + '\n'
        });
      }, 1000)
      setTimeout(() => {
        // alert('视频源获取完毕')
        clearInterval(timer)
        const videoArrSet = [...new Set(videoArr)]
        // alert(videoArrSet.join('----'))
        videoArrSet.forEach((videoUrl, index) => {
          // alert('开始下载第' + (index + 1) + '个视频')
          setTimeout(() => {
            downloadVideo(videoUrl, index)
          }, index * 1000);
        })
      }, 35000)
    } else {
      alert('Button with class UoIKNZvt not found.');
    }
  } catch (error) {
    alert(JSON.stringify(error))
  }
}
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

const string = `介绍控制机构符号绘制规则
介绍能量控制和调节元件符号
介绍能量控制和调节元件符号绘制规则
介绍能量控制和调节元件符号的示例
介绍单一控制机构符号
介绍复合控制机构符号
介绍二通阀详细符号
介绍二通阀常开可变节流详细符号
介绍三通阀详细符号
介绍旋转方向标注规则
介绍泵的旋转方向标注规则
介绍马达的旋转方向标注规则
介绍泵马达的旋转方向标注规
介绍控制位置的标注规则
介绍控制位置只是线的标注规则
介绍控制位置标注的标注规则
介绍变量液压马达的符号
介绍定量液压马达的符号
介绍变量液压马达的符号
介绍变量液压泵的符号
介绍定量液压泵的符号
介绍变量液压泵马达的符号
介绍变量可逆时旋转泵马达的符号
介绍定量变量可逆时旋转泵的符号
介绍常用液压术语
介绍液体流动的解释
介绍液压技术的解释
介绍静液压技术的解释
介绍运行工况的解释
介绍额定工况的解释
介绍标准工况的解释
介绍公称压力的解释
介绍工作压力的解释
介绍工作压力范围的解释
介绍进口压力的解释
介绍出口压力的解释
介绍压降压差的解释
介绍控制压力范围的解释
介绍背压的解释
介绍启动压力的解释
介绍爆破压力的解释
介绍连续工况的解释
介绍极限工况的解释
介绍峰值压力的解释
介绍运行压力的解释
介绍冲击压力的解释
介绍系统压力的解释
介绍极限工况的解释
介绍充气压力的解释
介绍吸入压力的解释
介绍瞬态工况的介绍
介绍实际工况的解释
介绍吸入压力的解释
介绍额定压力的解释
既是调压偏差的解释
介绍流量的解释
介绍间歇工况的解释
介绍周期稳定工况的解释
介绍规定工况的解释
介绍额定流量的解释
介绍供给流量的解释
介绍泄露的解释
介绍介质的温度范围的解释
介绍装置的温度范围的解释
介绍内泄露的解释
介绍外泄露的解释
介绍环境温度的解释
介绍液压泵的术语
介绍液压泵的解释
介绍容积式泵的解释
介绍定量泵的解释
介绍变量泵的解释
介绍非平衡式叶片泵的解释
介绍平衡式叶片泵的解释
介绍柱塞泵的解释
介绍径向柱塞泵的解释
介绍齿轮泵的解释
介绍叶片泵的解释
介绍轴向柱塞泵的解释
介绍多联泵的解释
介绍液压马达和缸的术语
介绍液压马达的解释
介绍容积式马达的解释
介绍叶片式马达的解释
介绍变量马达的解释
介绍齿轮马达的解释
介绍径向柱塞马达的解释
介绍定量马达的解释
介绍轴向柱塞马达的解释
介绍缸的解释
介绍活塞缸的解释
介绍摆动马达的解释
介绍单活塞杠缸的解释
介绍双活塞杆缸的解释
介绍差动缸的解释
介绍单作用缸的解释
介绍弹簧复位单作用缸的解释
介绍多级伸缩缸的解释
介绍重力复位单作用缸的解释
介绍双联缸的解释`

const array = string.split(/\s*[；\s\n]+\s*/)
// 获取初始的DOM数量
let initialCount = 0
// 无法生成视频的次数
let errorCount = 0
// 词条生成批次
let batch = 1
// 生成视频
function generateVideo() {

  // 获取输入框并输入
  var input = document.querySelector('.yc-editor');
  if (input) {
    const name = '生成一个' + array[initialCount + errorCount] + '的视频'
    // input.value = `<p class="yc-editor-paragraph"><span data-lexical-text="true">${name}</span></p>`;
    // input.innerHTML = `<span data-lexical-text="true">${name}</span>`;
    // input.textContent = `<p class="yc-editor-paragraph"><span data-lexical-text="true">${name}</span></p>`;
    // input.dispatchEvent(new Event('input', { bubbles: true }));
    // input.__lexicalEventHandles.length = 0;

    // input.innerText = name;
    // input.innerHTML = '<p class="yc-editor-paragraph" dir="ltr"><span data-lexical-text="true">dadas发顺丰第三方</span></p>';
    // input.textContent = name;
    // input.__lexicalTextContent = name;

    // // 添加input事件监听器
    // input.addEventListener('input', function() {
    //   // 获取div的当前内容
    //   var currentContent = input.innerHTML;
      
    //   alert(currentContent)
    // });

    // setInterval(() => { 
    //   input.value = name;
    //   input.innerHTML = name;
    //   input.dispatchEvent(new Event('input', { bubbles: false }));
    // }, 2000)

    // 创建鼠标事件
    // var event = new MouseEvent('click', {
    //   bubbles: true,
    //   cancelable: true,
    //   clientX: 1200,
    //   clientY: 910
    // });

    // 获取目标元素，如果没有特定的目标元素，可以使用document.documentElement
    // var targetElement = document.elementFromPoint(1200, 910);
    // alert(targetElement.innerHTML + targetElement.className)

    // 分发事件
    // targetElement.dispatchEvent(event);
    // input.focus()

    // 模拟输入事件
    var inputEvent = new InputEvent('input', {
      data: name, // 输入的汉字
      isComposing: true,
    });

    input.dispatchEvent(inputEvent);


  } else {
    alert('Input with class yc-editor-wrapper not found.');
  }
  // 获取发送按钮并发送
  setTimeout(() => { // 延迟发送，防止发送失败
    var button = document.querySelector('.VAtmtpqL');
    if (button) {
      button.click();
    } else {
      alert('Button with class VAtmtpqL not found.');
    }
  }, 500)
  
  // const timer = setInterval(() => {
  //   var button = document.querySelector('.VAtmtpqL svg');
  //   // alert(button.getAttribute('width') == 240)
  //   if (button.getAttribute('width') == 240) {
  //     alert('点击按钮')
  //     document.querySelector('.VAtmtpqL').click();
  //     clearInterval(timer) // 清除定时器
  //   } else {
  //     alert('按钮是loading状态')
  //     // alert('Button with class VAtmtpqL not found.');
  //   }
  // }, 2000)
}
// 监控视频数目的变化
function monitorVideoCount() {
  // 监听DOM结构的变化
  const observer = new MutationObserver(() => {
      // 获取变化后的DOM数量
      let currentCount = document.getElementsByClassName('vjs-tech').length;
      ; // 视频和文字不是同时生成。需要按最后文字生成完计算
      // 判断数量是否发生变化
      if (currentCount !== initialCount) {
        downloadVideo() // 下载视频
        clearInterval(timer) // 清除定时器
        monitorVideoChangeError() // 重新开始计时
        // 更新初始数量
        initialCount = currentCount;
        if (initialCount + errorCount >= array.length) {
          if (batch === 1) {
            alert('第一批次生成完毕，开始将上一批次的错误词条生成视频')
            // 第二批次开始后，记录的成功失败代表的是两次批次的成功失败
            batch++
            array.push(...getErrorWord())
          } else {
            alert('已经生成完毕')
            clearInterval(timer) // 清除定时器
            // 监听DOM结构的变化停止
            observer.disconnect();
          }
          return
        }
        generateVideo() // 生成视频
      }

      let currentErrorCount = 0
      for (let index = 0; index < document.getElementsByClassName('MuW1NXvm').length; index++) {
        if (document.getElementsByClassName('MuW1NXvm')[index].innerText === '当前您的指令超出了插件预设能力范围，您可展开插件执行状态，或换一个指令再次尝试。') {
          currentErrorCount++
        }
      }
      // 判断数量是否发生变化
      if (currentErrorCount !== errorCount) {
        clearInterval(timer) // 清除定时器
        monitorVideoChangeError() // 重新开始计时
        // 更新初始数量
        errorCount = currentErrorCount;
        if (initialCount + errorCount >= array.length) {
          if (batch === 1) {
            alert('第一批次生成完毕，开始将上一批次的错误词条生成视频')
            // 第二批次开始后，记录的成功失败代表的是两次批次的成功失败
            batch++
            array.push(...getErrorWord())
          } else {
            alert('已经生成完毕')
            clearInterval(timer) // 清除定时器
            // 监听DOM结构的变化停止
            observer.disconnect();
          }
          
          return
        }
        // 生成视频
        setTimeout(() => {
          generateVideo()
        }, 10000);
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
  }, 300000)
}

// 下载文件
function daonload(url, name){
  // 方法一
  // alert('fetch' + !!fetch + 'window.fetch' + !!window.fetch)
// fetch('http://localhost:3000/proxy?url=' + url + '&fileName=' + name)
// .then(res => res.blob())
// .then(blob => {
// const a = document.createElement("a");
// const objectUrl = window.URL.createObjectURL(blob);
// a.download = name;
// a.href = objectUrl;
// a.click();
// window.URL.revokeObjectURL(objectUrl);
// a.remove();
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

/**
 * 词条生成失败的收集机制
 **/
// 获取没有生成视频的词条
function getErrorWord() {
  const errorWord = []

  // 递归查找具有指定类名的祖先元素
  function findAncestorWithClass(element, className) {
      while ((element = element.parentElement) && !element.classList.contains(className));
      return element;
  }

  for (let index = 0; index < document.getElementsByClassName('MuW1NXvm').length; index++) {
    if (document.getElementsByClassName('MuW1NXvm')[index].innerText === '当前您的指令超出了插件预设能力范围，您可展开插件执行状态，或换一个指令再次尝试。') {
      // 获取祖先元素
      const ancestor = findAncestorWithClass(document.getElementsByClassName('MuW1NXvm')[index], 'RmHagX8t');
      // 检查是否找到了祖先元素
      if (ancestor) {
          // 获取祖元素的下一个兄弟元素
          const sibling = ancestor.nextElementSibling;
          // 检查是否找到了下一个兄弟元素
          if (sibling) {
              // 获取下一个兄弟元素的子元素
              const childZi = sibling.querySelector('.H7oUCk_o');
              // 检查是否找到了子元素
              if (childZi) {
                  // alert('找到符合条件的元素:'+ childZi.textContent);
                  errorWord.push(childZi.textContent)
              } else {
                alert('未找到符合条件的子元素');
              }
          } else {
            alert('未找到符合条件的兄弟元素');
          }
      } else {
        alert('未找到符合条件的祖先元素');
      }
    }
  }

  const modifiedArray = errorWord.map(str => {
    const matchResult = str.match(/生成一个(.*?)的视频/);
    return matchResult ? matchResult[1] : null;
  });
  return [...new Set(modifiedArray)]
}
