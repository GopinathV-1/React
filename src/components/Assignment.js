import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Assignment = ({
  id,
  subject,
  staff,
  title,
  content,
  date,
  handleRemoveBook
}) => {
  const history = useHistory();
  console.log(history);
  return (
    <div className="row">
          <div className="col-md-8">
            <article className="content-section">
            <div className="item article-metadata">
                <h3>{subject}</h3>
                <div>
                  <Button variant="primary" onClick={() => history.push(`/specific/${id}`)}>View</Button>
                  <Button variant="success" onClick={() => history.push(`/edit/${id}`)}>Update</Button>{' '}
                  <Button variant="danger" onClick={() => handleRemoveBook(id)}>Delete</Button>
                </div>
              </div>
              <div className="article-metadata">
                <h4 className="article-title">{ title}</h4>
                <h6 className="article-content">{ content }</h6>
              </div>
              <div className="item">
                <p>
                  <span className="span">Due Date: </span>{new Date(date).toDateString()}                                   </p>
                <p>
                  <span className="span" id="space">Assigned by:</span>{staff}
                </p>
              </div>
         </article>
         </div>
    </div>
  );
};

export default Assignment;
