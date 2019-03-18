import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as studentsAction from '../redux/actions/studentsAction';
import { connect } from "react-redux"


const mapStateToProps = state => {
  return {
    mappedStudentState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewStudent: ({studentname, knowledge}) => dispatch(studentsAction.addNewStudent({studentname, knowledge}))
  }
}

class AddStudents extends Form {
  state = {
    data: { studentname: "", knowledge: ""},
    errors: {}
  };

  schema = {
    studentname: Joi.string()
      .required()
      .label("Student's name"),
    knowledge: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Knowledge"),
  };

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addNewStudent(this.state.data);
      this.props.history.push("/");
    } 

  render() {
    const style = {background: 'transparent', 
                    border: 'none',
                    boxShadow: 'none',
                    borderBottom: '2px solid #fff',
                    height: '30px',
                    borderRadius: 0,
                    color: '#fff'}
    return (
      <div className='row mt-5 justify-content-center'>
        <h1 className='display-4 text-center col-12'>Create new student!</h1>
        <form className='col-lg-8 col-md-10 col-sm-12' onSubmit={this.onSubmit}>
          {this.renderInput("studentname", "Student's name", style, "text")}
          {this.renderInput("knowledge", "Knowledge", style, "number")}
          {this.renderButton("SAVE")}
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudents);