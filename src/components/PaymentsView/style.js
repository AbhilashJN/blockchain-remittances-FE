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


export const TextBase = styled.Text`
font-size:15px;
color:white;
font-weight:bold
`;

export const FieldName = styled(TextBase)`
    text-align:left;
`;

export const CenteredText = styled(TextBase)`
    text-align:center;
    font-size:20px;
`;


export const FieldBody = styled.View`
flex-direction:row;
justify-content:space-between;
`;

export const FieldIcon = styled.Image`

`;


export const FieldInput = styled.TextInput`
    border-left-width:0px;
    border-right-width:0px;
    border-top-width:0px;
    border-bottom-width:0.5px;
    border-color: rgba(229, 229, 229, 0.6);
    font-size:20px;
    color:white;
    margin-top:25px
`;


export const Banner = styled.View`
background-color:#00a3f5;
border-radius:5px;
padding:5px;
`;

export const BannerText = styled.Text`
color: white;
font-size:15px;
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


export const DropdownStyles = {
  baseColor: 'rgba(229, 229, 229, 0.6)',
  textColor: 'white',
  itemColor: 'rgb(71, 194, 255)',
  selectedItemColor: 'white',
  itemTextStyle: {
    fontWeight: 'bold', padding: 10,
  },
  itemPadding: 10,
  containerStyle: { flex: 1 },
  pickerStyle: { backgroundColor: 'rgb(0, 68, 102)' },
  dropdownPosition: 0,
  style: {
    fontWeight: 'bold',
  },
  labelFontSize: 15,
  fontSize: 20,
};


export const FieldButton = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
`;
