import React from 'react';
import {ListPage, NotFound, Editor, InfoPage, PostPage} from 'pages';
import {Switch, Route} from 'react-router-dom'


const App = () => {

        return (
            <>
                <Switch>
                    <Route exact path='/' component={ListPage} />
                    <Route path='/page/:page' component={ListPage} />
                    <Route path='/tag/:tag/:page?' component={ListPage} />
                    <Route path='/post/:id' component={PostPage} />
                    <Route path='/editor' component={Editor} />
                    <Route path='/info/:pass' component={InfoPage} />
                    <Route component={NotFound} />
                </Switch>
            </>
        )
}

export default App;