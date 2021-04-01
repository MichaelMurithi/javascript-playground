# Typescript Basics

## Commands and Flags
 
* ``tsc file.ts`` - Compliles a typescipt file to javascript
* ``tsc --noEmitOnError file.ts`` - mostly useful when migrating javascript code to typescript code does not emmit some mistakes in the existing code
* ``tsc --target es2015 file.ts`` - Compiles the typescript file to the specified typescript version. i.e in this case es2015. (The default version is **ES3**)
* The ``--strict`` flag in the CLI or `` "strict":true `` in the toggles type-checking strictness flags simultaneously.
* ```noImplicitAny``` this flag issues an error on any variables whose type is implicitly reffered to as any.
* ```strictNullChecks``` flag makes handling null and undefined more explicit and makes worrying about whether we forgot handling null and undefined.
  
## Notes on types
- Type annotations don't change the behaviour of your programs
- Typescript code is compiled into plain javascript code without type annotations
- Typescript has the ability to *downlevel*  i.e the practice of moving from a newer version of js to an older one.
