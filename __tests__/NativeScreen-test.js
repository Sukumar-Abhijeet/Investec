import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import NativeScreen from '../src/@Screens/Auth/Native';

const mockStore = configureMockStore();
const store = mockStore({userData:{userName:"Sukumar Abhijeet"}});

const createTestProps = {
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

test('Testing Button Screen .js', () => {
  const snap = renderer.create(
      <Provider store={store}>
        <NativeScreen  {...createTestProps} />
      </Provider>
  ).toJSON();
  expect(snap).toMatchSnapshot();
});