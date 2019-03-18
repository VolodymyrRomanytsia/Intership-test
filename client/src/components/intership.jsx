import React, { Component } from 'react';
import { connect } from "react-redux";
import * as studentsAction from '../redux/actions/studentsAction';
import StudentsList from './common/studentsList';

const mapStateToProps = state => {
    return {
      mappedStudentState: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterIntershipStudents: () => dispatch(studentsAction.filterIntershipStudents())
    }
  }

class Intership extends Component {
    componentDidMount() {
        this.props.filterIntershipStudents();
    }
    
    render() { 
        const {intershipStudents} = this.props.mappedStudentState
        return (
            <React.Fragment>
                <h1 className='display-4 text-center mt-4'>List of intership's students:</h1>
                <StudentsList students = {intershipStudents}/>
            </React.Fragment>
        )
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Intership);