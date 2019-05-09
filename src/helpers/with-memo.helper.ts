import { memo } from 'react';


/**
 * @description A nice hoc that will update your component only if a certain prop(s) of your choice changes
 * @author João Dias
 * @date 2019-04-29
 * @param {*} Component
 * @param {*} checkedProps
 * @returns
 */
export function withMemo(Component: React.FunctionComponent<any> , checkedProps: string[]){
    function areEqual(prevProps: any, nextProps: any) {
        let isEqual = true;
        for (let i = 0; i < checkedProps.length; i++) {
            const checkedProp = checkedProps[i];
            if (JSON.stringify(prevProps[checkedProp]) !== JSON.stringify(nextProps[checkedProp])) {
                isEqual = false;
                break;
            }
        }
        return isEqual;
    }

    return memo(Component, areEqual);
};