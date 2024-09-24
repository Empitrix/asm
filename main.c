#include "../assembler.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include <string.h>

static int counter = 0;


/*
LINES str_split(char *src, char *split){
	LINES lines;
	lines.lines = (char **)calloc(MALL, sizeof(char **));
	lines.len = 0;
	if(src != NULL && strcmp(src, "") != 0){
		char* token = strtok(src, split);
		do {
			lines.lines[lines.len] = (char *)calloc(MALL, sizeof(char));
			strcpy(lines.lines[lines.len], token);
			token = strtok(NULL, split);
			++lines.len;
		} while (token != NULL);
	}
	return lines;
}
*/

LINES str_split(char *src, char *split) {
	LINES lines;
	lines.lines = (char **)calloc(MALL, sizeof(char *));
	lines.len = 0;
	
	if (src != NULL && strcmp(src, "") != 0) {
		int src_len = strlen(src);
		int split_len = strlen(split);
		int start = 0;
		int end = 0;

		while (end <= src_len) {
			if (strncmp(&src[end], split, split_len) == 0 || src[end] == '\0') {
				lines.lines[lines.len] = (char *)calloc(end - start + 1, sizeof(char));
				strncpy(lines.lines[lines.len], &src[start], end - start);
				// lines.lines[lines.len][end - start] = '\0';  // Null-terminate the token
				lines.len++;
				start = end + split_len;
				// if (lines.len % MALL == 0) {
				// 	lines.lines = (char **)realloc(lines.lines, (lines.len + MALL) * sizeof(char *));
				// }
			}
			end++;
		}
	}
	return lines;
}


static ASM asmbl;

char *get_assemble(char *inpt){
	LINES lines = str_split(inpt, "\n");
	asmbl = assemble(lines);

	char *output = (char *)calloc(1024, sizeof(char));
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

char *get_length(void){
	if(asmbl.ecode != 0){ return "Flash: 0, Memory: 0"; }
	char *buff = (char *)calloc(100, sizeof(char));
	sprintf(buff, "Flash: %d, Memory: %d", asmbl.len.words, asmbl.len.mem);
	return buff;
}

void cleanup(void){
	clear_cache(&asmbl);
}
