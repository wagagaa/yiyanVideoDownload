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
    } else if (request.action == 'record') {
      alert('已生成' + (initialCount + errorCount) + '个；成功' + initialCount + '个；失败' + errorCount + '个；总共' + array.length + '个')
    } else if (request.action == 'getError') {
      const errorWord = getErrorWord().join(splitStr)
      alert(errorWord)
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

const string = `生物共同的特征
怎样将两种不同的生物区分开
观察的重要性
什么是生物
怎样判断一个物体是否有生命
生物与环境的关系
介绍生物圈
野外生活的大熊猫主要分布在哪些地区吗
这些地区的环境有哪些适于大熊猫生活的特点
环境中有哪些因素影响生物的生活和分布
什么是环境
生物能影响和改变环境吗
 生物怎样适应环境
非生物因素对生物的影响
小麦的正常生长需要怎样的环境条件
影响小麦生活的非生物因素和生物因素有哪些
介绍鼠妇
介绍黄粉虫
生物因素对生物的影响
生物对环境的适应和影响
骆驼和骆驼刺是怎样适应缺水环境的
海豹是怎样适应寒冷环境的
蚯蚓是怎样影响和改变土壤环境的
哪些生物适应和影响环境的实例
植物对空气湿度的影响
什么是生态系统
生态系统的组成
在生态系统中，植物、动物和真菌分别扮演着什么角色
介绍生态系统中的生产者
介绍生态系统中的消费者
介绍生态系统中的分解者
介绍食物链
介绍食物网
生态系统的能力
生物圈的范围是怎样的
生态系统的类型有哪些
为什么说生物圈是最大的生态系统
介绍草原生态系统
介绍湿地生态系统
介绍海洋生态系统
介绍森林生态系统
介绍淡水生态系统
介绍城市生态系统
介绍农田生态系统
河流生态系统与哪些生态系统相关联
介绍河流生态系统
介绍生物圈II号
细胞有哪些细微的结构
动物细胞、植物细胞和构成你身体的细胞都是一样的吗
细胞又是怎样生活的
显微镜的结构
怎样释永信显微镜
使用显微镜有哪些注意事项
玻片标本有哪些类型
植物细胞临时装片是如何制作的
植物细胞的基本结构是怎样的
介绍切片
介绍涂片
介绍装片
制作临时装片
制作装片需要哪些工具
介绍细胞壁
介绍细胞膜
介绍细胞核
介绍细胞质
介绍液泡
介绍线粒体
介绍叶绿体
怎样制作动物细胞临时装片
动物细胞的基本结构是怎样的
动物细胞与植物细胞在基本结构上有哪些相同点和不同点
观察人的口腔上皮细胞
制作动物细胞模型
介绍细胞学说
细胞怎样从外界获取物质和能量
细胞生活需要的能量是从哪里来的呢
细胞核的主要作用是什么
细胞膜、叶绿体和线粒体分别起什么作用
介绍小羊多莉
克隆哺乳动物
生物体内的细胞数量是怎样增加的
细胞分裂过程中染色体数目有什么变化
介绍细胞的生长
介绍细胞的分裂
介绍细胞的分化
介绍染色体
介绍癌细胞
介绍DNA
壁虎尾巴断掉后还会重新长出来吗
多细胞生物体内多种多样的细胞是怎样形成的
细胞怎样构成一个结构复杂的生物体的
介绍上皮细胞
介绍肌肉细胞
介绍神经细胞`
const array = string.split('\n')
// const array = string.split('；')
// 获取初始的DOM数量
let initialCount = 0
// 无法生成视频的次数
let errorCount = 0
// 词条生成批次
let batch = 1
// 生成视频
function generateVideo() {
  // 获取输入框并输入
  var input = document.querySelector('.wBs12eIN');
  if (input) {
    const name = '生成一个' + array[initialCount + errorCount] + '的视频'
    input.value = name;
    input.innerHTML = name;
    input.textContent = name;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  } else {
    alert('Input with class wBs12eIN not found.');
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