package js.html;

import js.html.Blob;

@:native('window')
extern class FileSaver {
	public static function saveAs(data:Blob, filename:String, ?disableAutoBOM:Bool):Void;
}