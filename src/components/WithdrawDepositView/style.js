import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
flex:1;
padding:15px;
background-color:${props => props.theme.cardBackground}
`;

export const Field = styled.View`
    justify-content:flex-start
`;


export const FieldName = styled.Text`
    text-align:left;
    font-size:15px;
    color:rgb(172,172,172);
`;


export const FieldBody = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
`;


export const FieldCurrency = styled.Text`
font-size:20px;
color:rgb(80,80,80);
font-weight:bold;
flex:1
`;

export const FieldInput = styled.TextInput`
border-left-width:0px;
border-right-width:0px;
border-top-width:0px;
border-bottom-width:1px;
border-color: rgb(239,239,239);
font-size:20px;
color:rgb(50,50,50);
flex:3
`;

export const ActionRow = styled.View`
flex-direction:row;
justify-content:space-around;
padding-vertical:10px
`;


export const Button = styled.TouchableOpacity`
    background-color: ${props => props.theme.buttonEnabled};
    width: ${(Dimensions.get('window').width * 0.3)};
    padding-vertical:15px;
    border-radius:5px;
    margin-vertical:10px;
    align-items:center;
`;

export const ButtonText = styled.Text`
    color: ${props => props.theme.buttonEnabledText};
    font-size:20px
`;
