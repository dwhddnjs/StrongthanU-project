import React from 'react';
import styled from 'styled-components';
import { getMultiple } from '../../../util';

const TierTable = () => {
  const data = JSON.parse(localStorage.getItem('data') as string);
  const totalWeight = parseInt(data.squat) + parseInt(data.bench) + parseInt(data.dead);

  return (
    <TableContainer>
      <TableBody>
        <TableRow>스쿼트</TableRow>
        <TableColumn>{data.squat}kg</TableColumn>
        <TableColumn>{getMultiple(data.squat, data.body)}배</TableColumn>
        <TableTotal />
      </TableBody>
      <TableBody>
        <TableRow>벤치프레스</TableRow>
        <TableColumn>{data.bench}kg</TableColumn>
        <TableColumn>{getMultiple(data.bench, data.body)}배</TableColumn>
        <TableTotal />
      </TableBody>
      <TableBody>
        <TableRow>데드리프트</TableRow>
        <TableColumn>{data.dead}kg</TableColumn>
        <TableColumn>{getMultiple(data.dead, data.body)}배</TableColumn>
        <TableTotal>
          Total : <span>{getMultiple(totalWeight, data.body)}배</span>
        </TableTotal>
      </TableBody>
    </TableContainer>
  );
};

export default TierTable;

const TableContainer = styled.div`
  display: flex;

  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

const TableBody = styled.div`
  width: 150px;
`;

const TableRow = styled.div`
  display: flex;
  background-color: #3eb489;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  padding: 5px;
  font-weight: 700;
`;
const TableColumn = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  color: #555555;
  border-bottom: 1px solid #eeeeee;
  &:last-child {
    border-bottom: none;
  }
`;

const TableTotal = styled.div`
  padding: 5px;
  font-weight: 700;
  color: #333333;
  margin-left: 8px;
  span {
    color: #0d5be1;
  }
`;
