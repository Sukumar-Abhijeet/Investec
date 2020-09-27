import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DefaultButton from '../src/@GlobalComponents/Buttons';

/**
 @note Remove the Toast from the code during test
 @reason  jest couldnot mock native libraries while doing @name Event_Testing
 */

test('Testing Events in Default Button Component',async ()=>{

    const mockFn = jest.fn();
    const mockBtnText = "Default Button"
    const mockTestId = 'ButtonId';

    const {debug,getByTestId,queryByText} = render(
        <DefaultButton testId={mockTestId}  onPress={mockFn} buttonText={mockBtnText} />
    );

    const saveButton = getByTestId(mockTestId);
    const buttonTextView = await queryByText(mockBtnText);
    fireEvent.press(saveButton);
    // expect(buttonTextView).toBeDefined();
    expect(mockFn).toHaveBeenCalled();

    debug();
});