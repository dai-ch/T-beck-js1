'use strict'

let question = prompt('日本の首都は?');

while (question !== '東京') {
  alert('不正解です');
  question = prompt('日本の首都は?');
}

alert('正解です')