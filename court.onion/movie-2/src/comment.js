let date = new Date().getTime();

if (localStorage.getItem(['first visit 2']) === null) {
    localStorage.setItem(['first visit 2'], [date]);
}

localStorage.setItem(['last visit 2'], [date]);

const apart = `____________________________________________________________________`

let commentList = [`1こめ<br>${apart}<br>`, `2こめ<br>${apart}<br>`, `いきなり縛られてて草<br>${apart}<br>`, `今回は目隠しないのな<br>${apart}<br>`, `自撮り犯人ニキすこ<br>${apart}<br>`, `画質改善した<br>${apart}<br>`, `今回は絞殺か<br>${apart}<br>`, `カーテンレールの耐荷重えぐない？<br>${apart}<br>`, `いいぞもっとやれ（こんなの間違ってる）<br>${apart}<br>`, `↓本音と建前逆になってますよ<br>${apart}<br>`, `スピード感www<br>${apart}<br>`, `?!?!?!?!?!?!?!?!?!?!?!<br>${apart}<br>`, `あっさり倒れたしwww<br>${apart}<br>`, `いやまじかwwwwwww<br>${apart}<br>`, `大草原<br>${apart}<br>`, `米欄誰も犯罪意識ないの草<br>${apart}<br>`, `↓それなこれ連続殺人やん<br>${apart}<br>`, `うーん、これはネタ！w<br>${apart}<br>`, `こマ？<br>${apart}<br>`, `背負い投げしなきゃいかんとか非力かよ<br>${apart}<br>`, `wwwwwwwwwww<br>${apart}<br>`, `戻ってきた<br>${apart}<br>`, `死んだん？<br>${apart}<br>`, `安定のブレブレ<br>${apart}<br>`, `最後の切れ方だけ配信らしいのすこ<br>${apart}<br>`, `これマネキン？<br>${apart}<br>`]; //入れたいコメントを入力
let delay = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 7300, 7700, 8000, 8500, 9000, 9300, 9900, 10300, 12000, 13000, 13500, 13700, 14000, 14300, 14600, 15000, 16500, 17500, 17700]; //読み込まれてから約何ミリ秒で表にさせるかを入力
let firstVisit = Number(localStorage.getItem(['first visit 2']));
let lastVisit = Number(localStorage.getItem(['last visit 2']));
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