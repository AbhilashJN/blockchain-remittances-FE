import styled from 'styled-components';

export const Container = styled.View`
    flex:1;
    justify-content:flex-start;
    padding-horizontal:5px
`;


export const DetailsHead = styled.View`
flex-direction:row;
justify-content:space-between;
padding-vertical:10px;
padding-horizontal:15px;
background-color:#00a3f5;
border-radius:5px;
margin-vertical:10px;
`;

export const AccountDetails = styled.View`

`;

export const Balance = styled.View`

`;

export const DetailsText = styled.Text`
color:white;
font-weight:bold;
`;


export const UserName = styled(DetailsText)`
font-size:20px
`;

export const BankAccountDetailsText = styled(DetailsText)`
font-size:15px
`;

export const BalanceAmountText = styled(DetailsText)`
font-size:30px
`;

export const TransactionHistoryText = styled.Text`
    color:white;
    font-size:15px;
`;

export const TransactionsList = styled.ScrollView`

`;

export const Transaction = styled.View`
    margin-top:15px;
    background-color:white;
    border-radius:5px;
    padding:10px;
    elevation:3px;
    flex-direction:row;
    justify-content:space-between;
`;

export const TransactionDetails = styled.View`
    flex:3
`;

export const TransactionAmount = styled.View`
    flex:1;
`;

export const TransactionPeerText = styled.Text`
    font-size:20px;
    margin:2px;
    color:black;
    font-weight:bold;
`;

export const TransactionIDText = styled.Text`
    font-size:15px;
    margin:2px;
    color:black;
`;


export const TransactionAmountText = styled.Text`
    color:${props => (props.type === 'debit' ? 'rgb(150, 21, 21)' : 'rgb(22, 150, 65)')};
    font-size: 20px;
    font-weight: bold;
    align-self:flex-end;
`;
