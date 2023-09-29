const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/createFile', (req, res) => {
  const currentDateTime = new Date().toISOString().replace(/:/g, '-');
  const fileName = `${currentDateTime}.txt`;
  const filePath = `./files/${fileName}`; 

  const fileContent = currentDateTime;

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log(`File ${fileName} created successfully.`);
    res.status(200).json({ message: 'File created successfully', fileName });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
