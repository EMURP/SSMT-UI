var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComplexBase } from '@syncfusion/ej2-react-base';
/**
 * `PanelsDirective` represent a presets of the react dashboardlayout.
 * It must be contained in a dashboardlayout component(`DashBoardLayoutComponent`).
 * ```tsx
 * <DashBoardLayoutComponent>
 * <PanelsDirective>
 * <PanelDirective></PanelDirective>
 * <PanelDirective></PanelDirective>
 * </PanelsDirective>
 * </DashBoardLayoutComponent>
 * ```
 */
var PanelDirective = /** @class */ (function (_super) {
    __extends(PanelDirective, _super);
    function PanelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelDirective.moduleName = 'panel';
    PanelDirective.complexTemplate = { 'panelsHeader': 'panels.header', 'panelsContent': 'panels.content' };
    return PanelDirective;
}(ComplexBase));
export { PanelDirective };
var PanelsDirective = /** @class */ (function (_super) {
    __extends(PanelsDirective, _super);
    function PanelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelsDirective.propertyName = 'panels';
    PanelsDirective.moduleName = 'panels';
    return PanelsDirective;
}(ComplexBase));
export { PanelsDirective };
