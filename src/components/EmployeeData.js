import { useLocation, Link} from "react-router-dom";
import '../css/table.css'


const EmployeeData = (props) => {
    const location = useLocation();
    console.log(location);
    const { employeeid, firstname, lastname } = location.state.detail;

    return (
        <div className="center">
            <p> Employee Id: {employeeid}</p>
            <p> First Name: {firstname}</p>
            <p> Last Name: {lastname}</p>
            <button type="button" class="btn btn-primary"><Link to='/' className='btn'>
                Back To Home
            </Link></button>
        </div>
    )
}

export default EmployeeData