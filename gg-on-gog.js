// ==UserScript==
// @name GG on GOG
// @description Add a GOG Games link to the GOG store
// @version 1.0
// @author GOG Games, Yepoleb
// @license CC0
// @namespace https://gog-games.com
// @icon https://gog-games.com/static/img/favicon-96.png
// @run-at document-end
// @match https://www.gog.com/game/*
// @match https://www.gog.com/*/game/*
// @grant unsafeWindow
// ==/UserScript==


var cardProductSlug = unsafeWindow.productcardData.cardProductSlug;

var gg_element = document.createElement("a");
gg_element.textContent = "Download from GG";
gg_element.setAttribute("href", "https://gog-games.com/game/" + cardProductSlug);
gg_element.className = "details__link";
gg_element.setAttribute("target", "_blank");

var separator_element = document.createTextNode(", ");

var links_xpath = "//a[@class='details__link' and contains(@href, 'gog.com/forum')]";
var links_element = document.evaluate(links_xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentNode;
links_element.appendChild(separator_element);
links_element.appendChild(gg_element);
