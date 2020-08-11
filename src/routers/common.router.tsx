import React from 'react';
import { Route } from 'react-router-dom';
import { BasicProps } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import { LayoutRouteProps } from './types';

const Container: React.FunctionComponent<BasicProps> = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

const renderLayout = (matchProps: any, Component: React.FC) => (
  <Container>
    <Component {...matchProps} />
  </Container>
);

export const CommonLayoutRoute = ({ component: Component, ...rest }: LayoutRouteProps) => (
  <Route {...rest} render={(props) => renderLayout(props, Component)} />
);
