//パラメータによって初期化

if(location.search == "?init=true"){
    localStorage.clear();
    let url = location.href.split('?')[0];
    location.href = `${url}`;
}

if(location.search === "?checktime="){
    location.replace("https://court-onion.herokuapp.com/checktime?time="+localStorage.getItem(['first visit']));
}

if(location.search == "?eminence=grise"){
    $("#text").html("<p>まず、ここまで無事にたどり着いた君に敬意を表そう。<br>よくぞ、私の最期の事件たちを収束させてくれた。<br>勝手なことだと思うだろう。実際にそのとおりだ。私の我儘がこの現状を招いていると言ってもいい。<br>しかしこれだけは釈明させてほしい。私は断じて邪な気持ちを持って教師となったわけではない。<br><br>　幼少期から私の周りは黒い野望が渦巻いていた。兄はその中で唯一、私に優しくしてくれた。<br>ああ、我が兄は本当に優しかった。いつの間にか彼は生徒会長となり、多くの生徒が彼を支持した。<br>彼の派閥は卒業してからも続いた。総理大臣でも得難いような信頼できる仲間が集まった。<br>その結果、彼らは新興宗教として扱われるようになった。母校の中枢までもがその中にいた。<br><br>　勿論、私もその一人だった。しかし悲しいかな、私は血縁から冷酷非道の精神を受け継いでしまっていた。<br>そんな私も、集団の中ではそれなりに高い位置を保っていた。教祖の血縁だから、と。<br>何故だろうか、その時から私は歪んでしまったようだ。優しく優秀な兄がいて。私は兄ありきの存在なのだ。<br>私は独り立ちしたかった。私が私であるためには、最早兄の存在など邪魔なだけになっていた。<br>私はある者と兄を殺した。そして新たな男が教祖に立った。我が協力者・蒲生は副教祖となり、教団の影を受け持つようになった。<br>そして私は教団を出、教師となった。私を引き止めるものはいなかった...殆ど。<br>彼女の名は御神由香。兄の同級生で、副生徒会長だった存在。<br>今は警察庁の公安部に勤務しながらサイバー関係の操作を担っているらしい...ただし、そこで本名を名乗ることはない。君ももしかしたら一度会っているだろう。<br>彼女は私を引き止めようとした。しかし当然、それは成功しなかった。彼女の運命が狂ったのは、そこからだろう。<br><br>　そして教師生活を始めた頃、ある男が現れた。黒岩修二。優秀な刑事だ。<br>彼は私が兄を殺したことに勘づいていた。そして私に接触してきたのだ。私は逮捕を恐れた。刑罰を恐れた。そしてこの男を、恐れた。<br>それが我慢ならなかった。私は彼に復讐することにした。今思えば身勝手極まりないが、当時の私にはそれが正義だった。<br>私は御神に連絡をとり、すべてを話して協力を求めた。兄の事件は闇に葬られた。<br>そして教え子のうち、教団に所属している5人に暗示をかけた。いや、正確に言えばこれは蒲生の仕業だ。<br>そして私の教え子は奴を殺した。彼らを身代わりにして、私達は生きながらえた。<br><br>　しかし宜なるかな、今日私の教え子には非常に優秀なものが現れた。彼女は私の危険性に、そして副教祖により凶暴性を得た教団の危険性に勘づいたらしい。<br>一体何故？知ったことではない。その時私、御神、蒲生は共謀して金稼ぎをしていた。<br>蒲生は表向きにはNGOとなっている教団を使い金をプールする。御神はそれを隠蔽しつつ警察を制禦して捜査の手を遠ざける。そして私は純粋な生徒を秘密裏に教団に送り、また金の受け渡しを学校を通し行う。<br>もしかしたら生徒会予算を利用したのが危険だったのやもしれぬ。理由はともあれ、彼女が私に気づいた。<br><br>　本来なら私は彼女を始末したのだろう。しかし、長年の教師生活が、そこにあった純粋な少年少女の瞳が、私を変えていた。<br>最早私は冷酷非道な血族の冷酷非道な末裔ではなかった。私は優しさを、慈愛を、心というものを知った、一人の数学教師だった。<br>だが、それでもこの世界は止まらない。私には悪友がいる。二人は私が今更改心したなどと言っても聞かないだろう。<br><br>　だからこそ、私は最後にすべてを精算しようと決めた。<br>嘗ての教え子であり、私のスケープゴートとなった5人と御神。私の正体に気づいた佐々木。蒲生が操る兄の教団。<br>君が解決したであろう3つの事件は私の過去と、それを知りうる存在を全て崩壊させるためのものだったのだ。<br>精算のために罪を重ねるといえば、君は矛盾を感じるだろう。しかし私は生きながらすべてを知られるという恥より、善良な教師としての幕引きを選んだ。<br>償いにはならないかもしれない。だが、私は臆病なのだ。今回も自ら手を下すことはない。<br>タピオカへの恨みだったり、新たな生を望む気持ちだったり、はたまた一生徒の義憤であったり。<br>こうして私の計画は「鉄槌の部屋」と―私の棺となるべきものとともに動いた。ああ、ここを作ったのも、小鳥遊に貸したのも御神だ。<br>もし全てが私の予想通りなら、佐々木と蒲生は消え、教団は一掃され、小鳥遊は御神が手を下すだろう。<br>御神さえいれば今回の事件は大事にならない。私は善良な数学教師として、自らの命を絶つ。<br>だが、私の中には私を示したいという思いもあった。それは、私が兄を手にかけた、あの日からずっと持ち続けていた思い。<br>だから私は最期に、御神を使いすべてを知ったAIを作り出した。そしてそれが、君を助けてきただろう。<br>台詞は私と御神で用意した。時には優しく、時には冷徹に君を導いてくれたことと思う。<br><br>　これが私から君への、最期のゲームだ。そして君は見事にやり遂げた。<br>私が私でいられる間に私を救ってくれたこと、心から感謝する。<br>これを以て私の遺言としよう。では、今目の前を歩く君がここにたどり着くことを祈っている。<br><br>　　　　　　　　　　　　　　　　　　　　Y.K.</p>");
    $(".center").html("<video src='img/a.mp4' controls></video><!--ありがとう-->");
    $("#buttons").html("")
}
//jQueryを使ってdiv内のHTMLを出力
function BtnClick() {
    let str = escapeHtml($("#body").html()).replace(/\n/g, "<br>");
    $("#buttons").html(str.replace(/&lt;!--/g,"<span>&lt;!--").replace(/--&gt;/g,"--&gt;</span>"));
}

function escapeHtml(html) {
    return $('<div/>').text(html).html();
}

//localStorageを使って時間で動画を管理
let date = new Date().getTime();

if (localStorage.getItem(['first visit']) === null) {
    localStorage.setItem(['first visit'], [date]);
}

localStorage.setItem(['last visit'], [date]);

let first = Number(localStorage.getItem(['first visit']));
let last = Number(localStorage.getItem(['last visit']));

//ミリ秒単位での秒、分の定義
const sec = 1000;
const min = 60000;

//Service Worker初期化
navigator.serviceWorker.register('../sw.js');

//前の動画を見てから1分、5分、15分、20分で56す動画有効化&サムネ変更&通知を送信
$(function() {
    setTimeout(function() {
        try{
            $('#0001').html('<a href="movie-1/" target="_brank"><img src="img/DSC_0002.jpg"></a>\n<!--1412141115222₈₅13412352414321"1212 = えいえんにきょうたくにたつがいい-->');
            if (localStorage.getItem(["send1"]) === null) {
                    navigator.serviceWorker.ready.then(function(registration) {
                        registration.showNotification('死刑執行', {
                            body: "間もなく処刑の配信を開始します。写真から動画閲覧ページに移動し待機していてください。"
                        });
                    });
                localStorage.setItem(["send1"], ["sent"]);
            }
        }catch(e){
            alert(e+"sending");
        }
    }, first + min - last);

    setTimeout(function() {
        $('#0002').html('<a href="movie-2/" target="_brank"><img src="img/dead-2.png"></a>\n<!--325285₄₃445557232"83135251949341"9513 = しによってのみじゆうになれるだろう-->');
        if (localStorage.getItem(["send2"]) === null) {
                navigator.serviceWorker.ready.then(function(registration) {
                    registration.showNotification('死刑執行', {
                        body: "間もなく処刑の配信を開始します。写真から動画閲覧ページに移動し待機していてください。"
                    });
                });
            localStorage.setItem(["send2"], ["sent"])
        }
    }, first + min * 5 - last);

    setTimeout(function() {
        $('#0003').html('<a href="movie-3/" target="_brank"><img src="img/dead-3-3.jpg"></a>\n<!--7352105238111144"439153219495 = むちをくやんでつらぬかれろ-->');
        $('#buttons').html('<p><button onclick="BtnClick()"></button></p>');
        if (localStorage.getItem(["send3"]) === null) {
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification('死刑執行', {
                    body: "間もなく処刑の配信を開始します。写真から動画閲覧ページに移動し待機していてください。"
                });
            });
            localStorage.setItem(["send3"], ["sent"])
        }
    }, first + min * 15 - last);

    setTimeout(function() {
        $('#0004').html('<a href="movie-4/" target="_brank"><img src="img/dead-4-2.jpg"></a>\n<!--1545331110194317571412310121915112 = おとすあわれさもまったくわかない-->');
        if (localStorage.getItem(["send4"]) === null) {
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification('死刑執行', {
                    body: "間もなく処刑の配信を開始します。写真から動画閲覧ページに移動し待機していてください。"
                });
            });
            localStorage.setItem(["send4"], ["sent"])
        }
    }, first + min * 20 - last);
});

//通知の送信の許可を得る
(function() {
  if ("Notification" in window) {
    var permission = Notification.permission;

    if (permission === "denied" || permission === "granted") {
      return;
    }

    Notification
      .requestPermission()
      .then(function() {
        var notification = new Notification("通知が有効化されました。配信をお待ち下さい。");
      });
  }
})();
