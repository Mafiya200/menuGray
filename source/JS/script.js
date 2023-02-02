'use strict';


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

let parent;
$(`.poligon__items`).click(function(e){
    const elemet = e.target.closest(`ion-icon`);
    if(!elemet) return;
    $(`.plits__item`).removeClass(`_active`);
    parent = elemet.closest(`.plits__item`);
    parent.classList.add(`_active`);

const parentItems = parent.closest(`.poligon__items`);  

const spanElem = parentItems.querySelector(`.poligon span`);

$(`.plits__bottom p`).css(`color`,``);
const bottomPart = parent.querySelector(`.plits__bottom p`);



spanElem.style.cssText = `
    left:${(parent.getBoundingClientRect().left-parentItems.getBoundingClientRect().left+(parent.getBoundingClientRect().width/2))/parentItems.getBoundingClientRect().width*100}%;
    top:${((bottomPart.getBoundingClientRect().top-parentItems.getBoundingClientRect().top)/parentItems.getBoundingClientRect().height)*100}%;
    `; 
setInterval(() => {
    spanElem.style.cssText = `
    left:${(parent.getBoundingClientRect().left-parentItems.getBoundingClientRect().left+(parent.getBoundingClientRect().width/2))/parentItems.getBoundingClientRect().width*100}%;
    top:${((bottomPart.getBoundingClientRect().top-parentItems.getBoundingClientRect().top)/parentItems.getBoundingClientRect().height)*100}%;
    `;   
}, 300);

});

