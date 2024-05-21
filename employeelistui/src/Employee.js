import React, {useEffect, useState} from "react";

function Employee() {

    const[employeeData, setEmployeeData] = useState([])

    useEffect(() => {
        async function fetchEmployeeList() {
            let response = await fetch("http://localhost:8088/employee/", {
                method: "GET",
                headers: {
                    "Content-Type":"application/json"
                }
            });
            response = await response.json();
            console.log("response:",response);
            setEmployeeData(response);
        }
        fetchEmployeeList();
    },[])

    return(
        <div class="App">
            <h1>Employee List</h1>
            <table className="table, table-striped table-bordered table-settings">
                <thead>
                    <tr>
                        <th scope="col">Employee Id</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Employee Email</th>
                        <th scope="col">Employee Department</th>
                        <th scope="col">Employee Date of Birth</th>
                        <th scope="col">Employee Date of Joining</th>
                        <th scope="col">Employee City</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((data) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.empName}</td>
                            <td>{data.empEmail}</td>
                            <td>{data.empDepartment}</td>
                            <td>{data.empDob}</td>
                            <td>{data.empDoj}</td>
                            <td>{data.empCity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Employee;