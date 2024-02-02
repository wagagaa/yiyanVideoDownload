// 服务器端代码（Node.js示例）
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const fs = require('fs').promises;
const path = require('path');

app.get('/proxy', async (req, res) => {
  try {
    let realName = req.query.fileName || 'default_filename.mp4'; // 使用默认文件名，如果没有提供自定义文件名
    const videoUrl = req.query.url;
    const response = await axios.get(videoUrl, { responseType: 'stream' });

    realName = encodeURI(realName,"GBK")
    realName = realName.toString('iso8859-1')
    res.set({
      ...response.headers,
      'Content-Disposition': `attachment; filename="${realName}"`
    });
    response.data.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/fs', async (req, res) => {
  try {
    const folderName = 'exampleFolder';
    // 创建文件夹
    if (!await folderExists(folderName)) {
      await fs.mkdir(folderName);
    }

    // 创建txt文件内容
    const fileContent = 'Hello, this is your txt file content!';

    // 创建txt文件在新建的文件夹中
    const filePath = path.join(folderName, 'example.txt');
    await fs.writeFile(filePath, fileContent);

  } catch (error) {
    console.log(error);
    // 发送错误响应
    res.status(500).send('Error creating txt file');
  }
});

// 辅助函数：检查文件夹是否存在
async function folderExists(folderPath) {
  try {
    const stats = await fs.stat(folderPath);
    return stats.isDirectory();
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false; // 文件夹不存在
    }
    throw error;
  }
}

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
