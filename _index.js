initAssembler = Module.cwrap('get_assemble', 'string', ['string']);
getMchineCode = Module.cwrap('get_mcode', 'string', ['void']);
getLength = Module.cwrap('get_length', 'string', ['void']);
cleanUpCache = Module.cwrap('cleanup', 'void', ['void']);

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.32.1/min/vs' } });
let editors = {};
require(['vs/editor/editor.main'], function () {
    var script = document.createElement('script');
    script.src = '8bit.js';
    document.body.appendChild(script);
    editors = {
        c1: monaco.editor.create(document.getElementById('c1-editor'), {
            value: '// C Code 1\n',
            language: 'c',
            theme: 'vs-dark'
        }),
        asm2: monaco.editor.create(document.getElementById('asm2-editor'), {
            value: '// Machine Code\n',
            language: '8bit',
            theme: 'vs-dark',
            lineNumbers: function (lineNumber) {
                return '0x' + (lineNumber - 1).toString(16).toUpperCase().padStart(4, '0');
            },
            glyphMargin: true,
            readOnly: true
        }),
        c2: monaco.editor.create(document.getElementById('c2-editor'), {
            value: '// C Code 2\n',
            language: 'c',
            theme: 'vs-dark',
            readOnly: true
        })
    };
    window.addEventListener('resize', () => {
        Object.values(editors).forEach(editor => editor.layout());
        viewEditor.layout();
    });
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        const theme = darkModeToggle.checked ? 'vs-dark' : 'vs';
        Object.values(editors).forEach(editor => {
            monaco.editor.setTheme(theme);
        });
        monaco.editor.setTheme(theme);
    });
});
const tabButtons = document.querySelectorAll('.tab-button');
const editorContainers = document.querySelectorAll('.editor-container');
function activateTab(tabName) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    editorContainers.forEach(container => container.classList.remove('active'));
    const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
    let activeContainer;
    try {
      activeContainer = document.getElementById(`${tabName}-editor`);
    } catch (e){
    }
    if (!activeContainer) {
      activeContainer = document.getElementById("code");
    }
    if (activeButton && activeContainer) {
        activeButton.classList.add('active');
        activeContainer.classList.add('active');
        if (editors[tabName]) {
            editors[tabName].layout();
        }
    }
}
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        activateTab(tabName); 
    });
});
function setMode() {
    const checkbox = document.getElementById('mode');
    if (checkbox.checked) {
        activateTab('c1');
        document.getElementById("__c1").disabled = false;
        editor.updateOptions({ readOnly: true });
    } else {
        activateTab("code");
        document.getElementById("__c1").disabled = true;
        editor.readOnly = false;
        editor.updateOptions({ readOnly: false });
    }
}

let editor;
let viewEditor;
let machineEditor;

let machineDataText = "int program[] = {};";

function findLabelAddresses(input) {
    const regex = /GOTO\s+0x([0-9A-Fa-f]+)/g;
    const labels = [];
    let match;
    while ((match = regex.exec(input)) !== null) {
        labels.push(parseInt(match[1], 16) + 1);
    }
    return labels;
}

function addDecorations(editor, lineNumbers) {
    const decorations = lineNumbers.map(line => ({
        range: new monaco.Range(line, 1, line, 1),
        options: {
            isWholeLine: false,
            glyphMarginClassName: "label-icon",
        },
    }));

    editor.deltaDecorations([], decorations);
}

function addLogEntry(level, message) {
    const logContent = document.getElementById("logContent");

    // Generate the current timestamp in the format YYYY-MM-DD HH:MM:SS
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace("T", " ");

    // Create a new log-line div
    const logLine = document.createElement("div");
    logLine.classList.add("log-line");

    // Create and append the timestamp span
    const logTimestamp = document.createElement("span");
    logTimestamp.classList.add("log-timestamp");
    logTimestamp.textContent = timestamp;
    logLine.appendChild(logTimestamp);

    // Create and append the log level span
    const logLevel = document.createElement("span");
    logLevel.classList.add("log-level", level.toLowerCase());
    logLevel.textContent = level.toUpperCase();
    logLine.appendChild(logLevel);

    // Create and append the message span
    const logMessage = document.createElement("span");
    logMessage.classList.add("log-message");
    logMessage.textContent = message;
    logLine.appendChild(logMessage);

    // Append the new log line to log content
    logContent.appendChild(logLine);
}


function convertMemoryUsage(input) {
	return input.replace(/(\w+): (\d+)/g, (match, key, value) => {
	  return `${key} Usage - ${value} byte[s]`;
	});
  }
  

function runAssembler(){
	let data = editor.getValue();
	data += "";
	let output = initAssembler(data);
	//remove whitespace from the end of the output
	output = output.replace(/\s+$/, "");
	editors.asm2.setValue(output)
	machineDataText = getMchineCode();
	editors.c2.setValue(machineDataText);
	
	addLogEntry("INFO", convertMemoryUsage(getLength()));
	cleanUpCache();
	addDecorations(editors.asm2, findLabelAddresses(output)); 
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