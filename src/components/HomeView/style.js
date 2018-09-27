import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
`;

export const Button = styled.TouchableOpacity`
    background-color: rgb(0, 91, 150);
    width: ${(Dimensions.get('window').width * 0.6)};
    padding:10px;
    border-radius:5px;
    marginVertical:10px;
    align-items:center
`;

export const ButtonText = styled.Text`
    color: rgb(230, 240, 247);
`;
