import styled from '@emotion/styled';

export const Container = styled.div`
    width: 800px;
    margin: 0 auto;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
`;

export const TableTransactions = styled.table`
    background-color: white;
    width: 100%;
    border-collapse: collapse;
`;

export const TableHeader = styled.thead`
    background-color: #0088ff;
`;

export const TableHead = styled.th`
    background-color: #0088cc;
    padding: 10px;    
    color: white;
    border: 1px solid #777;    
`;


export const TableBody = styled.tbody`

`;

export const TableRow = styled.tr`
    padding: 20px;
    &:nth-of-type(even) {
        background-color: #e7e7e7;
    }
    &:hover {
        background-color: #aaa;
    }    
`;

export const TableData = styled.td`
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
    width: 33%;
    cursor: default;
`;