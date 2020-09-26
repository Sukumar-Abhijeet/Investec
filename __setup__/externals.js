
jest.mock('react-native-simple-toast', () => ({
    SHORT: jest.fn(),
}));

jest.mock('rn-swipe-button', () => 'SwipeButton');