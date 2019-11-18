import React from 'react';
import OAuth from '../../OAuth/OAuth.js';
import io from 'socket.io-client';
import DataContext from '../../context/DataContext/DataContext'
import Planner from '../../components/Planner/Planner';
import './Landing.scss';
const socket = io('http://localhost:3001/');

class Landing extends React.Component {
    state={
        user:'',
    }
  static contextType = DataContext;  
  componentDidMount() {
    this.setState({user: this.context.user});

  }
    render(){
        return(
            <div class = "Landing">
              {/* <img src= {this.state.user.Picture}></img> */}
              {/* //Planner */}
              <div class="Logo">
                <h1>S</h1>
              </div>
              {/* <div class="MenuBar">
              <p>Search bar should go here</p>
              </div> */}
              
              <div class="ToolBar">
             Icons for links go here
              </div>

              <div class="Content">
              <p>DashBoard</p>

              <div class="Stats">
              <h3>

                Statistics
              </h3>
                Show some stats
              </div>
              <div class="Tasks">
                <div class="Title"> Tasks<div>Selectors <p>Active</p><p>Completed</p></div></div>
                <div class="content">

                </div>
                <div class="footer"> Link to all Tasks <div>Button To create</div></div>
                What Tasks need to be done
                Sections:
                Active
                In-progress
                Completed
                
              </div>
              <div class="Flagged Tasks">
                Tasks that have an important flag on them.
              </div>

              DashBoard
              Top, have some statistics, tasks completed, average time taken etc.

              Bottom
              Tasks
              Flagged Tasks
              

              Bottom Right have calender

              </div>
              {/* <Planner/>
              >Calender
              >Events
              >DifferentViews?
              //Toolbar
              >Planner
              >Schedules
              >Settings
              //Footer   */}
            </div>
        )
    }
}

export default Landing;