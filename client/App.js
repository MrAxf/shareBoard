import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { RootProvider, RootConsumer, RootActions } from './providers/RootProvider'

import Projects from './pages/proyects/Projects'
import AddBlackboard from './pages/addBlackboard/AddBlackboard'
import UpdateBlackboard from './pages/updateBlackboard/UpdateBlackboard'
import Blackboard from './pages/blackboard/Blackboard'
import NotFound from './pages/notFound/NotFound'

class App extends Component {
  render() {
    return (
      <RootProvider>
        <Layout>
          <RootConsumer>
            {
              context => (
                <Switch>
                  <Route exact path='/app' render={() => <Projects rootData={context} sidenavEnable={RootActions.DISABLE_SIDEBAR} />} />
                  <Route exact path='/app/addblackboard' render={() => <AddBlackboard rootData={context} sidenavEnable={RootActions.DISABLE_SIDEBAR} />} />
                  <Route exact path='/app/updateblackboard/:id' render={props => <UpdateBlackboard rootData={context} sidenavEnable={RootActions.DISABLE_SIDEBAR} id={props.match.params.id} />} />
                  <Route exact path='/app/blackboard/:id' render={props => <Blackboard rootData={context} sidenavEnable={RootActions.ENABLE_SIDEBAR} id={props.match.params.id} />} />
                  <Route render={() => <NotFound rootData={context} sidenavEnable={RootActions.DISABLE_SIDEBAR} />} />
                </Switch>
              )
            }
          </RootConsumer>
        </Layout>
      </RootProvider>
    )
  }
}

export default App;