chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'clickButton') {
      initialCount = document.getElementsByClassName('vjs-tech').length
      errorCount = document.getElementsByClassName('custom-html').length
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

const string = `介绍组合成套型的结构特点
介绍多元组合型的结构简图
介绍多元组合型的结构特点
介绍后置齿轮减速箱组合型结构简图
介绍后置齿轮减速箱组合型的结构特点
介绍后置行星齿轮是减速型的结构特点
介绍后置行星齿轮是减速型的结构简图
介绍液力偶合器传动装置结构及特点
前置齿轮式增速型液力偶合器传动装置结构
前置齿轮式增速型液力偶合器传动装置的特点
介绍后置齿轮式减速型液力偶合器传动装置
复合齿轮是前增后增型液力偶合器传动装置
介绍组合成套型液力偶合器传动装置
后置齿轮式减速正车型液力偶合器传动装置
介绍多元组合型液力偶合器传动装置
介绍多元组合型液力偶合器传动装置特点
介绍液力减速器
介绍机车用液力减速器
介绍汽车用液力减速器分类
介绍单一减速制动型特性
介绍牵引制动复合型的特性
建设汽车用液力减速器的控制系统
介绍驱动状态
介绍发电状态
介绍驱动系统
介绍控制系统
介绍下运带式液力减速器控制系统功能
采区停电紧急制动工况液力减速器控制说明
介绍液力偶合器设计分类
介绍创新设计的说明
介绍类比设计的说明
介绍仿形设计的说明
介绍变形设计说明
介绍成套设计的说明
介绍选型匹配设计的说明
介绍配套建设计的说明
介绍机组调速系统控制设计的说明
介绍液力元件的类比设计
介绍相似理论
介绍相似准则
介绍设计步骤
介绍注意事项
介绍限矩型液力偶合器设计
介绍工作腔模型及选择
介绍选择过载系数低的腔型
介绍分流泄液
介绍阻流
介绍改进叶轮结构
介绍部分液体偶合器工作腔几何参数及特性
介绍标准型工作腔形状
介绍标准型原始特性曲线
介绍标准型的几何参数
介绍标准型的特性参数
介绍标准型的特点
介绍长圆形的工作腔形状
介绍长圆形的原始特性曲线
介绍长圆形的几何参数
介绍长圆形的特性参数
介绍长圆形的特点
介绍圆形的工作腔形状
介绍圆形的原始特性曲线
介绍圆形的几何参数
介绍圆形的特性参数
介绍圆形的特点
介绍桃形的原始特性曲线
介绍桃形的工作腔形状
介绍桃形的几何参数
介绍桃形的特性参数
介绍桃形的特点
介绍多角形的工作腔特点
介绍多角形的几何参数
介绍多角形的特性参数
介绍多角形的特点
介绍多角形的原始特性曲线
介绍静压泄液式的原始特性曲线
介绍静压泄液式的几何参数
介绍静压泄液式的特性参数
介绍静压泄液式的特点
介绍动压泄液式的工作腔形状
介绍静压泄液式的工作腔形状
介绍动压泄液式的几何参数
介绍动压泄液式的原始特性曲线
介绍动压泄液式的特点
介绍延充式的工作腔形状
介绍延充式的几何参数
介绍延充式的特性参数
介绍延充式的特点
介绍限矩型液力偶合器的辅助腔
介绍限矩型液力偶合器辅助腔的作用`

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
  setTimeout(() => {
    document.querySelector('.VAtmtpqL').click();
  }, 30000)
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
      let currentCount = document.getElementsByClassName('MuW1NXvm').length; // 视频和文字不是同时生成。需要按最后文字生成完计算
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
          }
          return
        }
        generateVideo() // 生成视频
      }

      let currentErrorCount = document.getElementsByClassName('custom-html').length;
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
function downloadVideo(videoUrl, index) {
  // 去掉查询字符串
  const url = new URL(videoUrl);
  url.search = '';
  const updatedUrlString = url.toString();
  const name = array[initialCount + errorCount] + '-' + index + '.mp4'
  // 输出视频地址
  daonload(updatedUrlString, name);
}

/**
 * 词条生成失败的收集机制
 **/
// 获取没有生成视频的词条
function getErrorWord() {
  const errorWord = []
  // 获取所有 class 为 'custom-html' 的元素
  const elementsA = document.getElementsByClassName('custom-html');

  // 遍历这些元素
  for (let i = 0; i < elementsA.length; i++) {
      // 获取祖先元素
      const ancestor = findAncestorWithClass(elementsA[i], 'RmHagX8t');
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

  // 递归查找具有指定类名的祖先元素
  function findAncestorWithClass(element, className) {
      while ((element = element.parentElement) && !element.classList.contains(className));
      return element;
  }

  const modifiedArray = errorWord.map(str => {
    const matchResult = str.match(/生成一个(.*?)的视频/);
    return matchResult ? matchResult[1] : null;
  });
  return [...new Set(modifiedArray)]
}