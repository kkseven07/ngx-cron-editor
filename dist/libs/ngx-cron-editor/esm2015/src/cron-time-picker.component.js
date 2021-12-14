import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", hour_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hour_r5);
} }
function TimePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵi18n(3, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 3);
    i0.ɵɵtemplate(5, TimePickerComponent_ng_container_1_mat_option_5_Template, 2, 2, "mat-option", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.hours);
} }
function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ":");
    i0.ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const minute_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", minute_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(minute_r8);
} }
function TimePickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TimePickerComponent_ng_container_2_span_1_Template, 2, 0, "span", 1);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵi18n(4, 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-select", 7);
    i0.ɵɵtemplate(6, TimePickerComponent_ng_container_2_mat_option_6_Template, 2, 2, "mat-option", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.hideHours);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.minutes);
} }
function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ":");
    i0.ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const second_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", second_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(second_r11);
} }
function TimePickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TimePickerComponent_ng_container_3_span_1_Template, 2, 0, "span", 1);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵi18n(4, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-select", 9);
    i0.ɵɵtemplate(6, TimePickerComponent_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2.seconds);
} }
function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hourType_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", hourType_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hourType_r13);
} }
function TimePickerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵtext(2, ". ");
    i0.ɵɵelementStart(3, "mat-form-field");
    i0.ɵɵelementStart(4, "mat-select", 10);
    i0.ɵɵtemplate(5, TimePickerComponent_ng_container_4_mat_option_5_Template, 2, 2, "mat-option", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.hourTypes);
} }
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
export class TimePickerComponent {
    constructor(parent) {
        this.parent = parent;
        this.use24HourTime = true;
        this.hideHours = false;
        this.hideMinutes = false;
        this.hideSeconds = true;
        this.minutes = [...range(0, 59)];
        this.seconds = [...range(0, 59)];
        this.hourTypes = ['AM', 'PM'];
    }
    get hours() {
        return this.use24HourTime ? [...range(0, 23)] : [...range(0, 12)];
    }
}
/** @nocollapse */ TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer)); };
/** @nocollapse */ TimePickerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [i0.ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_660968041670905112$$SRC_CRON_TIME_PICKER_COMPONENT_TS__1 = goog.getMsg("Hour(s)");
        i18n_0 = MSG_EXTERNAL_660968041670905112$$SRC_CRON_TIME_PICKER_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:␟3109dbd5cf50e128c7236f52363640ceed87c820␟660968041670905112:Hour(s)`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2365388243339409921$$SRC_CRON_TIME_PICKER_COMPONENT_TS__3 = goog.getMsg("Minute(s)");
        i18n_2 = MSG_EXTERNAL_2365388243339409921$$SRC_CRON_TIME_PICKER_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟a57842fbab5ade4b6a8970e5f10005993cae74e6␟2365388243339409921:Minute(s)`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1255117480222066438$$SRC_CRON_TIME_PICKER_COMPONENT_TS__5 = goog.getMsg("Second(s)");
        i18n_4 = MSG_EXTERNAL_1255117480222066438$$SRC_CRON_TIME_PICKER_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟8b8da66d760526670ade423f15085ea222a1df56␟1255117480222066438:Second(s)`;
    } return [[3, "formGroup"], [4, "ngIf"], i18n_0, ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], i18n_2, ["formControlName", "minutes"], i18n_4, ["formControlName", "seconds"], ["formControlName", "hourType"]]; }, template: function TimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
        i0.ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
        i0.ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 1, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.parent.control);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideHours);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.use24HourTime);
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i3.MatFormField, i3.MatLabel, i4.MatSelect, i1.NgControlStatus, i1.FormControlName, i2.NgForOf, i5.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'cron-time-picker',
                templateUrl: './cron-time-picker.template.html',
                providers: []
            }]
    }], function () { return [{ type: i1.ControlContainer }]; }, { disabled: [{
            type: Input
        }], use24HourTime: [{
            type: Input
        }], hideHours: [{
            type: Input
        }], hideMinutes: [{
            type: Input
        }], hideSeconds: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL25neC1jcm9uLWVkaXRvci9zcmMvY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9saWJzL25neC1jcm9uLWVkaXRvci9zcmMvY3Jvbi10aW1lLXBpY2tlci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0sxQyxxQ0FBc0Q7SUFBQSxZQUFRO0lBQUEsaUJBQWE7OztJQUFwQywrQkFBYztJQUFDLGVBQVE7SUFBUiw2QkFBUTs7O0lBSnBFLDZCQUFpQztJQUMvQixzQ0FBZ0I7SUFDZCxpQ0FBZ0I7SUFBaEIsZUFBZ0I7SUFBTyxpQkFBWTtJQUNuQyxxQ0FBb0M7SUFDbEMsaUdBQTJFO0lBQzdFLGlCQUFhO0lBQ2YsaUJBQWlCO0lBQ25CLDBCQUFlOzs7SUFIb0IsZUFBUTtJQUFSLHNDQUFROzs7SUFLekMsNEJBQXlCO0lBQUEsaUJBQUM7SUFBQSxpQkFBTzs7O0lBSTdCLHFDQUE0RDtJQUFBLFlBQVU7SUFBQSxpQkFBYTs7O0lBQXhDLGlDQUFnQjtJQUFDLGVBQVU7SUFBViwrQkFBVTs7O0lBTDVFLDZCQUFtQztJQUNqQyxxRkFBaUM7SUFDakMsc0NBQWdCO0lBQ2QsaUNBQWdCO0lBQWhCLGVBQWdCO0lBQVMsaUJBQVk7SUFDckMscUNBQXNDO0lBQ3BDLGlHQUFtRjtJQUNyRixpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBUE4sZUFBZ0I7SUFBaEIsd0NBQWdCO0lBSVksZUFBVTtJQUFWLHdDQUFVOzs7SUFNN0MsNEJBQTJCO0lBQUEsaUJBQUM7SUFBQSxpQkFBTzs7O0lBSS9CLHFDQUE0RDtJQUFBLFlBQVU7SUFBQSxpQkFBYTs7O0lBQXhDLGtDQUFnQjtJQUFDLGVBQVU7SUFBVixnQ0FBVTs7O0lBTDVFLDZCQUFtQztJQUNqQyxxRkFBbUM7SUFDbkMsc0NBQWdCO0lBQ2QsaUNBQWdCO0lBQWhCLGVBQWdCO0lBQVMsaUJBQVk7SUFDckMscUNBQXNDO0lBQ3BDLGlHQUFtRjtJQUNyRixpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBUE4sZUFBa0I7SUFBbEIsMENBQWtCO0lBSVUsZUFBVTtJQUFWLHdDQUFVOzs7SUFTekMscUNBQWtFO0lBQUEsWUFBWTtJQUFBLGlCQUFhOzs7SUFBNUMsb0NBQWtCO0lBQUMsZUFBWTtJQUFaLGtDQUFZOzs7SUFKcEYsNkJBQXFDO0lBQ25DLHVCQUFhO0lBQUEsa0JBQ2I7SUFBQSxzQ0FBZ0I7SUFDZCxzQ0FBdUM7SUFDckMsaUdBQTJGO0lBQzdGLGlCQUFhO0lBQ2YsaUJBQWlCO0lBQ25CLDBCQUFlOzs7SUFId0IsZUFBWTtJQUFaLDBDQUFZOztBRHZCckQsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXO0lBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsTUFBTSxDQUFDLENBQUM7S0FDVDtBQUNILENBQUM7QUFPRCxNQUFNLE9BQU8sbUJBQW1CO0lBZ0I5QixZQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQWIzQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRTVCLFlBQU8sR0FBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzdCLGNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQU1jLENBQUM7SUFKL0MsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7O3lHQWRVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLHdOQUZuQixFQUFFOzs7OztpQkNoQk8sVUFBQSx1RUFBTzs7Ozs7O2lCQVNQLFVBQUEsMEVBQVM7Ozs7OztpQkFVVCxVQUFBLDBFQUFTOztRQXZCL0IsK0JBQW1DO1FBRWpDLHNGQU9lO1FBQ2Ysc0ZBUWU7UUFFZixzRkFRZTtRQUVmLHNGQU9lO1FBQ2pCLGlCQUFPOztRQXRDRCw4Q0FBNEI7UUFFakIsZUFBZ0I7UUFBaEIscUNBQWdCO1FBUWhCLGVBQWtCO1FBQWxCLHVDQUFrQjtRQVVsQixlQUFrQjtRQUFsQix1Q0FBa0I7UUFVbEIsZUFBb0I7UUFBcEIseUNBQW9COzt1RkRSeEIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsRUFBRTthQUNkO21FQUdpQixRQUFRO2tCQUF2QixLQUFLO1lBQ1UsYUFBYTtrQkFBNUIsS0FBSztZQUNVLFNBQVM7a0JBQXhCLEtBQUs7WUFDVSxXQUFXO2tCQUExQixLQUFLO1lBQ1UsV0FBVztrQkFBMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZVBpY2tlck1vZGVsIHtcclxuICBkYXlzOiBudW1iZXI7XHJcbiAgaG91cnM6IG51bWJlcjtcclxuICBtaW51dGVzOiBudW1iZXI7XHJcbiAgc2Vjb25kczogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcclxuICAgIHlpZWxkIGk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nyb24tdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLXRpbWUtcGlja2VyLnRlbXBsYXRlLmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ7XHJcbiAgQElucHV0KCkgcHVibGljIHVzZTI0SG91clRpbWUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlSG91cnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgaGlkZU1pbnV0ZXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgaGlkZVNlY29uZHMgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgbWludXRlcyA9ICBbLi4ucmFuZ2UoMCwgNTkpIF07XHJcbiAgcHVibGljIHNlY29uZHMgPSBbLi4ucmFuZ2UoMCwgNTkpIF07XHJcbiAgcHVibGljIGhvdXJUeXBlcyA9IFsnQU0nLCAnUE0nXTtcclxuXHJcbiAgZ2V0IGhvdXJzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLnVzZTI0SG91clRpbWUgPyBbLi4uIHJhbmdlKDAsIDIzKV0gOiBbLi4uIHJhbmdlKDAsIDEyKV07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFyZW50OiBDb250cm9sQ29udGFpbmVyKSB7fVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuIiwiPHNwYW4gW2Zvcm1Hcm91cF09XCJwYXJlbnQuY29udHJvbFwiPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZGVIb3Vyc1wiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LWxhYmVsIGkxOG4+SG91cihzKTwvbWF0LWxhYmVsPlxyXG4gICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJob3Vyc1wiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzXCIgW3ZhbHVlXT1cImhvdXJcIj57e2hvdXJ9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZGVNaW51dGVzXCI+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFoaWRlSG91cnNcIj46PC9zcGFuPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LWxhYmVsIGkxOG4+TWludXRlKHMpPC9tYXQtbGFiZWw+XHJcbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cIm1pbnV0ZXNcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbWludXRlIG9mIG1pbnV0ZXNcIiBbdmFsdWVdPVwibWludXRlXCI+e3ttaW51dGV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRlU2Vjb25kc1wiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaGlkZU1pbnV0ZXNcIj46PC9zcGFuPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LWxhYmVsIGkxOG4+U2Vjb25kKHMpPC9tYXQtbGFiZWw+XHJcbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZHNcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2Vjb25kIG9mIHNlY29uZHNcIiBbdmFsdWVdPVwic2Vjb25kXCI+e3tzZWNvbmR9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF1c2UyNEhvdXJUaW1lXCI+XHJcbiAgICA8c3Bhbj48L3NwYW4+LlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJob3VyVHlwZVwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBob3VyVHlwZSBvZiBob3VyVHlwZXNcIiBbdmFsdWVdPVwiaG91clR5cGVcIj57e2hvdXJUeXBlfX08L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvc3Bhbj5cclxuIl19