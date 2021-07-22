import React, {useState, useEffect} from 'react'
import FollowersColumn from '../components/FollowersColumn'
import Feed from '../components/Feed'
import SuggestedBox from '../components/SuggestedBox'

import axios from 'axios'

const Home = () => {
  const [users, setUsers] = useState(null)

  const addData = async () => {
    await axios.post('/.netlify/functions/addData')
  }

  const fetchData = async () => {
    const results = await axios.get('./netlify/functions/posts')
    setUsers(results.data)
  }
  
  useEffect(() => {
    addData()
    fetchData()
  }, [])

  return (
    <div className="container">
        <FollowersColumn />
        <Feed />
        <SuggestedBox />
    </div>
  );
}

export default Home;
