$(document).ready( function(){
//這邊有點囉嗦把放在index script 裡面的 handlebars-template 提出來
//直接弄個獨立的html tmeplate塞比較整齊
var source   = $("#template").html();
//這邊有三個變數 template context html 
//html 是用來執行 template　和 context 的
//template 由 source 提取樣版
//context 則是 JSON 格式放置的填充物
var template = Handlebars.compile(source);
var context = {
  BOARDNAME: "綜合二",
  POINT: 123456,
  SWATCHES: 2,
  TITLE: "不會游泳怎麼辦?",
  NAME: "無名",
  POSTTIME: "2013/07/04",
  CONTENT: "不會游泳，現在要進去海陸新訓了........<br>感覺這一年當兵生活會很慘",
  imgNo: "01",
  imgSize: "150x100",
  REPLYCOUNT: "432",
  POSTNUMBER: "No.12345678"
  ,
  comments: [{
  	BOARDNAME: "綜合二",
  	POINT: 123456,
  	SWATCHES: 2,
    TITLE: "不會游泳怎麼辦?",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "不會游泳，現在要進去海陸新訓了........<br>感覺這一年當兵生活會很慘",
    imgNo: "01",
    imgSize: "150x100",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 45623,
  	SWATCHES: 3,
    TITLE: "無標題",
    NAME: "ㄈㄓZ",
    POSTTIME: "2013/07/04",
    CONTENT: "李嫌和王女原本約在高鐵台南站見面，因鄰居發現王母失蹤",
    imgNo: "02",
    imgSize: "150x20",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "新聞速報",
  	POINT: "78,645,456",
  	SWATCHES: 1,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "外來種賤女狗公惱羞開始血尿跳針哭哭ㄛwwwwww<br>護航乙",
    imgNo: "03",
    imgSize: "125x125",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 456456,
  	SWATCHES: 2,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李搞不好李嫌跟王女真的有交往過<br>因為某某原因而否認了<br>就跟以前認識某女明明就有暗示我告白<br>結果我沒告白就到處抹黒我說我有嚴重妄想症一樣",
    imgNo: "04",
    imgSize: "100x150",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 456,
  	SWATCHES: 5,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "這麼簡單的事?<br>那勇者都不用當勇者了",
    imgNo: "",
    imgSize: "10x150",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 14566,
  	SWATCHES: 4,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "肥宅果然只會在這嘴砲wwwwwwwww",
    imgNo: "06",
    imgSize: "30x30",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 78956,
  	SWATCHES: 3,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "你是衛生棉我是經血",
    imgNo: "07",
    imgSize: "60x60",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 79,
  	SWATCHES: 0,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "剛剛在巴哈看到一個設定廚在寫小說<br>訂了一堆中二的設定= =",
    imgNo: "",
    imgSize: "90x90",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 5,
  	SWATCHES: 0,
    TITLE: "無標題",
    NAME: "09",
    POSTTIME: "2013/07/04",
    CONTENT: "幹!!!! animate有夠多人<br>早上九點半過去看,<br>一群肥宅油腐就已經開始擠在外面排隊了<br>害我差點被油煙悶死",
    imgNo: "09",
    imgSize: "110x180",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 76,
  	SWATCHES: 0,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "漫畫買了很佔位子<br>外加跟我迷的人也不講什麼義氣只會凹人",
    imgNo: "10",
    imgSize: "150x250",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 78623,
  	SWATCHES: 3,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "野生的外來種?<br>賣ACG周邊&原版漫畫&同人誌",
    imgNo: "11",
    imgSize: "150x50",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 78656456,
  	SWATCHES: 1,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "那個是來釣我話的你被釣幹麻",
    imgNo: "12",
    imgSize: "10x150",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 56,
  	SWATCHES: 0,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "實體店面不都比較貴嗎?<br>網拍買不就好了",
    imgNo: "13",
    imgSize: "150x10",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 1789,
  	SWATCHES: 1,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "夜店台女有福囉~抗告成功、土耳其男大生今可望交保",
    imgNo: "",
    imgSize: "120x120",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 353453,
  	SWATCHES: 2,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "無本文",
    imgNo: "15",
    imgSize: "50x30",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 453,
  	SWATCHES: 1,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "為什麼支那賤畜一聽到台灣女生說話就射啦<br>我剛剛無聊上百度搜尋台灣女生，發現很多426很哈台灣的劍",
    imgNo: "16",
    imgSize: "20x10",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 123456,
  	SWATCHES: 3,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "問一下 問答板為什麼只能設3個問題? 我看其他人都25題耶",
    imgNo: "17",
    imgSize: "100x20",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 453453,
  	SWATCHES: 2,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "有島民學過速讀嗎?<br>我想要自學卻不知道要怎麼入門",
    imgNo: "18",
    imgSize: "200x10",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 51245,
  	SWATCHES: 3,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "有島民知道拿熱水沖屁眼完5分鐘在拿冷水沖是什麼感覺嗎",
    imgNo: "",
    imgSize: "130x150",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  },{
  	BOARDNAME: "綜合二",
  	POINT: 7857853435,
  	SWATCHES: 1,
    TITLE: "無標題",
    NAME: "無名",
    POSTTIME: "2013/07/04",
    CONTENT: "有什麼地方可以吹冷氣又有插座?",
    imgNo: "20",
    imgSize: "150x150",
    REPLYCOUNT: "432",
    POSTNUMBER: "No.12345678"
  }]
};
Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});
//-----------------------------------
var html    = template(context);
//目前用最單純的 append 將 html 合併的結果塞到 .box 裡面
//還沒有參考別人的作法，應該有比較好的使用方式才對
//再來就先把html和css完成再來處理handlebars
$(".box").append(html);
});