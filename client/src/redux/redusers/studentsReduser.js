import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILED,
  ADD_NEW_STUDENT_REQUEST,
  ADD_NEW_STUDENT_REQUEST_FAILED,
  ADD_NEW_STUDENT_REQUEST_SUCCESS,
  FILTER_INTERSHIP_STUDENTS
} from "../actions/constants"

const INITIAL_STATE = {
    students:[],
    intershipStudents:[],
    isFetching: false,
    error: null
  }
  
  export  const studentReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_STUDENTS_REQUEST:
            return {
              ...currentState,
              students:[],
              isFetching: true
            }
  
      case FETCH_STUDENTS_SUCCESS:
            return {
              ...currentState,
              students:action.students,
              isFetching: false,
              error: null
            }
  
      case FETCH_STUDENTS_FAILED:
            return {
              ...currentState,
              students:[],
              isFetching: false,
              error: action.error
            }
  
      case ADD_NEW_STUDENT_REQUEST:
            return {
              ...currentState,
              students:currentState.students,
              isFetching: true,
              error: null
            }
  
      case ADD_NEW_STUDENT_REQUEST_FAILED:
            return {
              ...currentState,
              students:currentState.students,
              isFetching: true,
              error: action.error
            }
  
      case ADD_NEW_STUDENT_REQUEST_SUCCESS:
            const nextState =  {
              ...currentState,
              students:[...currentState.students, action.student],
              isFetching: false,
              error: null
            }
          return nextState;
  
      case FILTER_INTERSHIP_STUDENTS:
            const universityAveredge =  currentState.students.length > 0 ? currentState.students.reduce((a, c) => a + c.knowledge, 0) / currentState.students.length : 0
            return {
              ...currentState,
              students:currentState.students,
              intershipStudents: [...currentState.students.filter(student => student.knowledge > universityAveredge)]
            }
      default:
         return currentState;
  
    }
  }

  export default studentReducer