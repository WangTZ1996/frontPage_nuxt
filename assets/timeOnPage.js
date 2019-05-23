let jq = document.createElement('script');
jq.setAttribute('src','https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js');
document.querySelector('body').appendChild(jq);
let buriedPoint = {};
buriedPoint.userAct = [];
buriedPoint.userError = [];
buriedPoint.url = window.location.href;
let begin = new Date().getTime();

//采集用户的点击行为
function click(e) {
  let parent = e.target.parentNode.parentNode.parentNode.innerText.split(/\n/)[0];
  let son = e.target.innerText;
  if (parent.length <= 6) { buriedPoint.userAct.push(parent + " " + son) }
  else { buriedPoint.userAct.push(son)}
}
window.addEventListener("click", click, false);

//采集用户的报错信息
window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
  let arr = [];
  arr.push("信息：" + errorMessage);
  arr.push("文件：" + scriptURI);
  arr.push("行号：" + lineNumber);
  arr.push("列号：" + columnNumber);
  arr.push("详情：" + errorObj);
  buriedPoint.userError.push(arr);
}

//获取用户浏览器视窗信息
function getScreenSize() {
  let width = window.screen.availWidth;
  let height = window.screen.availHeight;
  return width + 'x' + height;
}
let screenSize = getScreenSize();
buriedPoint.screenSize = screenSize;

//用户文档下载次数记录

//心跳检测
function loadXMLDoc() {
  buriedPoint.stayTime = new Date().getTime() - begin;
  buriedPoint.userAct = buriedPoint.userAct.join(',');
  buriedPoint.userError = buriedPoint.userError.join(',');
  // console.log(buriedPoint);
  $.post('http://10.1.1.147:8081/user',
  buriedPoint
  )
  buriedPoint.userAct = [];
  buriedPoint.userError = [];
}
setInterval(loadXMLDoc, 10000);

//js 报错，错误信息检测
//用户点击具体元素的反馈检测
//用户在页面上每一区域停留时间的检测
