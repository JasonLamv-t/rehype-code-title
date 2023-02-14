# Rehype-Code-Title

I'm writing a blog project with mdx-bundler and I want to annotate code title such as filename in the top of the code block. This plugin does just that!

### Usage

```js
import rehype from 'rehype';
import rehypeCodeTitle from '@jasonlamv-t/rehype-code-title';
import rehypePrism from 'rehype-prism-plus';

rehype()
  .use(rehypeCodeTitle) // better choice to be before rehypePrism.
  .use(rehypePrism)
  .process(/* some html */);
```

For some markdown files like this:

````md
```js:index.js
const codeType = 'js';
```
````

It will be processed as:

```html
<pre class="language-js">
  <div class="code-title">index.js</div>
  <code class="language-js code-highlight">
    <span class="code-line line-number" line="1">
      const codeType = 'js';
    </span>
  </code>
</pre>
```
