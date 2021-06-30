import React from 'react';
import AssignmentForm from './AssignmentForm';
import { useParams } from 'react-router-dom';

const EditAssignment = ({ history, assignments, setAssignments }) => {
  const { id } = useParams();
  const assignmentToEdit = assignments.find((assignment) => assignment.id === id);

  const handleOnSubmit = (assignment) => {
    const filteredAssignments = assignments.filter((assignment) => assignment.id !== id);
    setAssignments([assignment, ...filteredAssignments]);
    history.push('/');
  };

  return (
    <div>
      <AssignmentForm assignment={assignmentToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditAssignment;
