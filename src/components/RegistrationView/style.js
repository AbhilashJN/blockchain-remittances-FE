import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:stretch;
    padding:10px
`;

export const Field = styled.View`
    height:100px
    justify-content:center
`;

export const FieldName = styled.Text`
    text-align:left;
    font-size:15px;
`;

export const FieldInput = styled.TextInput`

`;


export const Button = styled.TouchableOpacity`
    background-color: rgb(0, 91, 150);
    width: ${(Dimensions.get('window').width * 0.6)};
    padding:10px;
    border-radius:5px;
    marginVertical:10px;
    align-items:center;
    align-self:center;
`;

export const ButtonText = styled.Text`
    color: rgb(230, 240, 247);
`;
