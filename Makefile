all:
	@ # @ emcc main.c -o func.js -sEXPORTED_FUNCTIONS="['_get_assemble', '_get_mcode', '_get_length']" -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=1024MB -s ASSERTIONS=1 -s SAFE_HEAP=1
	@ # @ emcc main.c -o func.js -sEXPORTED_FUNCTIONS="['_get_assemble', '_get_mcode', '_get_length']" -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s ALLOW_MEMORY_GROWTH=1 -s TOTAL_MEMORY=1024MB
	@ # emcc main.c -o func.js -sEXPORTED_FUNCTIONS="['_get_assemble', '_get_mcode', '_get_length']" -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s TOTAL_STACK=1024mb
	@ emcc main.c -o func.js -sEXPORTED_FUNCTIONS="['_get_assemble', '_get_mcode', '_get_length']" -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s ALLOW_MEMORY_GROWTH=1 -s ASSERTIONS=1 -s SAFE_HEAP=1 -s TOTAL_STACK=512mb 

debug:
	@ emcc main.c -o func.js -sEXPORTED_FUNCTIONS="['_get_assemble', '_get_mcode', '_get_length']" -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s ASSERTIONS=1 -s SAFE_HEAP=1

