import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';

//let marked = require('marked');

function App() {
  return (
    <div className="App">
      <div>
        <Form>
          <Form.Group controlId="formControlsTextarea">
            <Form.Label>Markdown Input: </Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="Enter markdown" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;
