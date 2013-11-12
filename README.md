About the project
=================
There are dozens of tools that compile some programming language to JavaScript. You can do it with C++, Java, C#, Python, Scala or Ruby. But there's one language that remains to be covered for JavaScript to dominate the world: JavaScript. 

We did it. Meet js2js, a revolutionary compiler that transforms JavaScript directly to JavaScript!

Features
========
* **Control**. You have full control over every single bit of the code produced by js2js. You can even compile an invalid JavaScript program to an equally invalid one.
* **Zero overhead**. js2js will never slow you down. The compiled code has exactly the same performance as the original input.
* **Integration**. js2js rocks with any other JavaScript technology out there: AngularJS, Emscripten, Vanilla JS, jQuery, CoffeeScript, TypeScript, and even Dart.
* **Cross-platform**. js2js-powered code supports all kinds of stationary and mobile devices and Web browsers. Even if you develop for Netscape 2.0, we've got you covered.

Usage
=====
To compile your code, use the following command:
```
node js2.js -i <input_file_or_directory> -o <output_file_or_directory>
```
Interesting fact: you can compile the code of js2js with js2js and everything will work as expected. Check this out:
```
>node js2.js -i js2.js -o js2.compiled.js -v
Welcome to js2js compiler.
Compiling js2.js...
Output is written to: js2.compiled.js
Done!
```

Technology
==========
js2js is written in JavaScript and runs on Node.js.

How can I contribute?
=====================
You can fork the project, make your changes and send us pull requests. Or just share it with your friends and make some JavaScript fun together with js2js.
