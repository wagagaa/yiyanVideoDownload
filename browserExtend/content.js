chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'clickButton') {
      initialCount = 0
      let currentErrorCount = 0
      for (let index = 0; index < document.getElementsByClassName('MuW1NXvm').length; index++) {
        if (document.getElementsByClassName('MuW1NXvm')[index].innerText === '当前您的指令超出了插件预设能力范围，您可展开插件执行状态，或换一个指令再次尝试。') {
          currentErrorCount++
        } else if (document.getElementsByClassName('MuW1NXvm')[index].innerText === '视频已生成，请点击播放。部分的方言播报，以及指定背景音乐、视频时长、视频风格等，我还在探索和学习中。您也可以尝试其他视频，如：“生成智能交通的视频，四川话播报”。') {
          initialCount++
        }
      }
      errorCount = currentErrorCount + document.getElementsByClassName('D9GTH46h').length
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
  const baseName = array[initialCount + errorCount]
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
        console.log(videoArrSet.join('----'))
        videoArrSet.forEach((videoUrl, index) => {
          console.log('开始下载第' + (index + 1) + '个视频')
          setTimeout(() => {
            daonload(videoUrl, baseName + '-' + index + '.mp4')
          }, index * 1500);
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

const string = `介绍耐酸钢的特点及使用范围
介绍哈氏合金的特点及使用范围
介绍碳化钨硬质合金的特点及使用范围
介绍导电橡胶导电氟塑料的特点及使用方法
介绍电磁流量计的产品
介绍传感器技术指标
介绍转换器技术指标
介绍智能电磁流量计外形尺寸及质量
介绍电磁流量计技术参数
介绍流动方向
介绍量程比
介绍重复性误差
介绍进度等级
介绍被测介质温度
介绍电磁流量计选型代码
介绍氟丁橡胶主要性能
介绍氟丁橡胶适用范围
介绍聚氨酯橡胶主要性能
介绍聚氨酯橡胶适用范围
介绍聚四氟乙烯的主要性能
介绍聚四氟乙烯适用范围
介绍电极材料的选择
介绍电磁流量计电磁材料的选择
介绍电磁流量计口径及流量的选择
介绍涡街流量计
介绍涡街流量计工作原理与结构
介绍漩涡发生体和检测方式
介绍漩涡流量计分类
介绍电容式涡街流量计工作原理特点及应用
介绍应力式涡街流量计工作原理特点及应用
介绍升力式涡街质量流量计工作原理特点应用
介绍振动体式涡接流量计工作原理特点及应用
介绍热敏式涡街流量计工作原理特点及应用
介绍超声式涡街流量计的工作原理特点及应用
介绍差压式涡街质量流量计的工作原理
介绍法兰行和法兰夹持型
介绍按传感器结构的工作原理特点
介绍管道式涡街流量计
介绍插入式涡街流量计
介绍防爆型涡街流量计的工作原理`

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
  setTimeout(() => {
    var button = document.querySelector('.VAtmtpqL');
    if (button) {
      button.click();
    } else {
      alert('Button with class VAtmtpqL not found.');
    }
  }, 3000);
  
  
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
      let currentCount = 0
      for (let index = 0; index < document.querySelectorAll('.MuW1NXvm, .HhUPc5G2, .custom-html p').length; index++) {
        if (document.getElementsByClassName('MuW1NXvm')[index].innerText === '视频已生成，请点击播放。部分的方言播报，以及指定背景音乐、视频时长、视频风格等，我还在探索和学习中。您也可以尝试其他视频，如：“生成智能交通的视频，四川话播报”。') {
          currentCount++
        }
      }
      ; // 视频和文字不是同时生成。需要按最后文字生成完计算
      // 判断数量是否发生变化
      if (currentCount !== initialCount) {
        downloadVideoSection() // 下载视频
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
            return
          }
        }
        // 生成视频
        setTimeout(() => {
          generateVideo()
        }, 35000);
      }

      let currentErrorCount = 0
      for (let index = 0; index < document.querySelectorAll('.MuW1NXvm, .HhUPc5G2, .custom-html p').length; index++) {
        if (document.getElementsByClassName('MuW1NXvm')[index].innerText === '当前您的指令超出了插件预设能力范围，您可展开插件执行状态，或换一个指令再次尝试。') {
          currentErrorCount++
        }
      }
      currentErrorCount = currentErrorCount + document.getElementsByClassName('D9GTH46h').length
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
            return
          }
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
    var buttonLoading = document.querySelector('.mEKFkIX7'); // 停止生成的按钮
    if (buttonLoading) {
      buttonLoading.click();
    }
    // // 跳过当前词汇，生成下一个视频
    // errorCount++
    // if (initialCount + errorCount >= array.length) {
    //   alert('已经生成完毕')
    //   clearInterval(timer) // 清除定时器
    //   return
    // }
    // generateVideo()
    clearInterval(timer) // 清除定时器
    monitorVideoChangeError() // 重新开始计时
  }, 300000)
}

function alert (msg) {
  // 移除之前创建的元素
  var oldElement = document.querySelector('.alert');
  if (oldElement) {
    document.body.removeChild(oldElement);
  }
  // 动态创建一个元素，例如一个div
  var element = document.createElement('div');
  // 为元素添加类名
  element.className = 'alert';

  // 设置元素的内容，可以是文本、HTML或另一个元素等
  element.innerHTML = msg;

  // 设置样式，将其定位在页面的左上角
  element.style.position = 'absolute'; // 使用绝对定位
  element.style.top = '0';              // 距离页面顶部为0
  element.style.right = '0';             // 距离页面左边缘为0
  element.style.width = 'auto';        // 宽度自适应内容
  element.style.height = 'auto';       // 高度自适应内容
  element.style.backgroundColor = 'rgb(0, 0, 0)'; // 红色半透明背景
  element.style.color = 'white';       // 白色文字
  element.style.padding = '10px';      // 内边距10像素
  element.style.zIndex = '9999';       // 确保在最上层显示
  element.style.border = '1px solid #eee';
  // 可以添加更多样式，如背景色、边框等

  // 将元素添加到body中，使其成为body的子元素
  document.body.appendChild(element);
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
  // var link = document.createElement('a');
  // link.href = 'http://localhost:3000/proxy?url=' + url + '&fileName=' + name;
  // // 设置下载属性，包括文件名
  // link.download = name || 'video.mp4';
  // // 模拟点击触发下载
  // document.body.appendChild(link);
  // link.click();
  // // 清理创建的 <a> 元素
  // document.body.removeChild(link);

  // window.open('http://localhost:3000/proxy?url=' + url + '&fileName=' + name, '_blank')

  var iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:3000/proxy?url=' + url + '&fileName=' + name;
  iframe.style.display = 'none'; // 隐藏iframe
  document.body.appendChild(iframe);
  // 等待30秒后移除iframe
  setTimeout(function() {
    if (iframe.parentNode) {
      iframe.parentNode.removeChild(iframe);
    }
  }, 30000); // 30秒
}
// // 下载视频
// function downloadVideo(videoSource) {
//   // 获取视频并下载
//   var videoElement = document.querySelector('.vjs-tech');
//   // alert(!!videoElement)
//   if (videoElement) {
//     // 获取视频的当前源
//     var videoSource = videoElement.src;

//     // 去掉查询字符串
//     const url = new URL(videoSource);
//     url.search = '';
//     const updatedUrlString = url.toString();
//     const name = array[initialCount + errorCount] + '.mp4'
//     // 输出视频地址
//     console.log('Video Source:', updatedUrlString);
//     daonload(updatedUrlString, name);
//   } else {
//     console.error('Video element with class vjs-tech not found.');
//   }
// }

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

  // 找到没有生成视频的词条
  function findErrorWord(dom) {
    // 获取祖先元素
    const ancestor = findAncestorWithClass(dom, 'RmHagX8t');
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
          // 获取词条
          const word = childZi.innerText;
          // 将词条添加到数组中
          errorWord.push(word);
        }
      }
    }
    return errorWord
  }

  for (let index = 0; index < document.getElementsByClassName('MuW1NXvm').length; index++) {
    if (document.getElementsByClassName('MuW1NXvm')[index].innerText === '当前您的指令超出了插件预设能力范围，您可展开插件执行状态，或换一个指令再次尝试。') {
      findErrorWord(document.getElementsByClassName('MuW1NXvm')[index])
    }
  }
  for (let index = 0; index < document.getElementsByClassName('D9GTH46h').length; index++) {
    findErrorWord(document.getElementsByClassName('D9GTH46h')[index])
  }

  const modifiedArray = errorWord.map(str => {
    const matchResult = str.match(/生成一个(.*?)的视频/);
    return matchResult ? matchResult[1] : null;
  });
  return [...new Set(modifiedArray)]
}
