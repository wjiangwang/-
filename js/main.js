var result = `/*面试官你好，我是xxx
*这是我的动画简历
*只用文字介绍太单调了
*让我用代码介绍吧
*首先加些样式*/
*{
  transition:all 1s;
}
html{
  font-family:Microsoft YaHei;
  font-weight: 400;
  font-size:16px;
  background:#3f5263;
}
#code{
  background:rgb(222,222,222);
  overflow:hidden;
  height:100vh;
  width:41%;
  margin:16px;
  padding:16px;
  border:1px solid red;
  float:left;
  
}
/*代码不美观，来点高亮吧*/
.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.punctuation{
  color: #999;
}
.token.function{
    color: #DD4A68;
}
/*来一个旋转*/
#code{
  transform:rotate(360deg)
}
/*开始正式的介绍自己，先来一张白纸吧*/


`;

var result2 = `#paper{
  overflow:hidden;
  width:41%;
  height:100vh;
  padding:16px;
  margin:16px;
  float:right;
  background:whitesmoke;
}
`;

var md = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`;

wirtCode("", result, function() {
  creatPaper(
    wirtCode(result, result2, function() {
      wirtMarkdown("", md);
    })
  );
});

function wirtMarkdown(preResumeText, resumeText, fn) {
  let resumePaper = document.getElementById("paper");
  let n = 0;
  let id = setInterval(function() {
    resumePaper.innerHTML = preResumeText + resumeText.slice(0, n);
    n += 1;
    resumePaper.scrollTop = resumePaper.scrollHeight;
    if (n >= resumeText.length) {
      window.clearInterval(id);
      fn();
    }
  }, 10);
}

function creatPaper(fn) {
  var paper = document.createElement("pre");
  paper.id = "paper";
  paper.classList.add("clearfix");
  document.body.appendChild(paper);
  console.log("纸好了");
  fn();
}

function wirtCode(preResult, codeText, fn) {
  let n = 0;
  let id = setInterval(function() {
    console.log(1);
    code.innerHTML = Prism.highlight(
      preResult + codeText.slice(0, n),
      Prism.languages.css,
      "css"
    );
    styleTag.innerHTML = preResult + codeText.slice(0, n);
    n += 1;
    code.scrollTop = code.scrollHeight;
    if (n >= codeText.length) {
      window.clearInterval(id);
      fn();
    }
  }, 10);
}
