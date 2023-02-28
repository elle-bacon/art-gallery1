import { useEffect } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { setApiData } from './features/dataSlice';
import Buttons from './components/Buttons';
import Gallery from './components/Gallery';

function App() {
  let objectId  = useSelector((state) => state.data.objectId);
  let dispatch = useDispatch();

  const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
      let artId = getState().data.objectId;
      let res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`);
      res = await res.json();
      dispatch(setApiData(res));
    }
    return dataThunk;
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [objectId, dispatch])

  return (
    <div className="App container mt-5">
      <Buttons />
      <Gallery />
    </div>
  );
}

export default App;
