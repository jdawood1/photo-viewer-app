import { createStore, combineReducers } from 'redux';
import photos from './photos/reducers';

const rootReducer = combineReducers({
  photos, // this matches useSelector((state) => state.photos.photos)
});

const store = createStore(rootReducer);

export default store;
