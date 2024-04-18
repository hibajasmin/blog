import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Maldives from './maldives';
const Home = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigate('/maldives')
  }
  // const maldives = () => {
  //   dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  //   navigate('/travel')
  // }

  return (
    <>
    <div style={{color:'beige',backgroundColor:"cadetblue",flexDirection:'row',width:'1220px',height:'100px'}}>
    <h1 style={{alignContent:'start',justifyContent:"initial",display:'flex',textAlign:"start"}}>LET'S EXPLORE!</h1>
    <div style={{display:'flex',justifyContent:'center',gap:'20px',alignItems:'centre'}}>
    <button style={{backgroundColor:'beige',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>home</button>
    <button style={{backgroundColor:'beige',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>Destinations</button>
    <button style={{backgroundColor:'beige',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>contact</button>
    </div>
    </div>
    <centre>
    <div style={{backgroundImage:`url(/travel1.jpg)`,height:'570px',width:'1220px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
    <div style={{alignItems:'center',display:'flex',justifyContent:"center",color:'beige',backgroundColor:"cadetblue",flexDirection:'row',width:'350px',height:'120px',border:'solid',borderColor:'beige',flexDirection:"column"}}>
      <h1>Join the conversation</h1>
      <div>connect and share</div>
    </div>
    </div>
    </centre>
    <div style={{marginLeft:'20px',justifyContent:'space-between',display:'flex',}}>
      <a href='#' onClick={logout}>
      <h2>Maldives</h2>
      <img src="maldives.jpg" style={{height:'300px',width:'300px'}} alt=''/>
      </a>
      <a href='#'>
      <h2>switzerland</h2>
      <img src="switzerland.jpg" style={{height:'300px',width:'300px'}} alt=''/>
      </a>
      <a href='#'>
      <h2>Istanbul</h2>
      <img src="istanbul.jpg" style={{height:'300px',width:'300px'}} alt=''/>
      </a>
    </div>
    </>
  );
};

export default Home;