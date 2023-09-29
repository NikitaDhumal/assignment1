import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './Listing.css';

function Listing({setUserData,token}) {
const navigate = useNavigate()
const [allUserData, setAllUserData] = useState([]);
useEffect(() => {
  console.log(token)
    const headers = {
        'Authorization': token, 
        'Content-Type': 'application/json', 
      };
    axios
      .get('https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user',
      {headers:headers})
      .then((response) => {
        setAllUserData(response.data.message.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
const handleClick =(row)=>{
    setUserData(row)
    navigate('/user')
};
  const columns = [
      {
        name: 'Name',
        selector: 'name1',
        cell: (row) => <div className='namepointer' onClick={()=>handleClick(row)}>{row.name1}</div>,
      },
      {
        name: 'Age',
        selector: 'age',
        cell: (row) => <div>{row.age}</div>,
      },
      {
        name: 'Gender',
        selector: 'gender',
        cell: (row) => <div>{row.gender}</div>,
      },
      {
        name: 'Designation',
        selector: 'designation',
        cell: (row) => <div>{row.designation}</div>,
      },
      {
        name: 'Address',
        selector: 'address',
        cell: (row) => <div>{row.address}</div>,
      },

      {
        name: 'Company Name',
        selector: 'company_name',
        cell: (row) => <div>{row.company_name}</div>,
      },
    ];
    
	
  return (
    <div>
      <DataTable style={{backgroundColor:'#000', color:'red'}}
        title="User Data"
        columns={columns}
        data={allUserData}
      />
      <p>Click on User name to view details.</p>
    </div>
  );
}

export default Listing;
