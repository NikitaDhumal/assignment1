import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';


function Listing({setUserData}) {
const navigate = useNavigate()    
const handleClick =(row)=>{
    setUserData(row)
    navigate('/user')
};

const data = [
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      companyName: 'ABC Inc.',
    },
    {
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      companyName: 'XYZ Ltd.',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      gender: 'Male',
      companyName: '123 Corp.',
    },
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      companyName: 'ABC Inc.',
    },
    {
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      companyName: 'XYZ Ltd.',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      gender: 'Male',
      companyName: '123 Corp.',
    },
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      companyName: 'ABC Inc.',
    },
    {
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      companyName: 'XYZ Ltd.',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      gender: 'Male',
      companyName: '123 Corp.',
    },
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      companyName: 'ABC Inc.',
    },
    {
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      companyName: 'XYZ Ltd.',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      gender: 'Male',
      companyName: '123 Corp.',
    },
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      companyName: 'ABC Inc.',
    },
    {
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      companyName: 'XYZ Ltd.',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      gender: 'Male',
      companyName: '123 Corp.',
    },
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      companyName: 'ABC Inc.',
    },
    {
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      companyName: 'XYZ Ltd.',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      gender: 'Male',
      companyName: '123 Corp.',
    },
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      companyName: 'ABC Inc.',
    },
    {
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      companyName: 'XYZ Ltd.',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      gender: 'Male',
      companyName: '123 Corp.',
    },
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      companyName: 'ABC Inc.',
    },
    {
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      companyName: 'XYZ Ltd.',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      gender: 'Male',
      companyName: '123 Corp.',
    },
  ];
  
  
  const columns = [
      {
        name: 'User Name',
        selector: 'name',
        cell: (row) => <div onClick={()=>handleClick(row)}>{row.name}</div>,
      },
      {
        name: 'User Age',
        selector: 'age',
        cell: (row) => <div>{row.age}</div>,
      },
      {
        name: 'User Gender',
        selector: 'gender',
        cell: (row) => <div>{row.gender}</div>,
      },
      {
        name: 'User Company Name',
        selector: 'companyName',
        cell: (row) => <div>{row.companyName}</div>,
      },
    ];

  return (
    <div>
      <DataTable
        title="User Data"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
}

export default Listing;
