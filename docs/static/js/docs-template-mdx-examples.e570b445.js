(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs-template-mdx/examples.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a("./node_modules/@babel/runtime/helpers/esm/extends.js"),c=a("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=a("./node_modules/react/index.js"),r=a.n(s),i=a("./node_modules/@mdx-js/react/dist/index.es.js"),l=a("./node_modules/docz/dist/index.esm.js"),p=a("./src/index.js"),d={},h="wrapper";function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(h,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"examples"},"Examples"),Object(i.b)("h2",{id:"basic-captcha"},"Basic Captcha"),Object(i.b)(l.c,{__position:0,__code:"() => {\n  const [captchaCode, setCaptcha] = React.useState()\n  return (\n    <div>\n      <ClientCaptcha captchaCode={setCaptcha} />\n      Current captcha code: {captchaCode}\n    </div>\n  )\n}",__scope:{props:this?this.props:a,Playground:l.c,ClientCaptcha:p.a},mdxType:"Playground"},function(){var e=r.a.useState(),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(i.b)("div",null,Object(i.b)(p.a,{captchaCode:n,mdxType:"ClientCaptcha"}),"Current captcha code: ",a)}),Object(i.b)("h2",{id:"captcha-with-input-and-validation"},"Captcha With Input and Validation"),Object(i.b)(l.c,{__position:1,__code:"() => {\n  const [captchaCode, setCaptcha] = React.useState()\n  const [captchaInput, setCaptchaInput] = React.useState()\n  const validateCaptcha = () => {\n    if (captchaCode === captchaInput) alert('Valid')\n    else alert('Invalid')\n  }\n  return (\n    <div>\n      <ClientCaptcha captchaCode={setCaptcha} />\n      <input\n        type=\"text\"\n        value={captchaInput}\n        onChange={e => setCaptchaInput(e.target.value)}\n      />\n      <button onClick={validateCaptcha}>Validate</button>\n    </div>\n  )\n}",__scope:{props:this?this.props:a,Playground:l.c,ClientCaptcha:p.a},mdxType:"Playground"},function(){var e=r.a.useState(),t=Object(c.a)(e,2),a=t[0],n=t[1],o=r.a.useState(),s=Object(c.a)(o,2),l=s[0],d=s[1];return Object(i.b)("div",null,Object(i.b)(p.a,{captchaCode:n,mdxType:"ClientCaptcha"}),Object(i.b)("input",{type:"text",value:l,onChange:function(e){return d(e.target.value)}}),Object(i.b)("button",{onClick:function(){a===l?alert("Valid"):alert("Invalid")}},"Validate"))}),Object(i.b)("h2",{id:"customization"},"Customization"),Object(i.b)(l.c,{__position:2,__code:'() => {\n  const [captchaCode, setCaptcha] = React.useState()\n  return (\n    <div>\n      <ClientCaptcha\n        captchaCode={setCaptcha}\n        chars="ABCDEFGHIJK!@#$%^&*"\n        charsCount={6}\n        width={300}\n        height={100}\n        fontSize={45}\n        backgroundColor="#BD272D"\n        fontColor="#fff"\n      />\n      Current captcha code: {captchaCode}\n    </div>\n  )\n}',__scope:{props:this?this.props:a,Playground:l.c,ClientCaptcha:p.a},mdxType:"Playground"},function(){var e=r.a.useState(),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(i.b)("div",null,Object(i.b)(p.a,{captchaCode:n,chars:"ABCDEFGHIJK!@#$%^&*",charsCount:6,width:300,height:100,fontSize:45,backgroundColor:"#BD272D",fontColor:"#fff",mdxType:"ClientCaptcha"}),"Current captcha code: ",a)}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs-template-mdx/examples.mdx"}}),u.isMDXComponent=!0},"./src/index.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),c=a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),o=a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),i=a("./node_modules/react/index.js"),l=a.n(i),p=a("./src/style.css"),d=a.n(p),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).generateCode=function(){for(var e=a.props,t=e.chars,n=e.charsCount,c=[],o=0;o<n;o+=1){var s=Math.ceil(Math.random()*t.length);t[s]&&-1===c.indexOf(t[s])?c.push(t[s]):o-=1}return c.join("")},a.generateCaptcha=function(){var e=a.props,t=e.width,n=e.height,c=e.fontSize,o=e.captchaCode,s=e.backgroundColor,r=e.fontFamily,i=e.fontColor;a.captchaCode=a.generateCode();var l=a.canvasRef.current.getContext("2d");l.fillStyle=s,l.fillRect(0,0,t,n),l.font="".concat(c,"px ").concat(r),l.textAlign="center",l.textBaseline="middle",l.fillStyle=i,l.fillText(a.captchaCode.split("").join(" "),t/2,n/2),o(a.captchaCode)},a.canvasRef=l.a.createRef(),a.captchaCode="",a}return Object(r.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.generateCaptcha()}},{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.retryIcon,c=e.containerClassName,o=e.captchaClassName,s=e.retryButtonClassName,r=e.retryImgClassName,i=e.retry,p=e.retryIconSize;return l.a.createElement("div",{className:c},l.a.createElement("canvas",{width:t,height:a,ref:this.canvasRef,style:{pointerEvents:"none"},className:o}),i&&l.a.createElement("button",{onClick:this.generateCaptcha,id:"retryButton",className:s},l.a.createElement("img",{src:n,alt:"Re-new captcha",className:r,width:p,height:p})))}}]),t}(i.Component);h.defaultProps={width:100,height:40,fontSize:22,fontFamily:"Arial, Tahoma",fontColor:"#000",chars:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",charsCount:4,backgroundColor:"#F2F2F2",retry:!0,retryIcon:"https://cdn.jsdelivr.net/npm/react-client-captcha/dist/retry.svg",retryIconSize:24,retryButtonClassName:d.a.retryButton,retryImgClassName:"",containerClassName:d.a.captchaContainer,captchaClassName:""},t.a=h,"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClientCaptcha",filename:"src/index.js"}})},"./src/style.css":function(e,t,a){e.exports={captchaContainer:"style_captchaContainer__FWlJo",retryButton:"style_retryButton__3Fwvw"}}}]);
//# sourceMappingURL=docs-template-mdx-examples.a8fa3cce09756a8bd416.js.map