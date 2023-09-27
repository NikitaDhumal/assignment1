import React from 'react'

const User = ({userData}) => {
  return (
    <div>
    <div>Name: {userData.name}</div>
    <div>Age: {userData.age}</div>
    <div>Gender: {userData.gender}</div>
    <div>Company Name: {userData.companyName}</div>
    </div>
  )
}

export default User