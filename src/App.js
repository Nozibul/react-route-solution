import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Culture from './component/culture/Culture';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Notfound from './component/Notfound/Notfound';
import Post from './component/Post/Post';
import Postdetails from './component/postDetails/Postdetails';
import Posts from './component/posts/Posts';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

         <Switch>

           {/* post route */}
            <Route path="/post">
              <Posts />
            </Route>

            {/* dynamic route ata */}
             <Route path="/posts/:postId">
                <Postdetails />
             </Route> 



            <Route path="/home">
              <Home /> 
            </Route>

            <Route path="/friends">
              <Friends />
            </Route>
             <Route path="/friend/:friendid">
                 <FriendDetail />
             </Route>

        {/* similar rasta hole exact dite hobe */}
            <Route exact path="/about"> 
              <About />
            </Route>
        {/* ai route k link hise nilam */}
            <Route exact path="/about/culture">
              <Culture />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*"> 
               <Notfound />
            </Route>

         </Switch>
       </Router>
       
    </div>
  );
}

export default App;
