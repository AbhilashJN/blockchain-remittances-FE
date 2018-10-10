import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color:${props => props.theme.cardBackground}
`;


export const BankName = styled.Text`
align-self:center;
font-size:40px;
font-weight:bold;
color:rgba(255,255,255,0.5);
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
    color: ${props => props.theme.buttonText}
`;
