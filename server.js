//-----------Enable Express --------------------------//
//-----------Enable Express --------------------------//
const express = require('express');
const app = express();

//----------Welcome Route ----------------------------//
//----------Welcome Route ----------------------------//
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App');
});

//-----------Listen for Server------------------------//
//-----------Listen for Server------------------------//
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });