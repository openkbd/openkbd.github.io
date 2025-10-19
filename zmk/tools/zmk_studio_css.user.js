// ==UserScript==
// @name         zmk studio css
// @namespace    http://tampermonkey.net/
// @version      2025-04-12
// @description  try to take over the world!
// @author       YANG
// @match        https://zmk.studio/
// @icon         https://icons.duckduckgo.com/ip2/zmk.studio.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    addGlobalStyle('.group.inline-flex[width="0.01"]{display:none;}');
    addGlobalStyle('.text-xs { font-size: .6rem; line-height: 1rem; display: block;}');

    //addGlobalStyle('span.hidden{display:inline-block;}');
})();

function addGlobalStyle(css) {
    var head, style;
    //head = document.getElementsByTagName('head')[0];
    // 换用html，这样实际加载到了</head>和<body>之间
    head = document.getElementsByTagName('html')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css.replace(/;/g, ' !important;');
    head.appendChild(style);
}