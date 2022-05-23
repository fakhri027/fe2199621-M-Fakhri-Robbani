import "./App.css"
// TODO: answer here
import axios from "axios"
import { API_URL } from './api/config';
import React, { useState } from "react";
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import Profile from "./components/Profile"
import UploadForm from "./components/UploadForm"
import {BrowserRouter as Router} from "react-router-dom"
import SessionProvider from "./context/SessionContext"

function App() {
  // TODO: answer here
  const [submit, setSubmit] = useState(false)
  const [postList, setPostList] = useState([])

    // get data from api
    const getDataListPost = async () => {
      const response = await axios.get(
        `${API_URL}/post/list`, {
          withCredentials: true,
        }
        );
      setPostList(response.data.data)
    }
    
    React.useEffect(() => {
      getDataListPost()
    }, [])  

  return (
    <div aria-label="App" className="App">
      <h1 aria-label="App Title">Hello World</h1>
      
      <div className="ImportItem">
        <Router>
          <Navbar />
          <UploadForm onSubmit={() => {
            setSubmit(true)
          }} />
          {
            submit 
            &&
            <PostCard 
              caption="Test New Caption 9999"
            />
          }
          <PostCard
            image="https://images.unsplash.com/photo-1588795909853-b8b9b9f9f8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            caption="Test Caption 1111"
            username="User Testing 1"
          />
          <PostCard
            image="https://images.unsplash.com/photo-1588795909853-b8b9b9f9f8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            caption="Test Caption 2222"
            username="User Testing 2"
          />

        </Router>
      </div>

      <div className = "SessionContext" aria-label="Session Context">
      <SessionProvider></SessionProvider>
      </div>

      <div className="Profile" aria-label="Profile">
        <Profile />
        </div>
      
  </div>
    
  );
}

export default App
