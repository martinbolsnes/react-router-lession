import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';

import Home from './components/routes/home';
import About from './components/routes/about';
import Contact from './components/routes/contact';
import Todos from './components/routes/todos';
import TodoItem from './components/todo-item';
import Person from './components/Person';

function App() {
  return (
    <div className='App'>
      <nav
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
      </nav>
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
          <Person />
        </section>
      </main>
    </div>
  );
}

export default App;
