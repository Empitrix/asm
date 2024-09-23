#include "../assembler.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include <string.h>

static int counter = 0;


LINES str_split(char *src, char *split){
	LINES lines;
	lines.lines = malloc(MALL);
	lines.len = 0;
	if(src != NULL && strcmp(src, "") != 0){
		char* token = strtok(src, split);
		do {
			lines.lines[lines.len] = malloc(MALL * sizeof(char));
			strcpy(lines.lines[lines.len], token);
			token = strtok(NULL, split);
			++lines.len;
		} while (token != NULL);
	}
	return lines;
}


static ASM asmbl;

char *get_assemble(char *inpt){
	LINES lines = str_split(inpt, "\n");
	asmbl = assemble(lines);

	char *output = malloc(1024);
	char buff[300];

	if(asmbl.ecode == 0){

		for(int i = 0; i < asmbl.len.words; ++i){
			sprintf(buff, "%s\n", asmbl.lines[i]);
			strcat(output, buff);
		}

		return output;
	} else {
		sprintf(output, "%s", asmbl.err.msg);
		char tmp[100];
		if(strcmp(asmbl.err.obj, "") != 0){
			sprintf(tmp, " [%s]", asmbl.err.obj);
		}
		strcat(output, tmp);
		sprintf(tmp, " at line (%d):\n==>%s\n", asmbl.err.lnum, asmbl.err.oline);
		strcat(output, tmp);
		return output;
	}
}


char *get_mcode(void){
	if(asmbl.ecode != 0){ return ""; }
	char *buff = malloc(1000);
	sprintf(buff, "int program[] = {");
	for(int i = 0; i < asmbl.len.words; ++i){
		char tmp[1000];
		if(i == asmbl.len.words - 1){
			sprintf(tmp, "%d", asmbl.mcode[i]);
		} else {
			sprintf(tmp, "%d, ", asmbl.mcode[i]);
		}
		strcat(buff, tmp);
	}
	strcat(buff, "};");
	return buff;
}


void cleanup(void){
	clear_cache(&asmbl);
}
