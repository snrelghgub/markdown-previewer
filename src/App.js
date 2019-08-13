import React from 'react';
import './App.css';
import ReactHtmlParser from 'react-html-parser';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

//reference instance 
let marked = require('marked'); 

class App extends React.Component {
	constructor(props){
		super(props);
			this.state = {
        markdown: placeholder, 
      }
  this.updatePreviewer = this.updatePreviewer.bind(this);    
  }

  updatePreviewer(event){
   this.setState({
    markdown : event.target.value
   });

  }

  render() {
    return (
      <div className="App" id="markdown-previewer">

        <Navbar bg="light" className="d-flex flex-row justify-content-end font-weight-bold" id="navbar">
              The Online Markdown Previewer 
              <FontAwesomeIcon icon={faCog} className="fa fa-spin ml-2 mr-2" id="icon"></FontAwesomeIcon>
        </Navbar>

        <Container>
          <Form.Group className="mt-1">
            <Badge variant="warning">Editor</Badge>
            <Form.Control as="textarea" onChange={this.updatePreviewer} value={this.state.markdown} rows="10" id="editor" />
          </Form.Group>

          <Badge variant="success">Previewer</Badge>
          <Card bg="light">
            <Card.Body className="col-xs-12" id="preview">{ReactHtmlParser(marked(this.state.markdown))}</Card.Body>
          </Card>

          <footer className="d-flex flex-column align-items-center p-2">
           <div className="py-1">
             developed by <a target="blank" href="http://github.com/snrelghgub" id="github-link">Taizy</a>
           </div>
          </footer>

        </Container>
      </div>
    );
  }
}




const placeholder = 
`# The Online Markdown Previewer! (level A heading) 

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

![Cool Pic](https://i.ibb.co/s3X816S/pic-sm.png)`


export default App;