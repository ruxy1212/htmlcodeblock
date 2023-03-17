# HTML Code Block Formatting
## About
        
This feature can be used to format HTML text into inline and block codes format in a web application or website. Users enter the single or triple backtick and it is formatted to display as a code block. 
<p>This Javascript code replaces the backtick <code>(`)</code>` or triple backticks <code>(```)</code> with the HTML <code>&lt;code&gt;</code> and <code>&lt;pre&gt;</code> tags. It then replaces other characters like the greater than (>) or less than (&lt;) symbols.</p>
<p>Highlight.js library was used for the beautification of the code block, which can be gotten from <a href="https://highlightjs.org/">highlightjs.org</a>  
            </p>
            <h3>To Test</h3>
            <p>
                Paste or type your content into the <code>textarea</code>, wrap the inline code with single backtick <code>(`)</code>, and block code with triple backticks <code>(```)</code>, then submit.
            </p>
            <h3>To Use</h3>
            <p>
                <ol>
                    <li>
                        Create the style for the single and block code elements, &lt;pre&gt; and &lt;code&gt; tags,
<pre><code>
pre{
    display:block;
    overflow-x:auto;
    padding:1em
}
code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    color: #444;
    background-color: rgba(189, 189, 189, 0.3);
    border-radius: 6px;
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    box-sizing: border-box;
    line-height: 1.5;
    word-wrap: break-word;
}
</code></pre>
                    </li>
                    <li>
                        Link HighlightJS Library Javascript and Stylesheet. The CDN links can be found <a href="https://highlightjs.org/">here</a>
<pre><code>
&lt;link rel="stylesheet" href="highlight/min.css"&gt;
&lt;script type="text/javascript" src="highlight/min.js"&gt;&lt;/script&gt;
</code></pre>
                    </li>
                    <li>
                        In your Javascript, get the content of the text to be formatted,
                        <ul>
                            <li>
                                Replace and parse the code tags characters as a string text. <pre><code>formattedText = String(originalText).replace(/&/g, '&amp;amp;').replace(/&lt;/g, '&lt;').replace(/&gt;/g, '&gt;').replace(/"/g, '&amp;quot;');</code></pre>
                            </li>
                            <li>
                                Search and replace each pair of triple backticks <code>(```)</code> with &lt;pre&gt; and &lt;code&gt; tags. <pre><code>formattedText = formattedText.replace(/```([^`]*?)```/g, '&lt;pre&gt;&lt;code&gt;$1&lt;/code&gt;&lt;/pre&gt;');</code></pre>
                            </li>
                            <li>
                             Finally, search and replace each pair of single backticks <code>(`)</code> with &lt;code&gt; tag. <pre><code>formattedText = formattedText.replace(/`(.*?)`/g, '&lt;code&gt;$1&lt;/code&gt;');</code></pre>
                         </li>
                        </ul>
                    </li>
                    <li>
                        Call HighlightJS <code>highlight()</code> function. To format the whole document use <code>hljs.highlightAll();</code> or <code>hljs.highlight(element);</code> to highlight only a particular element, or in a loop to highlight selected elements.
                    </li>
                </ol>    
            </p>
            <h3>Creator</h3>
                <a href="https://github.com/ruxy1212/ruxy1212">Ruxy1212</a>
                <p>If you like my work, please give me a Star</p>
                <a class="github-button" href="https://github.com/ruxy1212/ruxy1212" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" aria-label="Star ruxy1212/ruxy1212 on GitHub">Star</a>
