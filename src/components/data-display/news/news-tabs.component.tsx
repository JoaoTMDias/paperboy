import Tabs, { TabPane } from "rc-tabs";
import SwipeableInkTabBar from "rc-tabs/lib/SwipeableInkTabBar";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import * as React from "react";
import styled from "styled-components";

import { ChosenNewsSources } from "../../../data/interfaces/index.interface";

import { LatestNewsTab } from "../../index";

interface ISavedPageProps {
  sources: ChosenNewsSources;
}

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class NewsTabs
 * @extends {React.Component<ISavedPageProps, any>}
 */
class NewsTabs extends React.Component<ISavedPageProps, any> {
  /**
   * @description Page only re-renders if the user props change, such as:
   * - User has new sources to pick from and fetch data
   * @date 2019-01-19
   * @param {ISavedPageProps} nextProps
   * @param {*} nextState
   * @returns {boolean}
   * @memberof NewsTabs
   */
  shouldComponentUpdate(nextProps: ISavedPageProps, nextState: any): boolean {
    const { sources } = this.props;
    if (nextProps.sources !== sources) {
      return true;
    }

    return false;
  }

  render() {
    const { sources } = this.props;

    if (sources) {
      return (
        <Tabs
          renderTabBar={() => (
            <SwipeableInkTabBar pageSize={4} speed={5} data-extra="tabbar" />
          )}
          renderTabContent={() => <TabContent />}
          defaultActiveKey="1"
        >
          <Panel tab={`Latest`} key="1" id="test1">
            <LatestNewsTab sources={sources} />
          </Panel>
          <Panel tab={`General`} key="2" id="test2">
            <LatestNewsTab sources={sources} />
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
      );
    } else {
      return null;
    }
  }
}

// Styling
const Content = styled(TabContent)`
  display: flex;
  flex-direction: column;
`;

const Panel = styled(TabPane)`
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-gray0);
  color: var(--color-gray9);
`;

export default NewsTabs;
