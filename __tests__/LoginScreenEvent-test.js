import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../src/@Screens/Auth/Login';
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

test('Testing Events in Login Screen',async ()=>{
    const {debug,getByTestId,queryByText} = render(
    <Provider store={store}>
        <LoginScreen  {...createTestProps} />
      </Provider>
    );

    // Test For TextInput and Save Button
    const textInput = getByTestId('TextInput');
    const saveButton = getByTestId('SaveButton');
    fireEvent.changeText(textInput, 'Sukumar Abhijeet');
    fireEvent.press(saveButton);
    expect(saveButton).toBeDisabled();

    // Test For Buttons Screen 
    const navigateToButtons = getByTestId('NavigateToButtons');
    fireEvent.press(navigateToButtons);
    const welcomeKey = await queryByText('Sukumar Abhijeet');
    expect(welcomeKey).toBeDefined();

    // Test For Device Screen Button
    const navigateToNative = getByTestId('NavigateToNative');
    fireEvent.press(navigateToNative);
    const welcomeKeyNative = await queryByText('Sukumar Abhijeet');
    expect(welcomeKeyNative).toBeDefined();

    debug();
});