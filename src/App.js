import React from 'react';
import './App.css';
import Editor from './components/Editor.js';
import Previewer from './components/Previewer.js';


class App extends React.Component {
  render() {
    return (
     <div class="App" id="markdown-previewer">
       <Editor/>
       <Previewer/>
     </div>
    );
  }
}

export default App;
