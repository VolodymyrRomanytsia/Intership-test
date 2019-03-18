
const errorHandler = require('../utils/errorHandler')
const Student = require('../models/Student')

module.exports.getStudents = async function(req, res) {
  try {
    const students = await Student.find()
    res.status(200).json(students)
  } catch (e) {
    errorHandler(res, e)
  }
}


module.exports.createStudent = async function(req, res) {
  const student = new Student({
    studentname: req.body.studentname,
    knowledge: req.body.knowledge, 
    date: Date.now()  
  })
  try{
      await student.save()
      res.status(201).json(student)
  }catch(e){
      errorHandler(res, e)
  }
}