import React from "react";
import { BrowserRouter, Route, Link ,Switch} from "react-router-dom";
import DevTools from '../containers/DevTools';
import './Home.css';
import AddUsers from "./AddUsers";
import UsersList from "./UsersList";
import EditPages from "./EditPages";
import ChattingRoom from "./ChattingRoom";
import 'antd/dist/antd.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class Home extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <h1>Hello World!</h1>
                    <Link to="/user/add">Add Users</Link>
                    <Link to="/user/list">UsersList</Link>
                    <Link to="/user/chat">ChattingRoom</Link>
                </header>
                

                <main>
                    <Switch>
                    <Route path="/user/add" exact component={AddUsers} />
                    <Route path="/user/list" component={UsersList}/>
                    <Route path="/user/edit/:id" component={EditPages}/>
                    <Route path="/user/chat" component={ChattingRoom}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Home