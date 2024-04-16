function LiOnClick(evt) {
	console.log("LI ->  target.tagName:" + evt.target.tagName + "  currentTarget.tagName:" + evt.currentTarget.tagName + 
	"  currentTarget.nodeName:" + evt.currentTarget.nodeName + "  phase:" + evt.eventPhase);
}

function divOnClick(evt) {
	console.log("DIV ->  target.tagName:" + evt.target.tagName + "  currentTarget.tagName:" + evt.currentTarget.tagName + 
	"  currentTarget.nodeName:" + evt.currentTarget.nodeName + "  phase:" + evt.eventPhase);
}

function BodyOnClick(evt) {
	console.log("BODY:Click ->  target.tagName:" + evt.target.tagName + "  currentTarget.tagName:" + evt.currentTarget.tagName + 
	"  currentTarget.nodeName:" + evt.currentTarget.nodeName + "  phase:" + evt.eventPhase);
	evt.stopPropagation();
}

function BodyOnClick2(evt) {
	console.log("BODY:Click2 ->  target.tagName:" + evt.target.tagName + "  currentTarget.tagName:" + evt.currentTarget.tagName + 
	"  currentTarget.nodeName:" + evt.currentTarget.nodeName + "  phase:" + evt.eventPhase);
}

function BodyOnClick3(evt) {
	console.log("BODY:Click3 ->  target.tagName:" + evt.target.tagName + "  currentTarget.tagName:" + evt.currentTarget.tagName + 
	"  currentTarget.nodeName:" + evt.currentTarget.nodeName + "  phase:" + evt.eventPhase);
}

function HtmlOnClick(evt) {
	console.log("HTML ->  target.tagName:" + evt.target.tagName + "  currentTarget.tagName:" + evt.currentTarget.tagName + 
	"  currentTarget.nodeName:" + evt.currentTarget.nodeName + "  phase:" + evt.eventPhase);
}

function DocOnClick(evt) {
	console.log("DOC ->  target.tagName:" + evt.target.tagName + "  currentTarget.tagName:" + evt.currentTarget.tagName + 
	"  currentTarget.nodeName:" + evt.currentTarget.nodeName + "  phase:" + evt.eventPhase);
}

function WindowOnClick(evt) {
	console.log("WINDOW ->  target.tagName:" + evt.target.tagName + "  currentTarget.tagName:" + evt.currentTarget.tagName + 
	"  currentTarget.nodeName:" + evt.currentTarget.nodeName + "  phase:" + evt.eventPhase);
}

window.addEventListener("load", (event) => {
	console.log("page is fully loaded");
	document.getElementById("test-div").addEventListener("click", divOnClick);
	document.getElementById("li-first").addEventListener("click", LiOnClick);
	document.getElementById("li-second").addEventListener("click", LiOnClick);
	document.getElementById("li-third").addEventListener("click", LiOnClick);

	document.getElementById("body").addEventListener("click", BodyOnClick);
	document.getElementById("body").addEventListener("click", BodyOnClick2);
	document.getElementById("body").addEventListener("click", BodyOnClick3);

	document.getElementsByTagName("html")[0].addEventListener("click", HtmlOnClick);

	document.addEventListener("click", DocOnClick);

	window.addEventListener("click", WindowOnClick);
});