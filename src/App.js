import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <Container>
      <h1 className="mt-4">Todo App</h1>
      <Form onSubmit={addTodo} className="mt-4">
        <Form.Group controlId="formTodo">
          <Form.Control
            type="text"
            placeholder="Enter a new todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Add Todo
        </Button>
      </Form>
      <ListGroup className="mt-4">
        {todos.map((todo, index) => (
          <ListGroup.Item key={index}>{todo}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
