// 服务器端代码（Node.js示例）
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
