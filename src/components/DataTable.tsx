import { useEffect, useState } from "react";
import type { Person }  from './Interfaces'

//functions to add data to the table
function FetchMockData() {
    const [persons, setPersons] = useState<[Person]>([{ id: 0, lastName: "", firstName: "", age: 0 }]);

    //on component load
    useEffect(() => {

        //fetch from file
        fetch('/src/assets/mockPerson.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }, mode: "no-cors"
            })
            .then(res => {
                //if fetch returns a failure response
                if (!res.ok) {
                    throw new Error('Could not retrieve data from mockData file.');
                };
                return res.json();
            }).then(json => setPersons(json))
            .catch(error => console.error('Error fetching mockPerson.json. More details: ', error));
    }, []);

    const dataTable = persons ? (
                <>
                    {persons.map(entry => (
                        <tr key={entry.id}>
                            <td>{entry.id}</td>
                            <td>{entry.lastName}</td>
                            <td>{entry.firstName}</td>
                            <td>{entry.age}</td>
                        </tr>
                    ))}
                </>
            ) : (
                <tr>
                    <td>Loading...</td>
                </tr>
            );
            
    //format data into a table
    return (
        <>
            {dataTable}
        </>
    );
}

function StaticMockData() {
    return (
        <tr>
            <td>{mockPerson.id}</td>
            <td>{mockPerson.lastName}</td>
            <td>{mockPerson.firstName}</td>
            <td>{mockPerson.age}</td>
        </tr>
    );
}

/*function FetchServerData(url: string) {
    const fetchOptions = {headers: {}}
    useEffect(() => {
        fetch(url);
    }, []);
}*/

export default function DataTable() {

    return (
        <table className="DataTable">
            <thead className="DataHeader">
                <tr>
                    <th>ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <FetchMockData />
            </tbody>
        </table>
    );
}