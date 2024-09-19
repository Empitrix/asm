initAssembler = Module.cwrap('get_assemble', 'string', ['string']);
getMchineCode = Module.cwrap('get_mcode', 'string', ['void']);

let codeEditor;
let viewEditor;
let machineEditor;

let machineDataText = "int program[] = {};";

function runAssembler(){
	let data = codeEditor.getValue();
	data += "";
	let output = initAssembler(data);
	viewEditor.setValue(output)
	machineDataText = getMchineCode();
	machineEditor.setValue(machineDataText);
}

function copyToClipboard(){
	var btn = document.getElementById("cpyBtn");
	btn.innerHTML = "Copied!"
	setTimeout(function() {
		btn.innerHTML = "Copy";
	}, 1000)
	navigator.clipboard.writeText(machineDataText);
}


window.onerror = function() {
	var message = "ERROR";
	alert(message);
	return true;
};
