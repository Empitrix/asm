initAssembler = Module.cwrap('get_assemble', 'string', ['string']);
getMchineCode = Module.cwrap('get_mcode', 'string', ['void']);
getLength = Module.cwrap('get_length', 'string', ['void']);
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
	document.getElementById("counter").innerHTML = getLength();
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

const modal = document.getElementById('overlay');
const modalInput = document.getElementById('modalInput');
const copyBtn = document.getElementById('copyBtn');
const okBtn = document.getElementById('okBtn');

function generateHashtagURL(fragment) {
	// Encode the fragment to make it URL safe (e.g., spaces become %20)
	const encodedFragment = encodeURIComponent(fragment);

	// Get the current page URL without any existing fragment
	const baseUrl = window.location.href.split('#')[0];

	// Generate the new URL with the hashtag fragment
	const hashtagUrl = `${baseUrl}#${encodedFragment}`;

	return hashtagUrl;
}

function openShareModal() {
  // Set the modal to active and insert the current URL
  modal.classList.add('active');
  modalInput.value = generateHashtagURL(editor.getValue());
}

// Copy the URL to the clipboard
copyBtn.addEventListener('click', () => {
  modalInput.select();
  document.execCommand('copy');
  copyBtn.innerHTML = "Copied!"
  setTimeout(function() {
		copyBtn.innerHTML = "Copy";
	}, 1000)
});

// Close the modal
okBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Close modal on clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
	modal.classList.remove('active');
  }
};