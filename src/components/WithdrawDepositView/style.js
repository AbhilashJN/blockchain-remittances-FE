import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
flex:1;
padding:15px;
`;

export const Field = styled.View`
    justify-content:flex-start
`;

export const FieldName = styled.Text`
    text-align:left;
    font-size:15px;
    color:white;
    font-weight:bold
`;

export const FieldInput = styled.TextInput`
    border-left-width:0px;
    border-right-width:0px;
    border-top-width:0px;
    border-bottom-width:1px;
    border-color: white;
    font-size:20px;
    color:white;
    font-weight:bold`;

export const ActionRow = styled.View`
flex-direction:row;
justify-content:space-around;
padding-vertical:10px
`;


export const Button = styled.TouchableOpacity`
    background-color: 'rgb(249, 251, 252)';
    width: ${(Dimensions.get('window').width * 0.3)};
    padding:10px;
    border-radius:5px;
    margin-vertical:10px;
    align-items:center;
    align-self:center;
    elevation:3px
`;

export const ButtonText = styled.Text`
    color: rgb(0, 122, 183);
`;
