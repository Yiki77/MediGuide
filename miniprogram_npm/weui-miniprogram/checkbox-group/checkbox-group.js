var globalThis=this,self=this;module.exports=require("../_commons/0.js")([{ids:[5],modules:{190:function(t,e){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{multi:{type:Boolean,value:!0,observer:"_multiChange"},extClass:{type:String,value:""},prop:{type:String,value:""}},data:{targetList:[],parentCell:null},relations:{"../checkbox/checkbox":{type:"descendant",linked:function(t){this.data.targetList.push(t),t.setMulti(this.data.multi),this.data.firstItem||(this.data.firstItem=t),t!==this.data.firstItem&&t.setOuterClass("weui-cell_wxss")},unlinked:function(t){var e=-1;this.data.targetList.forEach((function(a,s){a===t&&(e=s)})),this.data.targetList.splice(e,1),this.data.targetList||(this.data.firstItem=null)}},"../form/form":{type:"ancestor"},"../cells/cells":{type:"ancestor",linked:function(t){this.data.parentCell||(this.data.parentCell=t),this.setParentCellsClass()},unlinked:function(){this.data.parentCell=null}}},methods:{checkedChange:function(t,e){if(this.data.multi){var a=[];this.data.targetList.forEach((function(t){t.data.disabled||t.data.checked&&a.push(t.data.value)})),this.triggerEvent("change",{value:a})}else{var s="";this.data.targetList.forEach((function(t){t.data.disabled||(t===e?s=t.data.value:t.setData({checked:!1}))})),this.triggerEvent("change",{value:s},{})}},setParentCellsClass:function(){var t=this.data.multi?"weui-cells_checkbox":"weui-cells_radio";this.data.parentCell&&this.data.parentCell.setCellsClass(t)},_multiChange:function(t){return this.data.targetList.forEach((function(e){e.setMulti(t)})),this.data.parentCell&&this.data.parentCell.setCellMulti(t),t}}})},20:function(t,e,a){t.exports=a(190)}},entries:[[20,0]]}]);