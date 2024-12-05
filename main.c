#include "../assembler.h"
#include "../../compiler.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include <string.h>



static ASMBL asmbl;

static char len_buffer[100] = { 0 };
static char mcode_buffer[1000] = { 0 };
static char output_buffer[1024] = { 0 };

static char compiler_buffer[1024] = { 0 };



void str_split(char *src, char *split, TBL *tbl){
	memset(tbl->lines, 0, sizeof(tbl->lines));
	tbl->len = 0;
	
	if (src != NULL && strcmp(src, "") != 0) {
		int src_len = strlen(src);
		int split_len = strlen(split);
		int start = 0;
		int end = 0;

		while (end <= src_len) {
			if (strncmp(&src[end], split, split_len) == 0 || src[end] == '\0') {
				strncpy(tbl->lines[tbl->len], &src[start], end - start);
				tbl->len++;
				start = end + split_len;
			}
			end++;
		}
	}
}




char *get_assemble(char *inpt){
	TBL tbl;
	str_split(inpt, "\n", &tbl);
	asmbl.ecode = 0;
	assemble(&asmbl, &tbl);

	memset(output_buffer, 0, sizeof(output_buffer));
	char buff[300] = { 0 };

	if(asmbl.ecode == 0){

		for(int i = 0; i < asmbl.len.words; ++i){
			sprintf(buff, "%s\n", asmbl.lines[i]);
			strcat(output_buffer, buff);
		}

		return output_buffer;

	} else {
		show_err(&asmbl.err, output_buffer);
		// sprintf(output_buffer, "%s", asmbl.err.msg);
		// char tmp[100];
		// if(strcmp(asmbl.err.obj, "") != 0){
		// 	sprintf(tmp, " [%s]", asmbl.err.obj);
		// }
		// strcat(output_buffer, tmp);
		// sprintf(tmp, " at line (%d):\n==>%s\n", asmbl.err.lnum, asmbl.err.line);
		// strcat(output_buffer, tmp);
		return output_buffer;
	}
}


char *get_mcode(void){
	if(asmbl.ecode != 0){ return ""; }
	memset(mcode_buffer, 0, sizeof(mcode_buffer));
	sprintf(mcode_buffer, "int program[] = {");
	for(int i = 0; i < asmbl.len.words; ++i){
		char tmp[1000];
		if(i == asmbl.len.words - 1){
			sprintf(tmp, "%d", asmbl.mcode[i]);
		} else {
			sprintf(tmp, "%d, ", asmbl.mcode[i]);
		}
		strcat(mcode_buffer, tmp);
	}
	strcat(mcode_buffer, "};");
	return mcode_buffer;
}


char *get_length(void){
	if(asmbl.ecode != 0){ return "Flash: 0, Memory: 0"; }
	memset(len_buffer, 0, sizeof(len_buffer));
	sprintf(len_buffer, "Flash: %d, Memory: %d", asmbl.len.words, asmbl.len.mem);
	return len_buffer;
}


/* COMPIELR */

char *run_compiler(char *inpt){
	memset(compiler_buffer, 0, sizeof(compiler_buffer));

	compiler_clean();

	TKNS tkns;
	tokenizer(inpt, &tkns);


	add_tree("STATUS EQU 0x03  ; Added by Compiler (only for pic10f200)");
	add_tree("Z EQU 0x02       ; Added by Compiler (only for pic10f200)");
	add_tree("C EQU 0x00       ; Added by Compiler (only for pic10f200)");
	add_tree("CRAM EQU 0x19    ; Compiler Reserved Address");


	qparser(&tkns, 0, AST_NO_STATEMENT);
	update_children();


	generator(qasts, 0, qast_idx);  // Generate Assembley code
	reorder();                      // Reorder functions for linker



	int i;
	for(i = 0; i < tree_idx; ++i){
		strcatf(compiler_buffer, "%s\n", tree[i]);
	}

	return compiler_buffer;
}


