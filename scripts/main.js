"use strict";function writing(e){lengthSentence=sections[i].sentence.length;$("body");opening?opening&&setTimeout(function(){interval=65,j===lengthSentence&&(forward=!1),j===lengthSentence-2&&$(".original").one().addClass("onScreen"),j===lengthSentence-1&&forward&&(interval=pauseEnd),j<lengthSentence&&forward?(currentPart+="&"===sections[i].sentence[j]?"<strong>":"%"===sections[i].sentence[j]?"</strong>":sections[i].sentence[j],e.html(currentPart),j++):j>0&&!forward?(currentPart="&"===sections[i].sentence[j]?currentPart.slice(0,-8):"%"===sections[i].sentence[j]?currentPart.slice(0,-9):currentPart.slice(0,-1),e.html(currentPart),j--):0===j&&(forward=!0,i++),i===lengthArray&&(i=0),writing(e)},interval):setTimeout(function(){k<beginning.length?("<"===beginning[k]&&(currentPart+=' <br id="brName">',k+=4),currentPart+=beginning[k],e.html(currentPart),k++,writing(e)):k===beginning.length&&(currentPart+="<br>",e.html(currentPart),opening=!0,writing(e))},interval)}function liquidFillGaugeDefaultSettings(){return{minValue:0,maxValue:100,circleThickness:.05,circleFillGap:.05,circleColor:"#178BCA",waveHeight:.05,waveCount:1,waveRiseTime:1e3,waveAnimateTime:18e3,waveRise:!0,waveHeightScaling:!0,waveAnimate:!0,waveColor:"#178BCA",waveOffset:0,textVertPosition:.5,textSize:1,valueCountUp:!0,displayPercent:!0,textColor:"#045681",waveTextColor:"#A4DBf8"}}function loadLiquidFillGauge(e,t,n){function a(){H.attr("transform","translate("+j(H.attr("T"))+",0)"),H.transition().duration(n.waveAnimateTime*(1-H.attr("T"))).ease("linear").attr("transform","translate("+j(1)+",0)").attr("T",1).each("end",function(){H.attr("T",0),a(n.waveAnimateTime)})}null==n&&(n=liquidFillGaugeDefaultSettings());var i,r=d3.select("#"+e),o=Math.min(parseInt(r.style("width")),parseInt(r.style("height")))/2,s=parseInt(r.style("width"))/2-o,u=parseInt(r.style("height"))/2-o,c=Math.max(n.minValue,Math.min(n.maxValue,t))/n.maxValue;i=n.waveHeightScaling?d3.scale.linear().range([0,n.waveHeight,0]).domain([0,50,100]):d3.scale.linear().range([n.waveHeight,n.waveHeight]).domain([0,100]);var l=n.textSize*o/2,h=parseFloat(t).toFixed(2),f=n.valueCountUp?n.minValue:h,d=n.displayPercent?"%":"",p=n.circleThickness*o,g=n.circleFillGap*o,v=p+g,m=o-v,w=m*i(100*c),x=2*m/n.waveCount,M=1+n.waveCount,C=x*M,I=function(e){return Math.round(e)};parseFloat(h)!=parseFloat(I(h))&&(I=function(e){return parseFloat(e).toFixed(1)}),parseFloat(h)!=parseFloat(I(h))&&(I=function(e){return parseFloat(e).toFixed(2)});for(var y=[],b=0;b<=40*M;b++)y.push({x:b/(40*M),y:b/40});var P=d3.scale.linear().range([0,2*Math.PI]).domain([0,1]),T=d3.scale.linear().range([0,o]).domain([0,o]),k=d3.scale.linear().range([0,C]).domain([0,1]),S=d3.scale.linear().range([0,w]).domain([0,1]),A=d3.scale.linear().range([v+2*m+w,v-w]).domain([0,1]),j=d3.scale.linear().range([0,C-2*m]).domain([0,1]),E=d3.scale.linear().range([v+2*m,v+.7*l]).domain([0,1]),O=r.append("g").attr("transform","translate("+s+","+u+")"),F=d3.svg.arc().startAngle(P(0)).endAngle(P(1)).outerRadius(T(o)).innerRadius(T(o-p));O.append("path").attr("d",F).style("fill",n.circleColor).attr("transform","translate("+o+","+o+")");var Q=O.append("text").text(I(f)+d).attr("class","liquidFillGaugeText").attr("text-anchor","middle").attr("font-size",l+"px").style("fill",n.textColor).attr("transform","translate("+o+","+E(n.textVertPosition)+")"),D=d3.svg.area().x(function(e){return k(e.x)}).y0(function(e){return S(Math.sin(2*Math.PI*n.waveOffset*-1+2*Math.PI*(1-n.waveCount)+2*e.y*Math.PI))}).y1(function(e){return 2*m+w}),B=O.append("defs").append("clipPath").attr("id","clipWave"+e),H=B.append("path").datum(y).attr("d",D).attr("T",0),q=O.append("g").attr("clip-path","url(#clipWave"+e+")");q.append("circle").attr("cx",o).attr("cy",o).attr("r",m).style("fill",n.waveColor);var R=q.append("text").text(I(f)+d).attr("class","liquidFillGaugeText").attr("text-anchor","middle").attr("font-size",l+"px").style("fill",n.waveTextColor).attr("transform","translate("+o+","+E(n.textVertPosition)+")");if(n.valueCountUp){var G=function(){var e=d3.interpolate(this.textContent,h);return function(t){this.textContent=I(e(t))+d}};Q.transition().duration(n.waveRiseTime).tween("text",G),R.transition().duration(n.waveRiseTime).tween("text",G)}var V=v+2*m-C;n.waveRise?B.attr("transform","translate("+V+","+A(0)+")").transition().duration(n.waveRiseTime).attr("transform","translate("+V+","+A(c)+")").each("start",function(){H.attr("transform","translate(1,0)")}):B.attr("transform","translate("+V+","+A(c)+")"),n.waveAnimate&&a()}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,a,i){return jQuery.easing[jQuery.easing.def](e,t,n,a,i)},easeInQuad:function(e,t,n,a,i){return a*(t/=i)*t+n},easeOutQuad:function(e,t,n,a,i){return-a*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,a,i){return a*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,a,i){return a*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t+n:a/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,a,i){return a*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,a,i){return-a*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t*t+n:-a/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,a,i){return a*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,a,i){return a*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t*t*t+n:a/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,a,i){return-a*Math.cos(t/i*(Math.PI/2))+a+n},easeOutSine:function(e,t,n,a,i){return a*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,a,i){return-a/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,a,i){return 0==t?n:a*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,a,i){return t==i?n+a:a*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,a,i){return 0==t?n:t==i?n+a:(t/=i/2)<1?a/2*Math.pow(2,10*(t-1))+n:a/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,a,i){return-a*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,a,i){return a*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,a,i){return(t/=i/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+n:a/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,a,i){var r=1.70158,o=0,s=a;if(0==t)return n;if(1==(t/=i))return n+a;if(o||(o=.3*i),s<Math.abs(a)){s=a;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(a/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/o))+n},easeOutElastic:function(e,t,n,a,i){var r=1.70158,o=0,s=a;if(0==t)return n;if(1==(t/=i))return n+a;if(o||(o=.3*i),s<Math.abs(a)){s=a;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(a/s);return s*Math.pow(2,-10*t)*Math.sin((t*i-r)*(2*Math.PI)/o)+a+n},easeInOutElastic:function(e,t,n,a,i){var r=1.70158,o=0,s=a;if(0==t)return n;if(2==(t/=i/2))return n+a;if(o||(o=i*(.3*1.5)),s<Math.abs(a)){s=a;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(a/s);return t<1?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/o))+n:s*Math.pow(2,-10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/o)*.5+a+n},easeInBack:function(e,t,n,a,i,r){return void 0==r&&(r=1.70158),a*(t/=i)*t*((r+1)*t-r)+n},easeOutBack:function(e,t,n,a,i,r){return void 0==r&&(r=1.70158),a*((t=t/i-1)*t*((r+1)*t+r)+1)+n},easeInOutBack:function(e,t,n,a,i,r){return void 0==r&&(r=1.70158),(t/=i/2)<1?a/2*(t*t*(((r*=1.525)+1)*t-r))+n:a/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+n},easeInBounce:function(e,t,n,a,i){return a-jQuery.easing.easeOutBounce(e,i-t,0,a,i)+n},easeOutBounce:function(e,t,n,a,i){return(t/=i)<1/2.75?a*(7.5625*t*t)+n:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+n:a*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,a,i){return t<i/2?.5*jQuery.easing.easeInBounce(e,2*t,0,a,i)+n:.5*jQuery.easing.easeOutBounce(e,2*t-i,0,a,i)+.5*a+n}});var sections=[{sentence:" She is probably writing code right now"},{sentence:" She loves front-end development"},{sentence:" She is learning Node.js"},{sentence:" She is probably drinking coffee at this moment ;)"},{sentence:" Want some coffee too?"},{sentence:" She will learn Angular soon"},{sentence:" Scroll down to know more about her!"},{sentence:" Hire her and you will not regret!"},{sentence:" She loves being in a group"},{sentence:" She loves to travel too"},{sentence:" Photography is her hobby"},{sentence:" What are you waiting for?"},{sentence:" HIRE HER!"}],i=0,j=0,k=0,lengthSentence=0,lengthArray=sections.length,forward=!0,beginning="",currentPart="",interval=1e3,opening=!1,pauseEnd=2500;!function(e){e.fn.viewportChecker=function(t){var n={classToAdd:"visible",offset:100,callbackFunction:function(e){}};e.extend(n,t);var a=this,i=e(window).height();this.checkElements=function(){var t=navigator.userAgent.toLowerCase().indexOf("webkit")!=-1?"body":"html",r=e(t).scrollTop(),o=r+i;a.each(function(){var t=e(this);if(!t.hasClass(n.classToAdd)){var a=Math.round(t.offset().top)+n.offset,i=a+t.height();a<o&&i>r&&(t.addClass(n.classToAdd),n.callbackFunction(t))}})},e(window).scroll(this.checkElements),this.checkElements(),e(window).resize(function(e){i=e.currentTarget.innerHeight})}}(jQuery),function(e,t,n){var a=function(e){for(var t=e,n=e.offsetTop;null!==t.nextElementSibling;){if(t.nextElementSibling.offsetTop>n)return t;t=t.nextElementSibling}return t},i=function(n,a){var i,r,o=e(t).scrollTop(),s=e(t).height();return o>=n?n-o:o+s>=a?0:(i=n-o-200,r=a-(o+s),Math.min(i,r))},r=function(r,o){var s={animationDuration:250,linksSelector:".links a",expandingAreaSelector:".expanding-container",closeButtonMarkup:'<a href="#" class="close-button">Close</a>',spacerMarkup:'<span class="spacer" aria-hidden="true"/>',elementActiveClass:"active",elementExpandedClass:"expanded",onExpandBefore:!1,onExpandAfter:!1},u=e.extend({},s,o),c=!1,l=!1,h=!1,f=!1,d=!1,p=!1,g=!1,v=!1,m=e(u.linksSelector,r),w=e(u.expandingAreaSelector,r),x=e(u.closeButtonMarkup),M=e(u.spacerMarkup),C=M.clone(),I=function(n,a,r,o){var s,c,l=0,h=i(n,a),f=e(t).scrollTop();r="undefined"==typeof r?u.animationDuration:r,c=r;var d=(new Date).getTime(),p=d,g=function e(){c=Math.max(r-(new Date-d),0);var n=0===c||0===h?0:(new Date-p)/c*h,a=h>0?Math.min(n,h):Math.max(n,h);h-=a,l+=a,t.scrollTo(0,f+l),p=(new Date).getTime(),p-d<=r?s=t.requestAnimationFrame&&requestAnimationFrame(e)||setTimeout(e,16):"function"==typeof o&&o()};g()};m.each(function(){var t=e(this),i=t.attr("href").match(/#([^\?]+)/)[1],r=n.getElementById(i);r&&t.click(function(n){var i,o,s=this;n.preventDefault(),c&&l===s?x.click():(m.removeClass(u.elementActiveClass).filter(t).addClass(u.elementActiveClass).parent("li").each(function(){var t=a(this);g=t!==p,g&&(p=t),c&&g&&(C.height(M.height()),M.height(0).replaceWith(C)),e(p).after(M)}),c&&g&&(C.animate({height:0},u.animationDuration,function(){e(this).detach()}),x.removeClass(u.elementActiveClass).hide()),i=C.position().top<M.position().top?C.height():0,f=M.position().top-i,w.removeClass(u.elementExpandedClass).hide().filter(r).each(function(){var t=e(this),n=t.height(),a=t.outerHeight(),r=c&&d&&g===!1?d:0;y(),M.animate({height:n+"px"},u.animationDuration),t.css({height:r+"px",position:"absolute",left:0,top:M.position().top+"px"}).show(0,function(){"function"==typeof u.onExpandBefore&&u.onExpandBefore.call(this)}).animate({height:n+"px",top:f+"px"},u.animationDuration,function(){t.css({height:"auto"}).addClass(u.elementExpandedClass),d=t.height(),v=setInterval(function(){var e=t.height();e!==d&&(d=e,b())},1e3),"function"==typeof u.onExpandAfter&&u.onExpandAfter.call(this)});var o=e(s).offset().top-i,l=t.offset().top+a+20-i;I(o,l)}),o=c&&g&&t.parent().index()>e(l).parent().index()?u.animationDuration:u.animationDuration/4,x.css({position:"absolute",right:0,top:f+"px"}).delay(o).fadeIn(u.animationDuration,function(){e(this).addClass(u.elementActiveClass)}),l=this,h=r,c=!0)})}),x.appendTo(r).hide().click(function(t){var n=e(l),a=n.offset().top,i=a+n.outerHeight();t.preventDefault(),m.removeClass(u.elementActiveClass),w.slideUp(u.animationDuration).removeClass(u.elementExpandedClass),x.removeClass("active").hide(),M.animate({height:0},u.animationDuration,function(){M.detach()}),I(a,i),y(),c=!1,l=!1,h=!1});var y=function(){v&&clearInterval(v)},b=function(){h&&c&&(M.height(e(h).height()),f=M.position().top,x.add(h).css({top:f+"px"}))},P=function(){var t;l&&p&&c&&(M.detach(),t=a(e(l).parent()[0]),p!==t&&(p=t),e(p).after(M))};e(t).resize(function(){c&&(P(),b())})};e.fn.expandingGrid=function(e){return this.each(function(){r(this,e)})}}(jQuery,window,document),$(document).ready(function(){$(".expanding-grid").expandingGrid()});