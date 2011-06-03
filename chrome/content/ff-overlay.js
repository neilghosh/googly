googly.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ googly.showFirefoxContextMenu(e); }, false);
};

googly.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-googly").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { googly.onFirefoxLoad(); }, false);
