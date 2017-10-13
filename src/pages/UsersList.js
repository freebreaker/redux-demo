import React from "react"
import axios from "axios"
import { Table, Icon } from 'antd';

class UsersList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userslist:[]
        }
    }

    handleDelete(user){      
      axios.delete("http://localhost:3001/user/"+ user.id)
      .then((res)=>{
        this.setState({
          userslist:this.state.userslist.filter(item => item.id!=user.id)
        })
      }).catch((err)=> console.log(err))
    }

    handleEdit(user){
      this.context.router.history.push('/user/edit/' + user.id);
    }

    componentWillMount(){
        axios.get("http://localhost:3001/user")
        .then((res)=>{
            this.setState({
                userslist:res.data
            })
        })
        .catch((err) => console.error(err));
    }

    render(){
        const {userslist}=this.state
        const columns = [{
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: text => <a href="#">{text}</a>,
        }, {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        }, {
          title: '操作',
          key: 'action',
          render: (text, record) => {
            return (
              <span>
              {<a href="javascript:void(0)"  onClick={this.handleEdit.bind(this,text)}>编辑</a>}
              <span className="ant-divider" />
              {<a href="javascript:void(0)"  onClick={this.handleDelete.bind(this,text)}>删除</a>}
              <span className="ant-divider" />
            </span>
            )
          }
        }];

        const data= userslist.map((user) => {
          console.log(user)
          return {
            user:user,
            id:user.id,
            key:user.id,         
            name:user.name,
            gender:user.gender,
            age:user.age
          }
        }         
        )
        return(
          <Table columns={columns} dataSource={data} />
        )
    }
}

UsersList.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default UsersList