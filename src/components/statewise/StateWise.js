import React, { useEffect, useState } from "react";


const Statewise = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.Statewise);
        setData(actualData.Statewise);
    }
    useEffect(() => {
        getCovidData();

    }, []);
    return (
        <>
            <h1>covid data</h1>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5"><span className="font-weight-bold">INDIA</span> covid-19 data</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>confirmed</th>
                                <th>recovered</th>
                                <th>Death</th>
                                <th>active</th>
                                <th>updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>

                                            <th>{curElem.state}</th>
                                            <td>confirmed</td>
                                            <td>recovered</td>
                                            <td>Death</td>
                                            <td>active</td>
                                            <td>updated</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        </>

    )
}
export default Statewise;