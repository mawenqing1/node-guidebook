(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{PbaM:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u8f6c\u6362\u6d41"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8f6c\u6362\u6d41"},l.a.createElement("span",{className:"icon icon-link"})),"\u8f6c\u6362\u6d41"),l.a.createElement("p",null,"\u53d8\u6362\u6d41\uff08Transform Streams\uff09\u662f\u4e00\u79cd Duplex \u6d41\u3002\u5b83\u7684\u8f93\u51fa\u4e0e\u8f93\u5165\u662f\u901a\u8fc7\u67d0\u79cd\u65b9\u5f0f\u5173\u8054\u3002\u548c\u6240\u6709 Duplex \u6d41\u4e00\u6837\uff0c\u53d8\u6362\u6d41\u540c\u65f6\u5b9e\u73b0\u4e86 Readable \u548c Writable \u63a5\u53e3\u3002"),l.a.createElement("p",null,"\u5bf9\u4e8e\u8f6c\u6362\u6d41\uff0c\u6211\u4eec\u4e0d\u5fc5\u5b9e\u73b0 ",l.a.createElement("code",null,"read")," \u6216 ",l.a.createElement("code",null,"write")," \u65b9\u6cd5\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a ",l.a.createElement("code",null,"transform")," \u65b9\u6cd5\uff0c\u5c06\u4e24\u8005\u7ed3\u5408\u8d77\u6765\u3002\u5b83\u6709 ",l.a.createElement("code",null,"write")," \u65b9\u6cd5\u7684\u610f\u601d\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u7528\u5b83\u6765 ",l.a.createElement("code",null,"push")," \u6570\u636e\u3002"),l.a.createElement("p",null,"\u53d8\u6362\u6d41\u7684\u5b9e\u4f8b\u5305\u62ec\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"zlib streams"),l.a.createElement("li",null,"crypto streams")),l.a.createElement(c.a,{code:"const { Transform } = require('stream');\nconst upperCase = new Transform({\n  transform(chunk, encoding, callback) {\n    this.push(chunk.toString().toUpperCase());\n    callback();\n  },\n});\n\nprocess.stdin.pipe(upperCase).pipe(process.stdout);\n",lang:"js"})))}}}]);