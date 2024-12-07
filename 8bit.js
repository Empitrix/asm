// Register a new language
monaco.languages.register({ id: "8bit" });

const keywordDescriptions = {
    'GOTO': 'Jumps to a specific label in the code.',
    'NOP': 'No Operation, does nothing and moves to the next instruction.',
    'MOVLW': 'Move literal value to W register.',
    'MOVWF': 'Move the value in W register to a file register.',
    'CLRF': 'Clear the specified file register.',
    'CLRW': 'Clear the W register.',
    'SLEEP': 'Puts the device into sleep mode.',
    'DECF': 'Decrement the file register.',
    'DECFSZ': 'Decrement the file register and skip if zero.',
    'INCF': 'Increment the file register.',
    'INCFSZ': 'Increment the file register and skip if zero.',
    'BTFSS': 'Bit test in the file register, skip if set.',
    'BTFSC': 'Bit test in the file register, skip if clear.',
    'ADDWF': 'Add the value in W register to the specified file register.',
    'ANDWF': 'AND the value in W register with the specified file register.',
    'COMF': 'Complement the specified file register.',
    'IORWF': 'Inclusive OR the value in W register with the specified file register.',
    'RLF': 'Rotate the specified file register left through the Carry flag.',
    'RRF': 'Rotate the specified file register right through the Carry flag.',
    'SUBWF': 'Subtract the value in W register from the specified file register.',
    'SWAPF': 'Swap the upper and lower nibbles of the specified file register.',
    'XORWF': 'Exclusive OR the value in W register with the specified file register.',
    'BCF': 'Clear a specific bit in the specified file register.',
    'BSF': 'Set a specific bit in the specified file register.',
    'ANDLW': 'AND a literal value with the W register.',
    'CALL': 'Call a subroutine.',
    'CLRWDT': 'Clear the Watchdog Timer.',
    'IORLW': 'Inclusive OR a literal value with the W register.',
    'OPTION': 'Load the OPTION register.',
    'RETLW': 'Return from a subroutine and place a literal value in the W register.',
    'TRIS': 'Load the TRIS register.',
    'EQU': 'Defines a Symbol as an Expression.',
    'MOVF': 'Move content of the specified register.',
    'XORLW': 'Exclusive OR a literal value with the W register.',
};

let keyRegex = getLabels(Object.keys(keywordDescriptions));

monaco.languages.setMonarchTokensProvider('8bit', {
    tokenizer: {
        root: [
            [/^\s*[a-zA-Z_][a-zA-Z0-9_]*\s*:/, 'label'],
            [keyRegex, "keyword"],
            [/^;.*/, 'comment'],
            [/;.*$/, 'comment'],
            [/\b(?<=GOTO\s)([a-zA-Z_][a-zA-Z0-9_]*)\b/, "label"],
            [/\b(0x[0-9a-fA-F]+\b|0b[01]+\b|\d+)\b/, 'number'],
            [/\b[0-9a-fA-F]{2}H\b/, 'number'],
            [/(\'(\\t|\\\\|\\n|[^\\])\')/, 'number'],
        ]
    }
});

// Register hover provider for the language
monaco.languages.registerHoverProvider('8bit', {
    provideHover: function (model, position) {
        const wordInfo = model.getWordAtPosition(position);
        const word = wordInfo ? wordInfo.word : null;

        // Check for symbol definitions
        if (word && symbolTable[word]) {
            return {
                range: new monaco.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn),
                contents: [
                    { value: '**Symbol Information**' },
                    { value: `The symbol **${word}** is defined as:` },
                    { value: `**Expression**: ${symbolTable[word]}` }
                ]
            };
        }

        // Check for keyword descriptions
        if (word && keywordDescriptions[word]) {
            return {
                range: new monaco.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn),
                contents: [
                    { value: '**' + word + '**' },
                    { value: keywordDescriptions[word] }
                ]
            };
        }

        return null; // No hover content if neither keyword nor symbol
    }
});

// Define a new theme
monaco.editor.defineTheme("8bit", {
    base: "vs-dark",
    inherit: false,
    rules: [
        { token: "label", foreground: "aaffaa" },
        { token: "keyword", foreground: "aaaaff", fontStyle: "bold" },
        { token: "comment", foreground: "22ffff" },
        { token: "symbol", foreground: "ffff00" },
        { token: "number", foreground: "ff99ff" }
    ],
    colors: {
        "editor.foreground": "#f6f8fa",
        "editor.background": "#0a090e",
        "minimap.background": "#0a090e",
    },
});

let symbolTable = {};
let labels = [];
//updateSymbolTable(symbolTable, labels);

// Get dynamic symbols regex
function getDynamicSymbolsRegex() {
    const symbols = Object.keys(symbolTable).map(symbol => `\\b${symbol}\\b`).join('|');
    return new RegExp(symbols, 'g');
}

function getLabels(labels) {
    const escapedLabels = labels.map(label => label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return new RegExp(`\\b(${escapedLabels.join('|')})\\b`, 'g');
}

// Update symbol table and tokenizer
function updateSymbolTable(newSymbols, labels) {
    symbolTable = { ...symbolTable, ...newSymbols };
    let labelRegex = getLabels(labels);
    let keyRegex = getLabels(Object.keys(keywordDescriptions));
    monaco.languages.setMonarchTokensProvider('8bit', {
        tokenizer: {
            root: [
                [/^\s*[a-zA-Z_][a-zA-Z0-9_]*\s*:/, 'label'],
                [keyRegex, "keyword"],
                [/^;.*/, 'comment'],
                [/;.*$/, 'comment'],
                [/\b(?<=GOTO\s)([a-zA-Z_][a-zA-Z0-9_]*)\b/, "label"],
                [/\b(0x[0-9a-fA-F]+\b|0b[01]+\b|\d+)\b/, 'number'],
                [getDynamicSymbolsRegex(), 'symbol'],
                [labelRegex, "label"]
            ]
        }
    });
}

// Extract symbols and expressions from the editor model
function extractSymbolsFromModel(model) {
    labels = []
    const lines = model.getLinesContent();
    lines.forEach(line => {
        let match = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s+EQU\s+(.*?)(;.*)?$/);
        if (match) {
            const symbol = match[1];
            const expression = match[2];
            symbolTable[symbol] = expression; // Add to symbol table
        }
        match = line.match(/\b(?<=GOTO\s)([a-zA-Z_][a-zA-Z0-9_]*)\b/);
        if (match && match[0].length > 1) {
            labels.push(match[0]);
        }
    });
    //updateSymbolTable(symbolTable, labels);
}

// Initial code
function getCode() {
    // Get the fragment part of the URL (text after '#')
    const fragment = window.location.hash.substring(1); // Remove the '#' character
    if (fragment) {
        let code = decodeURIComponent(fragment);
        return code;
    }

     
    let asm =`GPIO EQU 0x06   ; Define a constant for the GPIO register address
start:
    BSF GPIO, 0   ; Set bit 0 of the GPIO register (turn on the LED)
    NOP           ; Do nothing (introduce a small delay)
    BCF GPIO, 0   ; Clear bit 0 of the GPIO register (turn off the LED)
    GOTO start    ; Jump back to the beginning (infinite loop)`;
    return asm;
}

// Create the editor instance
function createEditor() {
    editor = monaco.editor.create(document.getElementById("code"), {
        theme: "8bit",
        value: getCode(),
        language: "8bit",
        automaticLayout: true
    });

    // Call this function whenever the editor content changes
    editor.onDidChangeModelContent(() => {
        extractSymbolsFromModel(editor.getModel());
    });

    extractSymbolsFromModel(editor.getModel());

    // Add a custom action
    editor.addAction({
        id: 'assamble',
        label: 'Assamble',
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter
        ],

        // This method will be triggered when the action is executed
        run: function (ed) {
            const selectedText = ed.getModel().getValueInRange(ed.getSelection());
            runAssembler();
        }

    });
}

// Initialize the editor when the page loads
window.onload = createEditor;
