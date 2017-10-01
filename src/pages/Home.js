import React from "react";
import { BrowserRouter, Route, Link ,Switch} from "react-router-dom";

import AddUsers from "./AddUsers";
import UsersList from "./UsersList";

class Home extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <h1>Hello World!</h1>
                    <Link to="/user/add">Add Users</Link>
                    <Link to="/user/list">UsersList</Link>
                </header>
                

                <main>
                    <Switch>
                    <Route path="/user/add" exact component={AddUsers} />
                    <Route path="/user/list" component={UsersList}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Home