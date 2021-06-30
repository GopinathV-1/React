import React from 'react';
import _ from 'lodash';
import Assignment from './Assignment';

const AssignmentsList = ({ assignments, setAssignments }) => {

  const handleRemoveBook = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(assignments) ? (
          assignments.map((assignment) => (
            <Assignment key={assignment.id} {...assignment} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default AssignmentsList;
