import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from "react-router-dom";
import './App.css';

import NavBar from "./components/navBar";
import University from './components/university';
import Intership from './components/intership';
import AddStudents from './components/addStudents';
import NotFound from "./components/notFound";
import * as studentsAction from './redux/actions/studentsAction';
import { connect } from "react-redux"


const mapStateToProps = state => {
  return {
    mappedStudentState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => dispatch(studentsAction.fetchStudents())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    return (
      <BrowserRouter> 
      <React.Fragment>
        <NavBar/>
        <main className="container text-white">
          <Switch>
            <Route path="/university" component={University} />
            <Route path="/intership" component={Intership} />
            <Route path="/new-student" component={AddStudents}/>
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/university" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter> 
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
