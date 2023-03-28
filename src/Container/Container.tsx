import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import './Container.css';
import { Header } from '../Components/Header/Header';
import { CardsCollection } from '../Components/Cards/CardsCollection';
import { Graphs } from '../Components/Graphs/Graph';

import { SideDrawer } from '../Components/SideDrawer/SideDrawer';
const { Content } = Layout;

type ContainerProps = {};

export const Container = ({}: ContainerProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SideDrawer collapsed={collapsed} />
      <Layout className='site-layout layout-design'>
        <Header
          collapseStatus={setCollapsed}
          collapsed={collapsed}
        />

        <Content className='layout-body-section'>
          <CardsCollection />
          <Graphs />
        </Content>
      </Layout>
    </Layout>
  );
};
