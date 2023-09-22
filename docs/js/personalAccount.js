(self.webpackChunkgulp_html_scss=self.webpackChunkgulp_html_scss||[]).push([[925],{308:function(e,t,a){"use strict";var n=a(311),r=a.n(n);a(934),t.Z=()=>{r()(".js-datepicker").mask("99.99.99"),r()(".js-time").mask("99:99"),r().mask.definitions.h="[0|1|3|4|5|6|7|9]",r()(".js-phone").mask("+7 (h99) 999 99 99")}},654:function(e,t,a){"use strict";var n=a(308),r=a(311),i=a.n(r);a(587),a(169);window.addEventListener("DOMContentLoaded",(()=>{(0,n.Z)(),jQuery.validator.addClassRules("js-required-validate",{required:!0}),jQuery.validator.addClassRules("js-email-validate",{email:!0}),jQuery.validator.addClassRules("js-password-validate",{equalTo:"#password"}),i()(".js-validate").validate({debug:!1,validClass:"sForm__valid",errorClass:"sForm__invalid-all",errorElement:"span",unhighlight:function(e,t,a){i()(e).removeClass(t).addClass(a),i()(e).val()||i()(e).removeClass(a),"phone"===i()(e).attr("id")&&-1!==i()(e).val().search("_")&&i()(e).removeClass(a)}})}))},169:function(e,t,a){var n,r,i;r=[a(311),a(587)],void 0===(i="function"==typeof(n=function(e){return e.extend(e.validator.messages,{required:"Это поле необходимо заполнить.",remote:"Пожалуйста, введите правильное значение.",email:"Пожалуйста, введите корректный адрес электронной почты.",url:"Пожалуйста, введите корректный URL.",date:"Пожалуйста, введите корректную дату.",dateISO:"Пожалуйста, введите корректную дату в формате ISO.",number:"Пожалуйста, введите число.",digits:"Пожалуйста, вводите только цифры.",creditcard:"Пожалуйста, введите правильный номер кредитной карты.",equalTo:"Пожалуйста, введите такое же значение ещё раз.",extension:"Пожалуйста, выберите файл с правильным расширением.",maxlength:e.validator.format("Пожалуйста, введите не больше {0} символов."),minlength:e.validator.format("Пожалуйста, введите не меньше {0} символов."),rangelength:e.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),range:e.validator.format("Пожалуйста, введите число от {0} до {1}."),max:e.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),min:e.validator.format("Пожалуйста, введите число, большее или равное {0}.")}),e})?n.apply(t,r):n)||(e.exports=i)},934:function(e,t,a){var n,r,i;r=[a(311)],void 0===(i="function"==typeof(n=function(e){var t,a=navigator.userAgent,n=/iphone/i.test(a),r=/chrome/i.test(a),i=/android/i.test(a);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var a;if(0!==this.length&&!this.is(":hidden")&&this.get(0)===document.activeElement)return"number"==typeof e?(t="number"==typeof t?t:e,this.each((function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((a=this.createTextRange()).collapse(!0),a.moveEnd("character",t),a.moveStart("character",e),a.select())}))):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),e=0-a.duplicate().moveStart("character",-1e5),t=e+a.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(a,o){var l,s,c,u,d,f,m;if(!a&&this.length>0){var h=e(this[0]).data(e.mask.dataName);return h?h():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),l=e.mask.definitions,s=[],c=f=a.length,u=null,a=String(a),e.each(a.split(""),(function(e,t){"?"==t?(f--,c=e):l[t]?(s.push(new RegExp(l[t])),null===u&&(u=s.length-1),e<c&&(d=s.length-1)):s.push(null)})),this.trigger("unmask").each((function(){var h=e(this),g=e.map(a.split(""),(function(e,t){if("?"!=e)return l[e]?b(t):e})),v=g.join(""),p=h.val();function k(){if(o.completed){for(var e=u;e<=d;e++)if(s[e]&&g[e]===b(e))return;o.completed.call(h)}}function b(e){return e<o.placeholder.length?o.placeholder.charAt(e):o.placeholder.charAt(0)}function y(e){for(;++e<f&&!s[e];);return e}function C(e,t){var a,n;if(!(e<0)){for(a=e,n=y(t);a<f;a++)if(s[a]){if(!(n<f&&s[a].test(g[n])))break;g[a]=g[n],g[n]=b(n),n=y(n)}R(),h.caret(Math.max(u,e))}}function j(e){w(),h.val()!=p&&h.change()}function x(e,t){var a;for(a=e;a<t&&a<f;a++)s[a]&&(g[a]=b(a))}function R(){h.val(g.join(""))}function w(e){var t,a,n,r=h.val(),i=-1;for(t=0,n=0;t<f;t++)if(s[t]){for(g[t]=b(t);n++<r.length;)if(a=r.charAt(n-1),s[t].test(a)){g[t]=a,i=t;break}if(n>r.length){x(t+1,f);break}}else g[t]===r.charAt(n)&&n++,t<c&&(i=t);return e?R():i+1<c?o.autoclear||g.join("")===v?(h.val()&&h.val(""),x(0,f)):R():(R(),h.val(h.val().substring(0,i+1))),c?t:u}h.data(e.mask.dataName,(function(){return e.map(g,(function(e,t){return s[t]&&e!=b(t)?e:null})).join("")})),h.one("unmask",(function(){h.off(".mask").removeData(e.mask.dataName)})).on("focus.mask",(function(){var e;h.prop("readonly")||(clearTimeout(t),p=h.val(),e=w(),t=setTimeout((function(){h.get(0)===document.activeElement&&(R(),e==a.replace("?","").length?h.caret(0,e):h.caret(e))}),10))})).on("blur.mask",j).on("keydown.mask",(function(e){if(!h.prop("readonly")){var t,a,r,i=e.which||e.keyCode;m=h.val(),8===i||46===i||n&&127===i?(a=(t=h.caret()).begin,(r=t.end)-a==0&&(a=46!==i?function(e){for(;--e>=0&&!s[e];);return e}(a):r=y(a-1),r=46===i?y(r):r),x(a,r),C(a,r-1),e.preventDefault()):13===i?j.call(this,e):27===i&&(h.val(p),h.caret(0,w()),e.preventDefault())}})).on("keypress.mask",(function(t){if(!h.prop("readonly")){var a,n,r,o=t.which||t.keyCode,l=h.caret();t.ctrlKey||t.altKey||t.metaKey||o<32||!o||13===o||(l.end-l.begin!=0&&(x(l.begin,l.end),C(l.begin,l.end-1)),(a=y(l.begin-1))<f&&(n=String.fromCharCode(o),s[a].test(n))&&(function(e){var t,a,n,r;for(t=e,a=b(e);t<f;t++)if(s[t]){if(n=y(t),r=g[t],g[t]=a,!(n<f&&s[n].test(r)))break;a=r}}(a),g[a]=n,R(),r=y(a),i?setTimeout((function(){e.proxy(e.fn.caret,h,r)()}),0):h.caret(r),l.begin<=d&&k()),t.preventDefault())}})).on("input.mask paste.mask",(function(){h.prop("readonly")||setTimeout((function(){var e=w(!0);h.caret(e),k()}),0)})),r&&i&&h.off("input.mask").on("input.mask",(function(e){var t=h.val(),a=h.caret();if(m&&m.length&&m.length>t.length){for(w(!0);a.begin>0&&!s[a.begin-1];)a.begin--;if(0===a.begin)for(;a.begin<u&&!s[a.begin];)a.begin++;h.caret(a.begin,a.begin)}else{w(!0);var n=t.charAt(a.begin);a.begin<f&&(s[a.begin]||a.begin++,s[a.begin].test(n)&&a.begin++),h.caret(a.begin,a.begin)}k()})),w()}))}})})?n.apply(t,r):n)||(e.exports=i)}},function(e){e.O(0,[756],(function(){return 654,e(e.s=654)})),e.O()}]);
//# sourceMappingURL=personalAccount.js.map