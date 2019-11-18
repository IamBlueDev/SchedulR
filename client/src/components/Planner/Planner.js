import React from 'react';
import DataContext from '../../context/DataContext/DataContext'

class Planner extends React.Component {
    static contextType = DataContext;
    state={
        PlannerID:null,
        
    }


  componentDidMount() {
      console.log( this.context.user.ScheduleID)
      var url = "http://localhost:3001/s/"+this.context.user.ScheduleID;

    fetch(url)
      .then(res => {
          console.log(res)
        // if (res.ok) {
        //   this.setState({ loading: false })  
        // }
      })
  }

  render(){
      return(<div>Planner Comp</div>)
  }

}

export default Planner;