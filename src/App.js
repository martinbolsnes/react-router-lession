import './App.css';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout></Layout>
    /* <div className='App'>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          height: '60px',
          borderBottom: 'solid 2px black',
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : 'none',
              listStyle: 'none',
              color: 'black',
            };
          }}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : 'none',
              listStyle: 'none',
              color: 'black',
            };
          }}
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : 'none',
              listStyle: 'none',
              color: 'black',
            };
          }}
          to='/contact'
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : 'none',
              listStyle: 'none',
              color: 'black',
            };
          }}
          to='/todos'
        >
          Todos
        </NavLink>
      </Container>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/todos' element={<Todos />}>
            <Route path=':todoId' element={<TodoItem />} />
          </Route>
        </Routes>
        <section>
          <Person title='Class Components' />
        </section>
      </main>
    </div> */
  );
}

export default App;
