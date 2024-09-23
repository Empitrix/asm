initAssembler = Module.cwrap('get_assemble', 'string', ['string']);
getMchineCode = Module.cwrap('get_mcode', 'string', ['void']);
cleanUpCache = Module.cwrap('cleanup', 'void', ['void']);

let editor;
let viewEditor;
let machineEditor;

let machineDataText = "int program[] = {};";

function runAssembler(){
	let data = editor.getValue();
	data += "";
	let output = initAssembler(data);
	viewEditor.setValue(output)
	machineDataText = getMchineCode();
	machineEditor.setValue(machineDataText);
	cleanUpCache();
}


function copyToClipboard(){
	var btn = document.getElementById("cpy_btn");
	btn.innerHTML = "Copied!"
	setTimeout(function() {
		btn.innerHTML = "Copy";
	}, 1000)
	navigator.clipboard.writeText(machineDataText);
}

window.onerror = function(message, source, line, col, error) {
	console.log(message, source, line, col, error);
};
