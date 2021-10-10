let date = new Date().getTime();

if (localStorage.getItem(['first visit 4']) === null) {
    localStorage.setItem(['first visit 4'], [date]);
}

localStorage.setItem(['last visit 4'], [date]);

const apart = `____________________________________________________________________`

let commentList = [`1こめ<br>${apart}<br>`, `今回もスマホ撮りか<br>${apart}<br>`, `wktk<br>${apart}<br>`, `倒れてる<br>${apart}<br>`, `何だって手抜き多いな最近<br>${apart}<br>`, `なにこれ落とされたってこと？<br>${apart}<br>`, `死体きれいすぎワロタ<br>${apart}<br>`, `遂に犯人すら映らなくなった<br>${apart}<br>`, `これ死んでんの？<br>${apart}<br>`, `静止画よりはマシ<br>${apart}<br>`, `芝生がきれいですね（）<br>${apart}<br>`, `?!?!?!<br>${apart}<br>`, `てか警察何やってんダァ！<br>${apart}<br>`, `これで連続殺人も終わりか<br>${apart}<br>`]; //入れたいコメントを入力
let delay = [1000, 1500, 2000, 2300, 2700, 3000, 3300, 3500, 3700, 4000, 4500, 5000, 5500, 6000]; //読み込まれてから約何ミリ秒で表にさせるかを入力
let firstVisit = Number(localStorage.getItem(['first visit 4']));
let lastVisit = Number(localStorage.getItem(['last visit 4']));
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