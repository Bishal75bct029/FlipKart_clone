import React, { useEffect } from 'react'

const Dashboard = ({setSelected}) => {
  useEffect(()=>setSelected('Dashboard'),[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard