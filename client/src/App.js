import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './styles/base.scss';
import DataContext from './context/DataContext/DataContext.js';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';


class App extends React.Component {
  state={
    userId : null,
    userData : null,

  }

   Login = (user) => {
     this.setState({
       userId: user.UserID, 
       userData:user,})
     console.log(user);
     console.log("login called")
//      DisplayName: "Tanweer Baig"
// Email: "behebest_ooo@hotmail.com"
// Picture: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218054492707251&height=50&width=50&ext=1572652863&hash=AeQz2zwhJSU3aFPk"
// ScheduleID: "OXyych"
// UserID: "10218054492707251"
  }
  
  Logout = () =>{
    this.setState({
      userId:null,
      userData:null,
    })
  }
  setDummyUser =()=>{
   const dummyData = {     DisplayName: "Tanweer Baig",
    Email: "behebest_ooo@hotmail.com",
    Picture: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218054492707251&height=50&width=50&ext=1572652863&hash=AeQz2zwhJSU3aFPk",
    ScheduleID: "OXyych",
    UserID: "10218054492707251"}
    this.setState({
      userId:dummyData.UserID,
      userData:dummyData,
    })
    console.log(this.state.user)
  }

  testCall = ()=>{
    console.log(this.state);
  }


  componentDidMount() {
    this.setDummyUser();
    fetch(`http://localhost:3001/wake-up`)
      .then(res => {
        // if (res.ok) {
        //   this.setState({ loading: false })  
        // }
      })
  }
  render() {
  return (
    <BrowserRouter>
    <DataContext.Provider value={{
        userId:this.state.userId,
        user:this.state.userData,
        login:this.Login,
        logout:this.Logout,
        test:this.testCall,
        }}>

            <Switch>
          {!this.state.userId&&<Redirect from="/" to="/login" exact />}
          {this.state.userId&&<Redirect from="/login" to="/" exact />}
          
          <Route path="/login" component={Login} />
          {this.state.userId && <Route path="/" component={Landing} />}
        </Switch>
        </DataContext.Provider>
  </BrowserRouter>
   
  );
}
}

export default App;
