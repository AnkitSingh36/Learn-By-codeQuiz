(this["webpackJsonplearn-by-quiz"]=this["webpackJsonplearn-by-quiz"]||[]).push([[23],{275:function(e,t,i){"use strict";i.r(t),i.d(t,"amplify_federated_sign_in",(function(){return f}));var a=i(19),n=i(47),d=i(38),s=i(71),o=i(26),r=new n.a("amplify-federated-sign-in"),f=function(){function e(e){Object(a.k)(this,e),this.authState=d.a.SignIn,this.federated={}}return e.prototype.componentWillLoad=function(){if(!s.a||"function"!==typeof s.a.configure)throw new Error(o.d);var e=s.a.configure().oauth,t=void 0===e?{}:e;t.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t.awsCognito)),t.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t.auth0))},e.prototype.render=function(){return this.federated?Object.values(d.a).includes(this.authState)?(r.debug("federated Config is",this.federated),Object(a.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(a.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(a.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(r.debug("federated prop is empty. show nothing"),r.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},e}()}}]);
//# sourceMappingURL=23.ee00602e.chunk.js.map