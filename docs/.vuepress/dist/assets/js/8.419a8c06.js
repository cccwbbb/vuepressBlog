(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{400:function(n,a,e){"use strict";e.r(a);var t=e(1),v=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("本篇博客主要是对 Javcscript 作用域和闭包学习理解\n")]),n._v(" "),e("h2",{attrs:{id:"作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[n._v("#")]),n._v(" 作用域")]),n._v(" "),e("p",[n._v("编译原理对作用域的定义：")]),n._v(" "),e("blockquote",[e("p",[n._v("作用域是指声明的变量在程序中的一个区域，在其中对变量的使用都指向这个声明。如果仅通过阅读程序就可以确定一个变量的作用域，那么语言使用的是词法作用域，否则，这个语言使用的是动态作用域。")])]),n._v(" "),e("p",[n._v("作用域用一句话概括就是规定如何查找变量，检查是否对变量有访问权限。")]),n._v(" "),e("p",[n._v("JavaScript 采用词法作用域，也叫静态作用域。")]),n._v(" "),e("h2",{attrs:{id:"编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[n._v("#")]),n._v(" 编译")]),n._v(" "),e("p",[n._v("MDN 对 JavaScript 的定义为：")]),n._v(" "),e("blockquote",[e("p",[n._v("JavaScript 是一种解释型或即时编译型的编程语言。")])]),n._v(" "),e("p",[n._v("JavaScript 语言是解释型语言，解释型语言的特点是逐个语句地执行源程序，会出现性能低下问题。而谷歌团队为解决 web 前端工作者的 JavaScript 性能低下问题，首次在脚本引擎（V8）中使用的即时编译（JIT），加上使用隐藏类和内联缓存等方法，使 JavaScript 语言拥有堪比主流编程语言（Java）的执行速度。")]),n._v(" "),e("p",[n._v("思考下面 🌰 ：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('var greeting = "Hello";\n\nconsole.log(greeting);\n\nvar greeting = ."Hello";\n\n// SyntaxError: Unexpected token \'.\'\n')])])]),e("p",[n._v("首先，根据解释型语言的定义，代码会在执行时被编译且逐行执行。上面代码执行结果应是先输出变量，接着赋值报错。但是实际结果是直接报错。是由于执行程序的前一刻会进行编译。")]),n._v(" "),e("p",[n._v("JavaScript 脚本引擎的工作方式来进一步理解上面的 🌰：")]),n._v(" "),e("p",[n._v("脚本引擎要开始解释执行，得通过词法分析和语法分析得到语法分析树后才可以。当要执行 script 代码段，它的执行顺序如下：")]),n._v(" "),e("ol",[e("li",[n._v("读入代码。")]),n._v(" "),e("li",[n._v("做词法分析和语法分析，有错则报语法错误。")]),n._v(" "),e("li",[n._v("对 var 变量和 function 定义做“预解析”。")]),n._v(" "),e("li",[n._v("执行代码，有错则报错。")])]),n._v(" "),e("p",[n._v("最后，我们可以清楚的明白，代码在程序执行的前一刻在编译做语法分析的时候，遇到语法错误所以直接报错，区别与传统的解释型语言，JavaScript 是解析器和编译器混合使用。程序最后其实并没有执行。")]),n._v(" "),e("p",[n._v("上面过程，可以将 JavaScript 引擎工作方式归结两个阶段：解析和执行。")]),n._v(" "),e("ul",[e("li",[n._v("解析：通过语法分析和预解析构造合法的语法分析树。")]),n._v(" "),e("li",[n._v("执行：执行具体的某个 function， JavaScript 引擎在执行每个函数实例时， 都会创建一个执行环境 (Execution Context) 和活动对象 (Active Object) 。")])]),n._v(" "),e("h2",{attrs:{id:"词法作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[n._v("#")]),n._v(" 词法作用域")]),n._v(" "),e("p",[n._v("要真正理解首先要先了解几个比较重要的概念。")]),n._v(" "),e("p",[n._v("词法作用域定义：")]),n._v(" "),e("blockquote",[e("p",[n._v("词法作用域指变量的作用域不是执行时决定而是在定义时决定，也就是说通过静态分析就能确定，词法作用域取决于源码，因此词法作用域也叫做静态作用域。")])]),n._v(" "),e("p",[n._v("ES5中使用词法环境管理词法作用域。ES6中作用域的概念变成了词法环境概念。")]),n._v(" "),e("p",[n._v("编译原理对环境和状态的定义：")]),n._v(" "),e("blockquote",[e("p",[n._v("环境指的是名字到变量的映射（内存位置）。状态是内存位置到它们值的映射。")])]),n._v(" "),e("p",[n._v("词法环境的定义：")]),n._v(" "),e("blockquote",[e("p",[n._v("词法环境 是一个用于定义特定变量和函数标识符在 ECMAScript 代码的词法嵌套结构上关联关系的规范类型。简单来说是 JavaScript 引擎内部用来跟踪标识符和变量之间的映射关系。")])]),n._v(" "),e("p",[n._v("词法环境由一个环境记录项和可能为空的外部词法环境引用构成。")]),n._v(" "),e("p",[n._v("变量环境组件和词法环境，又统称为词法环境。")]),n._v(" "),e("p",[n._v("变量环境的定义：")]),n._v(" "),e("blockquote",[e("p",[n._v("变量标识符和函数标识符对内存位置的映射，简单来说声明的变量函数它们知道自己的数据存储在哪里。（等同于词法环境）")])]),n._v(" "),e("p",[n._v("执行环境（也称执行上下文）的定义：")]),n._v(" "),e("blockquote",[e("p",[n._v("执行环境就是当前 JavaScript 代码被解析和执行时所在环境的抽象概念， JavaScript 中运行任何的代码都是在执行环境中运行。")])]),n._v(" "),e("p",[n._v("每调用一个函数就会生成一个函数执行环境，script 标签里的代码可以看成是一个立即执行的“匿名函数”，这个被称为全局执行环境。")]),n._v(" "),e("p",[n._v("ES5 执行环境组成部分：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("ExecutionContext = {\n  ThisBinding: <this value>,\n  VariableEnvironment: { ... }, // 变量环境\n  LexicalEnvironment: { ... }   // 词法环境\n}\n")])])]),e("p",[n._v("进一步理解，来看下面 🌰：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// __outer__：外部词法环境引用，x、y：环境记录项。\n// 全局环境变量 VariableEnvironment (global) = { __outer__: null }\n// 词法环境 LexicalEnvironment = VariableEnvironment (global)\n\n// 立即执行函数foo\n(function foo() {\n  //1、 这里命名为A（随便取用于区分下面） 的变量环境\n  //（可以理解为执行之前分配内存空间，初始化为undefined）\n  // VariableEnvironment (A) = { x: undefined, __outer__: global } \n  \n  //2、 词法环境等同于变量环境的原因，变量环境是词法环境的引用\n  // LexicalEnvironment = VariableEnvironment (A) \n\n  var x;\n  // 立即执行函数bar\n  (function bar(){\n    // 初始化词法环境\n    // VariableEnvironment (B) = { y: undefined, __outer__: A }\n    // LexicalEnvironment = VariableEnvironment (B)\n\n    var y;\n\n    x = 2;\n    // 初始化词法环境完成之后，立即执行 x=2 语句，通过__outer__找到外部的x\n    // VariableEnvironment (A) = { x: 2, __outer__: global }\n    // bar LexicalEnvironment 仍然是 VariableEnvironment (B)\n\n  })();\n\n})();\n")])])]),e("p",[n._v("创建执行环境时，变量环境和词法环境最初是同一个值（变量环境指向词法环境），在执行环境执行相关代码过程中，变量环境组件永远不变，而词法环境组件有可能改变（with、eval可以改变词法环境），在函数即将执行前，会对var和function声明进行预解析，然后执行代码。")]),n._v(" "),e("p",[n._v("再看一个 🌰：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('var x = 10; // 语句会拆成两个阶段，预解析var x；执行代码 x = 10；\n\nfunction foo() {\n  var y = 20;\n console.log(x + y); // 30\n}\n\n// 词法环境由一个环境记录项（environmentRecord）和可能为空的\n// 外部词法环境 （outer environment）引用构成。\n\n// 执行环境执行之前的结果（创建函数阶段）\nVariableEnvironment (global) = {\n  environmentRecord: {\n    // 分配内存默认为undefined；\n    x: undefined\n  },\n  outer: null // 没有外部环境\n};\n\n//  "foo" 函数变量环境\nVariableEnvironment (foo) = {\n  environmentRecord: {\n    y: undefined\n  },\n  outer: globalEnvironment // 指向全局环境\n};\n\n\n// 全局作用域下的环境执行之后的结果\nVariableEnvironment (global) = {\n  environmentRecord: {\n    // 绑定的值\n    x: 10\n  },\n  outer: null // 没有外部环境\n};\n\n//  "foo" 函数环境\nVariableEnvironment (foo) = {\n  environmentRecord: {\n    y: 20\n  },\n  outer: globalEnvironment // 指向全局环境\n};\n')])])]),e("p",[n._v("执行结果流程图：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/16/1717ea3374f17dff?w=452&h=333&f=png&s=40934",alt:""}})]),n._v(" "),e("p",[n._v("通过上面个栗子，无论何时调用函数都会创建一个新的执行环境，被推入执行上下文栈，此外还会创建与之关联的词法环境和变量环境。新建的词法环境通过外部环境引用进行关联。在执行代码之前，词法环境会访问并注册在当前词法作用域中所声明的变量，词法环境通过变量环境跟踪变量的作用域。特别注意是对 var 声明的变量和 function 声明函数！！！")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("console.log(a);\n// Cannot access 'a' before initialization\n\nlet a = 1\n\nconsole.log(b)\n// undefined\n\nvar b = function() {\n    console.log(\"我调用了个函数\")\n}\n")])])]),e("h2",{attrs:{id:"闭包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[n._v("#")]),n._v(" 闭包")]),n._v(" "),e("p",[n._v("MDN 中对闭包的定义：")]),n._v(" "),e("blockquote",[e("p",[n._v("函数和对其周围状态（词法环境）的引用捆绑在一起构成闭包。")])]),n._v(" "),e("p",[n._v("面试官问什么是闭包？")]),n._v(" "),e("p",[n._v("我想大部分小伙伴都是闭包就是能够读取其他函数内部变量的函数。")]),n._v(" "),e("p",[n._v("说实话没深入研究之前，我也是背背表面概念（毕竟网上一大堆都是这样说的）。通过对上面词法作用域的理解以后，我们突然会觉得上面的 MDN 定义太准确了。仔细分析就是外函数里面嵌套一个内函数并返回内函数，但调用内函数的时候，会创建词法环境，外部环境引用（上文的outer）指向外函数词法环境，直到全局词法环境执行指向 null。即使外函数词法环境已经消失，但还是可以通过内函数的词法环境外部环境指向访问到，这就是闭包。调用 N 次内函数，就会创建 N 个词法环境和 N 个闭包。")]),n._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[n._v("#")]),n._v(" 写在最后")]),n._v(" "),e("p",[n._v("用心写篇文章不易，如果内容中有不妥的地方欢迎指正，当然博客只是学习参考的依据，真正要学到掌握还是需要自己下功夫和研究的。毕竟别人的理解并不一定是自己的理解。如果对你有所帮助欢迎点赞收藏，码字不易，大家加油！！！")])])}),[],!1,null,null,null);a.default=v.exports}}]);