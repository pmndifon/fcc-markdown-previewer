import React,{ useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';

let marked = require('marked');

function App() {

  // Attempting to implement react hooks

  const [ markdown, updateMarkdown ] = useState('');

  // console.log(markdown);
  return (
    <div className="App container">
      <div>
          <Form.Group controlId="markdownForm.ControlTextarea">
            <div><Form.Label>Markdown Input: </Form.Label></div>
            <Form.Control as="textarea" placeholder="Enter markdown" value={markdown} onChange={(event) => updateMarkdown(event.target.value)} />
          </Form.Group>
      </div>
      <div>
        <h1>Markdown Output</h1>
        <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}>
          
        </div>
      </div>
    </div>
  );
}

export default App;
