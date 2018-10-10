import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
`;


export const ResultText = styled.Text`
font-weight:bold;
color:white;
font-size:30px;
padding:20px;
`;


export const ResultIcon = styled.Image`

`;


export const Button = styled.TouchableOpacity`
    background-color: rgb(249, 251, 252);
    width: ${(Dimensions.get('window').width * 0.6)};
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

export const Message = styled.View`
    background-color: rgb(0, 68, 102);
    border-radius:5px;
    elevation:-3;
    padding:10px;
    marginVertical:25px
`;


export const MessageText = styled.Text`
color : white;
font-size:15px;
font-weight:bold;
`;
