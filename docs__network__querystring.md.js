(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{pzUj:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"querystring-\u67e5\u8be2\u5b57\u7b26\u4e32"},l.a.createElement("a",{"aria-hidden":"true",href:"#querystring-\u67e5\u8be2\u5b57\u7b26\u4e32"},l.a.createElement("span",{className:"icon icon-link"})),"QueryString \u67e5\u8be2\u5b57\u7b26\u4e32"),l.a.createElement("p",null,l.a.createElement("code",null,"querystring")," \u6a21\u5757\u662f Node.js \u63d0\u4f9b\u7684\u7528\u4e8e\u89e3\u6790\u548c\u683c\u5f0f\u5316 URL \u67e5\u8be2\u5b57\u7b26\u4e32\u7684\u5b9e\u7528\u5de5\u5177\uff0c\u5141\u8bb8\u7528\u6237\u63d0\u53d6 URL \u7684\u67e5\u8be2\u90e8\u5206\u7684\u503c\u548c\u4ece\u952e\u503c\u5173\u8054\u7684\u5bf9\u8c61\u6784\u5efa\u67e5\u8be2\u7684\u6a21\u5757\u3002\u8be5\u6a21\u5757\u5b9a\u4e49\u7684\u65b9\u6cd5\u4e3b\u8981\u57fa\u4e8e URL \u7684\u4f20\u7edf\u5b9a\u4e49 ",l.a.createElement("code",null,"&"),"\u3001",l.a.createElement("code",null,"=")," \u7b49\u6765\u5e8f\u5217\u5316\u6210\u5bf9\u8c61\u7c7b\u578b\u3002"),l.a.createElement("p",null,"\ud83c\udf30 ",l.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),l.a.createElement(c.a,{code:"const querystring = require('querystring');\n",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"querystring.decode"),l.a.createElement("li",null,"querystring.encode"),l.a.createElement("li",null,"querystring.escape"),l.a.createElement("li",null,"querystring.parse"),l.a.createElement("li",null,"querystring.stringify"),l.a.createElement("li",null,"querystring.unescape")),l.a.createElement("h2",{id:"\u65b9\u6cd5\u4f7f\u7528"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u65b9\u6cd5\u4f7f\u7528"},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5\u4f7f\u7528"),l.a.createElement("h3",{id:"parse"},l.a.createElement("a",{"aria-hidden":"true",href:"#parse"},l.a.createElement("span",{className:"icon icon-link"})),"parse"),l.a.createElement("p",null,l.a.createElement("a",{href:"http://nodejs.cn/api/querystring.html#querystring_querystring_parse_str_sep_eq_options",target:"_blank",rel:"noopener noreferrer"},"\u76f8\u5173\u8be6\u7ec6\u6587\u6863",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("p",null,l.a.createElement("code",null,"querystring.parse()")," \u65b9\u6cd5\u8fd4\u56de\u7684\u5bf9\u8c61\u4e0d\u662f\u539f\u578b\u7ee7\u627f\u81ea JavaScript Object\u3002 \u8fd9\u610f\u5473\u7740\u5178\u578b\u7684 Object \u65b9\u6cd5\u5982 ",l.a.createElement("code",null,"obj.toString()"),"\u3001 ",l.a.createElement("code",null,"obj.hasOwnProperty()")," \u7b49\u90fd\u6ca1\u6709\u5b9a\u4e49\u5e76\u4e14\u4e0d\u8d77\u4f5c\u7528\u3002"),l.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5c06\u5047\u5b9a\u67e5\u8be2\u5b57\u7b26\u4e32\u4e2d\u7684\u767e\u5206\u6bd4\u7f16\u7801\u5b57\u7b26\u4f7f\u7528 UTF-8 \u7f16\u7801\u3002 \u5982\u679c\u4f7f\u7528\u5176\u4ed6\u5b57\u7b26\u7f16\u7801\uff0c\u5219\u9700\u8981\u6307\u5b9a\u5176\u4ed6 decodeURIComponent \u9009\u9879\uff1a"),l.a.createElement(c.a,{code:"// \u5047\u8bbe gbkDecodeURIComponent \u51fd\u6570\u5df2\u5b58\u5728\n\nquerystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null, {\n  decodeURIComponent: gbkDecodeURIComponent,\n});\n",lang:"js"}),l.a.createElement("h3",{id:"stringify"},l.a.createElement("a",{"aria-hidden":"true",href:"#stringify"},l.a.createElement("span",{className:"icon icon-link"})),"stringify"),l.a.createElement("p",null,l.a.createElement("a",{href:"http://nodejs.cn/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options",target:"_blank",rel:"noopener noreferrer"},"\u76f8\u5173\u8be6\u7ec6\u6587\u6863",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("p",null,l.a.createElement("code",null,"querystring.stringify()")," \u65b9\u6cd5\u5c06\u4f1a\u5e8f\u5217\u5316\u4f20\u5165 ",l.a.createElement("code",null,"obj")," \u4e2d\u7684\u4ee5\u4e0b\u7c7b\u578b\u7684\u503c\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"string \u5b57\u7b26\u4e32"),l.a.createElement("li",null,"number \u6570\u503c"),l.a.createElement("li",null,"boolean \u5e03\u5c14\u503c"),l.a.createElement("li",null,"string[] \u5b57\u7b26\u4e32\u6570\u7ec4"),l.a.createElement("li",null,"number[] \u6570\u503c\u6570\u7ec4"),l.a.createElement("li",null,"boolean[] \u5e03\u5c14\u503c\u6570\u7ec4")),l.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u5b57\u7b26\u4e32\u4e2d\u9700\u8981\u767e\u5206\u6bd4\u7f16\u7801\u7684\u5b57\u7b26\u5c06\u7f16\u7801\u4e3a UTF-8\u3002\u5982\u679c\u9700\u8981\u5176\u4ed6\u7f16\u7801\uff0c\u5219\u9700\u8981\u6307\u5b9a\u5176\u4ed6 ",l.a.createElement("code",null,"encodeURIComponent")," \u9009\u9879\uff1a"),l.a.createElement(c.a,{code:"// \u5047\u8bbe gbkEncodeURIComponent \u51fd\u6570\u5df2\u5b58\u5728\u3002\n\nquerystring.stringify({ w: '\u4e2d\u6587', foo: 'bar' }, null, null, {\n  encodeURIComponent: gbkEncodeURIComponent,\n});\n",lang:"js"}),l.a.createElement("h3",{id:"escape"},l.a.createElement("a",{"aria-hidden":"true",href:"#escape"},l.a.createElement("span",{className:"icon icon-link"})),"escape"),l.a.createElement("p",null,l.a.createElement("code",null,"querystring.escape()")," \u65b9\u6cd5\u7531 ",l.a.createElement("code",null,"querystring.stringify()")," \u4f7f\u7528\uff0c\u901a\u5e38\u4e0d\u4f1a\u76f4\u63a5\u4f7f\u7528\u3002\u5b83\u7684\u5bfc\u51fa\u4e3b\u8981\u662f\u4e3a\u4e86\u5141\u8bb8\u5e94\u7528\u4ee3\u7801\u5728\u5fc5\u8981\u65f6\u901a\u8fc7\u5c06 ",l.a.createElement("code",null,"querystring.escape")," \u6307\u5b9a\u7ed9\u66ff\u4ee3\u51fd\u6570\u6765\u63d0\u4f9b\u66ff\u6362\u7684\u767e\u5206\u6bd4\u7f16\u7801\u5b9e\u73b0\u3002"),l.a.createElement("h3",{id:"unescape"},l.a.createElement("a",{"aria-hidden":"true",href:"#unescape"},l.a.createElement("span",{className:"icon icon-link"})),"unescape"),l.a.createElement("p",null,l.a.createElement("code",null,"querystring.unescape")," \u65b9\u6cd5\u5728\u7ed9\u5b9a\u7684 ",l.a.createElement("code",null,"str")," \u4e0a\u6267\u884c URL \u767e\u5206\u6bd4\u7f16\u7801\u5b57\u7b26\u7684\u89e3\u7801\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"querystring.unescape()")," \u65b9\u6cd5\u7531 ",l.a.createElement("code",null,"querystring.parse()")," \u4f7f\u7528\uff0c\u901a\u5e38\u4e0d\u4f1a\u76f4\u63a5\u4f7f\u7528\u5b83\u3002 \u5b83\u7684\u5bfc\u51fa\u4e3b\u8981\u662f\u4e3a\u4e86\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u5728\u5fc5\u8981\u65f6\u901a\u8fc7\u5c06 querystring.unescape \u5206\u914d\u7ed9\u66ff\u4ee3\u51fd\u6570\u6765\u63d0\u4f9b\u66ff\u6362\u7684\u89e3\u7801\u5b9e\u73b0\u3002"),l.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",l.a.createElement("code",null,"querystring.unescape()")," \u65b9\u6cd5\u5c06\u5c1d\u8bd5\u4f7f\u7528 JavaScript \u5185\u7f6e\u7684 ",l.a.createElement("code",null,"decodeURIComponent()")," \u65b9\u6cd5\u8fdb\u884c\u89e3\u7801\u3002 \u5982\u679c\u5931\u8d25\uff0c\u5c06\u4f7f\u7528\u66f4\u5b89\u5168\u7684\u4e0d\u4f1a\u4e22\u5931\u683c\u5f0f\u9519\u8bef\u7684 URL \u7684\u7b49\u4ef7\u65b9\u6cd5\u3002"),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://jsernews.com/news/172",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u6df1\u5165 Node \u6a21\u5757\uff1aquerystring",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);