import React, { Component } from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Blog_holder from './Blog_holder';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Blog_holder/>}/>
        </Routes>
        </>;
    }
}

export default App;