let date = new Date().getTime();

if (localStorage.getItem(['first visit 3']) === null) {
    localStorage.setItem(['first visit 3'], [date]);
}

localStorage.setItem(['last visit 3'], [date]);

const apart = `____________________________________________________________________`

let commentList = [`1こめ<br>${apart}<br>`, `ん？<br>${apart}<br>`, `いやこれ静止画やんけ！ｗｗｗ<br>${apart}<br>`, `おい犯人wwwwww<br>${apart}<br>`, `撮り忘れたんか<br>${apart}<br>`, `どうしてこうなった<br>${apart}<br>`, `くっそwwwwwwww<br>${apart}<br>`, `な　に　こ　れ<br>${apart}<br>`, `終わったしwwww<br>${apart}<br>`, `手抜きじゃねぇかwww<br>${apart}<br>`]; //入れたいコメントを入力
let delay = [1000, 2000, 3000, 3300, 3500, 3700, 4000, 4300, 4500, 4800]; //読み込まれてから約何ミリ秒で表にさせるかを入力
let firstVisit = Number(localStorage.getItem(['first visit 3']));
let lastVisit = Number(localStorage.getItem(['last visit 3']));
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