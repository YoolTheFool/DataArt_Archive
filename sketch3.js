var d118 = 0;
var d218 = 0;
var d117 = 0;
var d217 = 0;
var d116 = 0;
var d216 = 0;
var d115 = 0;
var d215 = 0;

var wid = window.innerWidth;
var hei = window.innerHeight;
var op = false;
var years = {};
var wordInput1;
var wordInput2;


var word1count18;
var word2count18;
var word1count17;
var word2count17;
var word1count16;
var word2count16;
var word1count15;
var word2count15;



function setup() {
  createCanvas(wid, hei);
  loadJSON('word_count_year_nouns.json', wordCount);
  wordInput1 = createInput('');
  wordInput2 = createInput('');
  wordInput1.position(10,100);
  wordInput2.position(10,200);

  var button = createButton('Enter');
  button.position(10,300);
  button.mousePressed(use);

}

function wordCount(data) {
  years = data;
}

function draw() {
  textAlign(CENTER);
  background(220);
  textSize(18);
  if (op) {
    if (years['2018'].length > 0) {
      for (var i = 0; i < years['2018'].length; i++) {
        if (wordInput1.value() == years['2018'][i][0]) {
          word1count18 = years['2018'][i][1];
          // console.log(wordInput1.value()+ '=' + word1count18);
        }
        if (wordInput2.value() == years['2018'][i][0]) {
          word2count18 = years['2018'][i][1];
          // console.log(wordInput2.value()+ '=' + word2count18);
        }
      }
      for (var i = 0; i < years['2017'].length; i++) {
        if (wordInput1.value() == years['2017'][i][0]) {
          word1count17 = years['2017'][i][1];
          // console.log(wordInput1.value()+ '=' + word1count17);
        }
        if (wordInput2.value() == years['2017'][i][0]) {
          word2count17 = years['2017'][i][1];
          // console.log(wordInput2.value()+ '=' + word2count17);
        }
      }
      for (var i = 0; i < years['2016'].length; i++) {
        if (wordInput1.value() == years['2016'][i][0]) {
          word1count16 = years['2016'][i][1];
          // console.log(wordInput1.value()+ '=' + word1count16);
        }
        if (wordInput2.value() == years['2016'][i][0]) {
          word2count16 = years['2016'][i][1];
          // console.log(wordInput2.value()+ '=' + word2count16);
        }
      }
      for (var i = 0; i < years['2015'].length; i++) {
        if (wordInput1.value() == years['2015'][i][0]) {
          word1count15 = years['2015'][i][1];
          // console.log(wordInput1.value()+ '=' + word1count15);
        }
        if (wordInput2.value() == years['2015'][i][0]) {
          word2count15 = years['2015'][i][1];
          // console.log(wordInput2.value()+ '=' + word2count15);
        }
      }
    }
    //2018
    if (d118 < word1count18){
      d118++;
    } else if(d118 > word1count18){
      d118--;
    }
    if (d218 < word2count18){
      d218++;
    } else if(d218 > word2count18){
      d218--;
    }
    text(d118,wid/5,100);
    text(d218,wid/5,200);
    //BARS
    var m18 = map(d118,0,300,0,100);
    var m28 = map(d218,0,300,0,100);
    rect(wid/5-10,105,m18,10);
    rect(wid/5-10,205,m28,10);

    //2017
    if (d117 < word1count17){
      d117++;
    } else if(d117 > word1count17){
      d117--;
    }
    if (d217 < word2count17){
      d217++;
    } else if(d217 > word2count17){
      d217--;
    }
    text(d117,wid - 3*wid/5,100);
    text(d217,wid - 3*wid/5,200);
    //BARS
    var m17 = map(d117,0,300,0,100)
    var m27 = map(d217,0,300,0,100)
    rect(wid - 3*wid/5-10,105,m17,10)
    rect(wid - 3*wid/5-10,205,m27,10)

    //2016
    if (d116 < word1count16){
      d116++;
    } else if(d116 > word1count16){
      d116--;
    }
    if (d216 < word2count16){
      d216++;
    } else if(d216 > word2count16){
      d216--;
    }
    text(d116,wid - 2*wid/5,100);
    text(d216,wid - 2*wid/5,200);
    //BARS
    var m16 = map(d116,0,300,0,100)
    var m26 = map(d216,0,300,0,100)
    rect(wid - 2*wid/5-10,105,m16,10)
    rect(wid - 2*wid/5-10,205,m26,10)

    //2015
    if (d115 < word1count15){
      d115++;
    } else if(d115 > word1count15){
      d115--;
    }
    if (d215 < word2count15){
      d215++;
    } else if(d215 > word2count15){
      d215--;
    }
    text(d115,wid - wid/5,100);
    text(d215,wid - wid/5,200);

    //BARS
    var m15 = map(d115,0,300,0,100)
    var m25 = map(d215,0,300,0,100)
    rect(wid - wid/5-10,105,m15,10)
    rect(wid - wid/5-10,205,m25,10)


  }
  // stroke(0);

  //TEXT YEARS
  textSize(24);
  fill(0);
  text('2018',wid/5,hei-hei/4);
  text('2017',wid - 3*wid/5,hei-hei/4);
  text('2016',wid - 2*wid/5,hei-hei/4);
  text('2015',wid - wid/5,hei-hei/4);


// noLoop();

}


function use() {
  op = !op
}
