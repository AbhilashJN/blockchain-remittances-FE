import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    justify-content:space-between;
    align-items:stretch;
    padding:20px;
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
    background-color: ${props => (props.enabled ? props.theme.buttonEnabled : props.theme.buttonDisabled)};
    padding-vertical:15px;
    border-radius:5px;
    margin-vertical:10px;
    align-items:center;
`;

export const ButtonText = styled.Text`
    color: ${props => (props.enabled ? props.theme.buttonEnabledText : props.theme.buttonDisabledText)};
    font-size:20px
`;

export const ButtonOutline = styled.TouchableOpacity`
    border-width:1px;
    border-color: ${props => props.theme.buttonEnabled};
    align-self:center;
    padding:10px;
    border-radius:5px;
`;


export const ButtonOutlineText = styled.Text`
    color:${props => props.theme.buttonEnabled};
    font-size:15px;
    font-weight:bold;
`;
