// import React from 'react';
// import { combineReducers, createStore } from 'redux';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { shallow, configure, mount } from 'enzyme';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import { ShopPage } from './shop.component';
// configure({adapter: new Adapter()});

// export const createMockStore = ({ state, reducers }) => {
//   const store = createStore(combineReducers(reducers), state);

//   return {
//     ...store,
//     persistor: {
//       persist: () => null,
//     },
//   };
// };

// describe('ShopPage', () => {
//   let wrapper;
//   let mockFetchCollectionStart;
//   let store;

//   beforeEach(() => {
//     const mockReducer = (state = { isFetching: true }, action) => state;
//     const mockState = { shop: { isFetching: true } };

//     mockFetchCollectionStart = jest.fn();

//     store = createMockStore({
//       state: mockState,
//       reducer: {shop: mockReducer}
//     })

//     const mockMatch = {path: ''}

//     const mockProps = {
//       match: mockMatch,
//       fetchCollectionStart: mockFetchCollectionStart
//     }

//     wrapper = mount(
//       <BrowserRouter>
//         <Provider store={store}>
//         <ShopPage {...mockProps} />
//         </Provider>
//       </BrowserRouter>
//     )
//   });

//   it('should match ShopPage component', () => {
//     expect(wrapper).toMatchSnapshot();
//   })

//   it('should render ShopPage component', () => {
//     expect(mockFetchCollectionStart).toHaveBeenCalled();
//   })
// });
