import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import UnselectedNote from './UnselectedNote'
import SelectedNote from './SelectedNote';
import EditNote from './EditNote';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path = "" element = {<UnselectedNote/>}></Route>
          <Route path = "/notes/:number" element = {<SelectedNote />}></Route>
          <Route path = "/notes/:number/edit" element = {<EditNote/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;