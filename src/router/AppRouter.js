import React from 'react';
import {Redirect} from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddAssignment from '../components/AddAssignment';
import AssignmentsList from '../components/AssignmentsList';
import EditAssignment from '../components/EditAssignment';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [assignments, setAssignments] = useLocalStorage('assignments', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <AssignmentsList {...props} assignments={assignments} setAssignments={setAssignments} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddAssignment {...props} assignments={assignments} setAssignments={setAssignments} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditAssignment {...props} assignments={assignments} setAssignments={setAssignments} />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
