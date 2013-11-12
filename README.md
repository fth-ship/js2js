About the project
=================
There are dozens of projects around that compile some programming language to Javascript. You can do it with C++, Java, C#, Python, Scala or Ruby. But there's one language that remains to be covered for Javascript to dominate the world: Javascript.
We did it. Meet js2js, revolutionary compiler that compiles Javascript directly to Javascript!

Features
========
* *Control*: you have full control over every single bit of resulting Javascript code
* *Zero overhead*: resulting code has exactly the same performance as initial one, so js2js introduces zero performance overhead
* *Integration*: js2js code is compatible with any other Javascript technology: Angular.js, Emscripten, VanillaJS, jQuery, Coffee Script, Type Script and even Dart
* *Cross-platform*: the compiler itself and generated code is fully cross-platform and supports all the range of stationary and mobile devices

Usage
=====
To compile your code use following 
```
node js2.js -i <input_file_or_directory> -o <output_file_or_directory>
```
Interesting fact: you can compile js2js compiler code with js2js and everything will work as expected. Check this out:
```
>node js2.js -i js2.js -o js2.compiled.js -v
Welcome to js2js compiler.
Compiling js2.js...
Output is written to: js2.compiled.js
Done!
```

Technology
==========
js2js is written on Javascript and runs on Node.JS. 

How can I contribute?
=====================
You can fork project, make your changes and send us pull request. Or just share information with your friends and make some Javascript fun together with js2js.
