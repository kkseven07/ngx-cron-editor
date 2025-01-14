import { ControlContainer } from '@angular/forms';
import * as i0 from "@angular/core";
export interface TimePickerModel {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
export declare class TimePickerComponent {
    parent: ControlContainer;
    disabled: any;
    use24HourTime: boolean;
    hideHours: boolean;
    hideMinutes: boolean;
    hideSeconds: boolean;
    minutes: number[];
    seconds: number[];
    hourTypes: string[];
    get hours(): number[];
    constructor(parent: ControlContainer);
    static ɵfac: i0.ɵɵFactoryDeclaration<TimePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimePickerComponent, "cron-time-picker", never, { "disabled": "disabled"; "use24HourTime": "use24HourTime"; "hideHours": "hideHours"; "hideMinutes": "hideMinutes"; "hideSeconds": "hideSeconds"; }, {}, never, never>;
}
