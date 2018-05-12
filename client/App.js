import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { RootProvider, RootConsumer, RootActions } from './providers/RootProvider'

import Projects from './pages/proyects/Projects'
import Blackboard from './pages/blackboard/Blackboard'

class App extends Component {
  render() {
    return (
      <RootProvider>
        <Layout>
          <Switch>
            <RootConsumer>
              {
                context => (
                  <React.Fragment>
                    <Route exact path='/app' render={() => <Projects rootData={context} sidenavEnable={RootActions.DISABLE_SIDEBAR} />} />
                    <Route exact path='/app/blackboard' render={() => <Blackboard rootData={context} sidenavEnable={RootActions.ENABLE_SIDEBAR} />} />
                  </React.Fragment>
                )
              }
            </RootConsumer>
          </Switch>
        </Layout>
      </RootProvider>
    )
  }
}

export default App;