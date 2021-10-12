import React, { useState, useEffect } from 'react';
import { data } from './Data';
import './table.css'
import { Link, useParams } from 'react-router-dom';
const Person = () => {
    const [name, setName] = useState('default name');
    const [lastName, setLastName] = useState('default name');
    const { id } = useParams();

    useEffect(() => {
        const newPerson = data.find((person) => person.id === parseInt(id));
        setName(newPerson.name);
        setLastName(newPerson.lastName);
    }, []);
    return (
        <div className="center container">
            <div class="row">
                <div class="col">
                    <p> First Name : {name}</p><br />
                    <p> Last Name : {lastName}</p><br />
                    <p>Employee Id : {id}</p><br />
                    <button type="button" class="btn btn-primary"><Link to='/' className='btn'>
                        Back To Home
                    </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Person;
