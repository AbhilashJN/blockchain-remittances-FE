import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    justify-content:space-between;
    align-items:stretch;
    padding:20px;
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
    font-weight:bold;
`;


export const Button = styled.TouchableOpacity`
    background-color: ${props => (props.enabled ? 'rgb(249, 251, 252)' : 'rgb(159, 197, 221)')};
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


export const ReceiverInfoCard = styled.View`
    elevation:2px;
    border-radius:5px;
    margin:5px;
    padding:10px;
    background-color:white;
    flex-direction:row;
`;


export const UserVerifiedIcon = styled.Image`
`;

export const ReceiverInfo = styled.View`
align-items: flex-start;
margin-left: 20px;
`;


export const ReceiverInfoText = styled.Text`
    font-weight:bold;
    color: black
`;

export const ReceiverName = styled(ReceiverInfoText)`
    font-size:20px
`;

export const ReceiverBankName = styled(ReceiverInfoText)`
    font-size:15px
`;
