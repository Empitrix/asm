all:
	@ emcc main.c -o func.js -sEXPORTED_FUNCTIONS="['_get_assemble', '_get_mcode', '_cleanup']" -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s ASSERTIONS=1 -s SAFE_HEAP=1
