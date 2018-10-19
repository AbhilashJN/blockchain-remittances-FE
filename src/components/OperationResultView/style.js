import styled from 'styled-components';

export const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:stretch;
    background-color:${props => props.theme.cardBackground};
    padding:20px;
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
    background-color: ${props => props.theme.buttonEnabled};
    padding-vertical:15px;
    border-radius:5px;
    margin-vertical:10px;
    align-items:center;
`;

export const ButtonText = styled.Text`
    color: ${props => props.theme.buttonEnabledText};
    font-size:20px
`;

export const Message = styled.View`
    background-color: ${props => props.theme.messageBackground}
    border-radius:5px;
    elevation:-3;
    padding:10px;
    margin-vertical:25px
`;


export const MessageText = styled.Text`
    color : white;
    font-size:15px;
    font-weight:bold;
`;
