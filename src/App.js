import Container from './components/Container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faHeart, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faHeart, faCircleUser, faBars)

function App() {
  return (
    <Container />
  );
}

export default App;
