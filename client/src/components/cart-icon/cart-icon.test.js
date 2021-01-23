import React from 'react';
import { shallow, configure } from 'enzyme';
import CartIcon from './cart-icon.component';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
configure({ adapter: new Adapter() });
describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCartHidden;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };

    wrapper = shallow(
      <Provider store={store}>
        <CartIcon {...mockProps} />{' '}
      </Provider>
    );
  });

  it('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
