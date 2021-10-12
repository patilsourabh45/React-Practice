import React from 'react'
import './table.css'
import { Link, Router, BrowserRouter, useState } from 'react-router-dom'
import { data } from './Data'

const Table = () => {
    const [people, setPeople] = React.useState(data)
    return (
        <>
            <BrowserRouter>
                <table class="table table1 table-hover">
                    <thead>
                        <tr>

                            <th scope="col">Employee Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Show</th>

                        </tr>
                    </thead>
                    {people.map((person) => {
                        const { id, name } = person;
                        return (
                            <tbody>

                                <tr>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td><Link style={{ textDecoration: 'none' }} to={`/person/${person.id}`}>View</Link></td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </BrowserRouter>
        </>
    )
}

export default Table
