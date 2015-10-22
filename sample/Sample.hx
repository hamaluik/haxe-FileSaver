package sample;

import js.html.Element;
import js.html.Blob;
import js.html.FileSaver;

using StringTools;

class Sample {
	static public function main() {
		var btn:Element = js.Browser.document.getElementById("downloadBtn");
		btn.addEventListener("click", function() {
			var blob:Blob = new Blob(["
# The Charge of the Light Brigade
by Alfred Lord Tennyson

    Half a league, half a league,
    Half a league onward,
    All in the valley of Death
    Rode the six hundred.
    \"Forward the Light Brigade!
    Charge for the guns!\" he said.
    Into the valley of Death
    Rode the six hundred.
    
    Forward, the Light Brigade!\"
    Was there a man dismay'd?
    Not tho' the soldier knew
    Some one had blunder'd.
    Theirs not to make reply,
    Theirs not to reason why,
    Theirs but to do and die.
    Into the valley of Death
    Rode the six hundred.
    
    Cannon to right of them,
    Cannon to left of them,
    Cannon in front of them
    Volley'd and thunder'd;
    Storm'd at with shot and shell,
    Boldly they rode and well,
    Into the jaws of Death,
    Into the mouth of hell
    Rode the six hundred.
    
    Flash'd all their sabres bare,
    Flash'd as they turn'd in air
    Sabring the gunners there,
    Charging an army, while
    All the world wonder'd.
    Plunged in the battery-smoke
    Right thro' the line they broke;
    Cossack and Russian
    Reel'd from the sabre-stroke
    Shatter'd and sunder'd.
    Then they rode back, but not,
    Not the six hundred.
    
    Cannon to right of them,
    Cannon to left of them,
    Cannon behind them
    Volley'd and thunder'd;
    Storm'd at with shot and shell,
    While horse and hero fell,
    They that had fought so well
    Came thro' the jaws of Death,
    Back from the mouth of hell,
    All that was left of them,
    Left of six hundred.
    
    When can their glory fade?
    O the wild charge they made!
    All the world wonder'd.
    Honor the charge they made!
    Honor the Light Brigade,
    Noble six hundred!
			".trim()]);
			FileSaver.saveAs(blob, "The Charge of the Light Brigade.md");
		});
	}
}