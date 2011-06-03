var googly = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("googly-strings");
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    //promptService.alert(window, this.strings.getString("helloMessageTitle"),
    //                            this.strings.getString("helloMessage"));
	
	var resp = googly.shorten(window.content.location.href);
	//promptService.alert(window, this.strings.getString("helloMessageTitle"),
    //                           resp);
	 
	
	
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    googly.onMenuItemCommand(e);
  }
  
  ,
  
  shorten: function(longURL) {
  
  var postData = {"longUrl": longURL};
  var http = false;

if(navigator.appName == "Microsoft Internet Explorer") {
  http = new ActiveXObject("Microsoft.XMLHTTP");
} else {
  http = new XMLHttpRequest();
}

http.open("POST", "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCk8sprjOO9OgJepWgnIiecxuvD30Q6hjE",true);
http.setRequestHeader("Content-Type", "application/json");

http.onreadystatechange=function() {
  if(http.readyState == 4) {
    //alert(http.responseText);
	//return window.content.location.href ;
	
	googly.copyClipboard(http.responseText);
	//alert(http.responseText);
	var jsObject = JSON.parse(http.responseText);
	alert(jsObject.id);
	//return http.responseText+" RR" ;
  }
}

	var formData = new FormData();
	formData.append("longUrl", "http://www.google.com/");
	http.send(JSON.stringify(postData));
	//http.send(formData);
  }
,

  copyClipboard : function(data) {
    const gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].
        getService(Components.interfaces.nsIClipboardHelper);
    gClipboardHelper.copyString(data);  }
  
};

window.addEventListener("load", function () { googly.onLoad(); }, false);
