(this["webpackJsonplearn-by-quiz"]=this["webpackJsonplearn-by-quiz"]||[]).push([[12],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_text_picker",(function(){return p}));var r=n(19),i=n(47),o=n(12),a=n(109),c=n(10),u=(n(26),n(99),n(358)),l=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},f=new i.a("S3TextPicker"),p=function(){function e(e){Object(r.k)(this,e),this.contentType="text/*",this.level=a.a.Public,this.fallbackText=c.a.PICKER_TEXT}return e.prototype.handleInput=function(e){return l(this,void 0,void 0,(function(){var t,n,r,i,o,a,c,l,p;return s(this,(function(s){switch(s.label){case 0:if(t=e.target.files[0],r=(n=this).path,i=void 0===r?"":r,o=n.level,a=n.fileToKey,c=n.track,l=i+Object(u.b)(t,a),!t)throw new Error("No file was selected");s.label=1;case 1:return s.trys.push([1,3,,4]),[4,Object(u.e)(l,t,o,c,t.type,f)];case 2:return s.sent(),this.src=l,[3,4];case 3:throw p=s.sent(),f.debug(p),new Error(p);case 4:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-s3-text",{textKey:this.src,path:this.path,level:this.level,track:this.track,identityId:this.identityId,contentType:this.contentType,fallbackText:o.a.get(this.fallbackText)}),Object(r.i)("amplify-picker",{inputHandler:function(t){return e.handleInput(t)},acceptValue:"text/*"}))},e}()},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return f}));var r=n(26),i=n(99),o=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,i=e.type,o=encodeURI(n);return t&&((o="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:i}):encodeURI(JSON.stringify(t)))||(o="empty_key")),o.replace(/\s/g,"_")},l=function(e,t,n,c,u){return o(void 0,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.get)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.a.get(e,{level:t,track:n,identityId:c})];case 2:return o=a.sent(),u.debug("Storage image get",o),[2,o];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))},s=function(e,t,n,c,u){return o(void 0,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.get)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,i.a.get(e,{download:!0,level:t,track:n,identityId:c})];case 2:return o=a.sent(),u.debug(o),[4,(s=o.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(s)})))];case 3:return[2,a.sent()];case 4:throw l=a.sent(),new Error(l);case 5:return[2]}var s}))}))},f=function(e,t,n,c,u,l){return o(void 0,void 0,void 0,(function(){var o,s;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.put)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.a.put(e,t,{contentType:u,level:n,track:c})];case 2:return o=a.sent(),l.debug("Upload data",o),[3,4];case 3:throw s=a.sent(),new Error(s);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=12.25fcd6dc.chunk.js.map