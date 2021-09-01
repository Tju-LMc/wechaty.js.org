"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9155],{35318:function(t,n,e){e.d(n,{Zo:function(){return l},kt:function(){return v}});var o=e(27378);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function m(t,n){if(null==t)return{};var e,o,i=function(t,n){if(null==t)return{};var e,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var p=o.createContext({}),c=function(t){var n=o.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},l=function(t){var n=c(t.components);return o.createElement(p.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(t,n){var e=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,l=m(t,["components","mdxType","originalType","parentName"]),d=c(e),v=i,u=d["".concat(p,".").concat(v)]||d[v]||s[v]||a;return e?o.createElement(u,r(r({ref:n},l),{},{components:e})):o.createElement(u,r({ref:n},l))}));function v(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var a=e.length,r=new Array(a);r[0]=d;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=t,m.mdxType="string"==typeof t?t:i,r[1]=m;for(var c=2;c<a;c++)r[c]=e[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,e)}d.displayName="MDXCreateElement"},54340:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var o=e(25773),i=e(30808),a=(e(27378),e(35318)),r=["components"],m={title:"RoomInvitation"},p=void 0,c={unversionedId:"api/room-invitation",id:"api/room-invitation",isDocsHomePage:!1,title:"RoomInvitation",description:"Accept room invitation",source:"@site/docs/api/room-invitation.md",sourceDirName:"api",slug:"/api/room-invitation",permalink:"/docs/api/room-invitation",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/room-invitation.md",tags:[],version:"current",lastUpdatedBy:"YipZong",lastUpdatedAt:1630509692,formattedLastUpdatedAt:"9/1/2021",frontMatter:{title:"RoomInvitation"},sidebar:"docs",previous:{title:"Room",permalink:"/docs/api/room"},next:{title:"Friendship",permalink:"/docs/api/friendship"}},l=[{value:"RoomInvitation",id:"roominvitation",children:[{value:"roomInvitation.accept() \u21d2 <code>Promise &lt;void&gt;</code>",id:"roominvitationaccept--promise-void",children:[]},{value:"roomInvitation.inviter() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"roominvitationinviter--promise-contact",children:[]},{value:"roomInvitation.topic() \u21d2 <code>Promise &lt;string&gt;</code>",id:"roominvitationtopic--promise-string",children:[]},{value:"<del>roomInvitation.roomTopic()</del>",id:"roominvitationroomtopic",children:[]},{value:"roomInvitation.date() \u21d2 <code>Promise &lt;Date&gt;</code>",id:"roominvitationdate--promise-date",children:[]},{value:"roomInvitation.age() \u21d2 <code>Promise &lt;number&gt;</code>",id:"roominvitationage--promise-number",children:[]}]}],s={toc:l};function d(t){var n=t.components,e=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Accept room invitation"),(0,a.kt)("h2",{id:"roominvitation"},"RoomInvitation"),(0,a.kt)("p",null,"accept room invitation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/room-invitation#RoomInvitation"},"RoomInvitation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/room-invitation#RoomInvitation+accept"},".accept","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise <void>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/room-invitation#RoomInvitation+inviter"},".inviter","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise <Contact>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/room-invitation#RoomInvitation+topic"},".topic","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise <string>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/room-invitation#RoomInvitation+roomTopic"},(0,a.kt)("del",{parentName:"a"},".roomTopic","(",")"))," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise <string>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/room-invitation#RoomInvitation+date"},".date","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise <Date>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/room-invitation#RoomInvitation+age"},".age","(",")")," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise <number>"))))),(0,a.kt)("h3",{id:"roominvitationaccept--promise-void"},"roomInvitation.accept","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,a.kt)("p",null,"Accept Room Invitation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/room-invitation#RoomInvitation"},(0,a.kt)("inlineCode",{parentName:"a"},"RoomInvitation")),"  "),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  try {\n    console.log(`received room-invite event.`)\n    await roomInvitation.accept()\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),(0,a.kt)("h3",{id:"roominvitationinviter--promise-contact"},"roomInvitation.inviter","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Promise <Contact>")),(0,a.kt)("p",null,"Get the inviter from room invitation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/room-invitation#RoomInvitation"},(0,a.kt)("inlineCode",{parentName:"a"},"RoomInvitation")),"  "),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const inviter = await roomInvitation.inviter()\n  const name = inviter.name()\n  console.log(`received room invitation event from ${name}`)\n}\n.start()\n")),(0,a.kt)("h3",{id:"roominvitationtopic--promise-string"},"roomInvitation.topic","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Promise <string>")),(0,a.kt)("p",null,"Get the room topic from room invitation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/room-invitation#RoomInvitation"},(0,a.kt)("inlineCode",{parentName:"a"},"RoomInvitation")),"  "),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const topic = await roomInvitation.topic()\n  console.log(`received room invitation event from room ${topic}`)\n}\n.start()\n")),(0,a.kt)("h3",{id:"roominvitationroomtopic"},(0,a.kt)("del",{parentName:"h3"},"roomInvitation.roomTopic","(",")")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/room-invitation#RoomInvitation"},(0,a.kt)("inlineCode",{parentName:"a"},"RoomInvitation")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Deprecated:"),": use topic","(",")"," instead"),(0,a.kt)("h3",{id:"roominvitationdate--promise-date"},"roomInvitation.date","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Promise <Date>")),(0,a.kt)("p",null,"Get the invitation time"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/room-invitation#RoomInvitation"},(0,a.kt)("inlineCode",{parentName:"a"},"RoomInvitation"))),(0,a.kt)("h3",{id:"roominvitationage--promise-number"},"roomInvitation.age","(",")"," \u21d2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Promise <number>")),(0,a.kt)("p",null,"Returns the roopm invitation age in seconds."),(0,a.kt)("p",null,"For example, the invitation is sent at time ",(0,a.kt)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",(0,a.kt)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",(0,a.kt)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/room-invitation#RoomInvitation"},(0,a.kt)("inlineCode",{parentName:"a"},"RoomInvitation"))))}d.isMDXComponent=!0}}]);