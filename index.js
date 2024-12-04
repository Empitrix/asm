initAssembler = Module.cwrap('get_assemble', 'string', ['string']);
getMchineCode = Module.cwrap('get_mcode', 'string', ['void']);
getLength = Module.cwrap('get_length', 'string', ['void']);
let vm_state = false;
let Running = null;

function setVmState(state) {
    vm_state = state;
}

function startLoading() {
    document.getElementById('preview').classList.add('loading');
}

function stopLoading() {
    document.getElementById('preview').classList.remove('loading');
}

function sendKeyEvents(inputString, holdCtrl = false) {
    // Get the target element by its ID
    const targetElement = document.getElementById("vga");
    // Check if the element exists
    if (!targetElement) {
        console.error(`Element with ID "vga" not found.`);
        return;
    }
    // Focus the target element
    targetElement.focus();

    // If holdCtrl is true, simulate pressing Ctrl key first
    if (holdCtrl) {
        const ctrlDownEvent = new KeyboardEvent("keydown", {
            key: 'Control',
            keyCode: 17,
            code: 'ControlLeft',
            ctrlKey: true,
            bubbles: true,
            cancelable: true
        });
        targetElement.dispatchEvent(ctrlDownEvent);
    }

    // Iterate over each character in the input string
    for (const char of inputString) {
        let keyCode, code;
        // Determine keyCode and code based on the character
        if (char === '\n') {
            keyCode = 13; // Enter key
            code = 'Enter';
        } else if (char === '.') {
            keyCode = 190; // Dot key
            code = 'Period';
        } else if (char === '-') {
            keyCode = 189; // Minus key
            code = 'Minus';
        } else if (char === '/') {
            keyCode = 191; // Slash key
            code = 'Slash';
        } else if (char === '\\') {
            keyCode = 220; // Backslash key
            code = 'Backslash';
        } else if (char === '+') {
            keyCode = 187; // Equal key (Shift + Equal gives Plus)
            code = 'Equal'; // The physical key is 'Equal'
            // Create and dispatch a 'keydown' event for Shift first
            const shiftEvent = new KeyboardEvent("keydown", {
                key: 'Shift',
                keyCode: 16,
                code: 'ShiftLeft',
                shiftKey: true,
                bubbles: true,
                cancelable: true
            });
            targetElement.dispatchEvent(shiftEvent);
        } else {
            keyCode = char.charCodeAt(0); // Get the char code for normal characters
            code = 'Key' + char.toUpperCase(); // Get the corresponding code
        }
        // Create the KeyboardEvent with ctrlKey set if holdCtrl is true
        const keyboardEvent = new KeyboardEvent("keydown", {
            key: char,
            keyCode: keyCode,
            code: code,
            shiftKey: char === '+',
            ctrlKey: holdCtrl,
            bubbles: true,
            cancelable: true
        });
        // Dispatch the event on the target element
        targetElement.dispatchEvent(keyboardEvent);

        // Create and dispatch keyup event
        const keyupEvent = new KeyboardEvent("keyup", {
            key: char,
            keyCode: keyCode,
            code: code,
            shiftKey: char === '+',
            ctrlKey: holdCtrl,
            bubbles: true,
            cancelable: true
        });
        targetElement.dispatchEvent(keyupEvent);

        // Release the Shift key if it was pressed for '+'
        if (char === '+') {
            const shiftReleaseEvent = new KeyboardEvent("keyup", {
                key: 'Shift',
                keyCode: 16,
                code: 'ShiftLeft',
                bubbles: true,
                cancelable: true
            });
            targetElement.dispatchEvent(shiftReleaseEvent);
        }
    }

    // If holdCtrl is true, simulate releasing Ctrl key at the end
    if (holdCtrl) {
        const ctrlUpEvent = new KeyboardEvent("keyup", {
            key: 'Control',
            keyCode: 17,
            code: 'ControlLeft',
            ctrlKey: false,
            bubbles: true,
            cancelable: true
        });
        targetElement.dispatchEvent(ctrlUpEvent);
    }
}

let originalVgaWidth = null;

function checkAndFit() {
    const preview = document.getElementById('preview');
    const vga = document.getElementById('vga');
    const scaleInput = document.getElementById('scale');

    // Get the widths
    const previewWidth = preview.clientWidth;
    const vgaWidth = vga.clientWidth;

    // Calculate scale factor with 2 decimal precision
    let scaleFactor = Number(((previewWidth - 20) / originalVgaWidth).toFixed(4));

    // Only update if scale factor has changed
    if ((previewWidth - vgaWidth > 30) || (previewWidth - vgaWidth < 20)) {
        // Update scaleInput.value and log to ensure accurate comparison
        scaleInput.value = scaleFactor;

        // Dispatch the 'change' event after updating the value
        scaleInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
}
function runner() {
    vgaClientWidth = document.getElementById('vga').clientWidth;
    vgaClientHeight = document.getElementById('vga').clientHeight;
    let ratio = vgaClientWidth / vgaClientHeight;
    if (vgaClientWidth > 0 && Math.abs(ratio - 1.33) < 0.04) {
        if (originalVgaWidth === null || originalVgaWidth === 0) {
            setInterval(checkAndFit, 250);
            originalVgaWidth = vgaClientWidth;
            clearInterval(runnerState);
            setVmState(true);
        }
    }
}

runnerState = setInterval(runner, 50);

function startUp() {
    sendKeyEvents("cd ..\n");
    uploadFromUrl("/asm/cpu.emu");
    sendKeyEvents("chmod +x cpu.emu\n");
    sendKeyEvents("touch bin.bin\n");
    sendKeyEvents("./cpu.emu -p bin.bin -c -s\n");
    setTimeout(() => stopLoading(), 2000);
}


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
    });
    const darkModeToggle = document.getElementById('darkModeToggle');
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
    } catch (e) {
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

async function uploadFromUrl(url) {
    try {
        // Fetch the file from URL
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the file name from the URL
        const fileName = url.split('/').pop() || 'app';

        // Get the mime type from the response
        const contentType = response.headers.get('content-type') || 'application/octet-stream';

        // Get the file content as blob
        const blob = await response.blob();

        // Create a File object from the blob
        const file = new File([blob], fileName, { type: contentType });

        // Create a DataTransfer object to hold the file
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        // Assign the DataTransfer object to the file input
        const fileInput = document.getElementById('filesystem_send_file');
        fileInput.files = dataTransfer.files;

        // Create and dispatch the change event
        const event = new Event('change', { bubbles: true });
        fileInput.dispatchEvent(event);

        return true;
    } catch (error) {
        console.error('Error uploading file from URL:', error);
        return false;
    }
}

function createAndUploadBinFile(arrayStr, fileName = "app.bin") {
    // Extract numbers from the string using regex
    const numbers = arrayStr.match(/\d+/g).map(Number);

    // Convert each number to two bytes
    const bytes = numbers.flatMap(num => [
        (num >> 8) & 0xFF,  // high byte
        num & 0xFF          // low byte
    ]);

    // Create binary array
    const uint8Array = new Uint8Array(bytes);

    // Create blob and file
    const blob = new Blob([uint8Array], { type: 'application/octet-stream' });
    const file = new File([blob], fileName, { type: 'application/octet-stream' });

    // Create a DataTransfer object to hold the file
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    // Assign the DataTransfer object to the file input
    const fileInput = document.getElementById('filesystem_send_file');
    fileInput.files = dataTransfer.files;

    // Create and dispatch the change event
    const event = new Event('change', { bubbles: true });
    fileInput.dispatchEvent(event);

}

function stepping() {
    if (vm_state) {
        Running = setInterval(() => sendKeyEvents(" "), 1000);
    }
}
function runAssembler() {
    let data = editor.getValue();
    data += "";
    let output = initAssembler(data);
    //remove whitespace from the end of the output
    output = output.replace(/\s+$/, "");
    editors.asm2.setValue(output)
    machineDataText = getMchineCode();
    editors.c2.setValue(machineDataText);

    addLogEntry("INFO", convertMemoryUsage(getLength()));


    if (vm_state) {
        startLoading();

        sendKeyEvents("C", true);

        setTimeout(() => sendKeyEvents("rm app.bin\n"), 200);
        setTimeout(() => createAndUploadBinFile(machineDataText), 1500);

        addLogEntry("INFO", "File uploaded to filesystem");
        setTimeout(() => sendKeyEvents("./cpu.emu -p app.bin -c -s\n"), 2600);

        addLogEntry("INFO", "Starting execution");
        setTimeout(() => stopLoading(), 3000);
        setTimeout(() => stepping(), 3000);
        
    }
    addDecorations(editors.asm2, findLabelAddresses(output));
}
async function copyToClipboard() {
    try {
        // Find the active tab button
        const activeTab = document.querySelector('.tab-button.active');
        if (!activeTab) {
            showToast('No active tab found!', 'error');
            return;
        }

        // Get the tab ID
        const tabId = activeTab.getAttribute('data-tab');
        let content = '';

        switch (tabId) {
            case 'code':
                content = editor.getValue();
                break;
            case 'c1':
                content = editors.c1.getValue();
                break;
            case 'asm2':
                content = editors.asm2.getValue();
                break;
            case 'c2':
                content = editors.c2.getValue();
                break;
            default:
                showToast('Unable to find editor content!', 'error');
                return;
        }

        // Check if we got any content
        if (!content && content !== '') {  // Allow empty string but not null/undefined
            showToast('No content to copy!', 'error');
            return;
        }

        // Copy to clipboard
        navigator.clipboard.writeText(content);

        // Show success message with tab name
        const tabName = activeTab.textContent.trim();
        showToast(`${tabName} content copied!`, 'success');

    } catch (error) {
        // Handle errors
        showToast('Failed to copy: ' + error.message, 'error');
        console.error('Copy failed:', error);
    }
}

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
    setTimeout(function () {
        copyBtn.innerHTML = "Copy";
    }, 1000)
});

// Close the modal
okBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal on clicking outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove('active');
    }
};
// Add this to your JavaScript file (func.js or index.js)

// Create toast container if it doesn't exist
function createToastContainer() {
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
}

// Function to show toast message
function showToast(message, type = 'info', duration = 3000) {
    createToastContainer();

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    // Add icon based on type
    let icon = '';
    switch (type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case 'info':
            icon = '<i class="fas fa-info-circle"></i>';
            break;
    }

    // Set toast content
    toast.innerHTML = `${icon}<span>${message}</span>`;

    // Add toast to container
    const container = document.getElementById('toast-container');
    container.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Hide and remove toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, duration);
}
