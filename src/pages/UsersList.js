import React from "react"
import axios from "axios"

class UsersList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userslist:[]
        }
    }

    componentWillMount(){
        console.log(998)
        axios.get("http://localhost:3001/user")
        .then((res)=>{

            this.setState({
                userslist:res.data
            })

            console.log(this.state)

        })
        .catch((err) => console.error(err));
    }

    render(){

        const {userslist}=this.state

        return(
        <div>
        <header>
          <h1>用户列表</h1>
        </header>

        <main>
          <table>
            <thead>
              <tr>
                <th>用户ID</th>
                <th>用户名</th>
                <th>性别</th>
                <th>年龄</th>
              </tr>
            </thead>

            <tbody>
              {
                userslist.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.gender}</td>
                      <td>{user.age}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </main>
        </div>
        )
    }
}


export default UsersList