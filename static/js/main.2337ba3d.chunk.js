(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},14:function(e,t,a){e.exports={boardItem:"styles_boardItem__1o__-",boardItemBtn:"styles_boardItemBtn__xgQi7",boardMenuContainer:"styles_boardMenuContainer__3QNtQ",boardMenuContainerBtn:"styles_boardMenuContainerBtn__1rGMB",boardMenuContainerTitle:"styles_boardMenuContainerTitle__1urGl",boardMenu:"styles_boardMenu__3eUjM",boardMenuItemBtn:"styles_boardMenuItemBtn__3Izxx",tasksContainer:"styles_tasksContainer__1t5BX",taskFormContainer:"styles_taskFormContainer__3KkdH"}},158:function(e,t,a){},159:function(e,t,a){},16:function(e,t,a){e.exports={taskContainer:"styles_taskContainer__3Xwfp",taskContainerButton:"styles_taskContainerButton__OutVj",taskMenuContainer:"styles_taskMenuContainer__39lHt",taskMenuContainerInner:"styles_taskMenuContainerInner__2Q_Fu",fade:"styles_fade__2CCL4",taskMenu:"styles_taskMenu__18jWZ",taskMenuItem:"styles_taskMenuItem__27z-w"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(93),i=a(18),o=a(27),c=a(96),l=a(81),u=a(92),d=a(38),m=a(7),b=a(8),k=a(10),p=a(9),h=a(11),f=a(32),_=a.n(f),v=a(66),E=a.n(v),y=a(15),O=a(40),j=(a(110),function(e){var t=e.children,a=Object(O.a)(e,["children"]);return r.a.createElement("button",a,t)}),M=function(e){switch(e){case"primary":return" button_type_primary";case"close":return" button_type_close";case"ellipsis":return" button_type_ellipsis";case"long":return" button_type_long";case"link":return" button_type_link";case"dark":return" button_type_dark";case"visible":return" button_type_visible";default:return" button"}},T=a(44),C=a.n(T),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(k.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){},a}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(y.b,{onSubmit:this.onSubmit,render:function(e){var t=e.handleSubmit,a=e.invalid,n=e.pristine;return r.a.createElement("form",{action:"#",onSubmit:t,className:C.a.form},r.a.createElement(y.a,{autoFocus:!0,name:"title",component:"textarea",className:C.a.textArea,placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442"}),r.a.createElement(j,{type:"submit",className:"".concat(C.a.button," ").concat(M("primary")),disabled:n||a},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}})}}]),t}(n.Component),S=(a(111),function(e){var t=e.children,a=e.level,n=Object(O.a)(e,["children","level"]);switch(a){case"h1":return r.a.createElement("h1",n,t);case"h2":return r.a.createElement("h2",n,t);case"h3":default:return r.a.createElement("h3",n,t)}}),N=function(e){switch(e){case"big":return" size_big";case"middle":default:return" size_middle"}},x=a(67),g=a.n(x),A=a(16),w=a.n(A),F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(p.a)(t).call(this,e))).taskMenuHide=function(){a.setState({taskEditBtnShow:!1})},a.taskMenuToggle=function(){var e=a.state.taskEditBtnShow;a.setState({taskEditBtnShow:!e})},a.handleRemoveTask=function(e){e.preventDefault();var t=a.props,n=t.id,r=t.listId;(0,t.removeTask)(n,r),a.taskMenuHide()},a.state={taskEditBtnShow:!1},a.taskContainer=r.a.createRef(),a.taskMenuWrapper=r.a.createRef(),a}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidUpdate",value:function(){if(this.taskMenuWrapper.current){var e=this.taskContainer.current.getBoundingClientRect().y;this.taskMenuWrapper.current.style.top=e+"px"}}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.text,n=this.state.taskEditBtnShow;return r.a.createElement("div",{className:w.a.taskContainer,ref:this.taskContainer},r.a.createElement(j,{type:"button",className:"".concat(w.a.taskContainerButton," ").concat(M("visible")),onClick:this.taskMenuToggle},r.a.createElement("i",{className:"fas fa-pen"})),r.a.createElement(S,{level:"h3",classes:"".concat(w.a.taskTitle," ").concat(N("middle"))},r.a.createElement("span",{style:{color:"red"}},"id:")," ",t,r.a.createElement("br",null),r.a.createElement("span",{style:{color:"red"}},"text:")," ",a),r.a.createElement(_.a,{className:"clickOutSide",onClickOutside:this.taskMenuHide},n&&r.a.createElement("div",{className:w.a.taskMenuContainer,ref:this.taskMenuWrapper},r.a.createElement("div",{className:w.a.fade,onClick:this.taskMenuToggle}),r.a.createElement("div",{className:w.a.taskMenuContainerInner},r.a.createElement(I,null),r.a.createElement("ul",{className:w.a.taskMenu},r.a.createElement("li",{className:w.a.taskMenuItem},r.a.createElement(j,{type:"button",className:M("dark"),onClick:this.handleRemoveTask},r.a.createElement("i",{className:"far fa-file-archive button__icon"}),"\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))))))}}]),t}(n.Component),L={removeTask:function(e,t){return{type:"REMOVE_TASK",taskId:e,listId:t}}},B=Object(i.b)(function(e,t){return function(e,t){var a=g()(t,["match","params","id"])||t.id;return{id:a,text:g()(e,["tasks","".concat(a),"text"])}}(e,t)},L)(F),D=a(68),R=a.n(D),H=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(k.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){(0,a.props.handleAddList)(e.title)},a}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.openFormAddList;return r.a.createElement(y.b,{onSubmit:this.onSubmit,render:function(t){var a=t.handleSubmit,n=t.invalid,s=t.pristine;return r.a.createElement("form",{onSubmit:a,className:R.a.form},r.a.createElement(y.a,{autoFocus:!0,name:"title",component:"input",type:"text",placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u043f\u0438\u0441\u043a\u0430",className:R.a.input}),r.a.createElement(j,{className:M("primary"),type:"submit",disabled:s||n},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a"),r.a.createElement(j,{className:M("close"),onClick:e},"\u2716"))}})}}]),t}(n.Component),K=a(69),V=a.n(K),z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(k.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){(0,a.props.handleAddTask)(e.title)},a}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.addTaskFormToggle;return r.a.createElement(y.b,{onSubmit:this.onSubmit,render:function(t){var a=t.handleSubmit,n=t.invalid,s=t.pristine;return r.a.createElement("form",{action:"#",onSubmit:a,className:V.a.form},r.a.createElement(y.a,{autoFocus:!0,name:"title",component:"textarea",className:V.a.textarea,placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"}),r.a.createElement(j,{type:"submit",className:M("primary"),disabled:s||n},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"),r.a.createElement(j,{type:"button",className:M("close"),onClick:e},"\u2716"))}})}}]),t}(n.Component),W=a(95),G=a.n(W),Q=a(14),U=a.n(Q),X=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(p.a)(t).call(this,e))).boardMenuHide=function(){a.setState({boardMenuShow:!1})},a.boardMenuToggle=function(){var e=a.state.boardMenuShow;a.setState({boardMenuShow:!e})},a.addTaskFormHide=function(){a.setState({addTaskFormShow:!1})},a.addTaskFormToggle=function(){var e=a.state.addTaskFormShow;a.setState({addTaskFormShow:!e})},a.handleRemoveList=function(e){var t=a.props,n=t.listId,r=t.removeList;e.preventDefault(),r(n)},a.handleAddTask=function(e){var t=a.props,n=t.listId;(0,t.addTask)(n,e),a.addTaskFormHide()},a.state={boardMenuShow:!1,addTaskFormShow:!1},a}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.tasks,n=e.listId,s=this.state,i=s.boardMenuShow,o=s.addTaskFormShow;return r.a.createElement("div",{className:U.a.boardItem},r.a.createElement(_.a,{className:"clickOutSide",onClickOutside:this.boardMenuHide},r.a.createElement(j,{className:"".concat(U.a.boardItemBtn," ").concat(M("ellipsis")),onClick:this.boardMenuToggle}),i&&r.a.createElement("div",{className:U.a.boardMenuContainer},r.a.createElement(j,{type:"button",className:"".concat(U.a.boardMenuContainerBtn," ").concat(M("close")),onClick:this.boardMenuToggle},"\u2716"),r.a.createElement("span",{className:U.a.boardMenuContainerTitle},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c"),r.a.createElement("ul",{className:U.a.boardMenu},r.a.createElement("li",null,r.a.createElement(j,{type:"button",className:"".concat(U.a.boardMenuItemBtn," ").concat(M("long")),onClick:this.handleRemoveList},"\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"))))),r.a.createElement(S,{level:"h3",className:N("middle")},t),r.a.createElement("div",{className:U.a.tasksContainer},function(e,t){return e.map(function(e){return r.a.createElement(B,{key:e.id,text:e.text,id:e.id,listId:t})})}(a,n)),r.a.createElement("div",{className:U.a.taskFormContainer},r.a.createElement(_.a,{className:"clickOutSide",onClickOutside:this.addTaskFormHide},!o&&r.a.createElement(j,{type:"button",className:M("link"),onClick:this.addTaskFormToggle},r.a.createElement("span",{className:"button__text"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443")),o&&r.a.createElement(z,{addTaskFormToggle:this.addTaskFormToggle,handleAddTask:this.handleAddTask}))))}}]),t}(n.Component),J={removeList:function(e){return{type:"REMOVE_LIST",id:e}},addTask:function(e,t){return{type:"ADD_TASK",listId:e,nextTaskId:E()(),text:t}}},P=Object(i.b)(function(e,t){return function(e,t){var a=e.lists,n=e.tasks,r=t.listId,s=a[r],i=s.name,o=s.tasksId;return{tasks:Object.values(G()(n,o)),name:i,listId:r}}(e,t)},J)(X),Z=a(70),q=a.n(Z),Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(p.a)(t).call(this,e))).openFormAddList=function(){a.setState({addListForm:!a.state.addListForm})},a.handleAddList=function(e){(0,a.props.addList)(e),a.openFormAddList()},a.state={addListForm:!1},a}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.lists,t=this.state.addListForm;return r.a.createElement("div",{className:q.a.container},r.a.createElement("div",{className:q.a.boards},function(e){return e.map(function(e){return r.a.createElement(P,{listId:e.id,key:e.id})})}(e)),r.a.createElement("div",null,!t&&r.a.createElement(j,{onClick:this.openFormAddList},"+ \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"),t&&r.a.createElement(H,{openFormAddList:this.openFormAddList,handleAddList:this.handleAddList})))}}]),t}(n.Component),$={addList:function(e){return{type:"ADD_LIST",id:E()(),text:e}}},ee=Object(i.b)(function(e){return{lists:Object.values(e.lists)}},$)(Y),te=(a(158),function(){return r.a.createElement("div",{className:"page404"},"Page not found ")}),ae=(a(159),function(){return r.a.createElement(l.a,{basename:"/Trello-Demo"},r.a.createElement(c.LastLocationProvider,null,r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:ee}),r.a.createElement(d.a,{path:"/task/:id",component:B}),r.a.createElement(d.a,{path:"*",component:te})))))}),ne=a(98),re=a(19),se=a(20),ie=a(43),oe=a.n(ie),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":return Object(se.a)({},e,Object(re.a)({},t.id,{id:t.id,name:t.text,tasksId:[]}));case"REMOVE_LIST":var a=t.id;return oe()(e,[a]);case"ADD_TASK":var n=e[t.listId],r=[].concat(Object(ne.a)(n.tasksId),[t.nextTaskId]);return Object(se.a)({},e,Object(re.a)({},t.listId,Object(se.a)({},n,{tasksId:r})));case"REMOVE_TASK":var s=e[t.listId],i=s.tasksId.filter(function(e){return e!==t.taskId});return Object(se.a)({},e,Object(re.a)({},t.listId,Object(se.a)({},s,{tasksId:i})));default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return Object(se.a)({},e,Object(re.a)({},t.nextTaskId,{id:t.nextTaskId,text:t.text}));case"REMOVE_TASK":var a=t.id;return oe()(e,[a]);default:return e}},ue=Object(o.b)({lists:ce,tasks:le}),de={lists:{1:{id:1,name:"list1",tasksId:[4,2,3]},2:{id:2,name:"list2",tasksId:[1,5]}},tasks:{1:{id:1,text:"task1"},2:{id:2,text:"task2"},3:{id:3,text:"task3"},4:{id:4,text:"task4"},5:{id:5,text:"task5"}}},me=Object(o.c)(ue,de);Object(s.render)(r.a.createElement(i.a,{store:me},r.a.createElement(ae,null)),document.getElementById("root"))},44:function(e,t,a){e.exports={form:"styles_form__1TcvD",textArea:"styles_textArea__ON3gz",button:"styles_button__3yU8O"}},68:function(e,t,a){e.exports={form:"styles_form__IAla-",input:"styles_input__3eBmm"}},69:function(e,t,a){e.exports={form:"styles_form__1GDr5",textarea:"styles_textarea__3NlXe"}},70:function(e,t,a){e.exports={container:"styles_container__3Gf7N",boards:"styles_boards__3D3eD"}},99:function(e,t,a){e.exports=a(208)}},[[99,1,2]]]);
//# sourceMappingURL=main.2337ba3d.chunk.js.map