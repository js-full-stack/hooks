import { Route } from 'react-router-dom';

import Nav from './Components/Nav';
import HomePage from './Pages/HomePage';
import CounterPage from './Pages/CounterPage';
import SignupPage from './Pages/SignupPage';
import ClockPage from './Pages/ClockPage';
import NewsPage from './Pages/NewsPage';
import UserMenu from './Context/UserMenu';
import TodosPage from './Pages/TodosPage';
function App() {
  return (
    <>
      <Nav />
      <Route path="/" component={HomePage} exact />
      <Route path="/counter" component={CounterPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/clock" component={ClockPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/context" component={UserMenu} />
      <Route path="/todos" component={TodosPage} />
    </>
  );
}

export default App;
