(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4a22"],{"3c51":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",staticStyle:{margin:"20px",width:"60%","min-width":"600px"},attrs:{model:e.form,rules:e.rules,"label-width":"80px"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[r("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[r("el-option",{attrs:{label:"区域一",value:"shanghai"}}),r("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),r("el-form-item",{attrs:{label:"活动时间",required:""}},[r("el-col",{attrs:{span:11}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),r("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),r("el-col",{attrs:{span:11}},[r("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),r("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[r("el-switch",{attrs:{"active-text":"","inactive-text":""},model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),r("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[r("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),r("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),r("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),r("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"线上品牌商赞助"}}),r("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),r("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("取消")])],1)],1)},l=[],o={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return alert("error submit!!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},s=o,i=r("2877"),n=Object(i["a"])(s,a,l,!1,null,null,null);t["default"]=n.exports}}]);