import React, { Component } from 'react'

import Layout from './components/layout/Layout'
import Projects from './pages/proyects/Projects'

class App extends Component {
  render() {
    return (
      <Layout>
        <Projects/>
      </Layout>
    )
  }
}

export default App;
