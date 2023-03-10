import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './Layout';
import UnselectedNote from './UnselectedNote'
import SelectedNote from './SelectedNote';
import EditNote from './EditNote';

if (localStorage.getItem("storedNotes") == null) {
  localStorage.setItem("noteList", JSON.stringify({}));
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path ="/" element={<Navigate to ="/notes"/>}></Route>
          <Route path = "/notes" element = {<UnselectedNote/>}></Route>
          <Route path = "/notes/:number" element = {<SelectedNote />}></Route>
          <Route path = "/notes/:number/edit" element = {<EditNote/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;