import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
    mergeTwoObjects,
    mergeTwoArrays,
    concatNumberAndString
} from '../src/@Utils/utility';

// 2 Objects
const obj1 = {test:'case1',value:50};
const obj2 = {name:'Investec',age:100};
const mergedObj = {...obj1,...obj2};

// 2 Arrays
const arr1 = [1,2,3,4,5];
const arr2 = ['N1','N2','N3','N4','N5'];
const mergedArr = [...arr1,...arr2];

// 2 Parameters {number | string}
const param1 = 500;
const param2 = 300;

describe('Checking mergeTwoObjects(obj1,obj2) ', () => {
    test('given two objects, mergeTwoObjects(obj1,obj2) returns a merged object', () => {
    expect(mergeTwoObjects(obj1,obj2)).toEqual(mergedObj);
    });

    test('given one object, mergeTwoObjects(obj1) received undefined', () => {
    expect(mergeTwoObjects(obj1)).toBeUndefined();
    });

    test('given one object and null, mergeTwoObjects(obj1,null) received undefined', () => {
    expect(mergeTwoObjects(obj1,null)).toBeUndefined();
    });

    test('given no parameter, mergeTwoObjects() received undefined', () => {
    expect(mergeTwoObjects()).toBeUndefined();
    });
});

describe('Checking mergeTwoArrays(arr1,arr2) ', () => {
    test('given two arrays, mergeTwoArrays(arr1,arr2) returns a merged object', () => {
    expect(mergeTwoArrays(arr1,arr2)).toEqual(mergedArr);
    });

    test('given one array, mergeTwoArrays(arr1) received undefined', () => {
    expect(mergeTwoArrays(arr1)).toBeUndefined();
    });

    test('given one array and null, mergeTwoArrays(arr1,null) received undefined', () => {
    expect(mergeTwoArrays(arr1,null)).toBeUndefined();
    });

    test('given no parameter, mergeTwoArrays() received undefined', () => {
    expect(mergeTwoArrays()).toBeUndefined();
    });
});

describe('Checking concatNumberAndString(param1,param2) ', () => {
    test('given two numbers, concatNumberAndString(param1,param2) returns an addition value', () => {
    expect(concatNumberAndString(param1,param2)).toEqual(800);
    });

    test('given one number one String, concatNumberAndString(param1,param2.toString()) received concatenated Value', () => {
    expect(concatNumberAndString(param1,param2.toString())).toMatch(`${param1}300`);
    });

    test('given both are String, concatNumberAndString(param1.toString(),param2.toString()) received concatenated Value', () => {
    expect(concatNumberAndString(param1.toString(),param2.toString())).toMatch(`${param1}${param2}`);
    });

    test('given one number, concatNumberAndString(param1) received undefined', () => {
    expect(concatNumberAndString(param1)).toBeUndefined();
    });

    test('given one number and null, concatNumberAndString(param1,null) received undefined', () => {
    expect(concatNumberAndString(param1,null)).toBeUndefined();
    });

    test('given no parameter, concatNumberAndString() received undefined', () => {
    expect(concatNumberAndString()).toBeUndefined();
    });
});




  
