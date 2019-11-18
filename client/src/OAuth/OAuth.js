import React from 'react';
import DataContext from '../context/DataContext/DataContext.js';
export default class OAuth extends React.Component{
  state={
    user:[],
    disabled: '',
    popup: null,
  }

  static contextType = DataContext;  
    componentDidMount() {
        const { socket, provider } = this.props
        socket.on(provider, user => {  
          console.log(this.state);
          if(this.popup)
          this.popup.close()

          // this.setState({user})
         this.context.login(user);
        })
      }

      checkPopup() {
        const check = setInterval(() => {
          const { popup } = this
          if (!popup || popup.closed || popup.closed === undefined) {
            clearInterval(check)
            this.setState({ disabled: ''})
          }
        }, 1000)
      }

    openPopup() {
        const { provider, socket } = this.props
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `http://localhost:3001/auth/${provider}?socket=${socket.id}`
        
        const wind = window.open(url, '',       
        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
        scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
        height=${height}, top=${top}, left=${left}`
        );

        return wind
      }

Auth = ()=>{
      if (!this.state.disabled) {
        // const window = this.openPopup();
        // console.log(window);
        // this.setState({popup: "window"})
  this.popup = this.openPopup()  
  this.checkPopup()
  this.setState({disabled: 'disabled'})
  console.log(this.state)
      }
}
    render(){

      const {DisplayName,Picture} = this.state.user;
      const { socket, display } = this.props;

            return(
                <a class="OAuth" >
                        {this.state.disabled ? <a class="item disabled"> {display}</a> : <a class="item"onClick={this.Auth}> {display} </a>}
                </a>

            )
        }
}