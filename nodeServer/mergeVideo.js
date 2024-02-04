const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

// 输入文件夹和输出文件夹
const inputFolder = 'exampleFolder';
const outputFolder = 'outputVideos';

// 合并视频文件的函数
async function mergeVideos(files, outputFile) {
  return new Promise((resolve, reject) => {
    const fileListPath = path.join(outputFolder, 'filelist.txt');

    // 创建一个文件列表，以便使用 concat 协议
    const fileContent = files.map(file => `file '../${file.replace(/'/g, "\\'")}'`).join('\n');
    fs.writeFile(fileListPath, fileContent)
      .then(() => {
        // 使用 FFmpeg 的 concat 协议合并文件
        const command = `ffmpeg -f concat -safe 0 -i "${fileListPath}" -c copy "${outputFile}"`;

        exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error merging videos for ${outputFile}:`, stderr);
            reject(error);
          } else {
            console.log(`Videos merged successfully for ${outputFile}:`, stdout);
            resolve();
          }
        });
      })
      .catch(reject);
  });
}

// 获取文件夹中的所有文件
async function getAllFiles(folder) {
  const files = await fs.readdir(folder);
  return files.map(file => path.join(folder, file));
}

// 根据文件名前缀分组
function groupFilesByPrefix(files) {
  const groups = {};
  files.forEach(file => {
    const prefix = file.match(/^[^-]+/)[0]; // 获取文件名中的前缀
    if (!groups[prefix]) {
      groups[prefix] = [];
    }
    groups[prefix].push(file);
  });
  return groups;
}

// 合并每个文件名前缀的视频
async function mergeAllVideos() {
  try {
    // 创建输出文件夹
    await fs.mkdir(outputFolder, { recursive: true });

    // 获取文件夹中的所有文件
    const allFiles = await getAllFiles(inputFolder);

    // 根据文件名前缀分组
    const fileGroups = groupFilesByPrefix(allFiles);

    // 合并每个分组的视频
    for (const prefix in fileGroups) {
      const files = fileGroups[prefix];
      const outputFile = path.join(outputFolder, `${prefix}.mp4`);
      await mergeVideos(files, outputFile);
    }

    console.log('All videos merged successfully.');
  } catch (error) {
    console.error('Error merging videos:', error);
  }
}

// 执行合并
mergeAllVideos();
