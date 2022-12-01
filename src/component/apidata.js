import React, { useEffect, useState } from "react";

function Apidata() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then(resp => resp.json())
            .then(resp => setData(resp))
    }, [])
    return (
        <div>
            <h3>API Data</h3>
            <table style={{ width: "100%", border: "1px solid #ccc" ,color:"black"}}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ?
                            data.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ) : []}
                </tbody>
            </table>
        </div>
    )
}
export default Apidata;