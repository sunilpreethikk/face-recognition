(this.webpackJsonpfacerecogniton=this.webpackJsonpfacerecogniton||[]).push([[0],{224:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(35),o=a.n(i),r=(a(70),a(10)),c=a(11),l=a(13),m=a(12),u=function(e){var t=e.onRouteChange;return!0===e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},p=a(62),d=a.n(p),h=(a(71),a(63)),g=a.n(h),b=function(){return s.a.createElement("div",{className:"mt0 ma4"},s.a.createElement(d.a,{className:"Tilt",options:{max:25},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner pa3"},s.a.createElement("img",{style:{paddingTop:"20px"},alt:"Logo",src:g.a}))))},f=(a(72),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try!"),s.a.createElement("div",null,s.a.createElement("div",{className:"center form pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),E=(a(73),function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"image",alt:"",src:t,width:"500px",height:"auto"}),s.a.createElement("div",{className:"bounding_box",style:{top:a.topRow,right:a.rightCol,left:a.leftCol,bottom:a.bottomRow}}," ")))}),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSigninEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onSigninPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onButtonSubmit=function(e){e.preventDefault(),fetch("https://immense-tundra-48033.herokuapp.com/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))})).catch((function(e){return console.log(e)}))},n.state={signInEmail:"",signInPassword:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onSigninEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onSigninPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onButtonSubmit})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{className:"f6 link dim black db pointer",onClick:function(){return e("register")}},"Register")))))}}]),a}(s.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onButtonSubmit=function(e){e.preventDefault(),fetch("https://immense-tundra-48033.herokuapp.com/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))})).catch((function(e){return console.log(e)}))},n.state={email:"",password:"",name:""},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:this.onButtonSubmit})))))}}]),a}(s.a.Component),N=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t,", your current rank is")),s.a.createElement("div",{className:"white f1"},a))},y=(a(74),a(64)),A=a.n(y),C={particles:{number:{value:90,density:{enable:!0,value_area:800}}}},B={input:"",imageUrl:"",box:"",route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:"",joined:""}},S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("image"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,rightCol:n-t.right_col*n,topRow:t.top_row*s,bottomRow:s-t.bottom_row*s}},e.displayBoundary=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://immense-tundra-48033.herokuapp.com/imageurl",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){e.displayBoundary(e.calculateFaceLocation(t)),fetch("https://immense-tundra-48033.herokuapp.com/image",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))}))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):e.setState(B),e.setState({route:t})},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.state=B,e}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(A.a,{className:"particles",params:C}),s.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:this.state.isSignedIn}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(b,null),s.a.createElement(N,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),s.a.createElement(E,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?s.a.createElement(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(223);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t){e.exports="data:image/png;base64,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"},65:function(e,t,a){e.exports=a(224)},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.9f047f30.chunk.js.map