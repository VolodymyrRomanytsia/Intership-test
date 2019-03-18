import React, { Component } from 'react';
import { connect } from "react-redux";
import StudentsList from './common/studentsList';


const mapStateToProps = state => {
  return {
    mappedStudentState: state
  }
}


class University extends Component {
    render() { 
        const {students} = this.props.mappedStudentState
        return (
            <React.Fragment>
                <h1 className='display-4 text-center mt-4'>List of all students:</h1>
                <StudentsList students = {students}/>
            </React.Fragment>
        )
    }
}
 
export default connect(mapStateToProps)(University);