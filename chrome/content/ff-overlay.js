googly.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ googly.showFirefoxContextMenu(e); }, false);
  addButton();
};

googly.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-googly").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { googly.onFirefoxLoad(); }, false);


function addButton() {
	//alert("Added");
	var myId = "googly-toolbar-button"; // ID of button to add
	var afterId = "urlbar-container"; // ID of element to insert after
	var navBar = document.getElementById("nav-bar");
	var curSet = navBar.currentSet.split(",");

	if (curSet.indexOf(myId) == -1) {
		var pos = curSet.indexOf(afterId) + 1 || curSet.length;
		var set = curSet.slice(0, pos).concat(myId).concat(curSet.slice(pos));

		navBar.setAttribute("currentset", set.join(","));
		navBar.currentSet = set.join(",");
		document.persist(navBar.id, "currentset");
		try {
			BrowserToolboxCustomizeDone(true);
		} catch (e) {
		}
	}

}
