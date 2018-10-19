import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    justify-content:space-between;
    align-items:stretch;
    padding:20px;
    background-color:${props => props.theme.cardBackground}
`;

export const PageInfo = styled.View`
    padding-horizontal:${Dimensions.get('screen').width * 0.1};
    align-items:center;
`;

export const PageIcon = styled.Image``;

export const PageInfoText = styled.Text`
    color:rgb(50,50,50);
    font-size: 15px;
    text-align:center;
`;

export const Field = styled.View`
    justify-content:flex-start
`;


export const FieldName = styled.Text`
    text-align:left;
    font-size:15px;
    color:rgb(172,172,172);
`;


export const FieldBody = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const FieldIcon = styled.Image`

`;

export const FieldCurrency = styled.Text`
    font-size:20px;
    color:rgb(80,80,80);
    font-weight:bold;
    flex:1
`;

export const FieldInput = styled.TextInput`
    border-left-width:0px;
    border-right-width:0px;
    border-top-width:0px;
    border-bottom-width:1px;
    border-color: rgb(239,239,239);
    font-size:20px;
    color:rgb(50,50,50);
    flex:3
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


export const ReceiverInfoCard = styled.View`
    background-color:rgb(219, 228, 238);    
    margin:5px;
    padding:20px;
    border-radius:5px;
    border-color:rgb(160, 184, 209);
    border-width:1px;
`;

export const ReceiverName = styled.Text`
    font-size:20px;
    color:rgb(50,50,50);
`;

export const ReceiverBankName = styled.Text`
    font-size:15px;
    color:rgb(50,50,50);
`;

export const ReceiverBankAccount = styled.Text`
    font-size:18px;
    font-weight:bold;
    color:rgb(50,50,50);
    margin-top:20px;
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
  containerStyle: { flex: 1, marginRight: 10 },
  pickerStyle: { backgroundColor: 'rgb(0, 68, 102)' },
  dropdownPosition: 0,
  style: {
    fontWeight: 'bold',
  },
  labelFontSize: 15,
  fontSize: 20,
};


export const FieldButton = styled.TouchableOpacity`
    margin-top:25px;
    justify-content:center;
    align-items:center;
`;


export const ConversionRate = styled.Text`
    font-size:15px;
    color: rgb(50,50,50);
    text-align:right;
    margin:5px;
`;
