import React, { Component } from "react";

class StudentsList extends Component {

    render() {
        const {students} = this.props
        const style = {background: 'transparent', 
                        border: 'none',
                        boxShadow: 'none',
                        borderBottom: '2px solid #fff',
                        height: '55px',
                        borderRadius: 0,
                        color: '#fff'}
        return (
            <div className="row justify-content-center mt-4">
                <ul className="list-group col-lg-9 col-md-10 col-sm-12">
                    <li style={style} className="list-group-item h4">
                        <div className="row">
                            <div className="col-10"><strong>Student's name</strong></div>
                            <div className="col-2 pl-0"><strong>knowledge</strong></div> 
                        </div>
                    </li>
                    {students.map( student => (
                        <li key={student._id} style={style} className="list-group-item h4">
                            <div className="row">
                                <div className="col-11">{student.studentname}</div>
                                <div className="col-1 pl-0">{student.knowledge}</div> 
                            </div>
                        </li>
                    ))} 
                </ul>
            </div>
        )
    }
}

export default StudentsList;