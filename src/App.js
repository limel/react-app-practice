import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Counter from './components/Counter/Counter';
import user from './user.json';

function App() {
  return (
    <Container>
      {<Dropdown />}
      <Counter initialValue={10} />
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={{ ...user.stats }}
      />
    </Container>
  );
}

export default App;
