import React from 'react'
import { Link } from 'gatsby'
import Tabs, { TabPane } from 'rc-tabs'
import TabContent from 'rc-tabs/lib/SwipeableTabContent'
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar'
import styled from 'styled-components'

import { Layout, Container } from '../components/index'

const CategoriesPage = () => (
  <Layout header={false}>
    <Container
      fullwidth={true}
      fullheight={true}
      isFixed={false}
      title="Current Page is: Latest News"
    >
      <Tabs
        renderTabBar={() => (
          <SwipeableInkTabBar pageSize={4} speed={5} data-extra="tabbar" />
        )}
        renderTabContent={() => <TabContent />}
        defaultActiveKey="1"
      >
        <Panel tab={`Latest`} key="1" id="test1">
          <div>tab 1</div>
        </Panel>
        <Panel tab={`General`} key="2" id="test2">
          <div>tab 1</div>
        </Panel>
        <Panel tab={`tab 1`} key="3" id="test3">
          <div>tab 1</div>
        </Panel>
        <Panel tab={`tab 1`} key="4" id="test4">
          <div>tab 1</div>
        </Panel>
        <Panel tab={`tab 1`} key="5" id="test5">
          <div>tab 1</div>
        </Panel>
        <Panel tab={`tab 1`} key="6" id="test6">
          <div>tab 1</div>
        </Panel>
        <Panel tab={`tab 1`} key="7" id="test7">
          <div>tab 1</div>
        </Panel>
      </Tabs>
    </Container>
  </Layout>
)

const Content = styled(TabContent)`
  display: flex;
  flex-direction: column;
`

const Panel = styled(TabPane)`
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-gray0);
  color: var(--color-gray9);
`
export default CategoriesPage
