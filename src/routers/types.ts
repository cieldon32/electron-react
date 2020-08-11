import { RouteProps } from 'react-router-dom';

export interface LayoutProps {
  children: React.ReactChild;
}

export interface LayoutRouteProps extends RouteProps {
  component: React.FC;
}
