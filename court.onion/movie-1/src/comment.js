let date = new Date().getTime();

if (localStorage.getItem(['first visit 1']) === null) {
    localStorage.setItem(['first visit 1'], [date]);
}

localStorage.setItem(['last visit 1'], [date]);

const apart = `____________________________________________________________________`

let commentList = [`1こめ<br>${apart}<br>`, `2こめ<br>${apart}<br>`, `wktk<br>${apart}<br>`, `期待<br>${apart}<br>`, `ん？<br>${apart}<br>`, `画質悪<br>${apart}<br>`, `↓思た<br>${apart}<br>`, `誰かいる？<br>${apart}<br>`, `目隠しされてる<br>${apart}<br>`, `ん？<br>${apart}<br>`, `？！<br>${apart}<br>`, `?!?!?!?!?!?!?!?!?!?!?!<br>${apart}<br>`, `殴った？！www<br>${apart}<br>`, `いやまじかwwwwwww<br>${apart}<br>`, `えこれマジならやばくね？<br>${apart}<br>`, `草w<br>${apart}<br>`, `↓草に草を生やすな(戒め)<br>${apart}<br>`, `う　せ　や　ろ<br>${apart}<br>`, `こマ？<br>${apart}<br>`, `BAN不可避<br>${apart}<br>`, `wwwwwwwwwww<br>${apart}<br>`, `ん？<br>${apart}<br>`, `死んでる？<br>${apart}<br>`, `生きてるよな？<br>${apart}<br>`, `↓いやさすがにネタだろ<br>${apart}<br>`, `動いたw<br>${apart}<br>`, `あれ？じゃあ誰がカメラを持って...?<br>${apart}<br>`, `ん？<br>${apart}<br>`, `ブレブレじゃねぇかw<br>${apart}<br>`, `なんかすごいもの見た希ガス<br>${apart}<br>`, `今度はなんか書いてんな<br>${apart}<br>`, `なんか書きはじめたw<br>${apart}<br>`, `書いてるwww<br>${apart}<br>`, `読めん<br>${apart}<br>`, `くっっっっっら<br>${apart}<br>`, `誰か読めるひとおらんの<br>${apart}<br>`, ` 誰も黒板あることに突っ込まないの草<br>${apart}<br>`, `上に明るいとこあんじゃん、、、<br>${apart}<br>`, `見えるか？<br>${apart}<br>`, `見えないまま書き終わるのかこれは<br>${apart}<br>`, `書き終わったぞw<br>${apart}<br>`, `見えねぇwww<br>${apart}<br>`, `結局見えねぇw<br>${apart}<br>`, `wwwwwwwwwww<br>${apart}<br>`, `ダメじゃんwww<br>${apart}<br>`, `いや待て？！<br>${apart}<br>`, `ドアの光で...<br>${apart}<br>`, `ざ　だいす　なんとか<br>${apart}<br>`, `何たらきゃすと？<br>${apart}<br>`, `The dice are cast<br>${apart}<br>`, `ざだいすあーきゃすと<br>${apart}<br>`, `賽は投げられた<br>${apart}<br>`, `もしかしてまだ殺人続くん？<br>${apart}<br>`]; //入れたいコメントを入力
let delay = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 11600, 11700, 11900, 12300, 12700, 13000, 13500, 13700, 14000, 14500, 15000, 16000, 17000, 19000, 19500, 19700, 19800, 19900, 20000, 20200, 20300, 20350, 21000, 22000, 23100, 24200, 25500, 27000, 29000, 30000, 30700, 31000, 31500, 32000, 33000, 34200, 34700, 34900, 35200, 35500, 35700, 36000, 37000]; //読み込まれてから約何ミリ秒で表にさせるかを入力
let firstVisit = Number(localStorage.getItem(['first visit 1']));
let lastVisit = Number(localStorage.getItem(['last visit 1']));
let writePlace = document.getElementById('comment');
let asistantDelay; //不規則性を追加

for (let i = 0; i < commentList.length; i++) {
    asistantDelay = Math.floor(Math.random() * 100) - 50;
    if (firstVisit + delay[i] + asistantDelay <= lastVisit) {
        delay[i] = 100;
    } else {
        delay[i] -= lastVisit - firstVisit - asistantDelay + 100;
    }
    setTimeout(function() {
        writePlace.innerHTML = commentList[i] + writePlace.innerHTML;
    }, delay[i]);
}