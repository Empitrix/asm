GPIO EQU 0x06
SAVE EQU 0x07
start:
	BSF GPIO, 0
	NOP
	BCF GPIO, 0
	MOVLW 97
	MOVWF GPIO
	CLRW
	CLRF GPIO
	INCF GPIO, 0
	GOTO start