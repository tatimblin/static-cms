"use strict";function preloadImages(o){function s(o){return new Promise(function(s,t){var e=new Image;e.onload=function(){s(e)},e.onerror=e.onabort=function(){t(o)},e.src=o})}for(var t=[],e=0;e<o.length;e++)t.push(s(o[e]));return Promise.all(t)}preloadImages(["images/assets/otto-hero-commute.jpg","images/assets/otto-hero-nature.jpg","images/assets/otto-hero-community.jpg","images/assets/otto-story-ext.jpg","images/assets/otto-story-hist-ext.jpg","images/assets/otto-story-hist-int.jpg","images/assets/otto-brewerytown-storefront.jpg","images/assets/otto-brewerytown-philadelphia-skyline.jpg","images/assets/otto-plan-fairmount-park.jpg","images/assets/otto-plan-glenwood-avenue.jpg","images/assets/otto-plan-septa.jpg"]).then(function(o){console.log("images loaded")},function(o){console.log("error loading images")});