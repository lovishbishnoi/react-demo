import { createStore } from 'redux';
import classReducer from './classReducer';

/**
 * Create store for the App
 * @params void
 * @returns Store instance
 */

const configureStore = () => (createStore(classReducer));

export default configureStore;
