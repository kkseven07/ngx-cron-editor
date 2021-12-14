import * as i0 from '@angular/core';
import { Component, Input, forwardRef, EventEmitter, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3$1 from '@angular/material/form-field';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import * as i4 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5 from '@angular/material/core';
import * as i2 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import * as i5$1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i9 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i10 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

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
class TimePickerComponent {
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
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgIf, i3$1.MatFormField, i3$1.MatLabel, i4.MatSelect, i1.NgControlStatus, i1.FormControlName, i3.NgForOf, i5.MatOption], encapsulation: 2 });
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

const Days = {
    'SUN': 'Sunday',
    'MON': 'Monday',
    'TUE': 'Tuesday',
    'WED': 'Wednesday',
    'THU': 'Thursday',
    'FRI': 'Friday',
    'SAT': 'Saturday'
};
const MonthWeeks = {
    '#1': 'First',
    '#2': 'Second',
    '#3': 'Third',
    '#4': 'Fourth',
    '#5': 'Fifth',
    'L': 'Last'
};
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["June"] = 6] = "June";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
;

function CronGenComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵi18n(3, 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "cron-time-picker", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", ctx_r0.options.use24HourTime)("hideHours", true)("hideSeconds", ctx_r0.options.hideSeconds || !ctx_r0.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 14);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵi18n(3, 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "cron-time-picker", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options.use24HourTime)("hideSeconds", ctx_r1.options.hideSeconds || !ctx_r1.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDay_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", monthDay_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", monthDay_r8, " ");
} }
function CronGenComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "mat-radio-group", 19);
    i0.ɵɵelementStart(3, "mat-radio-button", 20);
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵi18n(5, 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-form-field", 22);
    i0.ɵɵelementStart(7, "mat-label");
    i0.ɵɵi18n(8, 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-select", 24);
    i0.ɵɵtemplate(10, CronGenComponent_mat_tab_4_mat_option_10_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(11);
    i0.ɵɵi18n(12, 26);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelement(13, "cron-time-picker", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-radio-button", 28);
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵi18n(16, 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "cron-time-picker", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r2.dailyForm);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r2.selectOptions.monthDays);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 32);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 33);
    i0.ɵɵelementStart(5, "mat-checkbox", 34);
    i0.ɵɵi18n(6, 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-checkbox", 36);
    i0.ɵɵi18n(8, 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-checkbox", 38);
    i0.ɵɵi18n(10, 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-checkbox", 40);
    i0.ɵɵi18n(12, 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-checkbox", 42);
    i0.ɵɵi18n(14, 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-checkbox", 44);
    i0.ɵɵi18n(16, 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-checkbox", 46);
    i0.ɵɵi18n(18, 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 11);
    i0.ɵɵi18n(20, 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "cron-time-picker", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r3.weeklyForm);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("formGroup", ctx_r3.weeklyForm)("use24HourTime", ctx_r3.options.use24HourTime)("hideSeconds", ctx_r3.options.hideSeconds || !ctx_r3.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_6_ng_container_7_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithLast_r15 = ctx.$implicit;
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithLast_r15);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.monthDayDisplay(monthDaysWithLast_r15), " ");
} }
function CronGenComponent_mat_tab_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵi18n(3, 68);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 69);
    i0.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_7_option_5_Template, 2, 2, "option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r9.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_6_ng_container_8_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r18 = ctx.$implicit;
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithOutLast_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r16.monthDayDisplay(monthDaysWithOutLast_r18), " ");
} }
function CronGenComponent_mat_tab_6_ng_container_8_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", month_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r19, " ");
} }
function CronGenComponent_mat_tab_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵi18n(3, 70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 69);
    i0.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_8_mat_option_5_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(6);
    i0.ɵɵi18n(7, 71);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(8, "mat-form-field");
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵi18n(10, 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 73);
    i0.ɵɵtemplate(12, CronGenComponent_mat_tab_6_ng_container_8_mat_option_12_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r10.selectOptions.monthDaysWithOutLasts);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", ctx_r10.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.selectOptions.months);
} }
function CronGenComponent_mat_tab_6_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r20 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r20);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.monthWeekDisplay(monthWeek_r20), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r21 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.dayDisplay(day_r21), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", month_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r22, " ");
} }
function CronGenComponent_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 49);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "mat-radio-group", 50);
    i0.ɵɵelementStart(3, "mat-radio-button", 51);
    i0.ɵɵelementStart(4, "span", 52);
    i0.ɵɵelementContainerStart(5);
    i0.ɵɵi18n(6, 53);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(7, CronGenComponent_mat_tab_6_ng_container_7_Template, 6, 1, "ng-container", 54);
    i0.ɵɵtemplate(8, CronGenComponent_mat_tab_6_ng_container_8_Template, 13, 3, "ng-container", 54);
    i0.ɵɵelementContainerStart(9);
    i0.ɵɵi18n(10, 55);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelement(11, "cron-time-picker", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-radio-button", 57);
    i0.ɵɵelementStart(13, "span", 58);
    i0.ɵɵelementContainerStart(14);
    i0.ɵɵi18n(15, 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(16, "mat-form-field");
    i0.ɵɵelementStart(17, "mat-label");
    i0.ɵɵi18n(18, 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "mat-select", 61);
    i0.ɵɵtemplate(20, CronGenComponent_mat_tab_6_mat_option_20_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "mat-form-field");
    i0.ɵɵelementStart(22, "mat-label");
    i0.ɵɵi18n(23, 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-select", 63);
    i0.ɵɵtemplate(25, CronGenComponent_mat_tab_6_mat_option_25_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(26);
    i0.ɵɵi18n(27, 64);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(28, "mat-form-field");
    i0.ɵɵelementStart(29, "mat-label");
    i0.ɵɵi18n(30, 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "mat-select", 66);
    i0.ɵɵtemplate(32, CronGenComponent_mat_tab_6_mat_option_32_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(33);
    i0.ɵɵi18n(34, 67);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelement(35, "cron-time-picker", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "quartz");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "standard");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r4.disabled)("formGroup", ctx_r4.monthlyForm.controls.specificDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.monthWeeks);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.days);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificWeekDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithLast_r30 = ctx.$implicit;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithLast_r30);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r29.monthDayDisplay(monthDaysWithLast_r30), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 79);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵi18n(2, 93);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 69);
    i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r23.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r32 = ctx.$implicit;
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithOutLast_r32);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r31.monthDayDisplay(monthDaysWithOutLast_r32), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 79);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵi18n(2, 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 69);
    i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r24.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_7_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r33 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r33);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.monthDisplay(month_r33), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r34 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.monthWeekDisplay(monthWeek_r34), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r35 = ctx.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r35);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.dayDisplay(day_r35), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r36 = ctx.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r36);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r36), " ");
} }
function CronGenComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 74);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "mat-radio-group", 50);
    i0.ɵɵelementStart(3, "mat-radio-button", 75);
    i0.ɵɵelementContainerStart(4);
    i0.ɵɵi18n(5, 76);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(6, CronGenComponent_mat_tab_7_mat_form_field_6_Template, 5, 1, "mat-form-field", 77);
    i0.ɵɵtemplate(7, CronGenComponent_mat_tab_7_mat_form_field_7_Template, 5, 1, "mat-form-field", 77);
    i0.ɵɵelementContainerStart(8);
    i0.ɵɵi18n(9, 78);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(10, "mat-form-field", 79);
    i0.ɵɵelementStart(11, "mat-label");
    i0.ɵɵi18n(12, 80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-select", 81);
    i0.ɵɵtemplate(14, CronGenComponent_mat_tab_7_mat_option_14_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(15);
    i0.ɵɵi18n(16, 82);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelement(17, "cron-time-picker", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "mat-radio-button", 83);
    i0.ɵɵelementContainerStart(19);
    i0.ɵɵi18n(20, 84);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(21, "mat-form-field", 85);
    i0.ɵɵelementStart(22, "mat-label");
    i0.ɵɵi18n(23, 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-select", 87);
    i0.ɵɵtemplate(25, CronGenComponent_mat_tab_7_mat_option_25_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "mat-form-field", 85);
    i0.ɵɵelementStart(27, "mat-label");
    i0.ɵɵi18n(28, 88);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "mat-select", 89);
    i0.ɵɵtemplate(30, CronGenComponent_mat_tab_7_mat_option_30_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(31);
    i0.ɵɵi18n(32, 90);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(33, "mat-form-field", 85);
    i0.ɵɵelementStart(34, "mat-label");
    i0.ɵɵi18n(35, 91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "mat-select", 81);
    i0.ɵɵtemplate(37, CronGenComponent_mat_tab_7_mat_option_37_Template, 2, 2, "mat-option", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(38);
    i0.ɵɵi18n(39, 92);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelement(40, "cron-time-picker", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r5.yearlyForm);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "quartz");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "standard");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r5.state.formRadioClass);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.monthWeeks);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.days);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthWeek)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 95);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵi18n(4, 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r6.advancedForm);
} }
const CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // eslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef(() => CronGenComponent),
    multi: true,
};
class CronGenComponent {
    constructor(fb) {
        this.fb = fb;
        this.cronChange = new EventEmitter();
        this.selectOptions = this.getSelectOptions();
        this.localCron = '0 0 1/1 * *';
        this.tabs = [];
        /*
         * ControlValueAccessor
         */
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
    }
    get isCronFlavorQuartz() {
        return this.options.cronFlavor === 'quartz';
    }
    get isCronFlavorStandard() {
        return this.options.cronFlavor === 'standard';
    }
    get yearDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '*' : '';
    }
    get weekDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    get monthDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    /* Update the cron output to that of the selected tab.
     * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
     * the value of the form that goes into focus. */
    onTabFocus(idx) {
        const index = this.tabs[idx];
        switch (index) {
            case 'minutes':
                this.minutesForm.setValue(this.minutesForm.value);
                break;
            case 'hourly':
                this.hourlyForm.setValue(this.hourlyForm.value);
                break;
            case 'daily':
                this.dailyForm.setValue(this.dailyForm.value);
                break;
            case 'weekly':
                this.weeklyForm.setValue(this.weeklyForm.value);
                break;
            case 'monthly':
                this.monthlyForm.setValue(this.monthlyForm.value);
                break;
            case 'yearly':
                this.yearlyForm.setValue(this.yearlyForm.value);
                break;
            case 'advanced':
                this.advancedForm.setValue(this.advancedForm.value);
                break;
            default:
                throw (new Error('Invalid tab selected'));
        }
    }
    ngOnInit() {
        this.buildTabIndex();
        this.state = this.getDefaultState();
        this.handleModelChange(this.cron);
        const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
        this.cronForm = new FormControl(this.cron);
        this.minutesForm = this.fb.group({
            hours: [0],
            minutes: [1],
            seconds: [0]
        });
        this.minutesForm.valueChanges.subscribe(value => this.computeMinutesCron(value));
        this.hourlyForm = this.fb.group({
            hours: [1],
            minutes: [0],
            seconds: [0]
        });
        this.hourlyForm.valueChanges.subscribe(value => this.computeHourlyCron(value));
        this.dailyForm = this.fb.group({
            subTab: ['everyDays'],
            everyDays: this.fb.group({
                days: [1],
                hours: [this.getAmPmHour(1)],
                minutes: [0],
                seconds: [0],
                hourType: [this.getHourType(0)]
            }),
            everyWeekDay: this.fb.group({
                days: [0],
                hours: [this.getAmPmHour(1)],
                minutes: [0],
                seconds: [0],
                hourType: [this.getHourType(0)]
            })
        });
        this.dailyForm.valueChanges.subscribe(value => this.computeDailyCron(value));
        this.weeklyForm = this.fb.group({
            MON: [true],
            TUE: [false],
            WED: [false],
            THU: [false],
            FRI: [false],
            SAT: [false],
            SUN: [false],
            hours: [this.getAmPmHour(defaultHours)],
            minutes: [defaultMinutes],
            seconds: [defaultSeconds],
            hourType: [this.getHourType(defaultHours)]
        });
        this.weeklyForm.valueChanges.subscribe(next => this.computeWeeklyCron(next));
        this.monthlyForm = this.fb.group({
            subTab: ['specificDay'],
            specificDay: this.fb.group({
                day: ['1'],
                months: [1],
                hours: [this.getAmPmHour(defaultHours)],
                minutes: [defaultMinutes],
                seconds: [defaultSeconds],
                hourType: [this.getHourType(defaultHours)]
            }),
            specificWeekDay: this.fb.group({
                monthWeek: ['#1'],
                day: ['MON'],
                months: [1],
                hours: [this.getAmPmHour(defaultHours)],
                minutes: [defaultMinutes],
                seconds: [defaultSeconds],
                hourType: [this.getHourType(defaultHours)]
            })
        });
        this.monthlyForm.valueChanges.subscribe(next => this.computeMonthlyCron(next));
        this.yearlyForm = this.fb.group({
            subTab: ['specificMonthDay'],
            specificMonthDay: this.fb.group({
                month: [1],
                day: ['1'],
                hours: [this.getAmPmHour(defaultHours)],
                minutes: [defaultMinutes],
                seconds: [defaultSeconds],
                hourType: [this.getHourType(defaultHours)]
            }),
            specificMonthWeek: this.fb.group({
                monthWeek: ['#1'],
                day: ['MON'],
                month: [1],
                hours: [this.getAmPmHour(defaultHours)],
                minutes: [defaultMinutes],
                seconds: [defaultSeconds],
                hourType: [this.getHourType(defaultHours)]
            })
        });
        this.yearlyForm.valueChanges.subscribe(next => this.computeYearlyCron(next));
        this.advancedForm = this.fb.group({
            expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
        });
        this.advancedForm.controls.expression.valueChanges.subscribe(next => this.computeAdvancedExpression(next));
    }
    computeMinutesCron(state) {
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} 0/${state.minutes} * 1/1 * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
        this.onChange(this.cron);
    }
    computeHourlyCron(state) {
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} ${state.minutes} 0/${state.hours} 1/1 * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
        this.onChange(this.cron);
    }
    computeDailyCron(state) {
        switch (state.subTab) {
            case 'everyDays':
                this.cron = `${this.isCronFlavorQuartz ? state.everyDays.seconds : ''} ${state.everyDays.minutes} ${this.hourToCron(state.everyDays.hours, state.everyDays.hourType)} 1/${state.everyDays.days} * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'everyWeekDay':
                this.cron = `${this.isCronFlavorQuartz ? state.everyWeekDay.seconds : ''} ${state.everyWeekDay.minutes} ${this.hourToCron(state.everyWeekDay.hours, state.everyWeekDay.hourType)} ${this.monthDayDefaultChar} * MON-FRI ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron daily subtab selection');
        }
        this.cronForm.setValue(this.cron);
        this.onChange(this.cron);
    }
    computeWeeklyCron(state) {
        const days = this.selectOptions.days
            .reduce((acc, day) => state[day] ? acc.concat([day]) : acc, [])
            .join(',');
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} ${state.minutes} ${this.hourToCron(state.hours, state.hourType)} ${this.monthDayDefaultChar} * ${days} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
        this.onChange(this.cron);
    }
    computeMonthlyCron(state) {
        switch (state.subTab) {
            case 'specificDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificDay.seconds : ''} ${state.specificDay.minutes} ${this.hourToCron(state.specificDay.hours, state.specificDay.hourType)} ${state.specificDay.day} 1/${state.specificDay.months} ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'specificWeekDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificWeekDay.seconds : ''} ${state.specificWeekDay.minutes} ${this.hourToCron(state.specificWeekDay.hours, state.specificWeekDay.hourType)} ${this.monthDayDefaultChar} 1/${state.specificWeekDay.months} ${state.specificWeekDay.day}${state.specificWeekDay.monthWeek} ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron montly subtab selection');
        }
        this.cronForm.setValue(this.cron);
        this.onChange(this.cron);
    }
    computeYearlyCron(state) {
        switch (state.subTab) {
            case 'specificMonthDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificMonthDay.seconds : ''} ${state.specificMonthDay.minutes} ${this.hourToCron(state.specificMonthDay.hours, state.specificMonthDay.hourType)} ${state.specificMonthDay.day} ${state.specificMonthDay.month} ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'specificMonthWeek':
                this.cron = `${this.isCronFlavorQuartz ? state.specificMonthWeek.seconds : ''} ${state.specificMonthWeek.minutes} ${this.hourToCron(state.specificMonthWeek.hours, state.specificMonthWeek.hourType)} ${this.monthDayDefaultChar} ${state.specificMonthWeek.month} ${state.specificMonthWeek.day}${state.specificMonthWeek.monthWeek} ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron yearly subtab selection');
        }
        this.cronForm.setValue(this.cron);
        this.onChange(this.cron);
    }
    computeAdvancedExpression(expression) {
        this.cron = expression;
        this.cronForm.setValue(this.cron);
        this.onChange(this.cron);
    }
    dayDisplay(day) {
        return Days[day];
    }
    monthWeekDisplay(monthWeekNumber) {
        return MonthWeeks[monthWeekNumber];
    }
    monthDisplay(month) {
        return Months[month];
    }
    monthDayDisplay(month) {
        if (month === 'L') {
            return 'Last Day';
        }
        else if (month === 'LW') {
            return 'Last Weekday';
        }
        else if (month === '1W') {
            return 'First Weekday';
        }
        else {
            return `${month}${this.getOrdinalSuffix(month)}`;
        }
    }
    getAmPmHour(hour) {
        return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
    }
    getHourType(hour) {
        return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
    }
    hourToCron(hour, hourType) {
        if (this.options.use24HourTime) {
            return hour;
        }
        else {
            return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
        }
    }
    handleModelChange(cron) {
        this.cron = cron;
        if (!this.cronIsValid(cron)) {
            // if (this.isCronFlavorQuartz) {
            //   throw new Error('Invalid cron expression, there must be 6 or 7 segments');
            // }
            // if (this.isCronFlavorStandard) {
            //   throw new Error('Invalid cron expression, there must be 5 segments');
            // }
            return;
        }
        const origCron = cron;
        if (cron.split(' ').length === 5 && this.isCronFlavorStandard) {
            cron = `0 ${cron} *`;
        }
        const [seconds, minutes, hours, dayOfMonth, month, dayOfWeek] = cron.split(' ');
        if (cron.match(/\d+ 0\/\d+ \* 1\/1 \* [\?\*] \*/)) {
            this.activeTab = 'minutes';
            this.selectedIndex = 0;
            this.state.minutes.minutes = parseInt(minutes.substring(2), 10);
            this.state.minutes.seconds = parseInt(seconds, 10);
            this.minutesForm.patchValue({
                hours: 0,
                minutes: this.state.minutes.minutes,
                seconds: this.state.minutes.seconds
            });
        }
        else if (cron.match(/\d+ \d+ 0\/\d+ 1\/1 \* [\?\*] \*/)) {
            this.activeTab = 'hourly';
            this.selectedIndex = this.calculateActiveTab('hourly'); // 1;
            this.state.hourly.hours = parseInt(hours.substring(2), 10);
            this.state.hourly.minutes = parseInt(minutes, 10);
            this.state.hourly.seconds = parseInt(seconds, 10);
            this.hourlyForm.patchValue({
                hours: this.state.hourly.hours,
                minutes: this.state.hourly.minutes,
                seconds: this.state.hourly.seconds
            });
        }
        else if (cron.match(/\d+ \d+ \d+ 1\/\d+ \* [\?\*] \*/)) {
            this.activeTab = 'daily';
            this.selectedIndex = this.calculateActiveTab('daily'); // 2;
            this.state.daily.subTab = 'everyDays';
            this.state.daily.everyDays.days = parseInt(dayOfMonth.substring(2), 10);
            const parsedHours = parseInt(hours, 10);
            this.state.daily.everyDays.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyDays.hourType = this.getHourType(parsedHours);
            this.state.daily.everyDays.minutes = parseInt(minutes, 10);
            this.state.daily.everyDays.seconds = parseInt(seconds, 10);
            this.dailyForm.patchValue({
                subTab: this.state.daily.subTab,
                everyDays: {
                    days: this.state.daily.everyDays.days,
                    hours: this.state.daily.everyDays.hours,
                    minutes: this.state.daily.everyDays.minutes,
                    seconds: this.state.daily.everyDays.seconds,
                    hourType: this.state.daily.everyDays.hourType
                }
            });
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \* MON-FRI \*/)) {
            this.activeTab = 'daily';
            this.selectedIndex = this.calculateActiveTab('daily'); // 2;
            this.state.daily.subTab = 'everyWeekDay';
            const parsedHours = parseInt(hours, 10);
            this.state.daily.everyWeekDay.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyWeekDay.hourType = this.getHourType(parsedHours);
            this.state.daily.everyWeekDay.minutes = parseInt(minutes, 10);
            this.state.daily.everyWeekDay.seconds = parseInt(seconds, 10);
            this.dailyForm.patchValue({
                subTab: this.state.daily.subTab,
                everyWeekDay: {
                    // days: [0],
                    hours: this.state.daily.everyWeekDay.hours,
                    minutes: this.state.daily.everyWeekDay.minutes,
                    seconds: this.state.daily.everyWeekDay.seconds,
                    hourType: this.state.daily.everyWeekDay.hourType
                }
            });
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \* (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))* \*/)) {
            this.activeTab = 'weekly';
            this.selectedIndex = this.calculateActiveTab('weekly'); // 3;
            this.selectOptions.days.forEach(weekDay => this.state.weekly[weekDay] = false);
            dayOfWeek.split(',').forEach(weekDay => this.state.weekly[weekDay] = true);
            const parsedHours = parseInt(hours, 10);
            this.state.weekly.hours = this.getAmPmHour(parsedHours);
            this.state.weekly.hourType = this.getHourType(parsedHours);
            this.state.weekly.minutes = parseInt(minutes, 10);
            this.state.weekly.seconds = parseInt(seconds, 10);
            this.weeklyForm.patchValue({
                MON: this.state.weekly['MON'],
                TUE: this.state.weekly['TUE'],
                WED: this.state.weekly['WED'],
                THU: this.state.weekly['THU'],
                FRI: this.state.weekly['FRI'],
                SAT: this.state.weekly['SAT'],
                SUN: this.state.weekly['SUN'],
                hours: this.state.weekly.hours,
                minutes: this.state.weekly.minutes,
                seconds: this.state.weekly.seconds,
                // hourType: this.state.weekly.hourType
            });
        }
        else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) 1\/\d+ [\?\*] \*/)) {
            this.activeTab = 'monthly';
            this.selectedIndex = this.calculateActiveTab('monthly'); // 4;
            this.state.monthly.subTab = 'specificDay';
            this.state.monthly.specificDay.day = dayOfMonth;
            this.state.monthly.specificDay.months = parseInt(month.substring(2), 10);
            const parsedHours = parseInt(hours, 10);
            this.state.monthly.specificDay.hours = this.getAmPmHour(parsedHours);
            this.state.monthly.specificDay.hourType = this.getHourType(parsedHours);
            this.state.monthly.specificDay.minutes = parseInt(minutes, 10);
            this.state.monthly.specificDay.seconds = parseInt(seconds, 10);
            this.monthlyForm.patchValue({
                subTab: 'specificDay',
                specificDay: {
                    day: dayOfMonth,
                    months: this.state.monthly.specificDay.months,
                    hours: this.state.monthly.specificDay.hours,
                    minutes: this.state.monthly.specificDay.minutes,
                    seconds: this.state.monthly.specificDay.seconds,
                    hourType: this.state.monthly.specificDay.hourType
                }
            });
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            const day = dayOfWeek.substr(0, 3);
            const monthWeek = dayOfWeek.substr(3);
            this.activeTab = 'monthly';
            this.selectedIndex = this.calculateActiveTab('monthly'); // 4;
            this.state.monthly.subTab = 'specificWeekDay';
            this.state.monthly.specificWeekDay.monthWeek = monthWeek;
            this.state.monthly.specificWeekDay.day = day;
            this.state.monthly.specificWeekDay.months = parseInt(month.substring(2), 10);
            const parsedHours = parseInt(hours, 10);
            this.state.monthly.specificWeekDay.hours = this.getAmPmHour(parsedHours);
            this.state.monthly.specificWeekDay.hourType = this.getHourType(parsedHours);
            this.state.monthly.specificWeekDay.minutes = parseInt(minutes, 10);
            this.state.monthly.specificWeekDay.seconds = parseInt(seconds, 10);
            this.monthlyForm.patchValue({
                subTab: 'specificWeekDay',
                specificWeekDay: {
                    monthWeek: monthWeek,
                    day: day,
                    months: this.state.monthly.specificWeekDay.months,
                    hours: this.state.monthly.specificWeekDay.hours,
                    minutes: this.state.monthly.specificWeekDay.minutes,
                    seconds: this.state.monthly.specificWeekDay.seconds,
                    hourType: this.state.monthly.specificWeekDay.hourType
                }
            });
        }
        else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) \d+ [\?\*] \*/)) {
            this.activeTab = 'yearly';
            this.selectedIndex = this.calculateActiveTab('yearly'); // 5;
            this.state.yearly.subTab = 'specificMonthDay';
            this.state.yearly.specificMonthDay.month = parseInt(month, 10);
            this.state.yearly.specificMonthDay.day = dayOfMonth;
            const parsedHours = parseInt(hours, 10);
            this.state.yearly.specificMonthDay.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthDay.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthDay.minutes = parseInt(minutes, 10);
            this.state.yearly.specificMonthDay.seconds = parseInt(seconds, 10);
            this.yearlyForm.patchValue({
                subTab: ['specificMonthDay'],
                specificMonthDay: {
                    month: this.state.yearly.specificMonthDay.month,
                    day: this.state.yearly.specificMonthDay.day,
                    hours: this.state.yearly.specificMonthDay.hours,
                    minutes: this.state.yearly.specificMonthDay.minutes,
                    seconds: this.state.yearly.specificMonthDay.seconds,
                    hourType: this.state.yearly.specificMonthDay.hourType
                }
            });
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            const day = dayOfWeek.substr(0, 3);
            const monthWeek = dayOfWeek.substr(3);
            this.activeTab = 'yearly';
            this.selectedIndex = this.calculateActiveTab('yearly');
            this.state.yearly.subTab = 'specificMonthWeek';
            this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
            this.state.yearly.specificMonthWeek.day = day;
            this.state.yearly.specificMonthWeek.month = parseInt(month, 10);
            const parsedHours = parseInt(hours, 10);
            this.state.yearly.specificMonthWeek.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthWeek.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthWeek.minutes = parseInt(minutes, 10);
            this.state.yearly.specificMonthWeek.seconds = parseInt(seconds, 10);
            this.yearlyForm.patchValue({
                specificMonthWeek: {
                    monthWeek: ['#1'],
                    day: ['MON'],
                    month: [1],
                    hours: this.state.yearly.specificMonthWeek.hours,
                    minutes: this.state.yearly.specificMonthWeek.minutes,
                    seconds: this.state.yearly.specificMonthWeek.seconds,
                    hourType: this.state.yearly.specificMonthWeek.hourType
                }
            });
        }
        else {
            this.activeTab = 'advanced';
            this.selectedIndex = this.calculateActiveTab('advanced'); // 6;
            this.state.advanced.expression = origCron;
            this.advancedForm.patchValue({
                expression: [origCron]
            });
        }
        // this._cd.markForCheck();
    }
    cronIsValid(cron) {
        if (cron) {
            const cronParts = cron.split(' ');
            return (this.isCronFlavorQuartz && (cronParts.length === 6
                || cronParts.length === 7)
                || (this.isCronFlavorStandard && cronParts.length === 5));
        }
        return false;
    }
    getDefaultState() {
        const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
        return {
            minutes: {
                minutes: 1,
                seconds: 0
            },
            hourly: {
                hours: 1,
                minutes: 0,
                seconds: 0
            },
            daily: {
                subTab: 'everyDays',
                everyDays: {
                    days: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                everyWeekDay: {
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            weekly: {
                MON: true,
                TUE: false,
                WED: false,
                THU: false,
                FRI: false,
                SAT: false,
                SUN: false,
                hours: this.getAmPmHour(defaultHours),
                minutes: defaultMinutes,
                seconds: defaultSeconds,
                hourType: this.getHourType(defaultHours)
            },
            monthly: {
                subTab: 'specificDay',
                specificDay: {
                    day: '1',
                    months: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                specificWeekDay: {
                    monthWeek: '#1',
                    day: 'MON',
                    months: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            yearly: {
                subTab: 'specificMonthDay',
                specificMonthDay: {
                    month: 1,
                    day: '1',
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                specificMonthWeek: {
                    monthWeek: '#1',
                    day: 'MON',
                    month: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            advanced: {
                expression: this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *'
            }
        };
    }
    getOrdinalSuffix(value) {
        if (value.length > 1) {
            const secondToLastDigit = value.charAt(value.length - 2);
            if (secondToLastDigit === '1') {
                return 'th';
            }
        }
        const lastDigit = value.charAt(value.length - 1);
        switch (lastDigit) {
            case '1':
                return 'st';
            case '2':
                return 'nd';
            case '3':
                return 'rd';
            default:
                return 'th';
        }
    }
    getSelectOptions() {
        return {
            months: this.getRange(1, 12),
            monthWeeks: ['#1', '#2', '#3', '#4', '#5', 'L'],
            days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            minutes: this.getRange(0, 59),
            fullMinutes: this.getRange(0, 59),
            seconds: this.getRange(0, 59),
            hours: this.getRange(1, 23),
            monthDays: this.getRange(1, 31),
            monthDaysWithLasts: ['1W', ...[...this.getRange(1, 31).map(String)], 'LW', 'L'],
            monthDaysWithOutLasts: [...[...this.getRange(1, 31).map(String)]],
            hourTypes: ['AM', 'PM']
        };
    }
    getRange(start, end) {
        const length = end - start + 1;
        return Array.apply(null, Array(length)).map((_, i) => i + start);
    }
    calculateActiveTab(requestedTab) {
        const lastIndex = this.tabs.length - 1;
        switch (requestedTab) {
            case 'minutes':
                return this.options.hideMinutesTab ? lastIndex : this.tabs.indexOf('minutes');
            case 'hourly':
                return this.options.hideHourlyTab ? lastIndex : this.tabs.indexOf('hourly');
            case 'daily':
                return this.options.hideDailyTab ? lastIndex : this.tabs.indexOf('daily');
            case 'weekly':
                return this.options.hideWeeklyTab ? lastIndex : this.tabs.indexOf('weekly');
            case 'monthly':
                return this.options.hideMonthlyTab ? lastIndex : this.tabs.indexOf('monthly');
            case 'yearly':
                return this.options.hideYearlyTab ? lastIndex : this.tabs.indexOf('yearly');
            case 'advanced':
                return this.options.hideAdvancedTab ? lastIndex : this.tabs.indexOf('advanced');
        }
    }
    buildTabIndex() {
        if (!this.options.hideMinutesTab) {
            this.tabs.push('minutes');
        }
        if (!this.options.hideHourlyTab) {
            this.tabs.push('hourly');
        }
        if (!this.options.hideDailyTab) {
            this.tabs.push('daily');
        }
        if (!this.options.hideWeeklyTab) {
            this.tabs.push('weekly');
        }
        if (!this.options.hideMonthlyTab) {
            this.tabs.push('monthly');
        }
        if (!this.options.hideYearlyTab) {
            this.tabs.push('yearly');
        }
        if (!this.options.hideAdvancedTab) {
            this.tabs.push('advanced');
        }
    }
    writeValue(obj) {
        this.handleModelChange(obj);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
/** @nocollapse */ CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ CronGenComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, outputs: { cronChange: "cronChange" }, features: [i0.ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 10, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__1 = goog.getMsg("Every ");
        i18n_0 = MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:␟be2e3eba8f8d675c0dfd9d573ce6f9da7d394537␟3104448548270741911:Every `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__3 = goog.getMsg("Every ");
        i18n_2 = MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟be2e3eba8f8d675c0dfd9d573ce6f9da7d394537␟3104448548270741911:Every `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__5 = goog.getMsg("Every ");
        i18n_4 = MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟be2e3eba8f8d675c0dfd9d573ce6f9da7d394537␟3104448548270741911:Every `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6877003697022351372$$SRC_CRON_EDITOR_COMPONENT_TS__7 = goog.getMsg("Day(s)");
        i18n_6 = MSG_EXTERNAL_6877003697022351372$$SRC_CRON_EDITOR_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟6a4a2e0f73188c38fa9907d7e3981269d29faaa4␟6877003697022351372:Day(s)`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5338673541028692262$$SRC_CRON_EDITOR_COMPONENT_TS__9 = goog.getMsg("at");
        i18n_8 = MSG_EXTERNAL_5338673541028692262$$SRC_CRON_EDITOR_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟922f626fd7ebb7ceb33f1a9e144d54ab6443e1a6␟5338673541028692262:at`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2309185182590606015$$SRC_CRON_EDITOR_COMPONENT_TS__11 = goog.getMsg("Week Day (MON-FRI) at ");
        i18n_10 = MSG_EXTERNAL_2309185182590606015$$SRC_CRON_EDITOR_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟f59532f6d1d98d6162adb971dd7ff18a17d8d778␟2309185182590606015:Week Day (MON-FRI) at `;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8739442281958563044$$SRC_CRON_EDITOR_COMPONENT_TS__13 = goog.getMsg("Monday");
        i18n_12 = MSG_EXTERNAL_8739442281958563044$$SRC_CRON_EDITOR_COMPONENT_TS__13;
    }
    else {
        i18n_12 = $localize `:␟a43c57a7cbebf57eb33a2eae5e994c91d9887596␟8739442281958563044:Monday`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9176037901730521018$$SRC_CRON_EDITOR_COMPONENT_TS__15 = goog.getMsg("Tuesday");
        i18n_14 = MSG_EXTERNAL_9176037901730521018$$SRC_CRON_EDITOR_COMPONENT_TS__15;
    }
    else {
        i18n_14 = $localize `:␟48a2a35957ce394eb2c59ae35c99642360af70ee␟9176037901730521018:Tuesday`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8798932904948432529$$SRC_CRON_EDITOR_COMPONENT_TS__17 = goog.getMsg("Wednesday");
        i18n_16 = MSG_EXTERNAL_8798932904948432529$$SRC_CRON_EDITOR_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `:␟b0af441f9ba8b82952b9ec10fb8c62e8fec67df9␟8798932904948432529:Wednesday`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1433683192825895947$$SRC_CRON_EDITOR_COMPONENT_TS__19 = goog.getMsg("Thursday");
        i18n_18 = MSG_EXTERNAL_1433683192825895947$$SRC_CRON_EDITOR_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `:␟55c583b99c809818ec27df065ccf05357a6ac10b␟1433683192825895947:Thursday`;
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3730139500618908668$$SRC_CRON_EDITOR_COMPONENT_TS__21 = goog.getMsg("Friday");
        i18n_20 = MSG_EXTERNAL_3730139500618908668$$SRC_CRON_EDITOR_COMPONENT_TS__21;
    }
    else {
        i18n_20 = $localize `:␟e91b54925dc5f490753f60f53ef6f8b4609e6215␟3730139500618908668:Friday`;
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1830554030016307335$$SRC_CRON_EDITOR_COMPONENT_TS__23 = goog.getMsg("Saturday");
        i18n_22 = MSG_EXTERNAL_1830554030016307335$$SRC_CRON_EDITOR_COMPONENT_TS__23;
    }
    else {
        i18n_22 = $localize `:␟c0d2dd391a3eca8e841a5d0e035cd268280eb68e␟1830554030016307335:Saturday`;
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6950140976689343775$$SRC_CRON_EDITOR_COMPONENT_TS__25 = goog.getMsg("Sunday");
        i18n_24 = MSG_EXTERNAL_6950140976689343775$$SRC_CRON_EDITOR_COMPONENT_TS__25;
    }
    else {
        i18n_24 = $localize `:␟8339364b054610983b7f2334bb807fff7613bddf␟6950140976689343775:Sunday`;
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4248249309886370504$$SRC_CRON_EDITOR_COMPONENT_TS__27 = goog.getMsg("at time ");
        i18n_26 = MSG_EXTERNAL_4248249309886370504$$SRC_CRON_EDITOR_COMPONENT_TS__27;
    }
    else {
        i18n_26 = $localize `:␟a474587a82060ac8362c3bfd12348b8571c4b2a0␟4248249309886370504:at time `;
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__29 = goog.getMsg("On the");
        i18n_28 = MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__29;
    }
    else {
        i18n_28 = $localize `:␟f2f580c540fa5b6d61509f67d565457bf75ffc42␟2539328935447835151:On the`;
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__31 = goog.getMsg("at time");
        i18n_30 = MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__31;
    }
    else {
        i18n_30 = $localize `:␟33062a762c37a87d10e1e9e23adaf6230a4a742b␟6408263129846813839:at time`;
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__33 = goog.getMsg("On the");
        i18n_32 = MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__33;
    }
    else {
        i18n_32 = $localize `:␟f2f580c540fa5b6d61509f67d565457bf75ffc42␟2539328935447835151:On the`;
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5141352019990967744$$SRC_CRON_EDITOR_COMPONENT_TS__35 = goog.getMsg("Week");
        i18n_34 = MSG_EXTERNAL_5141352019990967744$$SRC_CRON_EDITOR_COMPONENT_TS__35;
    }
    else {
        i18n_34 = $localize `:␟73339760fe932d2b494728d4366947755d127e00␟5141352019990967744:Week`;
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS__37 = goog.getMsg("Day");
        i18n_36 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS__37;
    }
    else {
        i18n_36 = $localize `:␟efffb64bda94fa4f4493322c5e3717e845d5dc30␟1286983255645370171:Day`;
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2829964193210082231$$SRC_CRON_EDITOR_COMPONENT_TS__39 = goog.getMsg("of every");
        i18n_38 = MSG_EXTERNAL_2829964193210082231$$SRC_CRON_EDITOR_COMPONENT_TS__39;
    }
    else {
        i18n_38 = $localize `:␟017bbb3b061959c594ac75abfebe91ce9432ca93␟2829964193210082231:of every`;
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__41 = goog.getMsg("Month");
        i18n_40 = MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__41;
    }
    else {
        i18n_40 = $localize `:␟5bb4a09a669f55893c9a37a8480c8fa3f7ce5702␟5403684285319082289:Month`;
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__43 = goog.getMsg("at time");
        i18n_42 = MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__43;
    }
    else {
        i18n_42 = $localize `:␟33062a762c37a87d10e1e9e23adaf6230a4a742b␟6408263129846813839:at time`;
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___45 = goog.getMsg("Day");
        i18n_44 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___45;
    }
    else {
        i18n_44 = $localize `:␟efffb64bda94fa4f4493322c5e3717e845d5dc30␟1286983255645370171:Day`;
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___47 = goog.getMsg("Day");
        i18n_46 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___47;
    }
    else {
        i18n_46 = $localize `:␟efffb64bda94fa4f4493322c5e3717e845d5dc30␟1286983255645370171:Day`;
    } let i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2829964193210082231$$SRC_CRON_EDITOR_COMPONENT_TS___49 = goog.getMsg("of every");
        i18n_48 = MSG_EXTERNAL_2829964193210082231$$SRC_CRON_EDITOR_COMPONENT_TS___49;
    }
    else {
        i18n_48 = $localize `:␟017bbb3b061959c594ac75abfebe91ce9432ca93␟2829964193210082231:of every`;
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS___51 = goog.getMsg("Month");
        i18n_50 = MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS___51;
    }
    else {
        i18n_50 = $localize `:␟5bb4a09a669f55893c9a37a8480c8fa3f7ce5702␟5403684285319082289:Month`;
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__53 = goog.getMsg("On the");
        i18n_52 = MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__53;
    }
    else {
        i18n_52 = $localize `:␟f2f580c540fa5b6d61509f67d565457bf75ffc42␟2539328935447835151:On the`;
    } let i18n_54; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5881876145178332550$$SRC_CRON_EDITOR_COMPONENT_TS__55 = goog.getMsg("of");
        i18n_54 = MSG_EXTERNAL_5881876145178332550$$SRC_CRON_EDITOR_COMPONENT_TS__55;
    }
    else {
        i18n_54 = $localize `:␟169eed2bc3e08e1bea977bcc5d799379f6b8a758␟5881876145178332550:of`;
    } let i18n_56; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__57 = goog.getMsg("Month");
        i18n_56 = MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__57;
    }
    else {
        i18n_56 = $localize `:␟5bb4a09a669f55893c9a37a8480c8fa3f7ce5702␟5403684285319082289:Month`;
    } let i18n_58; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__59 = goog.getMsg("at time");
        i18n_58 = MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__59;
    }
    else {
        i18n_58 = $localize `:␟33062a762c37a87d10e1e9e23adaf6230a4a742b␟6408263129846813839:at time`;
    } let i18n_60; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__61 = goog.getMsg("On the");
        i18n_60 = MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__61;
    }
    else {
        i18n_60 = $localize `:␟f2f580c540fa5b6d61509f67d565457bf75ffc42␟2539328935447835151:On the`;
    } let i18n_62; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5141352019990967744$$SRC_CRON_EDITOR_COMPONENT_TS__63 = goog.getMsg("Week");
        i18n_62 = MSG_EXTERNAL_5141352019990967744$$SRC_CRON_EDITOR_COMPONENT_TS__63;
    }
    else {
        i18n_62 = $localize `:␟73339760fe932d2b494728d4366947755d127e00␟5141352019990967744:Week`;
    } let i18n_64; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS__65 = goog.getMsg("Day");
        i18n_64 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS__65;
    }
    else {
        i18n_64 = $localize `:␟efffb64bda94fa4f4493322c5e3717e845d5dc30␟1286983255645370171:Day`;
    } let i18n_66; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5881876145178332550$$SRC_CRON_EDITOR_COMPONENT_TS__67 = goog.getMsg("of");
        i18n_66 = MSG_EXTERNAL_5881876145178332550$$SRC_CRON_EDITOR_COMPONENT_TS__67;
    }
    else {
        i18n_66 = $localize `:␟169eed2bc3e08e1bea977bcc5d799379f6b8a758␟5881876145178332550:of`;
    } let i18n_68; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__69 = goog.getMsg("Month");
        i18n_68 = MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__69;
    }
    else {
        i18n_68 = $localize `:␟5bb4a09a669f55893c9a37a8480c8fa3f7ce5702␟5403684285319082289:Month`;
    } let i18n_70; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__71 = goog.getMsg("at time");
        i18n_70 = MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__71;
    }
    else {
        i18n_70 = $localize `:␟33062a762c37a87d10e1e9e23adaf6230a4a742b␟6408263129846813839:at time`;
    } let i18n_72; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___73 = goog.getMsg("Day");
        i18n_72 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___73;
    }
    else {
        i18n_72 = $localize `:␟efffb64bda94fa4f4493322c5e3717e845d5dc30␟1286983255645370171:Day`;
    } let i18n_74; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___75 = goog.getMsg("Day");
        i18n_74 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___75;
    }
    else {
        i18n_74 = $localize `:␟efffb64bda94fa4f4493322c5e3717e845d5dc30␟1286983255645370171:Day`;
    } let i18n_76; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2791965473218359494$$SRC_CRON_EDITOR_COMPONENT_TS__77 = goog.getMsg("Expression");
        i18n_76 = MSG_EXTERNAL_2791965473218359494$$SRC_CRON_EDITOR_COMPONENT_TS__77;
    }
    else {
        i18n_76 = $localize `:␟cc697167c19fb984956b08b0e01767da0dce90fa␟2791965473218359494:Expression`;
    } return [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndex", "selectedIndexChange"], ["class", "cron-editor-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab"], [1, "cron-editor-tab-content"], [1, "cron-form-label"], i18n_0, [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab"], i18n_2, [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDays", "checked", "checked", 1, "cron-editor-radio-button"], i18n_4, ["formGroupName", "everyDays"], i18n_6, ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], i18n_8, ["formGroupName", "everyDays", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 1, "cron-editor-radio-button"], i18n_10, ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab"], [3, "formGroup"], ["formControlName", "MON", 1, "checkbox-margin"], i18n_12, ["formControlName", "TUE", 1, "checkbox-margin"], i18n_14, ["formControlName", "WED", 1, "checkbox-margin"], i18n_16, ["formControlName", "THU", 1, "checkbox-margin"], i18n_18, ["formControlName", "FRI", 1, "checkbox-margin"], i18n_20, ["formControlName", "SAT", 1, "checkbox-margin"], i18n_22, ["formControlName", "SUN", 1, "checkbox-margin"], i18n_24, i18n_26, ["label", "Monthly", 1, "cron-editor-tab"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay"], ["formGroupName", "specificDay"], i18n_28, [4, "ngIf"], i18n_30, [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], ["name", "monthly-radio", "value", "specificWeekDay"], ["formGroupName", "specificWeekDay"], i18n_32, i18n_34, ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], i18n_36, ["formControlName", "day", 1, "week-days", 3, "ngClass"], i18n_38, i18n_40, ["formControlName", "months", 1, "months-small"], i18n_42, i18n_44, ["formControlName", "day", 1, "month-days"], i18n_46, i18n_48, i18n_50, ["formControlName", "months", 1, "months-small", 3, "ngClass"], ["label", "Yearly", 1, "cron-editor-tab"], ["name", "yearly-radio", "value", "specificMonthDay"], i18n_52, ["formGroupName", "specificMonthDay", 4, "ngIf"], i18n_54, ["formGroupName", "specificMonthDay"], i18n_56, ["formControlName", "month", 1, "months"], i18n_58, ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], i18n_60, ["formGroupName", "specificMonthWeek"], i18n_62, ["formControlName", "monthWeek", 1, "day-order-in-month"], i18n_64, ["formControlName", "day", 1, "week-days"], i18n_66, i18n_68, i18n_70, i18n_72, i18n_74, ["label", "Advanced", 1, "cron-editor-tab"], i18n_76, ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]]; }, template: function CronGenComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "mat-tab-group", 1);
        i0.ɵɵlistener("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.onTabFocus($event); })("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.selectedIndex = $event; });
        i0.ɵɵtemplate(2, CronGenComponent_mat_tab_2_Template, 5, 4, "mat-tab", 2);
        i0.ɵɵtemplate(3, CronGenComponent_mat_tab_3_Template, 5, 3, "mat-tab", 3);
        i0.ɵɵtemplate(4, CronGenComponent_mat_tab_4_Template, 18, 6, "mat-tab", 4);
        i0.ɵɵtemplate(5, CronGenComponent_mat_tab_5_Template, 22, 4, "mat-tab", 5);
        i0.ɵɵtemplate(6, CronGenComponent_mat_tab_6_Template, 36, 15, "mat-tab", 6);
        i0.ɵɵtemplate(7, CronGenComponent_mat_tab_7_Template, 41, 16, "mat-tab", 7);
        i0.ɵɵtemplate(8, CronGenComponent_mat_tab_8_Template, 6, 1, "mat-tab", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("backgroundColor", ctx.backgroundColor)("color", ctx.color)("selectedIndex", ctx.selectedIndex);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideMinutesTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideHourlyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideDailyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideWeeklyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideMonthlyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideYearlyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideAdvancedTab);
    } }, directives: [i2.MatTabGroup, i3.NgIf, i2.MatTab, TimePickerComponent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5$1.MatRadioGroup, i1.NgControlStatus, i1.FormControlName, i5$1.MatRadioButton, i3$1.MatFormField, i1.FormGroupName, i3$1.MatLabel, i4.MatSelect, i3.NgForOf, i5.MatOption, i9.MatCheckbox, i3.NgClass, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i10.MatInput, i1.DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{@include mat-elevation(1);}.cron-editor-tab-content[_ngcontent-%COMP%]{height:200px;margin-top:24px;border-radius:8px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-radio[_ngcontent-%COMP%]{width:20px;display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-select[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-input[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-checkbox[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .well-time-wrapper[_ngcontent-%COMP%]{padding-left:20px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .inline-block[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .hour-types[_ngcontent-%COMP%]{width:70px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.cron-editor-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button[_ngcontent-%COMP%]{margin:5px}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronGenComponent, [{
        type: Component,
        args: [{
                selector: 'cron-editor',
                templateUrl: './cron-editor.template.html',
                styleUrls: ['./cron-editor.component.css'],
                providers: [CRON_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { backgroundColor: [{
            type: Input
        }], color: [{
            type: Input
        }], disabled: [{
            type: Input
        }], options: [{
            type: Input
        }], cron: [{
            type: Input
        }], cronChange: [{
            type: Output
        }] }); })();

class CronEditorModule {
}
/** @nocollapse */ CronEditorModule.ɵfac = function CronEditorModule_Factory(t) { return new (t || CronEditorModule)(); };
/** @nocollapse */ CronEditorModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: CronEditorModule });
/** @nocollapse */ CronEditorModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
    ], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatTabsModule,
            MatListModule,
            MatSelectModule,
            MatInputModule,
            MatRadioModule,
            MatCheckboxModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronEditorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatTabsModule,
                    MatListModule,
                    MatSelectModule,
                    MatInputModule,
                    MatRadioModule,
                    MatCheckboxModule
                ],
                exports: [TimePickerComponent, CronGenComponent],
                declarations: [TimePickerComponent, CronGenComponent],
                providers: [
                    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CronEditorModule, { declarations: [TimePickerComponent, CronGenComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule], exports: [TimePickerComponent, CronGenComponent] }); })();

/*
 * Public API Surface of pmsys
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CRON_VALUE_ACCESSOR, CronEditorModule, CronGenComponent, Days, MonthWeeks, Months, TimePickerComponent };
//# sourceMappingURL=winarg-ngx-cron-editor.js.map
