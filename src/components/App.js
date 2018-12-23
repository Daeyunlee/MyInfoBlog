import React from 'react';
import {ListPage, NotFound, Editor, InfoPage, PostPage, Home} from 'pages';
import {Switch, Route} from 'react-router-dom'


const App = () => {

        return (
            <>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/list' component={ListPage} />
                    <Route path='/page/:page' component={ListPage} />
                    <Route path='/type/:type/:page' component={ListPage} />
                    <Route path='/tag/:tag/:page' component={ListPage} />
                    <Route path='/search/:search/:page' component={ListPage} />
                    <Route path='/post/:id/:type' component={PostPage} />
                    <Route path='/update/:type' component={Editor} />
                    <Route path='/editor/:type' component={Editor} />
                    <Route path='/info/:pass' component={InfoPage} />
                    <Route component={NotFound} />
                </Switch>
            </>
        )
}

export default App;