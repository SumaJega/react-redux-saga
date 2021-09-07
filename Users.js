import * as React from 'react';
import Axios from 'axios';

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        console.log(result.data)
        this.setState({ users: result.data });
      })
  }

  render() {
    return (
      <div className="container" >
        {(this.state.users || []).map(user => {
          return (
            <div className="row">
              <div className="col-6" >
                {user.name}
              </div>
              <div className="col-6">
                <a href={user.email}> {user.email}</a>
              </div>
            </div>
          )
        })}
      </div >
    )
  }
}

export default Users;
