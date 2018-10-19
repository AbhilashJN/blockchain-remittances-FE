import styled from 'styled-components';

export const Container = styled.View`
    flex:1;
    justify-content:flex-start;
    background-color:${props => props.theme.cardBackground};
`;

export const DetailsHead = styled.View`
    padding-vertical:10px;
    padding-horizontal:20px;
    background-color:${props => props.theme.detailsHeadBg};
`;


export const HeaderText = styled.Text`
    text-align:center;
    color:rgb(255,255,255);
    margin-bottom: 50px;
    font-size:20px;
    font-weight:bold;
`;

export const AccountInfo = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

export const AccountDetails = styled.View`

`;

export const Balance = styled.View`
    align-items:flex-end;
`;

export const DetailsText = styled.Text`
    color:white;
`;


export const BankAccountDetailsTextLarge = styled(DetailsText)`
    font-size:20px
`;

export const BankAccountDetailsText = styled(DetailsText)`
    font-size:15px
`;

export const BalanceAmountText = styled(DetailsText)`
    font-size:30px;
    font-weight:bold;
`;

export const TransactionHistoryText = styled.Text`
    color:black;
    font-size:15px;
`;

export const TransactionsList = styled.ScrollView`
padding-horizontal:20px;
`;

export const Transaction = styled.View`
    background-color:white;
    padding-vertical:20px;
    flex-direction:row;
    justify-content:space-between;
    border-bottom-width:1.5px;
    border-color:rgb(239,239,239);
`;

export const TransactionDetails = styled.View`
    flex:3
`;

export const TransactionAmount = styled.View`
    flex:1;
`;

export const TransactionPeerText = styled.Text`
    font-size:23px;
    margin:2px;
    color:rgb(50,50,50);
`;

export const TransactionIDText = styled.Text`
    font-size:15px;
    margin-top:10px;
    color:rgb(50,50,50);
`;


export const TransactionTimeText = styled.Text`
    font-size:15px;
    margin:2px;
    color:rgb(150,150,150);
`;

export const TransactionAmountText = styled.Text`
    color:${props => (props.type === 'debit' ? 'rgb(208, 2, 27)' : 'rgb(65, 117, 5)')};
    font-size: 25px;
    font-weight: bold;
    align-self:flex-end;
`;
