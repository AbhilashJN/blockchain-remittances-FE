import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
height:${(Dimensions.get('window').height)};
width:${(Dimensions.get('window').width)};
align-items:center;
justify-content:center;
background-color:${props => props.theme.cardBackground}
`;


export const LoaderIcon = styled.Image``;
