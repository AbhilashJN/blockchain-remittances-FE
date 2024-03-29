import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex:1;
    align-items:stretch;
    justify-content:flex-start;
    background-color:${props => props.theme.cardBackground};
    padding-horizontal: 25px
`;


export const BankName = styled.Text`
    align-self:center;
    font-size:40px;
    font-weight:bold;
    color:rgba(255,255,255,0.5);
`;

export const Button = styled.TouchableOpacity`
    background-color: rgb(249, 251, 252);
    width: ${(Dimensions.get('window').width * 0.7)};
    padding:10px;
    border-radius:5px;
    margin-vertical:10px;
    align-items:center;
    align-self:center;
    elevation:3px
`;

export const ButtonText = styled.Text`
    color: ${props => props.theme.buttonText};
    font-size:20px;
`;


export const MenuOption = styled.TouchableOpacity`
    flex-direction:row;
    border-bottom-width: 1px;
    border-color: rgb(239,239,239);
    padding-horizontal:5px;
    padding-vertical: 20px;
    align-items:center;
`;

export const MenuOptionIcon = styled.Image`
`;

export const MenuOptionName = styled.Text`
    color:rgb(50,50,50);
    font-size:20px;
    margin-left:30px;
`;


export const SlideUpPanelStyles = {
  visible: true,
  startCollapsed: true,
  showBackdrop: false,
  draggableRange: { top: Dimensions.get('window').height, bottom: 120 },
};


export const BottomTabPlaceholder = styled.View`
   background-color:${props => props.theme.detailsHeadBg};
   padding-vertical:10px;
`;

export const BottomTabPlaceholderText = styled.Text`
text-align:center;
color:rgb(255,255,255);
margin-bottom: 100px;
font-size:20px;
`;
