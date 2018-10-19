import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    align-items:stretch;
    justify-content:center;
    background-color:${props => props.theme.cardBackground};
    padding-horizontal: 25px
`;


export const BankName = styled.Text`
    align-self:center;
    font-size:40px;
    font-weight:bold;
    color:rgba(255,255,255,0.5);
`;

export const Button = styled.TouchableOpacity`
    background-color: rgb(249, 251, 252);
    width: ${(Dimensions.get('window').width * 0.7)};
    padding:10px;
    border-radius:5px;
    margin-vertical:10px;
    align-items:center;
    align-self:center;
    elevation:3px
`;

export const ButtonText = styled.Text`
    color: ${props => props.theme.buttonText};
    font-size:20px;
`;


export const MenuOption = styled.TouchableOpacity`
    flex-direction:row;
    border-bottom-width: 1px;
    border-color: rgb(239,239,239);
    padding-horizontal:5px;
    padding-vertical: 20px;
    align-items:center;
`;

export const MenuOptionIcon = styled.Image``;

export const MenuOptionName = styled.Text`
    color:rgb(80,80,80);
    font-size:20px;
`;
