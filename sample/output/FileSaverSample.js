(function (console) { "use strict";
var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
var StringTools = function() { };
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
var sample_Sample = function() { };
sample_Sample.main = function() {
	var btn = window.document.getElementById("downloadBtn");
	btn.addEventListener("click",function() {
		var blob = new Blob([StringTools.trim("\r\n# The Charge of the Light Brigade\r\nby Alfred Lord Tennyson\r\n\r\n    Half a league, half a league,\r\n    Half a league onward,\r\n    All in the valley of Death\r\n    Rode the six hundred.\r\n    \"Forward the Light Brigade!\r\n    Charge for the guns!\" he said.\r\n    Into the valley of Death\r\n    Rode the six hundred.\r\n    \r\n    Forward, the Light Brigade!\"\r\n    Was there a man dismay'd?\r\n    Not tho' the soldier knew\r\n    Some one had blunder'd.\r\n    Theirs not to make reply,\r\n    Theirs not to reason why,\r\n    Theirs but to do and die.\r\n    Into the valley of Death\r\n    Rode the six hundred.\r\n    \r\n    Cannon to right of them,\r\n    Cannon to left of them,\r\n    Cannon in front of them\r\n    Volley'd and thunder'd;\r\n    Storm'd at with shot and shell,\r\n    Boldly they rode and well,\r\n    Into the jaws of Death,\r\n    Into the mouth of hell\r\n    Rode the six hundred.\r\n    \r\n    Flash'd all their sabres bare,\r\n    Flash'd as they turn'd in air\r\n    Sabring the gunners there,\r\n    Charging an army, while\r\n    All the world wonder'd.\r\n    Plunged in the battery-smoke\r\n    Right thro' the line they broke;\r\n    Cossack and Russian\r\n    Reel'd from the sabre-stroke\r\n    Shatter'd and sunder'd.\r\n    Then they rode back, but not,\r\n    Not the six hundred.\r\n    \r\n    Cannon to right of them,\r\n    Cannon to left of them,\r\n    Cannon behind them\r\n    Volley'd and thunder'd;\r\n    Storm'd at with shot and shell,\r\n    While horse and hero fell,\r\n    They that had fought so well\r\n    Came thro' the jaws of Death,\r\n    Back from the mouth of hell,\r\n    All that was left of them,\r\n    Left of six hundred.\r\n    \r\n    When can their glory fade?\r\n    O the wild charge they made!\r\n    All the world wonder'd.\r\n    Honor the charge they made!\r\n    Honor the Light Brigade,\r\n    Noble six hundred!\r\n\t\t\t")]);
		window.saveAs(blob,"The Charge of the Light Brigade.md");
	});
};
sample_Sample.main();
})(typeof console != "undefined" ? console : {log:function(){}});
