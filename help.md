<div align="center" style="margin: 10px">
	<picture>
		<img alt="Amethyst" src="https://github.com/Empitrix/amethyst/raw/master/assets/amethyst.png" width="60%">
	</picture>
	<h1>Amethyst</h1>
	<p>This project implements a simplified 8-bit CPU architecture in C, along with an assembler, emulator, and a TUI-based visualization tool. It serves as an educational tool for understanding computer architecture, instruction sets, and low-level programming.</p>
</div>


## CPU Specifications:
### Memory
- 16 bytes of RAM (Addresses `0x10` to `0x1F`)
- 256 words of ROM (Addresses `0x00` to `0xFF`)

### Registers
- 10 special-purpose registers (Addresses `0x00` to `0x09`)
  - Register `0x06`: GPIO (General Purpose Input/Output)

### Opcodes
<!-- BSF -->
<details>
  <summary>BSF f, b</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Set bit (<code>b</code>) at address (<code>f</code>) to 1</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0101 bbbf ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>BSF GPIO, 0</code></td>
    </tr>
  </table>
</details>

<!-- BCF -->
<details>
  <summary>BCF f, b</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Set bit (<code>b</code>) at address (<code>f</code>) to 0</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0100 bbbf ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>BCF GPIO, 0</code></td>
    </tr>
  </table>
</details>

<!-- GOTO -->
<details>
  <summary>GOTO k</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Goto given lable</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>101k kkkk kkkk</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>GOTO start</code></td>
    </tr>
  </table>
</details>


<!-- NOP -->
<details>
  <summary>NOP</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>No operation</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 0000 0000</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>NOP</code></td>
    </tr>
  </table>
</details>

<!-- MOVLW -->
<details>
  <summary>MOVLW K</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Loads a literal (immediate) value into the <code>W</code> register.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>1100 KKKK KKKK</code> (where <code>KKKKKKKK</code> is the 8-bit literal value)</td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>MOVLW 03H</code></td>
    </tr>
  </table>
</details>

<!-- MOVWF -->
<details>
  <summary>MOVWF f</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Moves the contents of the <code>W</code> register to a specified register or memory location.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 001F FFFF</code> (where <code>FFFFF</code> is the 5-bit address)</td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>MOVWF 06H</code></td>
    </tr>
  </table>
</details>

<!-- CLRF -->
<details>
  <summary>CLRF f</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Clears (sets to 0) a specified register or memory location.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 011F FFFF</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>CLRF 06H</code></td>
    </tr>
  </table>
</details>

<!-- CLRW -->
<details>
  <summary>CLRW</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Clears the <code>W</code> register.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 0100 0000</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>CLRW</code></td>
    </tr>
  </table>
</details>

<!-- SLEEP -->
<details>
  <summary>SLEEP</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Puts the CPU into a standby mode.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 0000 0011</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>SLEEP</code></td>
    </tr>
  </table>
</details>

<!-- DECF -->
<details>
  <summary>DECF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Decrement register <code>f</code> and store the result back in <code>f</code> only if (<code>d</code>) destination is <code>1</code> otherwise store the resutl into register <code>W</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 11dF FFFF</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>DECF 0x01, 1</code></td>
    </tr>
  </table>
</details>

<!-- DECFSZ -->
<details>
  <summary>DECFSZ f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Decrement the contents of register f. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>. If the result is <code>0</code>, skip the next instruction (which is already fetched) and execute a <code>NOP</code> instead.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0010 11dF FFFF</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>DECFSZ 0x02, 1</code></td>
    </tr>
  </table>
</details>

<!-- INCF -->
<details>
  <summary>INCF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Increment the contents of register <code>f</code>. If <code>d</code> is <code>0</code>, store the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, store the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0010 10dF FFFF</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>INCF 0x03, 1</code></td>
    </tr>
  </table>
</details>

<!-- INCFSZ -->
<details>
  <summary>INCFSZ f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Increment the contents of register f. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>. If the result is <code>0</code>, skip the next instruction and execute a <code>NOP</code> instead.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0011 11dF FFFF</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>INCFSZ 0x04, 1</code></td>
    </tr>
  </table>
</details>

<!-- BTFSS -->
<details>
  <summary>BTFSS f, b</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Test the bit <code>b</code> in register <code>f</code>. If bit b is <code>1</code>, skip the next instruction (which is already fetched) and execute a <code>NOP</code> instead.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0110 bbbF FFFF</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>BTFSC 0x06, 2</code></td>
    </tr>
  </table>
</details>

<!-- BTFSC -->
<details>
  <summary>BTFSC f, b</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Test the bit <code>b</code> in register <code>f</code>. If bit b is <code>0</code>, skip the next instruction (which is already fetched) and execute a <code>NOP</code> instead.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0111 bbbF FFFF</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>BTFSC 0x06, 2</code></td>
    </tr>
  </table>
</details>


<!-- ADDWF -->
<details>
  <summary>ADDWF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Add the value in <code>W</code> register to the specified file register. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0001 11df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>ADDWF 0x06, 1</code></td>
    </tr>
  </table>
</details>

<!-- ANDWF -->
<details>
  <summary>ANDWF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>AND the value in <code>W</code> register with the specified file register. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0001 01df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>ANDWF 0x06, 1</code></td>
    </tr>
  </table>
</details>


<!-- COMF -->
<details>
  <summary>COMF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Complement the specified file register. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0010 01df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>COMF 0x06, 1</code></td>
    </tr>
  </table>
</details>

<!-- IORWF -->
<details>
  <summary>IORWF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Inclusive OR the value in <cod>W</cod> register with the specified file register. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0001 00df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>IORWF 0x06, 1</code></td>
    </tr>
  </table>
</details>

<!-- MOVF -->
<details>
  <summary>MOVF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Move content of the specified register. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0010 00df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>MOVF 0x06, 0</code></td>
    </tr>
  </table>
</details>


<!-- RLF -->
<details>
  <summary>RLF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Rotate the specified file register left through the Carry flag. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0011 01df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>RLF 0x06, 0</code></td>
    </tr>
  </table>
</details>

<!-- RRF -->
<details>
  <summary>RRF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Rotate the specified file register right through the Carry flag. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0011 00df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>RRF 0x06, 0</code></td>
    </tr>
  </table>
</details>

<!-- SUBWF -->
<details>
  <summary>SUBWF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Subtract the value in <code>W</code> register from the specified file register. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 10df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>SUBWF 0x06, 0</code></td>
    </tr>
  </table>
</details>


<!-- SWAPF -->
<details>
  <summary>SWAPF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Swap the upper and lower nibbles of the specified file register. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0011 10df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>SWAPF 0x06, 0</code></td>
    </tr>
  </table>
</details>

<!-- XORWF -->
<details>
  <summary>XORWF f, d</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Exclusive OR the value in <code>W</code> register with the specified file register. If <code>d</code> is <code>0</code>, place the result in the <code>W</code> register. If <code>d</code> is <code>1</code>, place the result back in register <code>f</code>.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0001 10df ffff</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>XORWF 0x06, 0</code></td>
    </tr>
  </table>
</details>

<!-- ANDLW -->
<details>
  <summary>ANDLW k</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>AND a literal value with the <code>W</code> register</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>1110 kkkk kkkk</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>ANDLW 0b00000110</code></td>
    </tr>
  </table>
</details>

<!-- CALL -->
<details>
  <summary>CALL k</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Call a subroutine.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>1001 kkkk kkkk</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>CALL start</code></td>
    </tr>
  </table>
</details>

<!-- CLRWDT -->
<details>
  <summary>CLRWDT</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Clear the Watchdog Timer.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 0000 0100</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>CLRWDT</code></td>
    </tr>
  </table>
</details>

<!-- IORLW -->
<details>
  <summary>IORLW k</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Inclusive OR a literal value with the <code>W</code> register.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>1101 kkkk kkkk</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>IORLW 05H</code></td>
    </tr>
  </table>
</details>


<!-- OPTION -->
<details>
  <summary>OPTION</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Load the OPTION register.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 0000 0010</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>OPTION</code></td>
    </tr>
  </table>
</details>

<!-- RETLW -->
<details>
  <summary>RETLW k</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Return from a subroutine and place a literal value in the W register.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>1000 kkkk kkkk</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>RETLW 07H</code></td>
    </tr>
  </table>
</details>

<!-- TRIS -->
<details>
  <summary>TRIS f</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Load the TRIS register.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>0000 0000 0fff</code> (<code>0000 0000 0110</code> or <code>0000 0000 0111</code>)</td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>TRIS 07H</code> or <code>TRIS 06H</code></td>
    </tr>
  </table>
</details>

<!-- XORLW -->
<details>
  <summary>XORLW k</summary>
  <table>
    <tr>
      <td><strong>Description</strong></td>
      <td>Exclusive OR a literal value with the <code>W</code> register.</td>
    </tr>
    <tr>
      <td><strong>Encoding</strong></td>
      <td><code>1111 kkkk kkkk</code></td>
    </tr>
    <tr>
      <td><strong>Example</strong></td>
      <td><code>XORLW 12H</code></td>
    </tr>
  </table>
</details>




### Console
This section displays ASCII characters directly from the CPU's GPIO port. To print a character, write its 7-bit ASCII code to the port and set the eighth bit (bit 7) to 1. The corresponding ASCII character will appear on the console.

```asm
MOVLW 'A'     ; Load the ASCII code for 'A' into register W
MOVWF GPIO    ; Write the value from register W to the GPIO port
BSF GPIO, 7   ; Set the eighth bit (bit 7) of the GPIO port to 1
```

<div align="center" style="margin: 10px">
	<picture>
		<img alt="Quartz" src="https://github.com/Empitrix/quartz/raw/master/assets/quartz.png" width="45%">
	</picture>
	<h1>Quartz</h1>
	<!-- <p>A compiler for <a href="https://github.com/empitrix/8bitcpu">Amethyst</a></p> -->
	<p>Quartz is a cross-platform compiler for the PIC10F200 microcontroller that utilizes <a href="https://github.com/empitrix/assembler">assembler</a> as a linker to generate assembly code tailored for this type of microcontroller.</p>
</div>


## Quartz Script
The syntax of this language is similar to C but with fewer features.

### Types
There is only 3 type
- `int`
- `char`
- `char []` a sequence of `char (string)` (const)

> Because this is an 8-bit CPU compiler, both `int` and `char` are 8 bits in size, so they behave the same.


### Variable Assignment
All variables must be defined at the very top of the file.

```qz
int a = 5;
char b = 'A';
char c[] = "Hello";
```


### Comments
To write a comment, use `//`. Anything after `//` is part of the comment unless it's inside a string.
```qz
// This is a comment
int a = 7; // This is also a comment
```


### Raw Assembly
To write direct assembly code in a .qz file, use the backtick (\`) symbol.
To use a numeric variable or value, enclose it in `{ ... }`. Everything between `{}` will be replaced by a number.
It's important to note that if { variable } is used for a variable, the address of the variable in RAM will be set. Otherwise, if a numeric value is used, the value itself will be replaced.

For example:
```qz
char a = 'A';      // Variable a is initialized with the value 'A'
`MOVF { a }, W`;   // Move the value of 'a' into the W register (address of 'a' will be used)
`MOVLW { 144 }`;   // Move the literal value 144 into the W register (value itself will be used)
```

### Functions

Every function must have a numerical return type (`int` or `char`, due to the `RETLW` opcode), but the arguments can be of any of the three types.

```qz
(int | char) name(...args){
	// Function Body
}
```

For example:
```qz
int putchar(char l){
	`MOVLW { l }`;
	`MOVWF 0x06`;
	`BSF 0x06, 7`;
	`CLRF 0x06`;
	return 0;
}

int main(){
	putchar('H');
	putchar('I');
	putchar('!');
	return 0;
}
```


### Increment / Decrement

To use increment or decrement, place `++` or `--` right after the variable name (without any whitespace).

```qz
// Increment
variable++;

// Decrement
variable++;
```


### Loops

Loops are similar to C syntax, except that you can't define a new variable in the initialization part of the `for` loop.

`for` loop:
```qz
int i = 0;
for(i = 'A'; i < 'K'; i++){
	// Do something
}
```

`while` loop:
```qz
int a = 0;

while (a > 10){
	// Do something
	a++;
}
```


### Conditions

`if` and `else` are the same as in other languages.

```qz
if (a > b){
	// do something
} else {
	// do something else
}
```

### Macro

Quartz does not have macros like C. However, if you use a macro (define), it directly translates into the following assembly code:

For example, the following code in Quartz (`#define` - a name - numeric value):
```qz
#define GPIO 0x06
```

Acts like the following code in assembly:
```asm
GPIO EQU 0x06
```

You can also use macros in raw assembly. For example:
```qz
#define GPIO 0x06
`MOVWF { GPIO }`;  // Move value of register W to register GPIO (0x06)
```

### Numbers:

The type of the numbers is `uint8_t`, meaning the value range is from `0x00` to `0xFF`.

- `int`: `0` to `255`
- `hex`: `0x00` to `0xFF`
- `binary`: `00000000B` to `11111111B`


### Escape Sequences
- `\n`: new line character.
- `\t`: a two-space tab (due to the [console](https://github.com/Empitrix/8bitcpu?tab=readme-ov-file#console)).
- `\\`: backslash `\`.


### Operators

There are only two compact operators:
```qz
a += 5;  // add 5 to a
a -= 5;  // subract 5 from a
```

Conditonal operaotrs:
- Greater (`>`)
- Smaller (`<`)
- Greater or Eqaul (`>=`)
- Smaller or Eqaul (`<=`)

```qz
if(a > b){ ... }
if(a < b){ ... }
if(a >= b){ ... }
if(a <= b){ ... }
```

Complement:
```
a = ~a;   // complement of 'a' (store in 'a')
```

OR (`|`):
```
a = a | b;  // OR between 'a' and 'b' (store in 'a')
```

AND (`&`):
```
a = a & b;  // AND between 'a' and 'b' (store in 'a')
```

XOR (`^`):
```
a = a ^ b;  // XOR between 'a' and 'b' (store in 'a')
```

Add (`+`):
```
a = a + 5;  // Add 5 to 'a' (store in 'a')
```

Minus (`-`):
```
a = a - 5;  // subract 5 from a (store in 'a')
```


Right Shift (`>>`):
```
a = a >> 1;  // Move value of 'a' to right by 1 (store in 'a')
```


Left Shift (`<<`):
```
a = a << 1;  // Move value of 'a' to left by 1 (store in 'a')
```


## Examples

Look at the following example:

```c
#define GPIO 0x06

int i = 0;
int j = 0;

int putchar(int l){
	`MOVF { l }, W`;
	`MOVWF { GPIO }`;
	`BSF { GPIO }, 7`;
	`CLRF { GPIO }`;
	return 0;
}

int main(){
	for(i = 0; i <= 5; i++){
		for(j = 0; j <= i; j++){
			putchar('*');
		}
		putchar('\n');
	}

	putchar('\n');

	// print letters
	i = 'A'
	while(i < 'K'){
		putchar(i);
		i++;
	}

	return 0;
}

```

the output is looks like this:

```text
*
**
***
****
*****
******

ABCDEFGHIJ
```


---


Another example to see the conditions for loops:

```c
#define GPIO 0x06

int i = 0;
int j = 0;

int putchar(int l){
	`MOVF { l }, W`;
	`MOVWF { GPIO }`;
	`BSF { GPIO }, 7`;
	`CLRF { GPIO }`;
	return 0;
}

int main(){

	// ABCDEFGHIJ
	i = 'A'
	while(i < 'K'){
		putchar(i);
		i++;
	}
	putchar('\n');

	// ABCDEFGHIJK
	i = 'A'
	while(i <= 'K'){
		putchar(i);
		i++;
	}
	putchar('\n');

	// KJIHGFEDCBA
	i = 'K'
	while(i <= 'A'){
		putchar(i);
		i--;
	}
	putchar('\n');

	// KJIHGFEDCB
	i = 'K'
	while(i < 'A'){
		putchar(i);
		i--;
	}


	return 0;
}
```

And the expected output is something like this:

```text
ABCDEFGHIJ
ABCDEFGHIJK
KJIHGFEDCBA
KJIHGFEDCB
```
