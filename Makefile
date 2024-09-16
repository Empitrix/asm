all:
	@ emcc main.c -o func.js -sEXPORTED_FUNCTIONS="['_get_assemble', '_get_mcode']" -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s ASSERTIONS=1 -s SAFE_HEAP=1 #-sTOTAL_MEMORY=1024mb
