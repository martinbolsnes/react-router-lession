import { AppShell, Navbar, Header, Group, Button, Text } from '@mantine/core';
import { NavLink, Routes, Route } from 'react-router-dom';

import Home from '../routes/home';
import About from '../routes/about';
import Contact from '../routes/contact';
import Todos from '../routes/todos';
import TodoItem from '../todo-item';
import Person from '../Person';

export default function Layout() {
  const NavLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Todos', to: '/todos' },
  ];
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} height={500} p='xs'>
          <Navbar.Section>
            <Group direction='column'>
              {NavLinks.map(({ label, to }) => (
                <NavLink key={to} to={to}>
                  <Button variant='subtle'>{label}</Button>
                </NavLink>
              ))}
            </Group>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p='xs'>
          <Text weight={700}>React Routing Lecture</Text>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
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
    </AppShell>
  );
}
