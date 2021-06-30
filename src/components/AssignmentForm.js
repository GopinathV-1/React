import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AssignmentForm = (props) => {
  const [assignment, setAssignment] = useState({
    subject: props.assignment ? props.assignment.subject : '',
    staff: props.assignment ? props.assignment.staff : '',
    title: props.assignment ? props.assignment.title : '',
    content: props.assignment ? props.assignment.content : '',
    date: props.assignment ? props.assignment.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { subject, staff, title, content } = assignment;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [subject, staff, title, content];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const assignment = {
        id: uuidv4(),
        subject,
        staff,
        title,
        content,
        date: new Date()
      };
      props.handleOnSubmit(assignment);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setAssignment((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="row">
    <div className="col-md-8 m-5">
    <article className="content-section">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="subject"
            value={subject}
            placeholder="Enter subject of assignment"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="staff">
          <Form.Label>Staff</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="staff"
            value={staff}
            placeholder="Enter name of staff"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="title"
            value={title}
            placeholder="Enter title of assignment"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="content"
            value={content}
            placeholder="Enter work to be done"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </article>
    </div>
    </div>
  );
};

export default AssignmentForm;