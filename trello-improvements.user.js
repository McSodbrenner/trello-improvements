// ==UserScript==
// @name         Trello improvements
// @downloadURL  https://raw.githubusercontent.com/McSodbrenner/trello-improvements/master/trello-improvements.user.js
// @namespace    https://github.com/McSodbrenner/trello-improvements
// @version      0.1
// @description  Greasemonkey script for adding some improvements to the trello GUI
// @author       Christoph Erdmann
// @match        https://trello.com/*
// @grant        GM_addStyle
// @grant        GM_log
// ==/UserScript==

// narrow list width
GM_addStyle (".list { flex: 0 0 220px; }");

// add preview images to links
setInterval(function(){
	var elements = document.getElementsByClassName('attachment-thumbnail-preview');
    Array.prototype.forEach.call(elements, function(element) {
        element.style.backgroundSize = 'contain';
        element.style.backgroundColor = 'initial';
       	element.style.height = '74px';

        if (typeof(element.childNodes[1]) != 'undefined' && element.childNodes[1].nodeName == 'SPAN' && element.childNodes[1].classList.contains('attachment-thumbnail-preview-ext')) {
            element.removeChild(element.childNodes[1]);
            element.style.backgroundImage = 'url(https://api.thumbalizr.com/?url='+encodeURIComponent(element.href)+'&width=108)';
        }
    });
}, 1000);
