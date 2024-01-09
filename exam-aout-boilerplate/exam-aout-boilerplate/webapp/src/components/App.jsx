import React from 'react';

import { Layout, Menu } from 'antd'

import { Context as AppContext} from 'contexts/context';
import { useContext } from 'react';
import { Link, Route, Routes, useMatch } from 'react-router-dom';
import About from './About';
import Jokes from './Jokes';
import Joke from './Joke';
const { Header, Content } = Layout


const App = () => {

  const {allJokes, getJokeWithScores} = useContext(AppContext);
  
  const match = useMatch('/jokes/:id');
  const joke = match
    ? getJokeWithScores(match.params.id)
    : undefined;


  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          
          <Menu.Item>  <Link to="/">All jokes</Link></Menu.Item>
          <Menu.Item>  <Link to="/about">About</Link></Menu.Item>
        </Menu>
      </Header>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Jokes jokes={allJokes}/>} />
        <Route path="/jokes/:id" element={<Joke {...{ joke }} />} />
      </Routes>

      <Content style={{ padding: '30px 50px' }}>
      </Content>
    </Layout>
  )
}

export default App
