import React, {useState, useEffect} from 'react'
import FollowersColumn from '../components/FollowersColumn'
import Feed from '../components/Feed'
import SuggestedBox from '../components/SuggestedBox'
import Card from '../components/Card'

import axios from 'axios'

const Home = () => {
  const [users, setUsers] = useState(null)
  const descendingUsers

  const addData = async () => {
    await axios.post('/.netlify/functions/addData')
  }

  const fetchData = async () => {
    const results = await axios.get('./netlify/functions/posts')
    console.log(results.data)
    setUsers(results.data)
  }
  
  useEffect(() => {
    addData()
    fetchData()
  }, [])

  if (users){
    descendingUsers = users.sort((a,b) => a.id < b.id ? 1:-1)
  }

  return (
    <>
    {descendingUsers && (
      <div className="container">
        <FollowersColumn />
        
    <div className='feed'>
      {descendingUsers.map((descendingUser, index) => {
        <Card
          key={index}
          user={descendingUser}
        />
      })}
    </div>

        <SuggestedBox />
    </div>
    )}
    
    </>
  );
}

export default Home;
