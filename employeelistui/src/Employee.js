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
            <h2>Basic Table</h2>
            <table className="table table-settings">
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
            <br/><br/>
            <h2>Table With Striped Rows</h2>
            <table className="table table-settings table-striped">
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
            <br/><br/>
            <h2>Table With Striped Rows Dark Variant</h2>
            <table className="table table-settings table-striped table-dark">
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
            <br/><br/>
            <h2>Table With Striped Rows Success Variant</h2>
            <table className="table table-settings table-striped table-success">
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
            <br/><br/>
            <h2>Table With Hoverable Rows</h2>
            <table className="table table-settings table-hover">
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
            <br/><br/>
            <h2>Table With Hoverable Rows Dark Variant</h2>
            <table className="table table-settings table-hover table-dark">
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
            <br/><br/>
            <h2>Table With Striped And Hoverable Rows</h2>
            <table className="table table-settings table-striped table-hover">
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
            <br/><br/>
            <h2>Table With Striped Rows And Border</h2>
            <table className="table table-settings table-striped table-bordered">
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
            <br/><br/>
            <h2>Table With Striped Rows And Coloured Border</h2>
            <table className="table table-settings table-striped table-bordered border-primary">
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