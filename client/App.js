import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { RootProvider, RootConsumer, RootActions } from './providers/RootProvider'

import Projects from './pages/proyects/Projects'
import AddBlackboard from './pages/addBlackboard/AddBlackboard'
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
                  <Route exact path='/app/blackboard' render={() => <Blackboard rootData={context} sidenavEnable={RootActions.ENABLE_SIDEBAR} />} />
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