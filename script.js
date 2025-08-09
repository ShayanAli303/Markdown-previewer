const { useState, useEffect } = React;

/* Default markdown must include:
   H1, H2, link, inline code, code block, list item, blockquote, image, bold text
*/
const defaultMarkdown = `# Markdown Previewer

## Sub-heading (H2)

Here is a [link](https://www.freecodecamp.org) and some inline code: \`<div>Hello</div>\`.

\`\`\`js
// Code block example
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

- List item one
- List item two

> This is a blockquote. It should render as a quote.

**This text is bolded.**

![FCC Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FCC_logo.svg/320px-FCC_logo.svg.png)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  // Configure marked for GitHub flavored markdown and line breaks
  marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: false
  });

  // Convert markdown to HTML
  const getMarkdownText = (md) => {
    return marked.parse(md);
  };

  return (
    <div className="app" style={{width:'100%'}}>
      <div className="header">
        <h1>Markdown Previewer</h1>
        <p>Type Markdown on the left — it renders live on the right.</p>
      </div>

      <div className="editor-preview">
        <div className="card">
          <label htmlFor="editor" style={{fontWeight:700, marginBottom:8}}>Editor</label>
          <textarea
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>

        <div className="card">
          <label style={{fontWeight:700, marginBottom:8}}>Preview</label>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: getMarkdownText(markdown) }}
          />
        </div>
      </div>

      <div className="footer">Built with React &amp; Marked.js — FreeCodeCamp project</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
