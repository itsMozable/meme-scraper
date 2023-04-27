// Import cheerio package
import * as cheerio from 'cheerio';
// Engage fs ))
import fs from 'fs';
// Import module that brings Fetch API to Node.js.
import fetch from 'node-fetch';

// Fetching the URL and the Content
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
// Translate URL into HTML TEXT
const body = await response.text();

//Loading data into cheerio
const $ = cheerio.load(body);

// Creatoing For Loop fetching 10 pictures without refresh
for (let i = 1; i < 11; i++) {
  const currentImg = $('img', body)[i].attribs.src;
  fetch(currentImg).then((res) => {
    const path = './memes/' + '0' + i + '.jpg';
    const dest = fs.createWriteStream(path);
    res.body.pipe(dest);
    console.log(currentImg);
  });
}