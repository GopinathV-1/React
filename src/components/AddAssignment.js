import React from 'react';
import AssignmentForm from './AssignmentForm';

const AddAssignment = ({ history, assignments, setAssignments }) => {
  const handleOnSubmit = (assignment) => {
    setAssignments([assignment, ...assignments]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <AssignmentForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddAssignment;
