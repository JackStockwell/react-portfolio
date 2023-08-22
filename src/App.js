import Container from './components/Container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faHeart, faCircleUser } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faHeart, faCircleUser)

function App() {
  return (
    <Container />
  );
}

export default App;
