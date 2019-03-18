import students from "../../services/studentsService";
import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILED,
  ADD_NEW_STUDENT_REQUEST,
  ADD_NEW_STUDENT_REQUEST_FAILED,
  ADD_NEW_STUDENT_REQUEST_SUCCESS,
  FILTER_INTERSHIP_STUDENTS
} from "./constants"

export const fetchStudents = () => {
  return (dispatch) => {
    dispatch(fetchStudentsRequest());
    return students.getStudents()
      .then(res => {
        dispatch(fetchStudentsSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchStudentsFailed(error));
      })
  }
}

export const fetchStudentsRequest = () => {
  return {
    type: FETCH_STUDENTS_REQUEST
  }
}

export const fetchStudentsSuccess = (students) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    students: students
  }
}

export const fetchStudentsFailed = (error) => {
  return {
    type:FETCH_STUDENTS_FAILED,
    error
  }
}

export const addNewStudent = ({studentname, knowledge}) => {
  return (dispatch) => {
    dispatch(addNewStudentRequest({studentname, knowledge}));
    return students.createStudent({'studentname': studentname, 'knowledge': knowledge}) 
      .then(res => {
        dispatch(addNewStudentRequestSuccess(res.data));
      })
      .catch(error => {
        dispatch(addNewStudentRequestFailed(error));
      })
  }
}

export const addNewStudentRequest = ({studentname, knowledge}) => {
  return {
    type: ADD_NEW_STUDENT_REQUEST,
    studentname, 
    knowledge
  }
}

export const addNewStudentRequestSuccess = (student) => {
  return {
    type: ADD_NEW_STUDENT_REQUEST_SUCCESS,
    student:student
  }
}

export const addNewStudentRequestFailed = (error) => {
  return {
    type: ADD_NEW_STUDENT_REQUEST_FAILED,
    error
  }
}

export const filterIntershipStudents = () => {
   return {
     type: FILTER_INTERSHIP_STUDENTS
   }
}


