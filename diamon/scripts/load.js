function changeUrl (e, t, i, o, n, s, a) {if (void 0 !== window.history.pushState) {var r = document.URL
    r != e && '' != e && window.history.pushState({path: e,dataName: n,title: t,keyword: o,description: i,titleog: s,descriptionog: a}, '', e)}'' != t && ($('#hdtitle').html(t), $('meta[property="og:description"]').remove(), $('#hdtitle').after('<meta property="og:description" content="' + a + '">'), $('meta[property="og:title"]').remove(), $('#hdtitle').after('<meta property="og:title" content="' + s + '">'), $('meta[property="og:url"]').remove(), $('#hdtitle').after('<meta property="og:url" content="' + e + '">'), $('meta[name=keywords]').remove(), $('#hdtitle').after('<meta name="keywords" content="' + o + '">'), $('meta[name=description]').remove(), $('#hdtitle').after('<meta name="description" content="' + i + '">')), $('#changlanguage_redirect').val(e)}function ResizeWindows () {Portrait = $(window).height() > $(window).width(), Landscape = $(window).height() <= $(window).width();var e,t,i = $('.bg-home img'),o = $('.bg-inner img'),n = $(window).width(),s = $(window).height(),a = s / n,r = .51875,l = 400 / 1440,h = .668
  a > r ? (t = s, e = s / r) : (t = n * r, e = n), $('.hotel-pic').css({height: n / 2 * h}), $('.box-size').text().length > 0 ? $('.box-size').css({display: 'inline-block'}) : $('.box-size').css({display: 'none'}), $('.news-load, .wrap-content, .page').css({'min-height': s / 1.2}), $('.load-all-item .color-bg').css({height: $('.detail-news').outerHeight()}), $('.album-pic-center').css({height: s}), $('.page-overflow, .page-overflow2, .colum-box, .client-content, .page').css({width: n});var c = $('.colum-box, .page').length,d = $('.colum-box, .page').width()
  if ($('.colum-content').width(c * d), $('.title-page h2').each(function () {var e = $(this).text().length
      1 > e ? $(this).css({display: 'none'}) : $(this).css({display: 'inline-block'})}), 1100 >= n) {$('.nav-click').css({display: 'block'}), $('.scroll-down').css({top: s - 70}), 420 >= n ? ($(i).css({width: n + 300,height: (n + 300) * r,left: -150,top: 0,bottom: 'auto'}), $('.bg-home').css({width: '100%',height: (n + 300) * r}), $('.slide-bg, .slider-home').css({width: '100%',height: (n + 300) * r})) : n > 420 && 620 >= n ? ($(i).css({width: n + 200,height: (n + 200) * r,left: -100,top: 0,bottom: 'auto'}), $('.bg-home').css({width: '100%',height: (n + 200) * r}), $('.slide-bg, .slider-home').css({width: '100%',height: (n + 200) * r})) : ($(i).css({width: n,height: n * r,left: 0,top: 0,bottom: 'auto'}), $('.bg-home').css({width: '100%',height: n * r}), $('.slide-bg, .slider-home').css({width: '100%',height: n * r})), (isIE9 || isIE10 || isIE11 || isEge) && (420 >= n ? $('.columne').css({'column-count': '1','column-gap': '10px'}) : n > 420 && 820 >= n ? $('.columne').css({'column-count': '2','column-gap': '10px'}) : $('.columne').css({'column-count': '3','column-gap': '10px'})), Portrait ? ($(o).css({width: n + 400,height: (n + 400) * l}), $('.bg-inner').css({width: n,height: (n + 400) * l}), $('.slide-bg-inner, .slider-inner').css({width: '100%',height: (n + 400) * l})) : ($(o).css({width: n + 300,height: (n + 300) * l}), $('.bg-inner').css({width: n,height: (n + 300) * l}), $('.slide-bg-inner, .slider-inner').css({width: '100%',height: (n + 300) * l}));var m = 0
    $('.tab-menu li').each(function () {if ($('#home-page').length) {var e = $(this).outerWidth() + 30
        m += parseInt(e), $('.tab-menu ul').width(m)}else {var e = $(this).outerWidth() + 15
        m += parseInt(e), $('.tab-menu ul').width(m)}}), 720 >= n ? $('.news-text img,  .product-pic img, .pic-details-wrap img, .album-pic-center img, .box-pic img').addClass('zoom-pic') : $('.news-text img,  .product-pic img, .pic-details-wrap img, .album-pic-center img, .box-pic img').removeClass('zoom-pic'), $('.all-content-load, .load-all-item').css({height: '100%'}), $('.load-all-item .color-bg').css({'min-height': s})}else n > 1100 && ($('.nav-click').css({display: 'none'}), $('.scroll-down').css({display: 'none',opacity: 0}), $('.show-box, .close-box').css({display: 'none'}), $('.left-menu').css({height: s - 80}), $(i).css({width: e,height: t,left: (n - e) / 2,top: 'auto',bottom: 0}), $('.bg-home').css({width: '100%',height: s}), $('.slide-bg, .slider-home').css({width: '100%',height: s}), $(o).css({width: '100%',height: n * l}), $('.bg-inner').css({width: '100%',height: n * l}), $('.slide-bg-inner, .slider-inner').css({width: '100%',height: n * l}), (isIE9 || isIE10 || isIE11 || isEge) && $('.columne').css({'column-count': '3','column-gap': '10px'}), $('.scroll-down-desktop').css({top: s - 120}), $('#home-page').length ? $('.tab-menu ul').css({width: 'auto'}) : $('.tab-menu ul').css({width: '100%'}), $('.news-text img,  .product-pic img, .pic-details-wrap img, .album-pic-center img, .box-pic img').removeClass('zoom-pic'), $('.all-content-load, .load-all-item').css({height: s - 60}), $('.load-all-item .color-bg').css({'min-height': s - 60}));$('.colum-content').css({height: $('.colum-content .colum-box.active').innerHeight()}), $('.colum-content').css({height: $('.colum-content .page.active').innerHeight()})}function initialize () {function e () {s.setAnimation(null)}function t () {a.setAnimation(null)}function i () {e();var t = document.createElement('div')
    t.innerHTML = "<div class='infobox'><img src='" + C + "'  alt='" + u + "' ><h3>" + u + '</h3><h4>' + f + '</h4><p><strong>' + w + '</strong><br>' + l + ' ' + c + '<br>' + h + " <a href='tel:" + m + "'>" + m + '</a><br></p></div>';var i = {content: t,disableAutoPan: !0,maxWidth: 220,pixelOffset: new google.maps.Size(-110, -150),boxStyle: {background: 'transparent',opacity: 1,width: '300px'},closeBoxMargin: '0',closeBoxzIndex: '99999',closeBoxPosition: 'absolute',closeBoxURL: r + 'default/images/close3.png',infoBoxClearance: new google.maps.Size(1, 1),isHidden: !1,pane: 'floatPane',enableEventPropagation: !0},o = new InfoBox(i)
    o.open(O, s)}function o () {t();var e = document.createElement('div')
    e.innerHTML = "<div class='infobox'><img src='" + L + "'  alt='" + p + "' ><h3>" + p + '</h3><h4>' + v + '</h4><p><strong>' + y + '</strong><br>' + l + ' ' + d + '<br>' + h + " <a href='tel:" + g + "'>" + g + '</a><br></p></div>';var i = {content: e,disableAutoPan: !0,maxWidth: 220,pixelOffset: new google.maps.Size(-110, -150),boxStyle: {background: 'transparent',opacity: 1,width: '300px'},closeBoxMargin: '0',closeBoxzIndex: '99999',closeBoxPosition: 'absolute',closeBoxURL: r + 'default/images/close3.png',infoBoxClearance: new google.maps.Size(1, 1),isHidden: !1,pane: 'floatPane',enableEventPropagation: !0},o = new InfoBox(i)
    o.open(O, a)}var n = new google.maps.LatLng(10.779601420988131, 106.70042037963867),s = null,a = null,r = ($('.httpserver').text(), $('.httptemplate').text()),l = $('.infobox-address-hotel').text(),h = $('.infobox-hotline-hotel').text(),c = $('.infobox-address1').text(),d = $('.infobox-address2').text(),m = $('.infobox-hotline1').text(),g = $('.infobox-hotline2').text(),u = $('.infobox-name1').text(),p = $('.infobox-name2').text(),f = $('.infobox-name-11').text(),v = $('.infobox-name-12').text(),w = $('.infobox-location1').text(),y = $('.infobox-location2').text(),b = $('.infobox-location-lat1').text(),x = $('.infobox-location-lng1').text(),E = $('.infobox-location-lat2').text(),A = $('.infobox-location-lng2').text(),C = $('.infobox-image1').text(),L = $('.infobox-image2').text(),I = ($('.infobox-googlemap1').text(), $('.infobox-googlemap2').text(), [{stylers: [{hue: '#e8c257'}, {saturation: -30}]}, {featureType: 'road',elementType: 'geometry',stylers: [{lightness: 50}, {visibility: 'simplified'}]}, {featureType: 'road',elementType: 'labels',stylers: [{visibility: 'on'}]}]),T = new google.maps.StyledMapType(I, {name: 'Styled Map'})
  if (Xwidth > 1100)var k = !0
  else var k = !1
  $('.touch-m').click(function () {if ($('.touch-m').hasClass('active')) {var e = {draggable: !1}
      return O.setOptions(e), $('.touch-m').removeClass('active'), !1}var e = {draggable: !0}
    return O.setOptions(e), $('.touch-m').addClass('active'), !1});var D = {center: n,zoom: 14,scrollwheel: !1,draggable: k,draggingCursor: 'move',noclear: !0,disableDefaultUI: !0,disableDoubleClickZoom: !0,mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],position: google.maps.ControlPosition.TOP_RIGHT}}
  google.maps.event.addDomListener(window, 'resize', function () {google.maps.event.trigger(O, 'resize'), O.setCenter(n), O.setZoom(14)});var O = new google.maps.Map(document.getElementById('map-canvas'), D)
  O.mapTypes.set('map_style', T), O.setMapTypeId('map_style');var z = r + 'default/images/logo-map.png'
  s = new google.maps.Marker({map: O,draggable: !1,animation: google.maps.Animation.DROP,position: new google.maps.LatLng(b, x),icon: z});var P = r + 'default/images/logo-map.png'
  a = new google.maps.Marker({map: O,draggable: !1,animation: google.maps.Animation.DROP,position: new google.maps.LatLng(E, A),icon: P});google.maps.event.addListener(s, 'click', i), google.maps.event.addListener(a, 'click', o), ZoomControl(O)}function ZoomControl (e) {$('.zoom-control a').click(function () {var t = e.getZoom()
    switch ($(this).attr('id')) {case 'zoom-in':
        e.setZoom(++t)
        break;case 'zoom-out':
        e.setZoom(--t)}return !1})}function Done () {ResizeWindows(), $('.loadicon').fadeOut(500, function () {$('html, body').scrollTop(0), $('html, body, .container').removeClass('no-scroll'), $('.loadicon').remove(), $('#home-page').length ? $('.header, .logo').removeClass('hide') : ($('.header, .logo').addClass('hide'), $('.navigation').addClass('white')), $('.logo, .navigation, .right, .sub-menu').addClass('show'), setTimeout(function () {
      $(window).width() > 1100 ? $('.widget-pop').addClass('show active') : $('#home-page').length ? $('.widget-pop').addClass('show active') : ($('.widget-pop').addClass('show'), $('.widget-box, .widget-title').addClass('hide'))}, 500), $('.go-top').removeClass('show'), 1100 >= Xwidth && ($('.nav-click').addClass('show'), $('#home-page').length && $('.logo').addClass('l-left')), ContentLoad(), setTimeout(function () {$('.container').css({opacity: 1})}, 500)})}var ua = navigator.userAgent,androidversion = parseFloat(ua.slice(ua.indexOf('Android') + 8)),isTouchDevice = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch,isTouch = 'ontouchstart' in window || window.navigator.msMaxTouchPoints,isDesktop = 0 != $(window).width() && !isTouchDevice,isiPad = -1 != navigator.userAgent.indexOf('iPad'),isiPhone = -1 != navigator.userAgent.indexOf('iPhone'),isiPod = -1 != navigator.userAgent.indexOf('iPod'),isAndroid = -1 != navigator.userAgent.indexOf('Android'),isIE = -1 != navigator.userAgent.toLowerCase().indexOf('msie') && 0 != $(window).width(),isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1,isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1,match = navigator.userAgent.match('MSIE (.)'),versions = match && match.length > 1 ? match[1] : 'unknown',isIE9 = /MSIE 9/i.test(navigator.userAgent),isIE10 = /MSIE 10/i.test(navigator.userAgent),isIE11 = /rv:11.0/i.test(navigator.userAgent),isEge = /Edge\/12./i.test(navigator.userAgent),userAgent = navigator.userAgent.toLowerCase(),version = 0
userAgent = userAgent.substring(userAgent.indexOf('safari/') + 7), userAgent = userAgent.substring(0, userAgent.indexOf('.')), version = userAgent;var timex,Click,News,shownews = 0,show,Scrollx = 0,Opennews = 0,Menu = 0,SubMenu = 0,Details = 0,CartOpen = 0,doWheel = !0,doTouch = !0,Arrhash,Loadx = 0,minDelay = 0,maxDelay = 950,Xwidth = $(window).width(),Yheight = $(window).height(),Portrait = $(window).height() > $(window).width(),Landscape = $(window).height() <= $(window).width()
!function (e) {function t () {var t = l.clientHeight,i = e.innerHeight
    return i > t ? i : t}function i () {return e.pageYOffset || l.scrollTop}function o (e) {var t = 0,i = 0
    do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (i += e.offsetLeft); while (e = e.offsetParent);return {top: t,left: i}}function n (e, n) {var s = e.offsetHeight,a = i(),r = a + t() - $('.slider-inner').height() / 4,l = o(e).top,h = l + s,n = n || 0
    return r >= l + s * n && h - s * n >= a}function s (e, t) { for (var i in t)t.hasOwnProperty(i) && (e[i] = t[i]);return e}function a (e) {this.el = e, this.image = e.querySelector('.col-top img'), this.curtain = e.querySelector('.curtain')}function r (e, t) {this.el = e, this.options = s({}, this.options), s(this.options, t), this._init()}var l = e.document.documentElement,h = {animations: Modernizr},c = {WebkitAnimation: 'webkitAnimationEnd',OAnimation: 'oAnimationEnd',msAnimation: 'MSAnimationEnd',animation: 'animationend'},d = c[Modernizr.prefixed('animation')]
  a.prototype.addCurtain = function () {if (this.image) {var e = new ColorFinder(function (e, t, i) {return e > 245 && t > 245 && i > 245 ? 0 : (e * e + t * t + i * i) / 65535 * 50 + 1}).getMostProminentColor(this.image)
      if (e.r && e.g && e.b) {var t = 'rgb(' + e.r + ',' + e.g + ',' + e.b + ')'
        'rgba(' + e.r + ',' + e.g + ',' + e.b + ',1)';this.curtain.style.background = t}}}, a.prototype.changeAnimationDelay = function (e) {this.curtain && (this.curtain.style.WebkitAnimationDelay = e + 'ms', this.curtain.style.animationDelay = e + 'ms')}, r.prototype.options = {minDelay: 0,maxDelay: 300,viewportFactor: 0}, r.prototype._init = function () {var t = this,i = [];[].slice.call(this.el.children).forEach(function (e) {var t = new a(e)
      i.push(t)}), this.items = i, this.itemsCount = this.items.length, this.itemsRenderedCount = 0, this.didScroll = !1, t.items.forEach(function (e) {e.addCurtain(), n(e.el) ? (++t.itemsRenderedCount, classie.add(e.el, 'shown')) : e.changeAnimationDelay(Math.random() * (t.options.maxDelay - t.options.minDelay) + t.options.minDelay)});var o = function () {t.didScroll || (t.didScroll = !0, setTimeout(function () {t._scrollPage()}, 200)), t.itemsRenderedCount === t.itemsCount && e.removeEventListener('scroll', o, !1)}
    e.addEventListener('scroll', o, !1), e.addEventListener('resize', function () {t._resizeHandler()}, !1)}, r.prototype._scrollPage = function () {var e = this
    this.items.forEach(function (t) {if (!classie.has(t.el, 'shown') && !classie.has(t.el, 'animate') && n(t.el, e.options.viewportFactor)) {if (++e.itemsRenderedCount, !t.curtain)return void classie.add(t.el, 'shown');classie.add(t.el, 'animate');var i = function () {h.animations && this.removeEventListener(d, i), classie.remove(t.el, 'animate'), classie.add(t.el, 'shown')}
        h.animations ? t.curtain.addEventListener(d, i) : i()}}), this.didScroll = !1}, r.prototype._resizeHandler = function () {function e () {t._scrollPage(), t.resizeTimeout = null}var t = this
    this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(e, 100)}, e.GridScrollFx = r}(window), function (e) {e.fn.impulse = function (t) {function i () {u = f;var t = Date.now(),o = Math.min(t - b, y),s = o / y,a = e.easing[P[v]](s, o, 0, 1, y)
      g.each(function (t) {if (!O[t]) {var i = D[t] + a * w
          e(this).scrollTop(i), n(e(this), t, s)}}), 1 > s && !p ? $ = requestAnimationFrame(i) : m = !1}function o () {u = f, g.each(function (t) {O[t] || e(this).stop().animate({scrollTop: M[t]}, {duration: y,easing: P[v],progress: function (i, o) {n(e(this), t, o)},complete: function () {m = !1}})})}function n (e, t, i) {100 * i >= A.reset && (z = 0), s(e, t) && (O[t] = !0, S || e.stop(!0, !0), a() && (p = !0, z = 0))}function s (e, t) {var i = e.scrollTop(),o = 0 == i && M[t] < 0,n = i == k[t] && M[t] > k[t]
      return o || n}function a () {return O.every(function (e) {return e})}function r () {var t,i = e()
      L.length || (d = !0, L = C), L.each(function () {
        l(this) ? t || (i = S ? i.add(E) : i.add(h()), t = !0) : i = i.add(e(this))}), A.target = L = i, L.each(function (e) {
        l(this) ? I[e] = 'hub' : I[e] = 'sub'}), d && C.length != L.length && (C = L)}function l (e) {var t = [window, document, 'HTML', 'BODY']
      return t.indexOf(e) > -1 || t.indexOf(e.tagName) > -1}function h () {var t = E.scrollTop()
      if (E.scrollTop(1), e('html').scrollTop())var i = e('html')
      else i = e(e('body').scrollTop() ? 'body' : 'html, body');return t ? E.scrollTop(t) : E.scrollTop(0), i}function c () {L.each(function (t) {
        'hub' == I[t] ? T[t] = e(document).height() - E.height() : T[t] = this.scrollHeight - e(this).height()})}var d,m,g,u,p,f,v,w,y,$,b,x,E = e(window),A = e.extend(!0, {target: e(),delay: !1}, e.fn.impulse['default'], t),C = this,L = A.target,I = {},T = [],k = [],D = [],O = [],z = 0,P = [],M = []
    if (window.requestAnimationFrame)var S = !0
    return r(), c(), C.each(function (t) {var n = e('.container')
        e(n).mousewheel(function (n, s) {return m ? !1 : (1 == A.delay && (m = !0), v = t, d && C.length > 1 ? (g = e(this), k[0] = T[v]) : (g = L, k = T), g.each(function (t) {var i = D[t] = e(this).scrollTop()
            1 == s && 0 == i || -1 == s && i == k[t] ? O[t] = !0 : O[t] = !1}), a() ? (m = !1, 1 == A.propagate ? void 0 : !1) : (z = u != s ? 1 : Math.min(A.constrain, z + 1), A.fluid && 1 == z ? P[v] = 'curve' : z && (P[v] = A.effect), p = !1, f = s, w = -s * A.range * Math.pow(A.leap, z - 1), y = A.tempo * Math.pow(A.sloth, z - 1), g.each(function (e) {M[e] = D[e] + w}), S ? ($ && cancelAnimationFrame($), b = Date.now(), $ = requestAnimationFrame(i)) : o(), !1))})}), E.resize(function () {clearTimeout(x), x = setTimeout(c, 100)}), this}, e.fn.impulse['default'] = {range: 145,leap: 1.45,tempo: 500,sloth: 1.1,constrain: 5,reset: 85,effect: 'easeOutSine',fluid: !1,propagate: !0}}(jQuery), $(document).ready(function () {$('html, body').scrollTop(0), ResizeWindows(), $('body').impulse({effect: 'easeOutQuad'}), $('body').append('<div class="loadicon" style="display:block"><span class="circle"></span></div>'), setTimeout(function () {0 == Loadx && (Loadx = 1, Done())}, 1500), $('body').imagesLoaded({background: !0}, function () {0 == Loadx && (Loadx = 1, Done())})}), function (e, t) {
  'function' == typeof define && define.amd ? define('ev-emitter/ev-emitter', t) : 'object' == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()}('undefined' != typeof window ? window : this, function () {function e () {}var t = e.prototype
  return t.on = function (e, t) {if (e && t) {var i = this._events = this._events || {},o = i[e] = i[e] || []
        return -1 == o.indexOf(t) && o.push(t), this}}, t.once = function (e, t) {if (e && t) {this.on(e, t);var i = this._onceEvents = this._onceEvents || {},o = i[e] = i[e] || {}
        return o[t] = !0, this}}, t.off = function (e, t) {var i = this._events && this._events[e]
      if (i && i.length) {var o = i.indexOf(t)
        return -1 != o && i.splice(o, 1), this}}, t.emitEvent = function (e, t) {var i = this._events && this._events[e]
      if (i && i.length) {var o = 0,n = i[o]
        t = t || []; for (var s = this._onceEvents && this._onceEvents[e];n;) {var a = s && s[n]
          a && (this.off(e, n), delete s[n]), n.apply(this, t), o += a ? 0 : 1, n = i[o]}return this}}, t.allOff = t.removeAllListeners = function () {delete this._events, delete this._onceEvents}, e}), function (e, t) {'use strict'
  'function' == typeof define && define.amd ? define(['ev-emitter/ev-emitter'], function (i) {return t(e, i)}) : 'object' == typeof module && module.exports ? module.exports = t(e, require('ev-emitter')) : e.imagesLoaded = t(e, e.EvEmitter)}('undefined' != typeof window ? window : this, function (e, t) {function i (e, t) { for (var i in t)e[i] = t[i];return e}function o (e) {var t = []
    if (Array.isArray(e))t = e
    else if ('number' == typeof e.length) for (var i = 0;i < e.length;i++)t.push(e[i]);else t.push(e);return t}function n (e, t, s) {return this instanceof n ? ('string' == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), 'function' == typeof t ? s = t : i(this.options, t), s && this.on('always', s), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(function () {this.check()}.bind(this))) : new n(e, t, s)}function s (e) {this.img = e}function a (e, t) {this.url = e, this.element = t, this.img = new Image}var r = e.jQuery,l = e.console
  n.prototype = Object.create(t.prototype), n.prototype.options = {}, n.prototype.getImages = function () {this.images = [], this.elements.forEach(this.addElementImages, this)}, n.prototype.addElementImages = function (e) {'IMG' == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);var t = e.nodeType
    if (t && h[t]) { for (var i = e.querySelectorAll('img'),o = 0;o < i.length;o++) {var n = i[o]
        this.addImage(n)}if ('string' == typeof this.options.background) {var s = e.querySelectorAll(this.options.background)
        for (o = 0;o < s.length;o++) {var a = s[o]
          this.addElementBackgroundImages(a)}}}};var h = {1: !0,9: !0,11: !0}
  return n.prototype.addElementBackgroundImages = function (e) {var t = getComputedStyle(e)
      if (t) for (var i = /url\((['"])?(.*?)\1\)/gi,o = i.exec(t.backgroundImage);null !== o;) {var n = o && o[2]
          n && this.addBackground(n, e), o = i.exec(t.backgroundImage)}}, n.prototype.addImage = function (e) {var t = new s(e)
      this.images.push(t)}, n.prototype.addBackground = function (e, t) {var i = new a(e, t)
      this.images.push(i)}, n.prototype.check = function () {function e (e, i, o) {setTimeout(function () {t.progress(e, i, o)})}var t = this
      return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {t.once('progress', e), t.check()}) : void this.complete()}, n.prototype.progress = function (e, t, i) {this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent('progress', [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log('progress: ' + i, e, t)}, n.prototype.complete = function () {var e = this.hasAnyBroken ? 'fail' : 'done'
      if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent('always', [this]), this.jqDeferred) {var t = this.hasAnyBroken ? 'reject' : 'resolve'
        this.jqDeferred[t](this)}}, s.prototype = Object.create(t.prototype), s.prototype.check = function () {var e = this.getIsImageComplete()
      return e ? void this.confirm(0 !== this.img.naturalWidth, 'naturalWidth') : (this.proxyImage = new Image, this.proxyImage.addEventListener('load', this), this.proxyImage.addEventListener('error', this), this.img.addEventListener('load', this), this.img.addEventListener('error', this), void (this.proxyImage.src = this.img.src))}, s.prototype.getIsImageComplete = function () {return this.img.complete && void 0 !== this.img.naturalWidth}, s.prototype.confirm = function (e, t) {this.isLoaded = e, this.emitEvent('progress', [this, this.img, t])}, s.prototype.handleEvent = function (e) {var t = 'on' + e.type
      this[t] && this[t](e)}, s.prototype.onload = function () {this.confirm(!0, 'onload'), this.unbindEvents()}, s.prototype.onerror = function () {this.confirm(!1, 'onerror'), this.unbindEvents()}, s.prototype.unbindEvents = function () {this.proxyImage.removeEventListener('load', this), this.proxyImage.removeEventListener('error', this), this.img.removeEventListener('load', this), this.img.removeEventListener('error', this)}, a.prototype = Object.create(s.prototype), a.prototype.check = function () {this.img.addEventListener('load', this), this.img.addEventListener('error', this), this.img.src = this.url;var e = this.getIsImageComplete()
      e && (this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'), this.unbindEvents())}, a.prototype.unbindEvents = function () {this.img.removeEventListener('load', this), this.img.removeEventListener('error', this)}, a.prototype.confirm = function (e, t) {this.isLoaded = e, this.emitEvent('progress', [this, this.element, t])}, n.makeJQueryPlugin = function (t) {t = t || e.jQuery, t && (r = t, r.fn.imagesLoaded = function (e, t) {var i = new n(this, e, t)
        return i.jqDeferred.promise(r(this))})}, n.makeJQueryPlugin(), n})
