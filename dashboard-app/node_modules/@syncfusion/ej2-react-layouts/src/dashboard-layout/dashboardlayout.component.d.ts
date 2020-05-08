import * as React from 'react';
import { DashboardLayout, DashboardLayoutModel } from '@syncfusion/ej2-layouts';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * Represents the Essential JS 2 React DashboardLayout Component.
 * ```ts
 * <DashBoardLayoutComponent></DashBoardLayoutComponent>
 * ```
 */
export declare class DashboardLayoutComponent extends DashboardLayout {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DashboardLayoutModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    directivekeys: {
        [key: string]: Object;
    };
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DashboardLayoutModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
