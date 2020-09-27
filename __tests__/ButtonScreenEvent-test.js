import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonScreen from '../src/@Screens/Auth/Buttons';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({userData:{userName:"Sukumar Abhijeet"}});

export const createTestProps = {
  navigation: {
    state: { params: {} },
    dispatch: jest.fn(),
    goBack: jest.fn(),
    dismiss: jest.fn(),
    navigate: jest.fn(),
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
    toggleDrawer: jest.fn(),
    getParam: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    isFocused: jest.fn()
  }
};

/**
 @note Remove the Toast from the code during test
 @reason  jest couldnot mock native libraries while doing @name Event_Testing
 */

test('Testing Events in Button Screen',()=>{
    const {debug,getByTestId,queryByText} = render(
    <Provider store={store}>
        <ButtonScreen  {...createTestProps} />
      </Provider>
    );

    // Test For Buttons Screen 
    const pressMe1 = getByTestId('Pressme1');
    fireEvent.press(pressMe1);
    const welcomeKey = queryByText('Terminate Session');
    expect(welcomeKey).toBeDefined();

    debug();
});