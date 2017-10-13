import React from 'react';
import axios from "axios"
import EditUser from './EditUser';

class UserEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentWillMount () {

    const userId = this.props.match.params.id;
     

    console.log(this.props)

    axios.get('http://localhost:3001/user/' + userId)
      .then(res => {
        this.setState({
          user: res
        });
      });
  }

  render () {
    const {user} = this.state;
    return (
      <div>
        {
          user ? <EditUser editTarget={user}/> : '加载中...'
        }
      </div>
    );
  }
}

EditUser.prototypecontextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserEdit;