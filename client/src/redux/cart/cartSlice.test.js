import * as actions from './cartSlice';
import reducer from './cartSlice';

describe('cartSlice', () => {
  const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
  };

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('Toggle cartHidden', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: actions.toggleCartHidden.type,
      }).hidden
    ).toBe(false);
  });

  it('Add Item', () => {
    const mockObj = {
      name: 'trousers',
      quantity: 1,
    };
    expect(
      reducer(INITIAL_STATE, {
        type: actions.addItem.type,
        payload: {
          name: 'trousers',
        },
      }).cartItems[0]
    ).toEqual(mockObj);
  });

  it('Add + 1 to existing item', () => {
    const mockObj = {
      name: 'trousers',
      quantity: 1,
    };
    const INITIAL_STATE = {
      hidden: true,
      cartItems: [mockObj],
    };
    expect(
      reducer(INITIAL_STATE, {
        type: actions.addItem.type,
        payload: {
          name: 'trousers',
        },
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it('Remove item', () => {
    const mockObj = {
      name: 'trousers',
      quantity: 1,
    };
    const INITIAL_BASE_OBJ = {
      hidden: true,
      cartItems: [mockObj],
    };
    expect(
      reducer(INITIAL_BASE_OBJ, {
        type: actions.removeItem.type,
        payload: {
          name: 'trousers',
        },
      })
    ).toEqual(INITIAL_STATE);
  });
});
