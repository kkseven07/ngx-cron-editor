import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Days, MonthWeeks, Months } from './enums';
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/tabs";
import * as i3 from "@angular/common";
import * as i4 from "./cron-time-picker.component";
import * as i5 from "@angular/material/radio";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/checkbox";
import * as i10 from "@angular/material/input";
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
export const CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // eslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef(() => CronGenComponent),
    multi: true,
};
export class CronGenComponent {
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
    } }, directives: [i2.MatTabGroup, i3.NgIf, i2.MatTab, i4.TimePickerComponent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatRadioGroup, i1.NgControlStatus, i1.FormControlName, i5.MatRadioButton, i6.MatFormField, i1.FormGroupName, i6.MatLabel, i7.MatSelect, i3.NgForOf, i8.MatOption, i9.MatCheckbox, i3.NgClass, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i10.MatInput, i1.DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{@include mat-elevation(1);}.cron-editor-tab-content[_ngcontent-%COMP%]{height:200px;margin-top:24px;border-radius:8px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-radio[_ngcontent-%COMP%]{width:20px;display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-select[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-input[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-checkbox[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .well-time-wrapper[_ngcontent-%COMP%]{padding-left:20px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .inline-block[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .hour-types[_ngcontent-%COMP%]{width:70px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.cron-editor-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button[_ngcontent-%COMP%]{margin:5px}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtY3Jvbi1lZGl0b3Ivc3JjL2Nyb24tZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LWNyb24tZWRpdG9yL3NyYy9jcm9uLWVkaXRvci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBb0MsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkQsT0FBTyxFQUEwQyxXQUFXLEVBQUUsV0FBVyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNLMUgsa0NBQWlGO0lBQy9FLCtCQUFxQztJQUVuQyxnQ0FBbUM7SUFBbkMsZ0JBQW1DO0lBQU0saUJBQU87SUFFOUMsdUNBS21CO0lBQ3ZCLGlCQUFNO0lBQ1IsaUJBQVU7OztJQU5GLGVBQXlCO0lBQXpCLDhDQUF5QiwrQ0FBQSxtQkFBQSx5RUFBQTs7O0lBU2pDLG1DQUErRTtJQUM3RSwrQkFBcUM7SUFDbkMsZ0NBQW1DO0lBQW5DLGdCQUFtQztJQUFNLGlCQUFPO0lBRWhELHVDQUdtQjtJQUNyQixpQkFBTTtJQUNSLGlCQUFVOzs7SUFMWSxlQUF3QjtJQUF4Qiw2Q0FBd0IsK0NBQUEseUVBQUE7OztJQW9CbEMsc0NBQWdGO0lBQzlFLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRmdELG1DQUFrQjtJQUM3RSxlQUNGO0lBREUsNENBQ0Y7OztJQWJaLG1DQUE2RTtJQUMzRSwrQkFBNkQ7SUFFM0QsMkNBQTBFO0lBQ3hFLDRDQUFxRztJQUVuRyxnQ0FBbUM7SUFBbkMsZ0JBQW1DO0lBQU0saUJBQU87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SVYsMEVBc0NVO1FBR1YsMEVBd0JRO1FBR1IsMkVBOEZVO1FBR1YsMkVBK0VVO1FBR1YseUVBUVU7UUFDWixpQkFBZ0I7UUFDcEIsaUJBQVU7O1FBbFNKLGVBQW1DO1FBQW5DLHFEQUFtQyxvQkFBQSxvQ0FBQTtRQUtlLGVBQTZCO1FBQTdCLGtEQUE2QjtRQWU5QixlQUE0QjtRQUE1QixpREFBNEI7UUFhN0IsZUFBMkI7UUFBM0IsZ0RBQTJCO1FBeUN6QixlQUE0QjtRQUE1QixpREFBNEI7UUEyQjVCLGVBQTZCO1FBQTdCLGtEQUE2QjtRQWlHN0IsZUFBNEI7UUFBNUIsaURBQTRCO1FBa0YzQixlQUE4QjtRQUE5QixtREFBOEI7O3VGRHRRMUUsZ0JBQWdCO2NBTjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOzhEQUdpQixlQUFlO2tCQUE5QixLQUFLO1lBQ1UsS0FBSztrQkFBcEIsS0FBSztZQUNVLFFBQVE7a0JBQXZCLEtBQUs7WUFDVSxPQUFPO2tCQUF0QixLQUFLO1lBV0csSUFBSTtrQkFBWixLQUFLO1lBRUksVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDcm9uT3B0aW9ucyB9IGZyb20gJy4vQ3Jvbk9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEYXlzLCBNb250aFdlZWtzLCBNb250aHMgfSBmcm9tICcuL2VudW1zJztcclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENST05fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAvLyBlc2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3JvbkdlbkNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjcm9uLWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nyb24tZWRpdG9yLnRlbXBsYXRlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nyb24tZWRpdG9yLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtDUk9OX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JvbkdlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBUaGVtZVBhbGV0dGU7XHJcbiAgQElucHV0KCkgcHVibGljIGNvbG9yOiBUaGVtZVBhbGV0dGU7XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBDcm9uT3B0aW9ucztcclxuXHJcbiAgLy8gQElucHV0KCkgZ2V0IGNyb24oKTogc3RyaW5nIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmxvY2FsQ3JvbjtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNldCBjcm9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAvLyAgIHRoaXMubG9jYWxDcm9uID0gdmFsdWU7XHJcbiAgLy8gICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAvLyB9XHJcblxyXG4gIEBJbnB1dCgpIGNyb246IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGNyb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBhY3RpdmVUYWI6IHN0cmluZztcclxuICBwdWJsaWMgc2VsZWN0T3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0T3B0aW9ucygpO1xyXG4gIHB1YmxpYyBzdGF0ZTogYW55O1xyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGxvY2FsQ3JvbiA9ICcwIDAgMS8xICogKic7XHJcbiAgcHJpdmF0ZSBpc0RpcnR5OiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHRhYnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNyb25Gb3JtOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgbWludXRlc0Zvcm06IEZvcm1Hcm91cDtcclxuICBob3VybHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgZGFpbHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgd2Vla2x5Rm9ybTogRm9ybUdyb3VwO1xyXG4gIG1vbnRobHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgeWVhcmx5Rm9ybTogRm9ybUdyb3VwO1xyXG4gIGFkdmFuY2VkRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuXHJcbiAgZ2V0IGlzQ3JvbkZsYXZvclF1YXJ0eigpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eic7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDcm9uRmxhdm9yU3RhbmRhcmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdzdGFuZGFyZCc7XHJcbiAgfVxyXG5cclxuICBnZXQgeWVhckRlZmF1bHRDaGFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6JyA/ICcqJyA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdlZWtEYXlEZWZhdWx0Q2hhcigpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eicgPyAnPycgOiAnKic7XHJcbiAgfVxyXG5cclxuICBnZXQgbW9udGhEYXlEZWZhdWx0Q2hhcigpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eicgPyAnPycgOiAnKic7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICB9XHJcblxyXG4gIC8qIFVwZGF0ZSB0aGUgY3JvbiBvdXRwdXQgdG8gdGhhdCBvZiB0aGUgc2VsZWN0ZWQgdGFiLlxyXG4gICAqIFRoZSBjcm9uIG91dHB1dCB2YWx1ZSBpcyB1cGRhdGVkIHdoZW5ldmVyIGEgZm9ybSBpcyB1cGRhdGVkLiBUbyBtYWtlIGl0IGNoYW5nZSBpbiByZXNwb25zZSB0byB0YWIgc2VsZWN0aW9uLCB3ZSBzaW1wbHkgcmVzZXRcclxuICAgKiB0aGUgdmFsdWUgb2YgdGhlIGZvcm0gdGhhdCBnb2VzIGludG8gZm9jdXMuICovXHJcbiAgcHVibGljIG9uVGFiRm9jdXMoaWR4OiBudW1iZXIpIHtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFic1tpZHhdO1xyXG5cclxuICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgY2FzZSAnbWludXRlcyc6XHJcbiAgICAgICAgdGhpcy5taW51dGVzRm9ybS5zZXRWYWx1ZSh0aGlzLm1pbnV0ZXNGb3JtLnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaG91cmx5JzpcclxuICAgICAgICB0aGlzLmhvdXJseUZvcm0uc2V0VmFsdWUodGhpcy5ob3VybHlGb3JtLnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGFpbHknOlxyXG4gICAgICAgIHRoaXMuZGFpbHlGb3JtLnNldFZhbHVlKHRoaXMuZGFpbHlGb3JtLnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnd2Vla2x5JzpcclxuICAgICAgICB0aGlzLndlZWtseUZvcm0uc2V0VmFsdWUodGhpcy53ZWVrbHlGb3JtLnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbW9udGhseSc6XHJcbiAgICAgICAgdGhpcy5tb250aGx5Rm9ybS5zZXRWYWx1ZSh0aGlzLm1vbnRobHlGb3JtLnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAneWVhcmx5JzpcclxuICAgICAgICB0aGlzLnllYXJseUZvcm0uc2V0VmFsdWUodGhpcy55ZWFybHlGb3JtLnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYWR2YW5jZWQnOlxyXG4gICAgICAgIHRoaXMuYWR2YW5jZWRGb3JtLnNldFZhbHVlKHRoaXMuYWR2YW5jZWRGb3JtLnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyAobmV3IEVycm9yKCdJbnZhbGlkIHRhYiBzZWxlY3RlZCcpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYnVpbGRUYWJJbmRleCgpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldERlZmF1bHRTdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlTW9kZWxDaGFuZ2UodGhpcy5jcm9uKTtcclxuXHJcbiAgICBjb25zdCBbZGVmYXVsdEhvdXJzLCBkZWZhdWx0TWludXRlcywgZGVmYXVsdFNlY29uZHNdID0gdGhpcy5vcHRpb25zLmRlZmF1bHRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcblxyXG4gICAgdGhpcy5jcm9uRm9ybSA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLmNyb24pO1xyXG5cclxuICAgIHRoaXMubWludXRlc0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgaG91cnM6IFswXSxcclxuICAgICAgbWludXRlczogWzFdLFxyXG4gICAgICBzZWNvbmRzOiBbMF1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubWludXRlc0Zvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmNvbXB1dGVNaW51dGVzQ3Jvbih2YWx1ZSkpO1xyXG5cclxuICAgIHRoaXMuaG91cmx5Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBob3VyczogWzFdLFxyXG4gICAgICBtaW51dGVzOiBbMF0sXHJcbiAgICAgIHNlY29uZHM6IFswXVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmhvdXJseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmNvbXB1dGVIb3VybHlDcm9uKHZhbHVlKSk7XHJcblxyXG4gICAgdGhpcy5kYWlseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgc3ViVGFiOiBbJ2V2ZXJ5RGF5cyddLFxyXG4gICAgICBldmVyeURheXM6IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIGRheXM6IFsxXSxcclxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoMSldLFxyXG4gICAgICAgIG1pbnV0ZXM6IFswXSxcclxuICAgICAgICBzZWNvbmRzOiBbMF0sXHJcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKDApXVxyXG4gICAgICB9KSxcclxuICAgICAgZXZlcnlXZWVrRGF5OiB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICBkYXlzOiBbMF0sXHJcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKDEpXSxcclxuICAgICAgICBtaW51dGVzOiBbMF0sXHJcbiAgICAgICAgc2Vjb25kczogWzBdLFxyXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZSgwKV1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kYWlseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmNvbXB1dGVEYWlseUNyb24odmFsdWUpKTtcclxuXHJcbiAgICB0aGlzLndlZWtseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgTU9OOiBbdHJ1ZV0sXHJcbiAgICAgIFRVRTogW2ZhbHNlXSxcclxuICAgICAgV0VEOiBbZmFsc2VdLFxyXG4gICAgICBUSFU6IFtmYWxzZV0sXHJcbiAgICAgIEZSSTogW2ZhbHNlXSxcclxuICAgICAgU0FUOiBbZmFsc2VdLFxyXG4gICAgICBTVU46IFtmYWxzZV0sXHJcbiAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcclxuICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcclxuICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcclxuICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXHJcbiAgICB9KTtcclxuICAgIHRoaXMud2Vla2x5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlV2Vla2x5Q3JvbihuZXh0KSk7XHJcblxyXG4gICAgdGhpcy5tb250aGx5Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBzdWJUYWI6IFsnc3BlY2lmaWNEYXknXSxcclxuICAgICAgc3BlY2lmaWNEYXk6IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIGRheTogWycxJ10sXHJcbiAgICAgICAgbW9udGhzOiBbMV0sXHJcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxyXG4gICAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXHJcbiAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcclxuICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV1cclxuICAgICAgfSksXHJcbiAgICAgIHNwZWNpZmljV2Vla0RheTogdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgbW9udGhXZWVrOiBbJyMxJ10sXHJcbiAgICAgICAgZGF5OiBbJ01PTiddLFxyXG4gICAgICAgIG1vbnRoczogWzFdLFxyXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcclxuICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxyXG4gICAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXHJcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIHRoaXMubW9udGhseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShuZXh0ID0+IHRoaXMuY29tcHV0ZU1vbnRobHlDcm9uKG5leHQpKTtcclxuXHJcbiAgICB0aGlzLnllYXJseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgc3ViVGFiOiBbJ3NwZWNpZmljTW9udGhEYXknXSxcclxuICAgICAgc3BlY2lmaWNNb250aERheTogdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgbW9udGg6IFsxXSxcclxuICAgICAgICBkYXk6IFsnMSddLFxyXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcclxuICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxyXG4gICAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXHJcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXHJcbiAgICAgIH0pLFxyXG4gICAgICBzcGVjaWZpY01vbnRoV2VlazogdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgbW9udGhXZWVrOiBbJyMxJ10sXHJcbiAgICAgICAgZGF5OiBbJ01PTiddLFxyXG4gICAgICAgIG1vbnRoOiBbMV0sXHJcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxyXG4gICAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXHJcbiAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcclxuICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgdGhpcy55ZWFybHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUobmV4dCA9PiB0aGlzLmNvbXB1dGVZZWFybHlDcm9uKG5leHQpKTtcclxuXHJcbiAgICB0aGlzLmFkdmFuY2VkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBleHByZXNzaW9uOiBbdGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyAnMCAxNSAxMCBMLTIgKiA/IConIDogJzE1IDEwIDIgKiAqJ11cclxuICAgIH0pO1xyXG4gICAgdGhpcy5hZHZhbmNlZEZvcm0uY29udHJvbHMuZXhwcmVzc2lvbi52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlQWR2YW5jZWRFeHByZXNzaW9uKG5leHQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcHV0ZU1pbnV0ZXNDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc2Vjb25kcyA6ICcnfSAwLyR7c3RhdGUubWludXRlc30gKiAxLzEgKiAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xyXG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNyb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wdXRlSG91cmx5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5taW51dGVzfSAwLyR7c3RhdGUuaG91cnN9IDEvMSAqICR7dGhpcy53ZWVrRGF5RGVmYXVsdENoYXJ9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XHJcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY3Jvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXB1dGVEYWlseUNyb24oc3RhdGU6IGFueSkge1xyXG4gICAgc3dpdGNoIChzdGF0ZS5zdWJUYWIpIHtcclxuICAgICAgY2FzZSAnZXZlcnlEYXlzJzpcclxuICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLmV2ZXJ5RGF5cy5zZWNvbmRzIDogJyd9ICR7c3RhdGUuZXZlcnlEYXlzLm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLmV2ZXJ5RGF5cy5ob3Vycywgc3RhdGUuZXZlcnlEYXlzLmhvdXJUeXBlKX0gMS8ke3N0YXRlLmV2ZXJ5RGF5cy5kYXlzfSAqICR7dGhpcy53ZWVrRGF5RGVmYXVsdENoYXJ9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2V2ZXJ5V2Vla0RheSc6XHJcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5ldmVyeVdlZWtEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLmV2ZXJ5V2Vla0RheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ldmVyeVdlZWtEYXkuaG91cnMsIHN0YXRlLmV2ZXJ5V2Vla0RheS5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAqIE1PTi1GUkkgJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBkYWlseSBzdWJ0YWIgc2VsZWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY3Jvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXB1dGVXZWVrbHlDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgIGNvbnN0IGRheXMgPSB0aGlzLnNlbGVjdE9wdGlvbnMuZGF5c1xyXG4gICAgICAucmVkdWNlKChhY2MsIGRheSkgPT4gc3RhdGVbZGF5XSA/IGFjYy5jb25jYXQoW2RheV0pIDogYWNjLCBbXSlcclxuICAgICAgLmpvaW4oJywnKTtcclxuICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc2Vjb25kcyA6ICcnfSAke3N0YXRlLm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLmhvdXJzLCBzdGF0ZS5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAqICR7ZGF5c30gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcclxuICAgIHRoaXMuY3JvbkZvcm0uc2V0VmFsdWUodGhpcy5jcm9uKTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5jcm9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcHV0ZU1vbnRobHlDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgIHN3aXRjaCAoc3RhdGUuc3ViVGFiKSB7XHJcbiAgICAgIGNhc2UgJ3NwZWNpZmljRGF5JzpcclxuICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNwZWNpZmljRGF5LnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5zcGVjaWZpY0RheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5zcGVjaWZpY0RheS5ob3Vycywgc3RhdGUuc3BlY2lmaWNEYXkuaG91clR5cGUpfSAke3N0YXRlLnNwZWNpZmljRGF5LmRheX0gMS8ke3N0YXRlLnNwZWNpZmljRGF5Lm1vbnRoc30gJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3BlY2lmaWNXZWVrRGF5JzpcclxuICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNwZWNpZmljV2Vla0RheS5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5Lm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLnNwZWNpZmljV2Vla0RheS5ob3Vycywgc3RhdGUuc3BlY2lmaWNXZWVrRGF5LmhvdXJUeXBlKX0gJHt0aGlzLm1vbnRoRGF5RGVmYXVsdENoYXJ9IDEvJHtzdGF0ZS5zcGVjaWZpY1dlZWtEYXkubW9udGhzfSAke3N0YXRlLnNwZWNpZmljV2Vla0RheS5kYXl9JHtzdGF0ZS5zcGVjaWZpY1dlZWtEYXkubW9udGhXZWVrfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uIG1vbnRseSBzdWJ0YWIgc2VsZWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY3Jvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXB1dGVZZWFybHlDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgIHN3aXRjaCAoc3RhdGUuc3ViVGFiKSB7XHJcbiAgICAgIGNhc2UgJ3NwZWNpZmljTW9udGhEYXknOlxyXG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNNb250aERheS5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmhvdXJzLCBzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmhvdXJUeXBlKX0gJHtzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmRheX0gJHtzdGF0ZS5zcGVjaWZpY01vbnRoRGF5Lm1vbnRofSAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzcGVjaWZpY01vbnRoV2Vlayc6XHJcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNNb250aFdlZWsubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNNb250aFdlZWsuaG91cnMsIHN0YXRlLnNwZWNpZmljTW9udGhXZWVrLmhvdXJUeXBlKX0gJHt0aGlzLm1vbnRoRGF5RGVmYXVsdENoYXJ9ICR7c3RhdGUuc3BlY2lmaWNNb250aFdlZWsubW9udGh9ICR7c3RhdGUuc3BlY2lmaWNNb250aFdlZWsuZGF5fSR7c3RhdGUuc3BlY2lmaWNNb250aFdlZWsubW9udGhXZWVrfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uIHllYXJseSBzdWJ0YWIgc2VsZWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY3Jvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXB1dGVBZHZhbmNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbjogYW55KSB7XHJcbiAgICB0aGlzLmNyb24gPSBleHByZXNzaW9uO1xyXG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNyb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRheURpc3BsYXkoZGF5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIERheXNbZGF5XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb250aFdlZWtEaXNwbGF5KG1vbnRoV2Vla051bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBNb250aFdlZWtzW21vbnRoV2Vla051bWJlcl07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW9udGhEaXNwbGF5KG1vbnRoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE1vbnRoc1ttb250aF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW9udGhEYXlEaXNwbGF5KG1vbnRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKG1vbnRoID09PSAnTCcpIHtcclxuICAgICAgcmV0dXJuICdMYXN0IERheSc7XHJcbiAgICB9IGVsc2UgaWYgKG1vbnRoID09PSAnTFcnKSB7XHJcbiAgICAgIHJldHVybiAnTGFzdCBXZWVrZGF5JztcclxuICAgIH0gZWxzZSBpZiAobW9udGggPT09ICcxVycpIHtcclxuICAgICAgcmV0dXJuICdGaXJzdCBXZWVrZGF5JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgJHttb250aH0ke3RoaXMuZ2V0T3JkaW5hbFN1ZmZpeChtb250aCl9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QW1QbUhvdXIoaG91cjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnVzZTI0SG91clRpbWUgPyBob3VyIDogKGhvdXIgKyAxMSkgJSAxMiArIDE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEhvdXJUeXBlKGhvdXI6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy51c2UyNEhvdXJUaW1lID8gdW5kZWZpbmVkIDogKGhvdXIgPj0gMTIgPyAnUE0nIDogJ0FNJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvdXJUb0Nyb24oaG91cjogbnVtYmVyLCBob3VyVHlwZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnVzZTI0SG91clRpbWUpIHtcclxuICAgICAgcmV0dXJuIGhvdXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaG91clR5cGUgPT09ICdBTScgPyAoaG91ciA9PT0gMTIgPyAwIDogaG91cikgOiAoaG91ciA9PT0gMTIgPyAxMiA6IGhvdXIgKyAxMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlTW9kZWxDaGFuZ2UoY3Jvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNyb24gPSBjcm9uO1xyXG5cclxuICAgIGlmICghdGhpcy5jcm9uSXNWYWxpZChjcm9uKSkge1xyXG4gICAgICAvLyBpZiAodGhpcy5pc0Nyb25GbGF2b3JRdWFydHopIHtcclxuICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBleHByZXNzaW9uLCB0aGVyZSBtdXN0IGJlIDYgb3IgNyBzZWdtZW50cycpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyBpZiAodGhpcy5pc0Nyb25GbGF2b3JTdGFuZGFyZCkge1xyXG4gICAgICAvLyAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uIGV4cHJlc3Npb24sIHRoZXJlIG11c3QgYmUgNSBzZWdtZW50cycpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcmlnQ3Jvbjogc3RyaW5nID0gY3JvbjtcclxuICAgIGlmIChjcm9uLnNwbGl0KCcgJykubGVuZ3RoID09PSA1ICYmIHRoaXMuaXNDcm9uRmxhdm9yU3RhbmRhcmQpIHtcclxuICAgICAgY3JvbiA9IGAwICR7Y3Jvbn0gKmA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3NlY29uZHMsIG1pbnV0ZXMsIGhvdXJzLCBkYXlPZk1vbnRoLCBtb250aCwgZGF5T2ZXZWVrXSA9IGNyb24uc3BsaXQoJyAnKTtcclxuXHJcbiAgICBpZiAoY3Jvbi5tYXRjaCgvXFxkKyAwXFwvXFxkKyBcXCogMVxcLzEgXFwqIFtcXD9cXCpdIFxcKi8pKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ21pbnV0ZXMnO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgICAgdGhpcy5zdGF0ZS5taW51dGVzLm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLnN1YnN0cmluZygyKSwgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLm1pbnV0ZXMuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcclxuXHJcbiAgICAgIHRoaXMubWludXRlc0Zvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgaG91cnM6IDAsXHJcbiAgICAgICAgbWludXRlczogdGhpcy5zdGF0ZS5taW51dGVzLm1pbnV0ZXMsXHJcbiAgICAgICAgc2Vjb25kczogdGhpcy5zdGF0ZS5taW51dGVzLnNlY29uZHNcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgMFxcL1xcZCsgMVxcLzEgXFwqIFtcXD9cXCpdIFxcKi8pKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ2hvdXJseSc7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuY2FsY3VsYXRlQWN0aXZlVGFiKCdob3VybHknKTsgLy8gMTtcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5LmhvdXJzID0gcGFyc2VJbnQoaG91cnMuc3Vic3RyaW5nKDIpLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XHJcblxyXG4gICAgICB0aGlzLmhvdXJseUZvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgaG91cnM6IHRoaXMuc3RhdGUuaG91cmx5LmhvdXJzLFxyXG4gICAgICAgIG1pbnV0ZXM6IHRoaXMuc3RhdGUuaG91cmx5Lm1pbnV0ZXMsXHJcbiAgICAgICAgc2Vjb25kczogdGhpcy5zdGF0ZS5ob3VybHkuc2Vjb25kc1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIDFcXC9cXGQrIFxcKiBbXFw/XFwqXSBcXCovKSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdkYWlseSc7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuY2FsY3VsYXRlQWN0aXZlVGFiKCdkYWlseScpOyAvLyAyO1xyXG5cclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5zdWJUYWIgPSAnZXZlcnlEYXlzJztcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMuZGF5cyA9IHBhcnNlSW50KGRheU9mTW9udGguc3Vic3RyaW5nKDIpLCAxMCk7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcclxuXHJcbiAgICAgIHRoaXMuZGFpbHlGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgIHN1YlRhYjogdGhpcy5zdGF0ZS5kYWlseS5zdWJUYWIsXHJcbiAgICAgICAgZXZlcnlEYXlzOiB7XHJcbiAgICAgICAgICBkYXlzOiB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5kYXlzLFxyXG4gICAgICAgICAgaG91cnM6IHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlEYXlzLmhvdXJzLFxyXG4gICAgICAgICAgbWludXRlczogdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMubWludXRlcyxcclxuICAgICAgICAgIHNlY29uZHM6IHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlEYXlzLnNlY29uZHMsXHJcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMuaG91clR5cGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgW1xcP1xcKl0gXFwqIE1PTi1GUkkgXFwqLykpIHtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnZGFpbHknO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmNhbGN1bGF0ZUFjdGl2ZVRhYignZGFpbHknKTsgLy8gMjtcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuc3ViVGFiID0gJ2V2ZXJ5V2Vla0RheSc7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcclxuXHJcbiAgICAgIHRoaXMuZGFpbHlGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgIHN1YlRhYjogdGhpcy5zdGF0ZS5kYWlseS5zdWJUYWIsXHJcbiAgICAgICAgZXZlcnlXZWVrRGF5OiB7XHJcbiAgICAgICAgICAvLyBkYXlzOiBbMF0sXHJcbiAgICAgICAgICBob3VyczogdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuaG91cnMsXHJcbiAgICAgICAgICBtaW51dGVzOiB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5V2Vla0RheS5taW51dGVzLFxyXG4gICAgICAgICAgc2Vjb25kczogdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuc2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5V2Vla0RheS5ob3VyVHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyBbXFw/XFwqXSBcXCogKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikoLChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKSogXFwqLykpIHtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnd2Vla2x5JztcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5jYWxjdWxhdGVBY3RpdmVUYWIoJ3dlZWtseScpOyAvLyAzO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RPcHRpb25zLmRheXMuZm9yRWFjaCh3ZWVrRGF5ID0+IHRoaXMuc3RhdGUud2Vla2x5W3dlZWtEYXldID0gZmFsc2UpO1xyXG4gICAgICBkYXlPZldlZWsuc3BsaXQoJywnKS5mb3JFYWNoKHdlZWtEYXkgPT4gdGhpcy5zdGF0ZS53ZWVrbHlbd2Vla0RheV0gPSB0cnVlKTtcclxuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLndlZWtseS5ob3VycyA9IHRoaXMuZ2V0QW1QbUhvdXIocGFyc2VkSG91cnMpO1xyXG4gICAgICB0aGlzLnN0YXRlLndlZWtseS5ob3VyVHlwZSA9IHRoaXMuZ2V0SG91clR5cGUocGFyc2VkSG91cnMpO1xyXG4gICAgICB0aGlzLnN0YXRlLndlZWtseS5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLndlZWtseS5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xyXG5cclxuICAgICAgdGhpcy53ZWVrbHlGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgIE1PTjogdGhpcy5zdGF0ZS53ZWVrbHlbJ01PTiddLFxyXG4gICAgICAgIFRVRTogdGhpcy5zdGF0ZS53ZWVrbHlbJ1RVRSddLFxyXG4gICAgICAgIFdFRDogdGhpcy5zdGF0ZS53ZWVrbHlbJ1dFRCddLFxyXG4gICAgICAgIFRIVTogdGhpcy5zdGF0ZS53ZWVrbHlbJ1RIVSddLFxyXG4gICAgICAgIEZSSTogdGhpcy5zdGF0ZS53ZWVrbHlbJ0ZSSSddLFxyXG4gICAgICAgIFNBVDogdGhpcy5zdGF0ZS53ZWVrbHlbJ1NBVCddLFxyXG4gICAgICAgIFNVTjogdGhpcy5zdGF0ZS53ZWVrbHlbJ1NVTiddLFxyXG4gICAgICAgIGhvdXJzOiB0aGlzLnN0YXRlLndlZWtseS5ob3VycyxcclxuICAgICAgICBtaW51dGVzOiB0aGlzLnN0YXRlLndlZWtseS5taW51dGVzLFxyXG4gICAgICAgIHNlY29uZHM6IHRoaXMuc3RhdGUud2Vla2x5LnNlY29uZHMsXHJcbiAgICAgICAgLy8gaG91clR5cGU6IHRoaXMuc3RhdGUud2Vla2x5LmhvdXJUeXBlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgKFxcZCt8THxMV3wxVykgMVxcL1xcZCsgW1xcP1xcKl0gXFwqLykpIHtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnbW9udGhseSc7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuY2FsY3VsYXRlQWN0aXZlVGFiKCdtb250aGx5Jyk7IC8vIDQ7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3ViVGFiID0gJ3NwZWNpZmljRGF5JztcclxuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5LmRheSA9IGRheU9mTW9udGg7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5tb250aHMgPSBwYXJzZUludChtb250aC5zdWJzdHJpbmcoMiksIDEwKTtcclxuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcclxuXHJcbiAgICAgIHRoaXMubW9udGhseUZvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgc3ViVGFiOiAnc3BlY2lmaWNEYXknLFxyXG4gICAgICAgIHNwZWNpZmljRGF5OiB7XHJcbiAgICAgICAgICBkYXk6IGRheU9mTW9udGgsXHJcbiAgICAgICAgICBtb250aHM6IHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5tb250aHMsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5LmhvdXJzLFxyXG4gICAgICAgICAgbWludXRlczogdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5Lm1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuc2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuaG91clR5cGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgW1xcP1xcKl0gMVxcL1xcZCsgKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikoKCNbMS01XSl8TCkgXFwqLykpIHtcclxuICAgICAgY29uc3QgZGF5ID0gZGF5T2ZXZWVrLnN1YnN0cigwLCAzKTtcclxuICAgICAgY29uc3QgbW9udGhXZWVrID0gZGF5T2ZXZWVrLnN1YnN0cigzKTtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnbW9udGhseSc7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuY2FsY3VsYXRlQWN0aXZlVGFiKCdtb250aGx5Jyk7IC8vIDQ7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3ViVGFiID0gJ3NwZWNpZmljV2Vla0RheSc7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkubW9udGhXZWVrID0gbW9udGhXZWVrO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmRheSA9IGRheTtcclxuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5tb250aHMgPSBwYXJzZUludChtb250aC5zdWJzdHJpbmcoMiksIDEwKTtcclxuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XHJcblxyXG4gICAgICB0aGlzLm1vbnRobHlGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgIHN1YlRhYjogJ3NwZWNpZmljV2Vla0RheScsXHJcbiAgICAgICAgc3BlY2lmaWNXZWVrRGF5OiB7XHJcbiAgICAgICAgICBtb250aFdlZWs6IG1vbnRoV2VlayxcclxuICAgICAgICAgIGRheTogZGF5LFxyXG4gICAgICAgICAgbW9udGhzOiB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5Lm1vbnRocyxcclxuICAgICAgICAgIGhvdXJzOiB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmhvdXJzLFxyXG4gICAgICAgICAgbWludXRlczogdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5taW51dGVzLFxyXG4gICAgICAgICAgc2Vjb25kczogdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5zZWNvbmRzLFxyXG4gICAgICAgICAgaG91clR5cGU6IHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuaG91clR5cGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgKFxcZCt8THxMV3wxVykgXFxkKyBbXFw/XFwqXSBcXCovKSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICd5ZWFybHknO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmNhbGN1bGF0ZUFjdGl2ZVRhYigneWVhcmx5Jyk7IC8vIDU7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zdWJUYWIgPSAnc3BlY2lmaWNNb250aERheSc7XHJcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmRheSA9IGRheU9mTW9udGg7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aERheS5ob3VycyA9IHRoaXMuZ2V0QW1QbUhvdXIocGFyc2VkSG91cnMpO1xyXG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aERheS5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xyXG5cclxuICAgICAgdGhpcy55ZWFybHlGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgIHN1YlRhYjogWydzcGVjaWZpY01vbnRoRGF5J10sXHJcbiAgICAgICAgc3BlY2lmaWNNb250aERheToge1xyXG4gICAgICAgICAgbW9udGg6IHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkubW9udGgsXHJcbiAgICAgICAgICBkYXk6IHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkuZGF5LFxyXG4gICAgICAgICAgaG91cnM6IHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkuaG91cnMsXHJcbiAgICAgICAgICBtaW51dGVzOiB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5Lm1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LnNlY29uZHMsXHJcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aERheS5ob3VyVHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyBbXFw/XFwqXSBcXGQrIChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKCgjWzEtNV0pfEwpIFxcKi8pKSB7XHJcbiAgICAgIGNvbnN0IGRheSA9IGRheU9mV2Vlay5zdWJzdHIoMCwgMyk7XHJcbiAgICAgIGNvbnN0IG1vbnRoV2VlayA9IGRheU9mV2Vlay5zdWJzdHIoMyk7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ3llYXJseSc7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuY2FsY3VsYXRlQWN0aXZlVGFiKCd5ZWFybHknKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnN1YlRhYiA9ICdzcGVjaWZpY01vbnRoV2Vlayc7XHJcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhXZWVrLm1vbnRoV2VlayA9IG1vbnRoV2VlaztcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuZGF5ID0gZGF5O1xyXG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcclxuXHJcbiAgICAgIHRoaXMueWVhcmx5Rm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICBzcGVjaWZpY01vbnRoV2Vlazoge1xyXG4gICAgICAgICAgbW9udGhXZWVrOiBbJyMxJ10sXHJcbiAgICAgICAgICBkYXk6IFsnTU9OJ10sXHJcbiAgICAgICAgICBtb250aDogWzFdLFxyXG4gICAgICAgICAgaG91cnM6IHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhXZWVrLmhvdXJzLFxyXG4gICAgICAgICAgbWludXRlczogdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsubWludXRlcyxcclxuICAgICAgICAgIHNlY29uZHM6IHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhXZWVrLnNlY29uZHMsXHJcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuaG91clR5cGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ2FkdmFuY2VkJztcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5jYWxjdWxhdGVBY3RpdmVUYWIoJ2FkdmFuY2VkJyk7IC8vIDY7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlLmFkdmFuY2VkLmV4cHJlc3Npb24gPSBvcmlnQ3JvbjtcclxuXHJcbiAgICAgIHRoaXMuYWR2YW5jZWRGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgIGV4cHJlc3Npb246IFtvcmlnQ3Jvbl1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyb25Jc1ZhbGlkKGNyb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNyb24pIHtcclxuICAgICAgY29uc3QgY3JvblBhcnRzID0gY3Jvbi5zcGxpdCgnICcpO1xyXG4gICAgICByZXR1cm4gKHRoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ICYmIChjcm9uUGFydHMubGVuZ3RoID09PSA2XHJcbiAgICAgICAgfHwgY3JvblBhcnRzLmxlbmd0aCA9PT0gNylcclxuICAgICAgICB8fCAodGhpcy5pc0Nyb25GbGF2b3JTdGFuZGFyZCAmJiBjcm9uUGFydHMubGVuZ3RoID09PSA1KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0RGVmYXVsdFN0YXRlKCkge1xyXG4gICAgY29uc3QgW2RlZmF1bHRIb3VycywgZGVmYXVsdE1pbnV0ZXMsIGRlZmF1bHRTZWNvbmRzXSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0VGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pbnV0ZXM6IHtcclxuICAgICAgICBtaW51dGVzOiAxLFxyXG4gICAgICAgIHNlY29uZHM6IDBcclxuICAgICAgfSxcclxuICAgICAgaG91cmx5OiB7XHJcbiAgICAgICAgaG91cnM6IDEsXHJcbiAgICAgICAgbWludXRlczogMCxcclxuICAgICAgICBzZWNvbmRzOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhaWx5OiB7XHJcbiAgICAgICAgc3ViVGFiOiAnZXZlcnlEYXlzJyxcclxuICAgICAgICBldmVyeURheXM6IHtcclxuICAgICAgICAgIGRheXM6IDEsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxyXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZXJ5V2Vla0RheToge1xyXG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcclxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxyXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXHJcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3ZWVrbHk6IHtcclxuICAgICAgICBNT046IHRydWUsXHJcbiAgICAgICAgVFVFOiBmYWxzZSxcclxuICAgICAgICBXRUQ6IGZhbHNlLFxyXG4gICAgICAgIFRIVTogZmFsc2UsXHJcbiAgICAgICAgRlJJOiBmYWxzZSxcclxuICAgICAgICBTQVQ6IGZhbHNlLFxyXG4gICAgICAgIFNVTjogZmFsc2UsXHJcbiAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcclxuICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcclxuICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbnRobHk6IHtcclxuICAgICAgICBzdWJUYWI6ICdzcGVjaWZpY0RheScsXHJcbiAgICAgICAgc3BlY2lmaWNEYXk6IHtcclxuICAgICAgICAgIGRheTogJzEnLFxyXG4gICAgICAgICAgbW9udGhzOiAxLFxyXG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcclxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxyXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXHJcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcGVjaWZpY1dlZWtEYXk6IHtcclxuICAgICAgICAgIG1vbnRoV2VlazogJyMxJyxcclxuICAgICAgICAgIGRheTogJ01PTicsXHJcbiAgICAgICAgICBtb250aHM6IDEsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxyXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHllYXJseToge1xyXG4gICAgICAgIHN1YlRhYjogJ3NwZWNpZmljTW9udGhEYXknLFxyXG4gICAgICAgIHNwZWNpZmljTW9udGhEYXk6IHtcclxuICAgICAgICAgIG1vbnRoOiAxLFxyXG4gICAgICAgICAgZGF5OiAnMScsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxyXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwZWNpZmljTW9udGhXZWVrOiB7XHJcbiAgICAgICAgICBtb250aFdlZWs6ICcjMScsXHJcbiAgICAgICAgICBkYXk6ICdNT04nLFxyXG4gICAgICAgICAgbW9udGg6IDEsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxyXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkdmFuY2VkOiB7XHJcbiAgICAgICAgZXhwcmVzc2lvbjogdGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyAnMCAxNSAxMCBMLTIgKiA/IConIDogJzE1IDEwIDIgKiAqJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPcmRpbmFsU3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IHNlY29uZFRvTGFzdERpZ2l0ID0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDIpO1xyXG4gICAgICBpZiAoc2Vjb25kVG9MYXN0RGlnaXQgPT09ICcxJykge1xyXG4gICAgICAgIHJldHVybiAndGgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFzdERpZ2l0ID0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgc3dpdGNoIChsYXN0RGlnaXQpIHtcclxuICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgcmV0dXJuICdzdCc7XHJcbiAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgIHJldHVybiAnbmQnO1xyXG4gICAgICBjYXNlICczJzpcclxuICAgICAgICByZXR1cm4gJ3JkJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ3RoJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2VsZWN0T3B0aW9ucygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbnRoczogdGhpcy5nZXRSYW5nZSgxLCAxMiksXHJcbiAgICAgIG1vbnRoV2Vla3M6IFsnIzEnLCAnIzInLCAnIzMnLCAnIzQnLCAnIzUnLCAnTCddLFxyXG4gICAgICBkYXlzOiBbJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJywgJ1NVTiddLFxyXG4gICAgICBtaW51dGVzOiB0aGlzLmdldFJhbmdlKDAsIDU5KSxcclxuICAgICAgZnVsbE1pbnV0ZXM6IHRoaXMuZ2V0UmFuZ2UoMCwgNTkpLFxyXG4gICAgICBzZWNvbmRzOiB0aGlzLmdldFJhbmdlKDAsIDU5KSxcclxuICAgICAgaG91cnM6IHRoaXMuZ2V0UmFuZ2UoMSwgMjMpLFxyXG4gICAgICBtb250aERheXM6IHRoaXMuZ2V0UmFuZ2UoMSwgMzEpLFxyXG4gICAgICBtb250aERheXNXaXRoTGFzdHM6IFsnMVcnLCAuLi5bLi4udGhpcy5nZXRSYW5nZSgxLCAzMSkubWFwKFN0cmluZyldLCAnTFcnLCAnTCddLFxyXG4gICAgICBtb250aERheXNXaXRoT3V0TGFzdHM6IFsuLi5bLi4udGhpcy5nZXRSYW5nZSgxLCAzMSkubWFwKFN0cmluZyldXSxcclxuICAgICAgaG91clR5cGVzOiBbJ0FNJywgJ1BNJ11cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZW5kIC0gc3RhcnQgKyAxO1xyXG4gICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpLm1hcCgoXywgaSkgPT4gaSArIHN0YXJ0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQWN0aXZlVGFiKHJlcXVlc3RlZFRhYjogJ21pbnV0ZXMnIHwgJ2hvdXJseScgfCAnZGFpbHknIHwgJ3dlZWtseScgfCAnbW9udGhseScgfCAneWVhcmx5JyB8ICdhZHZhbmNlZCcpOiBudW1iZXIge1xyXG5cclxuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMudGFicy5sZW5ndGggLSAxO1xyXG5cclxuICAgIHN3aXRjaCAocmVxdWVzdGVkVGFiKSB7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZXMnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlkZU1pbnV0ZXNUYWIgPyBsYXN0SW5kZXggOiB0aGlzLnRhYnMuaW5kZXhPZignbWludXRlcycpO1xyXG4gICAgICBjYXNlICdob3VybHknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlkZUhvdXJseVRhYiA/IGxhc3RJbmRleCA6IHRoaXMudGFicy5pbmRleE9mKCdob3VybHknKTtcclxuICAgICAgY2FzZSAnZGFpbHknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlkZURhaWx5VGFiID8gbGFzdEluZGV4IDogdGhpcy50YWJzLmluZGV4T2YoJ2RhaWx5Jyk7XHJcbiAgICAgIGNhc2UgJ3dlZWtseSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWRlV2Vla2x5VGFiID8gbGFzdEluZGV4IDogdGhpcy50YWJzLmluZGV4T2YoJ3dlZWtseScpO1xyXG4gICAgICBjYXNlICdtb250aGx5JzpcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZGVNb250aGx5VGFiID8gbGFzdEluZGV4IDogdGhpcy50YWJzLmluZGV4T2YoJ21vbnRobHknKTtcclxuICAgICAgY2FzZSAneWVhcmx5JzpcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZGVZZWFybHlUYWIgPyBsYXN0SW5kZXggOiB0aGlzLnRhYnMuaW5kZXhPZigneWVhcmx5Jyk7XHJcbiAgICAgIGNhc2UgJ2FkdmFuY2VkJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZGVBZHZhbmNlZFRhYiA/IGxhc3RJbmRleCA6IHRoaXMudGFicy5pbmRleE9mKCdhZHZhbmNlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFRhYkluZGV4KCkge1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaGlkZU1pbnV0ZXNUYWIpIHtcclxuICAgICAgdGhpcy50YWJzLnB1c2goJ21pbnV0ZXMnKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5vcHRpb25zLmhpZGVIb3VybHlUYWIpIHtcclxuICAgICAgdGhpcy50YWJzLnB1c2goJ2hvdXJseScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaGlkZURhaWx5VGFiKSB7XHJcbiAgICAgIHRoaXMudGFicy5wdXNoKCdkYWlseScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaGlkZVdlZWtseVRhYikge1xyXG4gICAgICB0aGlzLnRhYnMucHVzaCgnd2Vla2x5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5oaWRlTW9udGhseVRhYikge1xyXG4gICAgICB0aGlzLnRhYnMucHVzaCgnbW9udGhseScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaGlkZVllYXJseVRhYikge1xyXG4gICAgICB0aGlzLnRhYnMucHVzaCgneWVhcmx5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5oaWRlQWR2YW5jZWRUYWIpIHtcclxuICAgICAgdGhpcy50YWJzLnB1c2goJ2FkdmFuY2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgICovXHJcbiAgcHVibGljIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge1xyXG4gIH07XHJcbiAgcHVibGljIG9uVG91Y2hlZCA9ICgpID0+IHtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVNb2RlbENoYW5nZShvYmopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwiY3Jvbi1lZGl0b3ItbWFpblwiPlxyXG4gICAgPG1hdC10YWItZ3JvdXAgY2xhc3M9XCJjcm9uLWVkaXRvci1jb250YWluZXJcIiBcclxuICAgICAgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVwib25UYWJGb2N1cygkZXZlbnQpXCIgXHJcbiAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgXHJcbiAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgIFsoc2VsZWN0ZWRJbmRleCldPVwic2VsZWN0ZWRJbmRleFwiPlxyXG5cclxuICAgICAgPCEtLSBNaW51dGUgLS0+XHJcbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJNaW51dGVzXCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlTWludXRlc1RhYlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiPlxyXG5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCIgaTE4bj5FdmVyeSA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlclxyXG4gICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwibWludXRlc0Zvcm1cIlxyXG4gICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXHJcbiAgICAgICAgICAgICAgW2hpZGVIb3Vyc109XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtdGFiPlxyXG5cclxuICAgICAgPCEtLSBIb3VybHkgLS0+XHJcbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJIb3VybHlcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVIb3VybHlUYWJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCIgaTE4bj5FdmVyeSA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPGNyb24tdGltZS1waWNrZXIgW2Zvcm1Hcm91cF09XCJob3VybHlGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cclxuICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtdGFiPlxyXG5cclxuXHJcbiAgICAgIDwhLS0gRGFpbHktLT5cclxuICAgICAgPG1hdC10YWIgY2xhc3M9XCJjcm9uLWVkaXRvci10YWJcIiBsYWJlbD1cIkRhaWx5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlRGFpbHlUYWJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIiBbZm9ybUdyb3VwXT1cImRhaWx5Rm9ybVwiPlxyXG5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJjcm9uLWVkaXRvci1yYWRpby1ncm91cFwiIGZvcm1Db250cm9sTmFtZT1cInN1YlRhYlwiPlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBuYW1lPVwic3ViVGFiXCIgY2xhc3M9XCJjcm9uLWVkaXRvci1yYWRpby1idXR0b25cIiB2YWx1ZT1cImV2ZXJ5RGF5c1wiIGNoZWNrZWQ9XCJjaGVja2VkXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCIgaTE4bj5FdmVyeSA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwiZXZlcnlEYXlzXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGkxOG4+RGF5KHMpPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJkYXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheSBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1wiIFt2YWx1ZV09XCJtb250aERheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7bW9udGhEYXl9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyIGkxOG4+YXQ8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlclxyXG4gICAgICAgICAgICAgICAgZm9ybUdyb3VwTmFtZT1cImV2ZXJ5RGF5c1wiXHJcbiAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuXHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIG5hbWU9XCJzdWJUYWJcIiBjbGFzcz1cImNyb24tZWRpdG9yLXJhZGlvLWJ1dHRvblwiIHZhbHVlPVwiZXZlcnlXZWVrRGF5XCI+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuIGkxOG4+V2VlayBEYXkgKE1PTi1GUkkpIGF0IDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXJcclxuICAgICAgICAgICAgICAgIGZvcm1Hcm91cE5hbWU9XCJldmVyeVdlZWtEYXlcIlxyXG4gICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cclxuICAgICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcblxyXG4gICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC10YWI+XHJcblxyXG4gICAgICA8IS0tIFdlZWtseS0tPlxyXG4gICAgICA8bWF0LXRhYiAgY2xhc3M9XCJjcm9uLWVkaXRvci10YWJcIiBsYWJlbD1cIldlZWtseVwiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZVdlZWtseVRhYlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiPlxyXG5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCI+RXZlcnkgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3ZWVrbHlGb3JtXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJNT05cIiBpMThuPk1vbmRheTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiVFVFXCIgaTE4bj5UdWVzZGF5PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJXRURcIiBpMThuPldlZG5lc2RheTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiVEhVXCIgaTE4bj5UaHVyc2RheTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiRlJJXCIgaTE4bj5GcmlkYXk8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIlNBVFwiIGkxOG4+U2F0dXJkYXk8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIlNVTlwiIGkxOG4+U3VuZGF5PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIiBpMThuPmF0IHRpbWUgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtmb3JtR3JvdXBdPVwid2Vla2x5Rm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHN8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9tYXQtdGFiPlxyXG5cclxuICAgICAgPCEtLSBNb250aGx5LS0+XHJcbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJNb250aGx5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlTW9udGhseVRhYlwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIiBbZm9ybUdyb3VwXT1cIm1vbnRobHlGb3JtXCI+XHJcblxyXG5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwic3ViVGFiXCI+XHJcblxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAgbmFtZT1cIm1vbnRobHktcmFkaW9cIiB2YWx1ZT1cInNwZWNpZmljRGF5XCIgPlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIFNwZXNpZmljIGRheSAtLT5cclxuICAgICAgICAgICAgICA8c3BhbiBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNEYXlcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgaTE4bj5PbiB0aGU8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGkxOG4+RGF5PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aC1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoTGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhMYXN0c1wiIFt2YWx1ZV09XCJtb250aERheXNXaXRoTGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoTGFzdCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3N0YW5kYXJkJ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBpMThuPkRheTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGgtZGF5c1wiICBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoT3V0TGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhPdXRMYXN0c1wiIFt2YWx1ZV09XCJtb250aERheXNXaXRoT3V0TGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoT3V0TGFzdCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgaTE4bj5vZiBldmVyeTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBpMThuPk1vbnRoPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aHMtc21hbGxcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aHNcIiBbbmdDbGFzc109XCJvcHRpb25zLmZvcm1TZWxlY3RDbGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIHNlbGVjdE9wdGlvbnMubW9udGhzXCIgW3ZhbHVlXT1cIm1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7bW9udGh9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBpMThuPmF0IHRpbWU8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtmb3JtR3JvdXBdPVwibW9udGhseUZvcm0uY29udHJvbHMuc3BlY2lmaWNEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cclxuICAgICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gIG5hbWU9XCJtb250aGx5LXJhZGlvXCIgdmFsdWU9XCJzcGVjaWZpY1dlZWtEYXlcIj5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBTcGVzaWZpYyBXZWVrIGRheSAtLT5cclxuICAgICAgICAgICAgICA8c3BhbiBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNXZWVrRGF5XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIGkxOG4+T24gdGhlPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWwgaTE4bj5XZWVrPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwiZGF5LW9yZGVyLWluLW1vbnRoXCIgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhXZWVrXCIgW25nQ2xhc3NdPVwib3B0aW9ucy5mb3JtU2VsZWN0Q2xhc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGhXZWVrIG9mIHNlbGVjdE9wdGlvbnMubW9udGhXZWVrc1wiIFt2YWx1ZV09XCJtb250aFdlZWtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7bW9udGhXZWVrRGlzcGxheShtb250aFdlZWspfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGkxOG4+RGF5PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwid2Vlay1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCIgW25nQ2xhc3NdPVwib3B0aW9ucy5mb3JtU2VsZWN0Q2xhc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZGF5IG9mIHNlbGVjdE9wdGlvbnMuZGF5c1wiIFt2YWx1ZV09XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7ZGF5RGlzcGxheShkYXkpfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIGkxOG4+b2YgZXZlcnk8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBpMThuPk1vbnRoPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGhzLXNtYWxsXCIgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIHNlbGVjdE9wdGlvbnMubW9udGhzXCIgW3ZhbHVlXT1cIm1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e21vbnRofX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIGkxOG4+YXQgdGltZTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXIgW2Zvcm1Hcm91cF09XCJtb250aGx5Rm9ybS5jb250cm9scy5zcGVjaWZpY1dlZWtEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cclxuICAgICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LXRhYj5cclxuXHJcbiAgICAgIDwhLS0gWWVhcmx5LS0+XHJcbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgIGxhYmVsPVwiWWVhcmx5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlWWVhcmx5VGFiXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwieWVhcmx5Rm9ybVwiPlxyXG5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwic3ViVGFiXCI+XHJcblxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBuYW1lPVwieWVhcmx5LXJhZGlvXCIgdmFsdWU9XCJzcGVjaWZpY01vbnRoRGF5XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBpMThuPk9uIHRoZTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aERheVwiICpuZ0lmPVwib3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6J1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBpMThuPkRheTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aC1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoTGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhMYXN0c1wiIFt2YWx1ZV09XCJtb250aERheXNXaXRoTGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7bW9udGhEYXlEaXNwbGF5KG1vbnRoRGF5c1dpdGhMYXN0KX19XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhEYXlcIiAqbmdJZj1cIm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3N0YW5kYXJkJ1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBpMThuPkRheTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aC1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGhEYXlzV2l0aE91dExhc3Qgb2Ygc2VsZWN0T3B0aW9ucy5tb250aERheXNXaXRoT3V0TGFzdHNcIiBbdmFsdWVdPVwibW9udGhEYXlzV2l0aE91dExhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoT3V0TGFzdCl9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyIGkxOG4+b2Y8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhEYXlcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWwgaTE4bj5Nb250aDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGlzcGxheShtb250aCl9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyIGkxOG4+YXQgdGltZTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJ5ZWFybHlGb3JtLmNvbnRyb2xzLnNwZWNpZmljTW9udGhEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gbmFtZT1cInllYXJseS1yYWRpb1wiIHZhbHVlPVwic3BlY2lmaWNNb250aFdlZWtcIiBbbmdDbGFzc109XCJzdGF0ZS5mb3JtUmFkaW9DbGFzc1wiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgaTE4bj5PbiB0aGU8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhXZWVrXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGkxOG4+V2VlazwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJkYXktb3JkZXItaW4tbW9udGhcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFdlZWtcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aFdlZWsgb2Ygc2VsZWN0T3B0aW9ucy5tb250aFdlZWtzXCIgW3ZhbHVlXT1cIm1vbnRoV2Vla1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7bW9udGhXZWVrRGlzcGxheShtb250aFdlZWspfX1cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aFdlZWtcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWwgaTE4bj5EYXk8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwid2Vlay1kYXlzXCIgIGZvcm1Db250cm9sTmFtZT1cImRheVwiID5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGRheSBvZiBzZWxlY3RPcHRpb25zLmRheXNcIiBbdmFsdWVdPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tkYXlEaXNwbGF5KGRheSl9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyIGkxOG4+b2Y8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhXZWVrXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGkxOG4+TW9udGg8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGhzXCIgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIHNlbGVjdE9wdGlvbnMubW9udGhzXCIgW3ZhbHVlXT1cIm1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3ttb250aERpc3BsYXkobW9udGgpfX1cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBpMThuPmF0IHRpbWU8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwieWVhcmx5Rm9ybS5jb250cm9scy5zcGVjaWZpY01vbnRoV2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxyXG4gICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtdGFiPlxyXG5cclxuICAgICAgPCEtLSBBZHZhbmNlZC0tPlxyXG4gICAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiIGxhYmVsPVwiQWR2YW5jZWRcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVBZHZhbmNlZFRhYlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwiYWR2YW5jZWRGb3JtXCI+XHJcblxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsIGkxOG4+RXhwcmVzc2lvbjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkdmFuY2VkLWNyb24tZWRpdG9yLWlucHV0XCIgZm9ybUNvbnRyb2xOYW1lPVwiZXhwcmVzc2lvblwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtdGFiPlxyXG4gICAgPC9tYXQtdGFiLWdyb3VwPlxyXG48L3NlY3Rpb24+XHJcbiJdfQ==