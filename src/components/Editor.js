import React from 'react';


class Editor extends React.Component {
	constructor(props){
		super(props);
			this.state = {
				markdown: placeholder, 
			}
    }
 
 render(){
	 return(
	  <textarea value={this.state.markdown} row="100" cols="100" id="editor"></textarea>
	 )
 }
}

const placeholder = 
`# Welcome to my Markdown-Previewer! (level A heading) 

## This is a (level B heading) ...
### And here's (level C heading) 
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.github.com/snrelghgub), and
> Block Quotes!

And if you want to get really fancier, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That looks like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![Cool Pic](https://www.use.com/images/s_4/cc19b1639769075715d1.jpg)`


export default Editor;