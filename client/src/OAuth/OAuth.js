import React from 'react';

export default class OAuth extends React.Component{
  state={
    user:[],
  }
    componentDidMount() {
        const { socket, provider } = this.props
    
        socket.on(provider, user => {  
          this.popup.close()
          this.setState({user})
          console.log(user);
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
        return window.open(url, '',       
          `toolbar=no, location=no, directories=no, status=no, menubar=no, 
          scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
          height=${height}, top=${top}, left=${left}`
        )
      }

Auth = ()=>{
    this.popup = this.openPopup()  
    this.checkPopup()
    this.setState({disabled: 'disabled'})
}
    render(){

      const {DisplayName,Picture} = this.state.user;

            return(
                <div>
                        {DisplayName ? <div> {DisplayName}</div> : <div onClick={this.Auth}> Login </div>}
                </div>

            )
        }
}