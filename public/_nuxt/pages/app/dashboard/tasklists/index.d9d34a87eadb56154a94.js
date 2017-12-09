webpackJsonp([5],{"0OV+":function(t,s,a){"use strict";a("00HH"),a("miiX");s.a={layout:"app",mounted:function(){},data:function(){return{error:"",success:"",name:""}},methods:{removeTasklist:function(t){var s=this;try{this.$store.dispatch("tasklist/delete",{id:t}).then(function(t){s.$store.dispatch("tasklist/getTasklists")})}catch(t){this.error=t}},createTasklist:function(t){t.preventDefault(),""===this.name?this.error="You need to add a name for your tasklist try again.":(this.name=document.getElementById("name").value,console.log(this.name),this.$store.dispatch("tasklist/create",this.name).then(function(t){}))},showTasklistFormModal:function(){this.$refs.tasklistsModalRef.show(),this.error=""}},watch:{tasklists:function(t){console.log("taskslist changed",t)}},components:{},beforeMount:function(){this.$store.dispatch("tasklist/getTasklists")},computed:{tasklists:function(){return this.$store.getters["tasklist/getTasklists"]}},validate:function(t){return t.params}}},"4ALj":function(t,s,a){"use strict";function e(t){a("Ep/l")}Object.defineProperty(s,"__esModule",{value:!0});var i=a("0OV+"),n=a("lKcV"),r=a("VU/8"),l=e,o=r(i.a,n.a,!1,l,null,null);s.default=o.exports},"Ep/l":function(t,s,a){var e=a("eHIL");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("2ecb9660",e,!0)},eHIL:function(t,s,a){s=t.exports=a("FZ+f")(!1),s.push([t.i,".tasklists-container{padding:32px;padding:2rem}.tasklists-container .tasklists-container__header{font-size:30px;height:40px;border-bottom:1px solid #809ed3;margin-left:48px;margin-left:3rem;margin-right:48px;margin-right:3rem}.tasklists-container .tasklists-container__header .right .btn{background:transparent;color:#000;border:none;-webkit-box-shadow:none;box-shadow:none}.tasklists-container .tasklists-container__list{padding:24px;padding:1.5rem}.tasklists-container .tasklists-container__list .tasklist{margin-left:160px;margin-left:10rem;margin-right:160px;margin-right:10rem}.tasklists-container .tasklists-container__list .tasklist .tasklist-table .tasklist-table__header .tasklist-table__heading{border-top:none}.tasklists-container .tasklists-container__list .tasklist .tasklist-table .tasklist-table__body .body-row .row-archive .fa.fa-archive,.tasklists-container .tasklists-container__list .tasklist .tasklist-table .tasklist-table__body .body-row .row-edit .fa-pencil{color:#809ed3}",""])},lKcV:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tasklists-container"},[a("div",{staticClass:"container tasklists-container__header"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-2 right settings"},[a("b-dropdown",{staticClass:"btn btn-primary",attrs:{id:"settings-dropdown",text:"Settings"}},[a("b-dropdown-item",{on:{click:t.showTasklistFormModal}},[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modalPrevent",modifiers:{modalPrevent:!0}}]},[t._v("Create new tasklist")])],1)],1)],1)])]),a("div",{staticClass:"container tasklists-container__list"},[t.tasklists?a("div",{staticClass:"tasklist"},[a("table",{staticClass:"table table-light table-responsive-md tasklist-table"},[t._m(1),a("tbody",{staticClass:"tasklist-table__body"},t._l(t.tasklists,function(s){return a("tr",{key:s.slug,staticClass:"body-row"},[a("td",{staticClass:"row-name"},[a("nuxt-link",{attrs:{to:"/app/dashboard/tasklists/"+s.slug}},[t._v(t._s(s.name))])],1),a("td",{staticClass:"row-tasks__count"},[t._v(t._s(s.tasks_count))]),a("td",{staticClass:"row-created_at"},[t._v(t._s(s.created_at))]),a("td",{staticClass:"row-archive"},[a("i",{staticClass:"fa fa-archive",on:{click:function(a){t.removeTasklist(s.id)}}})]),t._m(2,!0)])}))])]):t._e(),t.tasklists?t._e():a("div",{staticClass:"no-tasklists container-fluid"},[a("h4",{staticClass:"text-center"},[t._v("You have no tasklists assigned")])])]),a("b-modal",{attrs:{refs:"tasklistsModalRef",id:"modalPrevent",title:"New tasklist","hide-footer":""},on:{ok:t.createTasklist}},[a("div",{staticClass:"d-block text-center"},[a("h3",[t._v("Create new tasklist")]),a("b-form",{on:{submit:function(s){s.stopPropagation(),s.preventDefault(),t.createTasklist(s)}}},[a("b-form-group",{attrs:{id:"nameInput",label:"Name",description:"The name of the tasklist"}},[a("b-form-input",{attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name"},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}})],1),a("b-form-group",{attrs:{id:"submitGroup"}},[a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1),t.error?a("div",{staticClass:"error-container"},[a("b-alert",{attrs:{show:"",variant:"danger"},on:{click:t.createTasklist}},[t._v(t._s(t.error))])],1):t._e()],1)],1)]),t.success?a("div",{staticClass:"success-container"},[a("b-alert",{attrs:{show:"",variant:"success"}},[t._v(t._s(t.success))])],1):t._e(),a("nuxt-child")],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-10 left"},[a("h5",[t._v("Tasklists")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"thead-dark tasklist-table__header"},[a("tr",{staticClass:"tasklist-table__heading"},[a("td",{staticClass:"heading-name"},[t._v("name")]),a("td",{staticClass:"heading-tasks__count"},[t._v("tasks count")]),a("td",{staticClass:"heading-created_at"},[t._v("created at")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("td",{staticClass:"row-edit"},[a("i",{staticClass:"fa fa-pencil"})])}],n={render:e,staticRenderFns:i};s.a=n}});
//# sourceMappingURL=index.d9d34a87eadb56154a94.js.map