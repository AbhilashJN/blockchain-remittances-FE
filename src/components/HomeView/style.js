import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color:${props => props.theme.cardBackground}
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

// color: rgb(0, 122, 183);
export const ButtonText = styled.Text`
    color: ${props => props.theme.buttonText}
`;
