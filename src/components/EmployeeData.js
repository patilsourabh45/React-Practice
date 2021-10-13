import React from "react";
import { useLocation, Link } from "react-router-dom";
import usePeopleStore from "./Store";
import '../css/table.css'

const EmployeeData = () => {
    const location = useLocation();
    const { employeeid } = location.state.detail;
    const people = usePeopleStore((state) => state.people);

    return (
        <div className="center">
            {people.map((data) => {
                if (data.employeeid === employeeid) {
                    return (
                        <>
                            <p> Employee ID: {data.employeeid}</p>
                            <p> Firstname: {data.firstname}</p>
                            <p> Lastname: {data.lastname}</p>
                            <button type="button" style={{ borderRadius: "10px" }} className="btn btn-primary"><Link to='/' className='btn button1'>
                                Back To Home
                            </Link></button>
                        </>
                    );
                }
            })}
        </div>
    );
};

export default EmployeeData;



























// import { useLocation, Link } from "react-router-dom";
// import '../css/table.css'
// import { dataSource } from './Datasource'
// import '../css/table.css'

// // import { usePeopleStore } from '../components/Store'
// // const getState = state => state.people
// // const people = usePeopleStore(getState)

// const EmployeeData = (props) => {
//     const location = useLocation();
//     console.log(location);
//     const { employeeid, firstname, lastname } = location.state.detail;

//     return (
//         <div className="center">
//             <p> Employee Id: {employeeid}</p>
//             <p> First Name: {firstname}</p>
//             <p> Last Name: {lastname}</p>
//             <button type="button" style={{ borderRadius: "10px" }} className="btn btn-primary"><Link to='/' className='btn button1'>
//                 Back To Home
//             </Link></button>
//         </div>
//     )
// }

// export default EmployeeData

