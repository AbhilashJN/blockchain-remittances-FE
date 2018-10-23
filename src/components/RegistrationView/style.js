import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    justify-content:space-between;
    align-items:stretch;
    padding:20px;
    background-color: rgb(255,255,255);
`;


export const PageInfo = styled.View`
    padding-horizontal:${Dimensions.get('screen').width * 0.1};
    align-items:center;
`;

export const PageIcon = styled.Image`
    margin:10px;
    height:128px;
    width:128px;
`;

export const PageInfoText = styled.Text`
    color:rgb(50,50,50);
    font-size: 15px;
    text-align:center;
`;

export const Field = styled.View`
    justify-content:flex-start
`;

export const FieldName = styled.Text`
    text-align:left;
    font-size:15px;
    color:rgb(172,172,172);
`;

export const FieldInput = styled.TextInput`
    border-left-width:0px;
    border-right-width:0px;
    border-top-width:0px;
    border-bottom-width:1px;
    border-color: rgb(239,239,239);
    font-size:20px;
    color:rgb(50,50,50);
`;


export const Button = styled.TouchableOpacity`
    background-color: 'rgb(225, 27, 34)';
    padding-vertical:15px;
    border-radius:5px;
    margin-vertical:10px;
    align-items:center;
`;

export const ButtonText = styled.Text`
    color: rgb(255,255,255);
    font-size:20px
`;


export const DropdownStyles = {
  baseColor: 'rgb(172,172,172)',
  textColor: 'rgb(50,50,50)',
  itemColor: 'rgb(71, 194, 255)',
  selectedItemColor: 'white',
  itemTextStyle: {
    padding: 10,
  },
  itemPadding: 10,
  pickerStyle: { backgroundColor: 'rgb(0, 68, 102)' },
  dropdownPosition: 0,
  style: {
  },
};
