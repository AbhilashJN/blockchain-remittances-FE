import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
flex:1;
background-color:white
`;


export const SectionHeader = styled.View`
background-color:rgb(204, 204, 204);
padding-horizontal:10px;
padding-vertical:15px
`;

export const SectionHeaderText = styled.Text`
font-weight:bold;
font-size:15px;
color:rgb(50, 50, 50)
`;

export const Field = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
border-bottom-width:0.5px;
padding-horizontal:10px
`;

export const FieldName = styled.Text`
font-weight:bold;
color:rgb(50, 50, 50)
`;


export const FieldInput = styled.TextInput`
width: ${Dimensions.get('window').width * 0.6};
margin-horizontal:${Dimensions.get('window').width * 0.015};
`;
