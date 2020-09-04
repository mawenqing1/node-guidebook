(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{IZli:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),c=a.n(t),l=(a("B2uJ"),a("+su7"),a("qOys")),s=a.n(l);a("5Yjd");n["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u6a21\u5f0f-schema"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u6a21\u5f0f-schema"},c.a.createElement("span",{className:"icon icon-link"})),"\u6a21\u5f0f Schema"),c.a.createElement("h2",{id:"\u7d22\u5f15-index"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u7d22\u5f15-index"},c.a.createElement("span",{className:"icon icon-link"})),"\u7d22\u5f15 index"),c.a.createElement("p",null,"\u7d22\u5f15\u53ef\u4ee5\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6\u3002\u7d22\u5f15\u5206\u5b57\u6bb5\u7ea7\u522b\u548c Schema \u7ea7\u522b\u3002"),c.a.createElement("p",null,"\ud83c\udf30 ",c.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),c.a.createElement(s.a,{code:"const animalSchema = new Schema({\n  name: String,\n  type: String,\n  tags: { type: [String], index: true }, // field level\n});\n\nanimalSchema.index({ name: 1, type: -1 }); // schema level\n// 1 \u8868\u793a\u6b63\u5e8f\uff0c-1 \u8868\u793a\u9006\u5e8f\n",lang:"js"}),c.a.createElement("p",null,"\u26a0\ufe0f ",c.a.createElement("strong",null,"\u6ce8\u610f"),"\uff1a\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u5e94\u7528\u542f\u52a8\u7684\u65f6\u5019\uff0cMongoose \u4f1a\u81ea\u52a8\u4e3a Schema \u4e2d\u6bcf\u4e2a\u5b9a\u4e49\u4e86\u7d22\u5f15\u7684\u8c03\u7528 ",c.a.createElement("code",null,"ensureIndex"),"\uff0c\u786e\u4fdd\u751f\u6210\u7d22\u5f15\uff0c\u5e76\u5728\u6240\u6709\u7684 ",c.a.createElement("code",null,"ensureIndex")," \u8c03\u7528\u6210\u529f\u6216\u51fa\u73b0\u9519\u8bef\u65f6\uff0c\u5728 Model \u4e0a\u53d1\u51fa\u4e00\u4e2a ",c.a.createElement("code",null,"index")," \u4e8b\u4ef6\u3002\u5f00\u53d1\u73af\u5883\u7528\u8fd9\u4e2a\u5f88\u597d\uff0c\u4f46\u662f\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e0d\u8981\u4f7f\u7528\u8fd9\u4e2a\u3002"),c.a.createElement("p",null,"\u7981\u7528 ",c.a.createElement("code",null,"ensureIndex")," \u65b9\u5f0f\uff1a"),c.a.createElement(s.a,{code:"mongoose.connect('mongodb://localhost/blog', { config: { authoIndex: false } }) // \u63a8\u8350\n\nmongoose.createConenction('mongodb://localhost/blog', { config: { autoIndex: false} }) // \u4e0d\u63a8\u8350\n\nanimalSchema.set('autoIndex', false); // \u63a8\u8350\n\nnew Schema({..}, { autoIndex: false }) // \u4e0d\u63a8\u8350\n",lang:"js"}),c.a.createElement("p",null,"\u5bf9\u4e8e\u6dfb\u52a0\u7684\u6bcf\u6761\u7d22\u5f15\uff0c\u6bcf\u6b21\u5199\u64cd\u4f5c\uff08\u63d2\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\uff09\u90fd\u5c06\u8017\u8d39\u66f4\u591a\u7684\u65f6\u95f4\u3002\u5219\u662f\u56e0\u4e3a\uff0c\u5f53\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4e0d\u4ec5\u8981\u66f4\u65b0\u6587\u6863\uff0c\u8fd8\u8981\u66f4\u65b0\u96c6\u5408\u4e0a\u7684\u6240\u6709\u7d22\u5f15\u3002\u56e0\u6b64 MongoDB \u9650\u5236\u6bcf\u4e2a\u96c6\u5408\u6700\u591a\u6709 64 \u4e2a\u7d22\u5f15\u3002\u901a\u5e38\uff0c\u5728\u4e00\u4e2a\u7279\u5b9a\u7684\u96c6\u5408\u4e0a\uff0c\u4e0d\u5e94\u8be5\u62e5\u6709\u4e24\u4e2a\u4ee5\u4e0a\u7684\u7d22\u5f15\u3002"),c.a.createElement("h3",{id:"\u552f\u4e00\u7d22\u5f15"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u552f\u4e00\u7d22\u5f15"},c.a.createElement("span",{className:"icon icon-link"})),"\u552f\u4e00\u7d22\u5f15"),c.a.createElement(s.a,{code:"const ArticlesSchema = new Schema({\n    title: {\n        ...,\n        index: true,\n        unique: true\n    }\n}, { collection: 'articles' })\n",lang:"js"}),c.a.createElement("h3",{id:"\u590d\u5408\u7d22\u5f15"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u590d\u5408\u7d22\u5f15"},c.a.createElement("span",{className:"icon icon-link"})),"\u590d\u5408\u7d22\u5f15"),c.a.createElement(s.a,{code:"ArticlesSchema.index({ name: 1, by: -1 });\nArticlesSchema.index({ name: 1, by: -1 }, { unique: true });\n",lang:"js"}),c.a.createElement("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u914d\u7f6e\u793a\u4f8b"},c.a.createElement("span",{className:"icon icon-link"})),"\u914d\u7f6e\u793a\u4f8b"),c.a.createElement(s.a,{code:"const mongoose = require('mongoose');\nconst { Schema, model } = mongoose;\n\nconst users = new Schema({\n    __v: { type: String, select: false }\n    // required => true \u5fc5\u9009\n    name: { type: String, required: true }\n    // select => false \u53ea\u6709 select \u8be5\u5b57\u6bb5\u65f6\u624d\u8fd4\u56de\u8be5\u5b57\u6bb5\n    password: { type: String, required: true, select: false },\n    // \u679a\u4e3e\n    gender: { type: String, enum: ['male', 'female'], default: 'male', required: true },\n    locations: { type: [{ type: Schema.Types.ObjectId, ref: 'Topic' }], select: false },\n    business: { type: Schema.Types.ObjectId, ref: 'Topic', select: false },\n    employments: {\n        type: [\n            {\n                company: { type: Schema.Types.ObjectId, ref: 'Topic' },\n                job: { type: Schema.Types.ObjectId, ref: 'Topic' },\n            },\n        ],\n        select: false,\n    },\n    educations: {\n        type: [\n            {\n                schol: { type: Schema.Types.ObjectId, ref: 'Topic' },\n                major: { type: Schema.Types.ObjectId, ref: 'Topic' },\n                diploma: { type: Schema.Types.ObjectId, enum: [1, 2, 3, 4, 5] },\n                entrance_year: { type: Number },\n                graduation_year: { type: Number },\n            },\n        ],\n        select: false,\n    },\n    following: {\n        types: [\n            {\n                type: Schema.Types.ObjectId,\n                ref: 'User'\n            }\n        ],\n        select: false,\n    },\n    followingTopics: {\n        type: [\n            {\n                type: Schema.Types.ObjectId,\n                ref: 'Topic',\n            }\n        ]\n    },\n    likingAnswers: {\n        type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],\n        select: false,\n    },\n    dislikingAnswers: {\n        type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],\n        select: false,\n    },\n    collectingAnswers: {\n        type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],\n        select: false,\n    }\n})\n\nmodule.exports = model('User', users);\n",lang:"js"})))}}}]);