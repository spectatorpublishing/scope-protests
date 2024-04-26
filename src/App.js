import Home from './containers/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;