(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/material/tabs'), require('@angular/material/radio'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('@winarg/ngx-cron-editor', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/form-field', '@angular/material/select', '@angular/material/core', '@angular/material/tabs', '@angular/material/radio', '@angular/material/checkbox', '@angular/material/input', '@angular/material/list'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.winarg = global.winarg || {}, global.winarg["ngx-cron-editor"] = {}), global.ng.core, global.ng.forms, global.ng.common, global.ng.material.formField, global.ng.material.select, global.ng.material.core, global.ng.material.tabs, global.ng.material.radio, global.ng.material.checkbox, global.ng.material.input, global.ng.material.list));
})(this, (function (exports, i0, i1, i3, i3$1, i4, i5, i2, i5$1, i9, i10, list) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r5 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", hour_r5);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(hour_r5);
        }
    }
    function TimePickerComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "mat-form-field");
            i0__namespace.ɵɵelementStart(2, "mat-label");
            i0__namespace.ɵɵi18n(3, 2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-select", 3);
            i0__namespace.ɵɵtemplate(5, TimePickerComponent_ng_container_1_mat_option_5_Template, 2, 2, "mat-option", 4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.hours);
        }
    }
    function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1, ":");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var minute_r8 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", minute_r8);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(minute_r8);
        }
    }
    function TimePickerComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TimePickerComponent_ng_container_2_span_1_Template, 2, 0, "span", 1);
            i0__namespace.ɵɵelementStart(2, "mat-form-field");
            i0__namespace.ɵɵelementStart(3, "mat-label");
            i0__namespace.ɵɵi18n(4, 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "mat-select", 7);
            i0__namespace.ɵɵtemplate(6, TimePickerComponent_ng_container_2_mat_option_6_Template, 2, 2, "mat-option", 4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r1.hideHours);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r1.minutes);
        }
    }
    function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1, ":");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var second_r11 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", second_r11);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(second_r11);
        }
    }
    function TimePickerComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TimePickerComponent_ng_container_3_span_1_Template, 2, 0, "span", 1);
            i0__namespace.ɵɵelementStart(2, "mat-form-field");
            i0__namespace.ɵɵelementStart(3, "mat-label");
            i0__namespace.ɵɵi18n(4, 8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "mat-select", 9);
            i0__namespace.ɵɵtemplate(6, TimePickerComponent_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r2.seconds);
        }
    }
    function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hourType_r13 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", hourType_r13);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(hourType_r13);
        }
    }
    function TimePickerComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "span");
            i0__namespace.ɵɵtext(2, ". ");
            i0__namespace.ɵɵelementStart(3, "mat-form-field");
            i0__namespace.ɵɵelementStart(4, "mat-select", 10);
            i0__namespace.ɵɵtemplate(5, TimePickerComponent_ng_container_4_mat_option_5_Template, 2, 2, "mat-option", 4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r3.hourTypes);
        }
    }
    function range(start, end) {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = start;
                    _a.label = 1;
                case 1:
                    if (!(i <= end)) return [3 /*break*/, 4];
                    return [4 /*yield*/, i];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    var TimePickerComponent = /** @class */ (function () {
        function TimePickerComponent(parent) {
            this.parent = parent;
            this.use24HourTime = true;
            this.hideHours = false;
            this.hideMinutes = false;
            this.hideSeconds = true;
            this.minutes = __spreadArray([], __read(range(0, 59)));
            this.seconds = __spreadArray([], __read(range(0, 59)));
            this.hourTypes = ['AM', 'PM'];
        }
        Object.defineProperty(TimePickerComponent.prototype, "hours", {
            get: function () {
                return this.use24HourTime ? __spreadArray([], __read(range(0, 23))) : __spreadArray([], __read(range(0, 12)));
            },
            enumerable: false,
            configurable: true
        });
        return TimePickerComponent;
    }());
    /** @nocollapse */ TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.ControlContainer)); };
    /** @nocollapse */ TimePickerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [i0__namespace.ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: function () {
            var i18n_0;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_660968041670905112$$SRC_CRON_TIME_PICKER_COMPONENT_TS__1 = goog.getMsg("Hour(s)");
                i18n_0 = MSG_EXTERNAL_660968041670905112$$SRC_CRON_TIME_PICKER_COMPONENT_TS__1;
            }
            else {
                i18n_0 = $localize(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([":\u241F3109dbd5cf50e128c7236f52363640ceed87c820\u241F660968041670905112:Hour(s)"], [":\u241F3109dbd5cf50e128c7236f52363640ceed87c820\u241F660968041670905112:Hour(s)"])));
            }
            var i18n_2;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2365388243339409921$$SRC_CRON_TIME_PICKER_COMPONENT_TS__3 = goog.getMsg("Minute(s)");
                i18n_2 = MSG_EXTERNAL_2365388243339409921$$SRC_CRON_TIME_PICKER_COMPONENT_TS__3;
            }
            else {
                i18n_2 = $localize(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject([":\u241Fa57842fbab5ade4b6a8970e5f10005993cae74e6\u241F2365388243339409921:Minute(s)"], [":\u241Fa57842fbab5ade4b6a8970e5f10005993cae74e6\u241F2365388243339409921:Minute(s)"])));
            }
            var i18n_4;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1255117480222066438$$SRC_CRON_TIME_PICKER_COMPONENT_TS__5 = goog.getMsg("Second(s)");
                i18n_4 = MSG_EXTERNAL_1255117480222066438$$SRC_CRON_TIME_PICKER_COMPONENT_TS__5;
            }
            else {
                i18n_4 = $localize(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject([":\u241F8b8da66d760526670ade423f15085ea222a1df56\u241F1255117480222066438:Second(s)"], [":\u241F8b8da66d760526670ade423f15085ea222a1df56\u241F1255117480222066438:Second(s)"])));
            }
            return [[3, "formGroup"], [4, "ngIf"], i18n_0, ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], i18n_2, ["formControlName", "minutes"], i18n_4, ["formControlName", "seconds"], ["formControlName", "hourType"]];
        }, template: function TimePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "span", 0);
                i0__namespace.ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
                i0__namespace.ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
                i0__namespace.ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
                i0__namespace.ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 1, "ng-container", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("formGroup", ctx.parent.control);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.hideHours);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.hideMinutes);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.hideSeconds);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.use24HourTime);
            }
        }, directives: [i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i3__namespace.NgIf, i3__namespace$1.MatFormField, i3__namespace$1.MatLabel, i4__namespace.MatSelect, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i3__namespace.NgForOf, i5__namespace.MatOption], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TimePickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cron-time-picker',
                        templateUrl: './cron-time-picker.template.html',
                        providers: []
                    }]
            }], function () { return [{ type: i1__namespace.ControlContainer }]; }, { disabled: [{
                    type: i0.Input
                }], use24HourTime: [{
                    type: i0.Input
                }], hideHours: [{
                    type: i0.Input
                }], hideMinutes: [{
                    type: i0.Input
                }], hideSeconds: [{
                    type: i0.Input
                }] });
    })();
    var templateObject_1$1, templateObject_2$1, templateObject_3$1;

    var Days = {
        'SUN': 'Sunday',
        'MON': 'Monday',
        'TUE': 'Tuesday',
        'WED': 'Wednesday',
        'THU': 'Thursday',
        'FRI': 'Friday',
        'SAT': 'Saturday'
    };
    var MonthWeeks = {
        '#1': 'First',
        '#2': 'Second',
        '#3': 'Third',
        '#4': 'Fourth',
        '#5': 'Fifth',
        'L': 'Last'
    };
    exports.Months = void 0;
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
    })(exports.Months || (exports.Months = {}));
    ;

    function CronGenComponent_mat_tab_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab", 9);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵelementStart(2, "span", 11);
            i0__namespace.ɵɵi18n(3, 12);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(4, "cron-time-picker", 13);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", ctx_r0.options.use24HourTime)("hideHours", true)("hideSeconds", ctx_r0.options.hideSeconds || !ctx_r0.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab", 14);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵelementStart(2, "span", 11);
            i0__namespace.ɵɵi18n(3, 15);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(4, "cron-time-picker", 16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options.use24HourTime)("hideSeconds", ctx_r1.options.hideSeconds || !ctx_r1.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDay_r8 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", monthDay_r8);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", monthDay_r8, " ");
        }
    }
    function CronGenComponent_mat_tab_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab", 17);
            i0__namespace.ɵɵelementStart(1, "div", 18);
            i0__namespace.ɵɵelementStart(2, "mat-radio-group", 19);
            i0__namespace.ɵɵelementStart(3, "mat-radio-button", 20);
            i0__namespace.ɵɵelementStart(4, "span", 11);
            i0__namespace.ɵɵi18n(5, 21);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "mat-form-field", 22);
            i0__namespace.ɵɵelementStart(7, "mat-label");
            i0__namespace.ɵɵi18n(8, 23);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "mat-select", 24);
            i0__namespace.ɵɵtemplate(10, CronGenComponent_mat_tab_4_mat_option_10_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerStart(11);
            i0__namespace.ɵɵi18n(12, 26);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelement(13, "cron-time-picker", 27);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(14, "mat-radio-button", 28);
            i0__namespace.ɵɵelementStart(15, "span");
            i0__namespace.ɵɵi18n(16, 29);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(17, "cron-time-picker", 30);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("formGroup", ctx_r2.dailyForm);
            i0__namespace.ɵɵadvance(9);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r2.selectOptions.monthDays);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab", 32);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵelementStart(2, "span", 11);
            i0__namespace.ɵɵtext(3, "Every ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div", 33);
            i0__namespace.ɵɵelementStart(5, "mat-checkbox", 34);
            i0__namespace.ɵɵi18n(6, 35);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "mat-checkbox", 36);
            i0__namespace.ɵɵi18n(8, 37);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "mat-checkbox", 38);
            i0__namespace.ɵɵi18n(10, 39);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "mat-checkbox", 40);
            i0__namespace.ɵɵi18n(12, 41);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(13, "mat-checkbox", 42);
            i0__namespace.ɵɵi18n(14, 43);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(15, "mat-checkbox", 44);
            i0__namespace.ɵɵi18n(16, 45);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(17, "mat-checkbox", 46);
            i0__namespace.ɵɵi18n(18, 47);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(19, "span", 11);
            i0__namespace.ɵɵi18n(20, 48);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(21, "cron-time-picker", 16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("formGroup", ctx_r3.weeklyForm);
            i0__namespace.ɵɵadvance(17);
            i0__namespace.ɵɵproperty("formGroup", ctx_r3.weeklyForm)("use24HourTime", ctx_r3.options.use24HourTime)("hideSeconds", ctx_r3.options.hideSeconds || !ctx_r3.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_7_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDaysWithLast_r15 = ctx.$implicit;
            var ctx_r14 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("value", monthDaysWithLast_r15);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r14.monthDayDisplay(monthDaysWithLast_r15), " ");
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "mat-form-field");
            i0__namespace.ɵɵelementStart(2, "mat-label");
            i0__namespace.ɵɵi18n(3, 68);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-select", 69);
            i0__namespace.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_7_option_5_Template, 2, 2, "option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r9.selectOptions.monthDaysWithLasts);
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_8_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDaysWithOutLast_r18 = ctx.$implicit;
            var ctx_r16 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("value", monthDaysWithOutLast_r18);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r16.monthDayDisplay(monthDaysWithOutLast_r18), " ");
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_8_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r19 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", month_r19);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", month_r19, " ");
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "mat-form-field");
            i0__namespace.ɵɵelementStart(2, "mat-label");
            i0__namespace.ɵɵi18n(3, 70);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-select", 69);
            i0__namespace.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_8_mat_option_5_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerStart(6);
            i0__namespace.ɵɵi18n(7, 71);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelementStart(8, "mat-form-field");
            i0__namespace.ɵɵelementStart(9, "mat-label");
            i0__namespace.ɵɵi18n(10, 72);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "mat-select", 73);
            i0__namespace.ɵɵtemplate(12, CronGenComponent_mat_tab_6_ng_container_8_mat_option_12_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r10.selectOptions.monthDaysWithOutLasts);
            i0__namespace.ɵɵadvance(6);
            i0__namespace.ɵɵproperty("ngClass", ctx_r10.options.formSelectClass);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r10.selectOptions.months);
        }
    }
    function CronGenComponent_mat_tab_6_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthWeek_r20 = ctx.$implicit;
            var ctx_r11 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("value", monthWeek_r20);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r11.monthWeekDisplay(monthWeek_r20), " ");
        }
    }
    function CronGenComponent_mat_tab_6_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r21 = ctx.$implicit;
            var ctx_r12 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("value", day_r21);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r12.dayDisplay(day_r21), " ");
        }
    }
    function CronGenComponent_mat_tab_6_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r22 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", month_r22);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", month_r22, " ");
        }
    }
    function CronGenComponent_mat_tab_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab", 49);
            i0__namespace.ɵɵelementStart(1, "div", 18);
            i0__namespace.ɵɵelementStart(2, "mat-radio-group", 50);
            i0__namespace.ɵɵelementStart(3, "mat-radio-button", 51);
            i0__namespace.ɵɵelementStart(4, "span", 52);
            i0__namespace.ɵɵelementContainerStart(5);
            i0__namespace.ɵɵi18n(6, 53);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵtemplate(7, CronGenComponent_mat_tab_6_ng_container_7_Template, 6, 1, "ng-container", 54);
            i0__namespace.ɵɵtemplate(8, CronGenComponent_mat_tab_6_ng_container_8_Template, 13, 3, "ng-container", 54);
            i0__namespace.ɵɵelementContainerStart(9);
            i0__namespace.ɵɵi18n(10, 55);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelement(11, "cron-time-picker", 56);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "mat-radio-button", 57);
            i0__namespace.ɵɵelementStart(13, "span", 58);
            i0__namespace.ɵɵelementContainerStart(14);
            i0__namespace.ɵɵi18n(15, 59);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelementStart(16, "mat-form-field");
            i0__namespace.ɵɵelementStart(17, "mat-label");
            i0__namespace.ɵɵi18n(18, 60);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(19, "mat-select", 61);
            i0__namespace.ɵɵtemplate(20, CronGenComponent_mat_tab_6_mat_option_20_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(21, "mat-form-field");
            i0__namespace.ɵɵelementStart(22, "mat-label");
            i0__namespace.ɵɵi18n(23, 62);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(24, "mat-select", 63);
            i0__namespace.ɵɵtemplate(25, CronGenComponent_mat_tab_6_mat_option_25_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerStart(26);
            i0__namespace.ɵɵi18n(27, 64);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelementStart(28, "mat-form-field");
            i0__namespace.ɵɵelementStart(29, "mat-label");
            i0__namespace.ɵɵi18n(30, 65);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(31, "mat-select", 66);
            i0__namespace.ɵɵtemplate(32, CronGenComponent_mat_tab_6_mat_option_32_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerStart(33);
            i0__namespace.ɵɵi18n(34, 67);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelement(35, "cron-time-picker", 16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("formGroup", ctx_r4.monthlyForm);
            i0__namespace.ɵɵadvance(6);
            i0__namespace.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "quartz");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "standard");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("disabled", ctx_r4.disabled)("formGroup", ctx_r4.monthlyForm.controls.specificDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
            i0__namespace.ɵɵadvance(8);
            i0__namespace.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r4.selectOptions.monthWeeks);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r4.selectOptions.days);
            i0__namespace.ɵɵadvance(7);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificWeekDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDaysWithLast_r30 = ctx.$implicit;
            var ctx_r29 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("value", monthDaysWithLast_r30);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r29.monthDayDisplay(monthDaysWithLast_r30), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-form-field", 79);
            i0__namespace.ɵɵelementStart(1, "mat-label");
            i0__namespace.ɵɵi18n(2, 93);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "mat-select", 69);
            i0__namespace.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r23 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r23.selectOptions.monthDaysWithLasts);
        }
    }
    function CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDaysWithOutLast_r32 = ctx.$implicit;
            var ctx_r31 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("value", monthDaysWithOutLast_r32);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r31.monthDayDisplay(monthDaysWithOutLast_r32), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_form_field_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-form-field", 79);
            i0__namespace.ɵɵelementStart(1, "mat-label");
            i0__namespace.ɵɵi18n(2, 94);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "mat-select", 69);
            i0__namespace.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r24 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r24.selectOptions.monthDaysWithOutLasts);
        }
    }
    function CronGenComponent_mat_tab_7_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r33 = ctx.$implicit;
            var ctx_r25 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("value", month_r33);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r25.monthDisplay(month_r33), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthWeek_r34 = ctx.$implicit;
            var ctx_r26 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("value", monthWeek_r34);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r26.monthWeekDisplay(monthWeek_r34), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r35 = ctx.$implicit;
            var ctx_r27 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("value", day_r35);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r27.dayDisplay(day_r35), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_option_37_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 31);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r36 = ctx.$implicit;
            var ctx_r28 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("value", month_r36);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r36), " ");
        }
    }
    function CronGenComponent_mat_tab_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab", 74);
            i0__namespace.ɵɵelementStart(1, "div", 18);
            i0__namespace.ɵɵelementStart(2, "mat-radio-group", 50);
            i0__namespace.ɵɵelementStart(3, "mat-radio-button", 75);
            i0__namespace.ɵɵelementContainerStart(4);
            i0__namespace.ɵɵi18n(5, 76);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵtemplate(6, CronGenComponent_mat_tab_7_mat_form_field_6_Template, 5, 1, "mat-form-field", 77);
            i0__namespace.ɵɵtemplate(7, CronGenComponent_mat_tab_7_mat_form_field_7_Template, 5, 1, "mat-form-field", 77);
            i0__namespace.ɵɵelementContainerStart(8);
            i0__namespace.ɵɵi18n(9, 78);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelementStart(10, "mat-form-field", 79);
            i0__namespace.ɵɵelementStart(11, "mat-label");
            i0__namespace.ɵɵi18n(12, 80);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(13, "mat-select", 81);
            i0__namespace.ɵɵtemplate(14, CronGenComponent_mat_tab_7_mat_option_14_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerStart(15);
            i0__namespace.ɵɵi18n(16, 82);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelement(17, "cron-time-picker", 56);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(18, "mat-radio-button", 83);
            i0__namespace.ɵɵelementContainerStart(19);
            i0__namespace.ɵɵi18n(20, 84);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelementStart(21, "mat-form-field", 85);
            i0__namespace.ɵɵelementStart(22, "mat-label");
            i0__namespace.ɵɵi18n(23, 86);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(24, "mat-select", 87);
            i0__namespace.ɵɵtemplate(25, CronGenComponent_mat_tab_7_mat_option_25_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(26, "mat-form-field", 85);
            i0__namespace.ɵɵelementStart(27, "mat-label");
            i0__namespace.ɵɵi18n(28, 88);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(29, "mat-select", 89);
            i0__namespace.ɵɵtemplate(30, CronGenComponent_mat_tab_7_mat_option_30_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerStart(31);
            i0__namespace.ɵɵi18n(32, 90);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelementStart(33, "mat-form-field", 85);
            i0__namespace.ɵɵelementStart(34, "mat-label");
            i0__namespace.ɵɵi18n(35, 91);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(36, "mat-select", 81);
            i0__namespace.ɵɵtemplate(37, CronGenComponent_mat_tab_7_mat_option_37_Template, 2, 2, "mat-option", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerStart(38);
            i0__namespace.ɵɵi18n(39, 92);
            i0__namespace.ɵɵelementContainerEnd();
            i0__namespace.ɵɵelement(40, "cron-time-picker", 56);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("formGroup", ctx_r5.yearlyForm);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "quartz");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "standard");
            i0__namespace.ɵɵadvance(7);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", ctx_r5.state.formRadioClass);
            i0__namespace.ɵɵadvance(7);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r5.selectOptions.monthWeeks);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r5.selectOptions.days);
            i0__namespace.ɵɵadvance(7);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthWeek)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab", 95);
            i0__namespace.ɵɵelementStart(1, "div", 18);
            i0__namespace.ɵɵelementStart(2, "mat-form-field");
            i0__namespace.ɵɵelementStart(3, "mat-label");
            i0__namespace.ɵɵi18n(4, 96);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "input", 97);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("formGroup", ctx_r6.advancedForm);
        }
    }
    var CRON_VALUE_ACCESSOR = {
        provide: i1.NG_VALUE_ACCESSOR,
        // eslint:disable-next-line:no-use-before-declare
        useExisting: i0.forwardRef(function () { return CronGenComponent; }),
        multi: true,
    };
    var CronGenComponent = /** @class */ (function () {
        function CronGenComponent(fb) {
            this.fb = fb;
            this.cronChange = new i0.EventEmitter();
            this.selectOptions = this.getSelectOptions();
            this.localCron = '0 0 1/1 * *';
            this.tabs = [];
            /*
             * ControlValueAccessor
             */
            this.onChange = function (_) {
            };
            this.onTouched = function () {
            };
        }
        Object.defineProperty(CronGenComponent.prototype, "isCronFlavorQuartz", {
            get: function () {
                return this.options.cronFlavor === 'quartz';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "isCronFlavorStandard", {
            get: function () {
                return this.options.cronFlavor === 'standard';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "yearDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '*' : '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "weekDayDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '?' : '*';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "monthDayDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '?' : '*';
            },
            enumerable: false,
            configurable: true
        });
        /* Update the cron output to that of the selected tab.
         * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
         * the value of the form that goes into focus. */
        CronGenComponent.prototype.onTabFocus = function (idx) {
            var index = this.tabs[idx];
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
        };
        CronGenComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.buildTabIndex();
            this.state = this.getDefaultState();
            this.handleModelChange(this.cron);
            var _a = __read(this.options.defaultTime.split(':').map(Number), 3), defaultHours = _a[0], defaultMinutes = _a[1], defaultSeconds = _a[2];
            this.cronForm = new i1.FormControl(this.cron);
            this.minutesForm = this.fb.group({
                hours: [0],
                minutes: [1],
                seconds: [0]
            });
            this.minutesForm.valueChanges.subscribe(function (value) { return _this.computeMinutesCron(value); });
            this.hourlyForm = this.fb.group({
                hours: [1],
                minutes: [0],
                seconds: [0]
            });
            this.hourlyForm.valueChanges.subscribe(function (value) { return _this.computeHourlyCron(value); });
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
            this.dailyForm.valueChanges.subscribe(function (value) { return _this.computeDailyCron(value); });
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
            this.weeklyForm.valueChanges.subscribe(function (next) { return _this.computeWeeklyCron(next); });
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
            this.monthlyForm.valueChanges.subscribe(function (next) { return _this.computeMonthlyCron(next); });
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
            this.yearlyForm.valueChanges.subscribe(function (next) { return _this.computeYearlyCron(next); });
            this.advancedForm = this.fb.group({
                expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
            });
            this.advancedForm.controls.expression.valueChanges.subscribe(function (next) { return _this.computeAdvancedExpression(next); });
        };
        CronGenComponent.prototype.computeMinutesCron = function (state) {
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " 0/" + state.minutes + " * 1/1 * " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
            this.onChange(this.cron);
        };
        CronGenComponent.prototype.computeHourlyCron = function (state) {
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " " + state.minutes + " 0/" + state.hours + " 1/1 * " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
            this.onChange(this.cron);
        };
        CronGenComponent.prototype.computeDailyCron = function (state) {
            switch (state.subTab) {
                case 'everyDays':
                    this.cron = ((this.isCronFlavorQuartz ? state.everyDays.seconds : '') + " " + state.everyDays.minutes + " " + this.hourToCron(state.everyDays.hours, state.everyDays.hourType) + " 1/" + state.everyDays.days + " * " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
                    break;
                case 'everyWeekDay':
                    this.cron = ((this.isCronFlavorQuartz ? state.everyWeekDay.seconds : '') + " " + state.everyWeekDay.minutes + " " + this.hourToCron(state.everyWeekDay.hours, state.everyWeekDay.hourType) + " " + this.monthDayDefaultChar + " * MON-FRI " + this.yearDefaultChar).trim();
                    break;
                default:
                    throw new Error('Invalid cron daily subtab selection');
            }
            this.cronForm.setValue(this.cron);
            this.onChange(this.cron);
        };
        CronGenComponent.prototype.computeWeeklyCron = function (state) {
            var days = this.selectOptions.days
                .reduce(function (acc, day) { return state[day] ? acc.concat([day]) : acc; }, [])
                .join(',');
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " " + state.minutes + " " + this.hourToCron(state.hours, state.hourType) + " " + this.monthDayDefaultChar + " * " + days + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
            this.onChange(this.cron);
        };
        CronGenComponent.prototype.computeMonthlyCron = function (state) {
            switch (state.subTab) {
                case 'specificDay':
                    this.cron = ((this.isCronFlavorQuartz ? state.specificDay.seconds : '') + " " + state.specificDay.minutes + " " + this.hourToCron(state.specificDay.hours, state.specificDay.hourType) + " " + state.specificDay.day + " 1/" + state.specificDay.months + " " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
                    break;
                case 'specificWeekDay':
                    this.cron = ((this.isCronFlavorQuartz ? state.specificWeekDay.seconds : '') + " " + state.specificWeekDay.minutes + " " + this.hourToCron(state.specificWeekDay.hours, state.specificWeekDay.hourType) + " " + this.monthDayDefaultChar + " 1/" + state.specificWeekDay.months + " " + state.specificWeekDay.day + state.specificWeekDay.monthWeek + " " + this.yearDefaultChar).trim();
                    break;
                default:
                    throw new Error('Invalid cron montly subtab selection');
            }
            this.cronForm.setValue(this.cron);
            this.onChange(this.cron);
        };
        CronGenComponent.prototype.computeYearlyCron = function (state) {
            switch (state.subTab) {
                case 'specificMonthDay':
                    this.cron = ((this.isCronFlavorQuartz ? state.specificMonthDay.seconds : '') + " " + state.specificMonthDay.minutes + " " + this.hourToCron(state.specificMonthDay.hours, state.specificMonthDay.hourType) + " " + state.specificMonthDay.day + " " + state.specificMonthDay.month + " " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
                    break;
                case 'specificMonthWeek':
                    this.cron = ((this.isCronFlavorQuartz ? state.specificMonthWeek.seconds : '') + " " + state.specificMonthWeek.minutes + " " + this.hourToCron(state.specificMonthWeek.hours, state.specificMonthWeek.hourType) + " " + this.monthDayDefaultChar + " " + state.specificMonthWeek.month + " " + state.specificMonthWeek.day + state.specificMonthWeek.monthWeek + " " + this.yearDefaultChar).trim();
                    break;
                default:
                    throw new Error('Invalid cron yearly subtab selection');
            }
            this.cronForm.setValue(this.cron);
            this.onChange(this.cron);
        };
        CronGenComponent.prototype.computeAdvancedExpression = function (expression) {
            this.cron = expression;
            this.cronForm.setValue(this.cron);
            this.onChange(this.cron);
        };
        CronGenComponent.prototype.dayDisplay = function (day) {
            return Days[day];
        };
        CronGenComponent.prototype.monthWeekDisplay = function (monthWeekNumber) {
            return MonthWeeks[monthWeekNumber];
        };
        CronGenComponent.prototype.monthDisplay = function (month) {
            return exports.Months[month];
        };
        CronGenComponent.prototype.monthDayDisplay = function (month) {
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
                return "" + month + this.getOrdinalSuffix(month);
            }
        };
        CronGenComponent.prototype.getAmPmHour = function (hour) {
            return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
        };
        CronGenComponent.prototype.getHourType = function (hour) {
            return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
        };
        CronGenComponent.prototype.hourToCron = function (hour, hourType) {
            if (this.options.use24HourTime) {
                return hour;
            }
            else {
                return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
            }
        };
        CronGenComponent.prototype.handleModelChange = function (cron) {
            var _this = this;
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
            var origCron = cron;
            if (cron.split(' ').length === 5 && this.isCronFlavorStandard) {
                cron = "0 " + cron + " *";
            }
            var _a = __read(cron.split(' '), 6), seconds = _a[0], minutes = _a[1], hours = _a[2], dayOfMonth = _a[3], month = _a[4], dayOfWeek = _a[5];
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
                var parsedHours = parseInt(hours, 10);
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
                var parsedHours = parseInt(hours, 10);
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
                this.selectOptions.days.forEach(function (weekDay) { return _this.state.weekly[weekDay] = false; });
                dayOfWeek.split(',').forEach(function (weekDay) { return _this.state.weekly[weekDay] = true; });
                var parsedHours = parseInt(hours, 10);
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
                var parsedHours = parseInt(hours, 10);
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
                var day = dayOfWeek.substr(0, 3);
                var monthWeek = dayOfWeek.substr(3);
                this.activeTab = 'monthly';
                this.selectedIndex = this.calculateActiveTab('monthly'); // 4;
                this.state.monthly.subTab = 'specificWeekDay';
                this.state.monthly.specificWeekDay.monthWeek = monthWeek;
                this.state.monthly.specificWeekDay.day = day;
                this.state.monthly.specificWeekDay.months = parseInt(month.substring(2), 10);
                var parsedHours = parseInt(hours, 10);
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
                var parsedHours = parseInt(hours, 10);
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
                var day = dayOfWeek.substr(0, 3);
                var monthWeek = dayOfWeek.substr(3);
                this.activeTab = 'yearly';
                this.selectedIndex = this.calculateActiveTab('yearly');
                this.state.yearly.subTab = 'specificMonthWeek';
                this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
                this.state.yearly.specificMonthWeek.day = day;
                this.state.yearly.specificMonthWeek.month = parseInt(month, 10);
                var parsedHours = parseInt(hours, 10);
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
        };
        CronGenComponent.prototype.cronIsValid = function (cron) {
            if (cron) {
                var cronParts = cron.split(' ');
                return (this.isCronFlavorQuartz && (cronParts.length === 6
                    || cronParts.length === 7)
                    || (this.isCronFlavorStandard && cronParts.length === 5));
            }
            return false;
        };
        CronGenComponent.prototype.getDefaultState = function () {
            var _a = __read(this.options.defaultTime.split(':').map(Number), 3), defaultHours = _a[0], defaultMinutes = _a[1], defaultSeconds = _a[2];
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
        };
        CronGenComponent.prototype.getOrdinalSuffix = function (value) {
            if (value.length > 1) {
                var secondToLastDigit = value.charAt(value.length - 2);
                if (secondToLastDigit === '1') {
                    return 'th';
                }
            }
            var lastDigit = value.charAt(value.length - 1);
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
        };
        CronGenComponent.prototype.getSelectOptions = function () {
            return {
                months: this.getRange(1, 12),
                monthWeeks: ['#1', '#2', '#3', '#4', '#5', 'L'],
                days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                minutes: this.getRange(0, 59),
                fullMinutes: this.getRange(0, 59),
                seconds: this.getRange(0, 59),
                hours: this.getRange(1, 23),
                monthDays: this.getRange(1, 31),
                monthDaysWithLasts: __spreadArray(__spreadArray(['1W'], __read(__spreadArray([], __read(this.getRange(1, 31).map(String))))), ['LW', 'L']),
                monthDaysWithOutLasts: __spreadArray([], __read(this.getRange(1, 31).map(String))),
                hourTypes: ['AM', 'PM']
            };
        };
        CronGenComponent.prototype.getRange = function (start, end) {
            var length = end - start + 1;
            return Array.apply(null, Array(length)).map(function (_, i) { return i + start; });
        };
        CronGenComponent.prototype.calculateActiveTab = function (requestedTab) {
            var lastIndex = this.tabs.length - 1;
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
        };
        CronGenComponent.prototype.buildTabIndex = function () {
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
        };
        CronGenComponent.prototype.writeValue = function (obj) {
            this.handleModelChange(obj);
        };
        CronGenComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CronGenComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CronGenComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        return CronGenComponent;
    }());
    /** @nocollapse */ CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    /** @nocollapse */ CronGenComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, outputs: { cronChange: "cronChange" }, features: [i0__namespace.ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 10, consts: function () {
            var i18n_0;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__1 = goog.getMsg("Every ");
                i18n_0 = MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__1;
            }
            else {
                i18n_0 = $localize(templateObject_1 || (templateObject_1 = __makeTemplateObject([":\u241Fbe2e3eba8f8d675c0dfd9d573ce6f9da7d394537\u241F3104448548270741911:Every "], [":\u241Fbe2e3eba8f8d675c0dfd9d573ce6f9da7d394537\u241F3104448548270741911:Every "])));
            }
            var i18n_2;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__3 = goog.getMsg("Every ");
                i18n_2 = MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__3;
            }
            else {
                i18n_2 = $localize(templateObject_2 || (templateObject_2 = __makeTemplateObject([":\u241Fbe2e3eba8f8d675c0dfd9d573ce6f9da7d394537\u241F3104448548270741911:Every "], [":\u241Fbe2e3eba8f8d675c0dfd9d573ce6f9da7d394537\u241F3104448548270741911:Every "])));
            }
            var i18n_4;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__5 = goog.getMsg("Every ");
                i18n_4 = MSG_EXTERNAL_3104448548270741911$$SRC_CRON_EDITOR_COMPONENT_TS__5;
            }
            else {
                i18n_4 = $localize(templateObject_3 || (templateObject_3 = __makeTemplateObject([":\u241Fbe2e3eba8f8d675c0dfd9d573ce6f9da7d394537\u241F3104448548270741911:Every "], [":\u241Fbe2e3eba8f8d675c0dfd9d573ce6f9da7d394537\u241F3104448548270741911:Every "])));
            }
            var i18n_6;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_6877003697022351372$$SRC_CRON_EDITOR_COMPONENT_TS__7 = goog.getMsg("Day(s)");
                i18n_6 = MSG_EXTERNAL_6877003697022351372$$SRC_CRON_EDITOR_COMPONENT_TS__7;
            }
            else {
                i18n_6 = $localize(templateObject_4 || (templateObject_4 = __makeTemplateObject([":\u241F6a4a2e0f73188c38fa9907d7e3981269d29faaa4\u241F6877003697022351372:Day(s)"], [":\u241F6a4a2e0f73188c38fa9907d7e3981269d29faaa4\u241F6877003697022351372:Day(s)"])));
            }
            var i18n_8;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5338673541028692262$$SRC_CRON_EDITOR_COMPONENT_TS__9 = goog.getMsg("at");
                i18n_8 = MSG_EXTERNAL_5338673541028692262$$SRC_CRON_EDITOR_COMPONENT_TS__9;
            }
            else {
                i18n_8 = $localize(templateObject_5 || (templateObject_5 = __makeTemplateObject([":\u241F922f626fd7ebb7ceb33f1a9e144d54ab6443e1a6\u241F5338673541028692262:at"], [":\u241F922f626fd7ebb7ceb33f1a9e144d54ab6443e1a6\u241F5338673541028692262:at"])));
            }
            var i18n_10;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2309185182590606015$$SRC_CRON_EDITOR_COMPONENT_TS__11 = goog.getMsg("Week Day (MON-FRI) at ");
                i18n_10 = MSG_EXTERNAL_2309185182590606015$$SRC_CRON_EDITOR_COMPONENT_TS__11;
            }
            else {
                i18n_10 = $localize(templateObject_6 || (templateObject_6 = __makeTemplateObject([":\u241Ff59532f6d1d98d6162adb971dd7ff18a17d8d778\u241F2309185182590606015:Week Day (MON-FRI) at "], [":\u241Ff59532f6d1d98d6162adb971dd7ff18a17d8d778\u241F2309185182590606015:Week Day (MON-FRI) at "])));
            }
            var i18n_12;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_8739442281958563044$$SRC_CRON_EDITOR_COMPONENT_TS__13 = goog.getMsg("Monday");
                i18n_12 = MSG_EXTERNAL_8739442281958563044$$SRC_CRON_EDITOR_COMPONENT_TS__13;
            }
            else {
                i18n_12 = $localize(templateObject_7 || (templateObject_7 = __makeTemplateObject([":\u241Fa43c57a7cbebf57eb33a2eae5e994c91d9887596\u241F8739442281958563044:Monday"], [":\u241Fa43c57a7cbebf57eb33a2eae5e994c91d9887596\u241F8739442281958563044:Monday"])));
            }
            var i18n_14;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_9176037901730521018$$SRC_CRON_EDITOR_COMPONENT_TS__15 = goog.getMsg("Tuesday");
                i18n_14 = MSG_EXTERNAL_9176037901730521018$$SRC_CRON_EDITOR_COMPONENT_TS__15;
            }
            else {
                i18n_14 = $localize(templateObject_8 || (templateObject_8 = __makeTemplateObject([":\u241F48a2a35957ce394eb2c59ae35c99642360af70ee\u241F9176037901730521018:Tuesday"], [":\u241F48a2a35957ce394eb2c59ae35c99642360af70ee\u241F9176037901730521018:Tuesday"])));
            }
            var i18n_16;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_8798932904948432529$$SRC_CRON_EDITOR_COMPONENT_TS__17 = goog.getMsg("Wednesday");
                i18n_16 = MSG_EXTERNAL_8798932904948432529$$SRC_CRON_EDITOR_COMPONENT_TS__17;
            }
            else {
                i18n_16 = $localize(templateObject_9 || (templateObject_9 = __makeTemplateObject([":\u241Fb0af441f9ba8b82952b9ec10fb8c62e8fec67df9\u241F8798932904948432529:Wednesday"], [":\u241Fb0af441f9ba8b82952b9ec10fb8c62e8fec67df9\u241F8798932904948432529:Wednesday"])));
            }
            var i18n_18;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1433683192825895947$$SRC_CRON_EDITOR_COMPONENT_TS__19 = goog.getMsg("Thursday");
                i18n_18 = MSG_EXTERNAL_1433683192825895947$$SRC_CRON_EDITOR_COMPONENT_TS__19;
            }
            else {
                i18n_18 = $localize(templateObject_10 || (templateObject_10 = __makeTemplateObject([":\u241F55c583b99c809818ec27df065ccf05357a6ac10b\u241F1433683192825895947:Thursday"], [":\u241F55c583b99c809818ec27df065ccf05357a6ac10b\u241F1433683192825895947:Thursday"])));
            }
            var i18n_20;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_3730139500618908668$$SRC_CRON_EDITOR_COMPONENT_TS__21 = goog.getMsg("Friday");
                i18n_20 = MSG_EXTERNAL_3730139500618908668$$SRC_CRON_EDITOR_COMPONENT_TS__21;
            }
            else {
                i18n_20 = $localize(templateObject_11 || (templateObject_11 = __makeTemplateObject([":\u241Fe91b54925dc5f490753f60f53ef6f8b4609e6215\u241F3730139500618908668:Friday"], [":\u241Fe91b54925dc5f490753f60f53ef6f8b4609e6215\u241F3730139500618908668:Friday"])));
            }
            var i18n_22;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1830554030016307335$$SRC_CRON_EDITOR_COMPONENT_TS__23 = goog.getMsg("Saturday");
                i18n_22 = MSG_EXTERNAL_1830554030016307335$$SRC_CRON_EDITOR_COMPONENT_TS__23;
            }
            else {
                i18n_22 = $localize(templateObject_12 || (templateObject_12 = __makeTemplateObject([":\u241Fc0d2dd391a3eca8e841a5d0e035cd268280eb68e\u241F1830554030016307335:Saturday"], [":\u241Fc0d2dd391a3eca8e841a5d0e035cd268280eb68e\u241F1830554030016307335:Saturday"])));
            }
            var i18n_24;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_6950140976689343775$$SRC_CRON_EDITOR_COMPONENT_TS__25 = goog.getMsg("Sunday");
                i18n_24 = MSG_EXTERNAL_6950140976689343775$$SRC_CRON_EDITOR_COMPONENT_TS__25;
            }
            else {
                i18n_24 = $localize(templateObject_13 || (templateObject_13 = __makeTemplateObject([":\u241F8339364b054610983b7f2334bb807fff7613bddf\u241F6950140976689343775:Sunday"], [":\u241F8339364b054610983b7f2334bb807fff7613bddf\u241F6950140976689343775:Sunday"])));
            }
            var i18n_26;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_4248249309886370504$$SRC_CRON_EDITOR_COMPONENT_TS__27 = goog.getMsg("at time ");
                i18n_26 = MSG_EXTERNAL_4248249309886370504$$SRC_CRON_EDITOR_COMPONENT_TS__27;
            }
            else {
                i18n_26 = $localize(templateObject_14 || (templateObject_14 = __makeTemplateObject([":\u241Fa474587a82060ac8362c3bfd12348b8571c4b2a0\u241F4248249309886370504:at time "], [":\u241Fa474587a82060ac8362c3bfd12348b8571c4b2a0\u241F4248249309886370504:at time "])));
            }
            var i18n_28;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__29 = goog.getMsg("On the");
                i18n_28 = MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__29;
            }
            else {
                i18n_28 = $localize(templateObject_15 || (templateObject_15 = __makeTemplateObject([":\u241Ff2f580c540fa5b6d61509f67d565457bf75ffc42\u241F2539328935447835151:On the"], [":\u241Ff2f580c540fa5b6d61509f67d565457bf75ffc42\u241F2539328935447835151:On the"])));
            }
            var i18n_30;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__31 = goog.getMsg("at time");
                i18n_30 = MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__31;
            }
            else {
                i18n_30 = $localize(templateObject_16 || (templateObject_16 = __makeTemplateObject([":\u241F33062a762c37a87d10e1e9e23adaf6230a4a742b\u241F6408263129846813839:at time"], [":\u241F33062a762c37a87d10e1e9e23adaf6230a4a742b\u241F6408263129846813839:at time"])));
            }
            var i18n_32;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__33 = goog.getMsg("On the");
                i18n_32 = MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__33;
            }
            else {
                i18n_32 = $localize(templateObject_17 || (templateObject_17 = __makeTemplateObject([":\u241Ff2f580c540fa5b6d61509f67d565457bf75ffc42\u241F2539328935447835151:On the"], [":\u241Ff2f580c540fa5b6d61509f67d565457bf75ffc42\u241F2539328935447835151:On the"])));
            }
            var i18n_34;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5141352019990967744$$SRC_CRON_EDITOR_COMPONENT_TS__35 = goog.getMsg("Week");
                i18n_34 = MSG_EXTERNAL_5141352019990967744$$SRC_CRON_EDITOR_COMPONENT_TS__35;
            }
            else {
                i18n_34 = $localize(templateObject_18 || (templateObject_18 = __makeTemplateObject([":\u241F73339760fe932d2b494728d4366947755d127e00\u241F5141352019990967744:Week"], [":\u241F73339760fe932d2b494728d4366947755d127e00\u241F5141352019990967744:Week"])));
            }
            var i18n_36;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS__37 = goog.getMsg("Day");
                i18n_36 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS__37;
            }
            else {
                i18n_36 = $localize(templateObject_19 || (templateObject_19 = __makeTemplateObject([":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"], [":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"])));
            }
            var i18n_38;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2829964193210082231$$SRC_CRON_EDITOR_COMPONENT_TS__39 = goog.getMsg("of every");
                i18n_38 = MSG_EXTERNAL_2829964193210082231$$SRC_CRON_EDITOR_COMPONENT_TS__39;
            }
            else {
                i18n_38 = $localize(templateObject_20 || (templateObject_20 = __makeTemplateObject([":\u241F017bbb3b061959c594ac75abfebe91ce9432ca93\u241F2829964193210082231:of every"], [":\u241F017bbb3b061959c594ac75abfebe91ce9432ca93\u241F2829964193210082231:of every"])));
            }
            var i18n_40;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__41 = goog.getMsg("Month");
                i18n_40 = MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__41;
            }
            else {
                i18n_40 = $localize(templateObject_21 || (templateObject_21 = __makeTemplateObject([":\u241F5bb4a09a669f55893c9a37a8480c8fa3f7ce5702\u241F5403684285319082289:Month"], [":\u241F5bb4a09a669f55893c9a37a8480c8fa3f7ce5702\u241F5403684285319082289:Month"])));
            }
            var i18n_42;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__43 = goog.getMsg("at time");
                i18n_42 = MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__43;
            }
            else {
                i18n_42 = $localize(templateObject_22 || (templateObject_22 = __makeTemplateObject([":\u241F33062a762c37a87d10e1e9e23adaf6230a4a742b\u241F6408263129846813839:at time"], [":\u241F33062a762c37a87d10e1e9e23adaf6230a4a742b\u241F6408263129846813839:at time"])));
            }
            var i18n_44;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___45 = goog.getMsg("Day");
                i18n_44 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___45;
            }
            else {
                i18n_44 = $localize(templateObject_23 || (templateObject_23 = __makeTemplateObject([":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"], [":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"])));
            }
            var i18n_46;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___47 = goog.getMsg("Day");
                i18n_46 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___47;
            }
            else {
                i18n_46 = $localize(templateObject_24 || (templateObject_24 = __makeTemplateObject([":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"], [":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"])));
            }
            var i18n_48;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2829964193210082231$$SRC_CRON_EDITOR_COMPONENT_TS___49 = goog.getMsg("of every");
                i18n_48 = MSG_EXTERNAL_2829964193210082231$$SRC_CRON_EDITOR_COMPONENT_TS___49;
            }
            else {
                i18n_48 = $localize(templateObject_25 || (templateObject_25 = __makeTemplateObject([":\u241F017bbb3b061959c594ac75abfebe91ce9432ca93\u241F2829964193210082231:of every"], [":\u241F017bbb3b061959c594ac75abfebe91ce9432ca93\u241F2829964193210082231:of every"])));
            }
            var i18n_50;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS___51 = goog.getMsg("Month");
                i18n_50 = MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS___51;
            }
            else {
                i18n_50 = $localize(templateObject_26 || (templateObject_26 = __makeTemplateObject([":\u241F5bb4a09a669f55893c9a37a8480c8fa3f7ce5702\u241F5403684285319082289:Month"], [":\u241F5bb4a09a669f55893c9a37a8480c8fa3f7ce5702\u241F5403684285319082289:Month"])));
            }
            var i18n_52;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__53 = goog.getMsg("On the");
                i18n_52 = MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__53;
            }
            else {
                i18n_52 = $localize(templateObject_27 || (templateObject_27 = __makeTemplateObject([":\u241Ff2f580c540fa5b6d61509f67d565457bf75ffc42\u241F2539328935447835151:On the"], [":\u241Ff2f580c540fa5b6d61509f67d565457bf75ffc42\u241F2539328935447835151:On the"])));
            }
            var i18n_54;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5881876145178332550$$SRC_CRON_EDITOR_COMPONENT_TS__55 = goog.getMsg("of");
                i18n_54 = MSG_EXTERNAL_5881876145178332550$$SRC_CRON_EDITOR_COMPONENT_TS__55;
            }
            else {
                i18n_54 = $localize(templateObject_28 || (templateObject_28 = __makeTemplateObject([":\u241F169eed2bc3e08e1bea977bcc5d799379f6b8a758\u241F5881876145178332550:of"], [":\u241F169eed2bc3e08e1bea977bcc5d799379f6b8a758\u241F5881876145178332550:of"])));
            }
            var i18n_56;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__57 = goog.getMsg("Month");
                i18n_56 = MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__57;
            }
            else {
                i18n_56 = $localize(templateObject_29 || (templateObject_29 = __makeTemplateObject([":\u241F5bb4a09a669f55893c9a37a8480c8fa3f7ce5702\u241F5403684285319082289:Month"], [":\u241F5bb4a09a669f55893c9a37a8480c8fa3f7ce5702\u241F5403684285319082289:Month"])));
            }
            var i18n_58;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__59 = goog.getMsg("at time");
                i18n_58 = MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__59;
            }
            else {
                i18n_58 = $localize(templateObject_30 || (templateObject_30 = __makeTemplateObject([":\u241F33062a762c37a87d10e1e9e23adaf6230a4a742b\u241F6408263129846813839:at time"], [":\u241F33062a762c37a87d10e1e9e23adaf6230a4a742b\u241F6408263129846813839:at time"])));
            }
            var i18n_60;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__61 = goog.getMsg("On the");
                i18n_60 = MSG_EXTERNAL_2539328935447835151$$SRC_CRON_EDITOR_COMPONENT_TS__61;
            }
            else {
                i18n_60 = $localize(templateObject_31 || (templateObject_31 = __makeTemplateObject([":\u241Ff2f580c540fa5b6d61509f67d565457bf75ffc42\u241F2539328935447835151:On the"], [":\u241Ff2f580c540fa5b6d61509f67d565457bf75ffc42\u241F2539328935447835151:On the"])));
            }
            var i18n_62;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5141352019990967744$$SRC_CRON_EDITOR_COMPONENT_TS__63 = goog.getMsg("Week");
                i18n_62 = MSG_EXTERNAL_5141352019990967744$$SRC_CRON_EDITOR_COMPONENT_TS__63;
            }
            else {
                i18n_62 = $localize(templateObject_32 || (templateObject_32 = __makeTemplateObject([":\u241F73339760fe932d2b494728d4366947755d127e00\u241F5141352019990967744:Week"], [":\u241F73339760fe932d2b494728d4366947755d127e00\u241F5141352019990967744:Week"])));
            }
            var i18n_64;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS__65 = goog.getMsg("Day");
                i18n_64 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS__65;
            }
            else {
                i18n_64 = $localize(templateObject_33 || (templateObject_33 = __makeTemplateObject([":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"], [":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"])));
            }
            var i18n_66;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5881876145178332550$$SRC_CRON_EDITOR_COMPONENT_TS__67 = goog.getMsg("of");
                i18n_66 = MSG_EXTERNAL_5881876145178332550$$SRC_CRON_EDITOR_COMPONENT_TS__67;
            }
            else {
                i18n_66 = $localize(templateObject_34 || (templateObject_34 = __makeTemplateObject([":\u241F169eed2bc3e08e1bea977bcc5d799379f6b8a758\u241F5881876145178332550:of"], [":\u241F169eed2bc3e08e1bea977bcc5d799379f6b8a758\u241F5881876145178332550:of"])));
            }
            var i18n_68;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__69 = goog.getMsg("Month");
                i18n_68 = MSG_EXTERNAL_5403684285319082289$$SRC_CRON_EDITOR_COMPONENT_TS__69;
            }
            else {
                i18n_68 = $localize(templateObject_35 || (templateObject_35 = __makeTemplateObject([":\u241F5bb4a09a669f55893c9a37a8480c8fa3f7ce5702\u241F5403684285319082289:Month"], [":\u241F5bb4a09a669f55893c9a37a8480c8fa3f7ce5702\u241F5403684285319082289:Month"])));
            }
            var i18n_70;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__71 = goog.getMsg("at time");
                i18n_70 = MSG_EXTERNAL_6408263129846813839$$SRC_CRON_EDITOR_COMPONENT_TS__71;
            }
            else {
                i18n_70 = $localize(templateObject_36 || (templateObject_36 = __makeTemplateObject([":\u241F33062a762c37a87d10e1e9e23adaf6230a4a742b\u241F6408263129846813839:at time"], [":\u241F33062a762c37a87d10e1e9e23adaf6230a4a742b\u241F6408263129846813839:at time"])));
            }
            var i18n_72;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___73 = goog.getMsg("Day");
                i18n_72 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___73;
            }
            else {
                i18n_72 = $localize(templateObject_37 || (templateObject_37 = __makeTemplateObject([":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"], [":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"])));
            }
            var i18n_74;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___75 = goog.getMsg("Day");
                i18n_74 = MSG_EXTERNAL_1286983255645370171$$SRC_CRON_EDITOR_COMPONENT_TS___75;
            }
            else {
                i18n_74 = $localize(templateObject_38 || (templateObject_38 = __makeTemplateObject([":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"], [":\u241Fefffb64bda94fa4f4493322c5e3717e845d5dc30\u241F1286983255645370171:Day"])));
            }
            var i18n_76;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_2791965473218359494$$SRC_CRON_EDITOR_COMPONENT_TS__77 = goog.getMsg("Expression");
                i18n_76 = MSG_EXTERNAL_2791965473218359494$$SRC_CRON_EDITOR_COMPONENT_TS__77;
            }
            else {
                i18n_76 = $localize(templateObject_39 || (templateObject_39 = __makeTemplateObject([":\u241Fcc697167c19fb984956b08b0e01767da0dce90fa\u241F2791965473218359494:Expression"], [":\u241Fcc697167c19fb984956b08b0e01767da0dce90fa\u241F2791965473218359494:Expression"])));
            }
            return [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndex", "selectedIndexChange"], ["class", "cron-editor-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab"], [1, "cron-editor-tab-content"], [1, "cron-form-label"], i18n_0, [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab"], i18n_2, [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDays", "checked", "checked", 1, "cron-editor-radio-button"], i18n_4, ["formGroupName", "everyDays"], i18n_6, ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], i18n_8, ["formGroupName", "everyDays", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 1, "cron-editor-radio-button"], i18n_10, ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab"], [3, "formGroup"], ["formControlName", "MON", 1, "checkbox-margin"], i18n_12, ["formControlName", "TUE", 1, "checkbox-margin"], i18n_14, ["formControlName", "WED", 1, "checkbox-margin"], i18n_16, ["formControlName", "THU", 1, "checkbox-margin"], i18n_18, ["formControlName", "FRI", 1, "checkbox-margin"], i18n_20, ["formControlName", "SAT", 1, "checkbox-margin"], i18n_22, ["formControlName", "SUN", 1, "checkbox-margin"], i18n_24, i18n_26, ["label", "Monthly", 1, "cron-editor-tab"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay"], ["formGroupName", "specificDay"], i18n_28, [4, "ngIf"], i18n_30, [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], ["name", "monthly-radio", "value", "specificWeekDay"], ["formGroupName", "specificWeekDay"], i18n_32, i18n_34, ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], i18n_36, ["formControlName", "day", 1, "week-days", 3, "ngClass"], i18n_38, i18n_40, ["formControlName", "months", 1, "months-small"], i18n_42, i18n_44, ["formControlName", "day", 1, "month-days"], i18n_46, i18n_48, i18n_50, ["formControlName", "months", 1, "months-small", 3, "ngClass"], ["label", "Yearly", 1, "cron-editor-tab"], ["name", "yearly-radio", "value", "specificMonthDay"], i18n_52, ["formGroupName", "specificMonthDay", 4, "ngIf"], i18n_54, ["formGroupName", "specificMonthDay"], i18n_56, ["formControlName", "month", 1, "months"], i18n_58, ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], i18n_60, ["formGroupName", "specificMonthWeek"], i18n_62, ["formControlName", "monthWeek", 1, "day-order-in-month"], i18n_64, ["formControlName", "day", 1, "week-days"], i18n_66, i18n_68, i18n_70, i18n_72, i18n_74, ["label", "Advanced", 1, "cron-editor-tab"], i18n_76, ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]];
        }, template: function CronGenComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section", 0);
                i0__namespace.ɵɵelementStart(1, "mat-tab-group", 1);
                i0__namespace.ɵɵlistener("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.onTabFocus($event); })("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.selectedIndex = $event; });
                i0__namespace.ɵɵtemplate(2, CronGenComponent_mat_tab_2_Template, 5, 4, "mat-tab", 2);
                i0__namespace.ɵɵtemplate(3, CronGenComponent_mat_tab_3_Template, 5, 3, "mat-tab", 3);
                i0__namespace.ɵɵtemplate(4, CronGenComponent_mat_tab_4_Template, 18, 6, "mat-tab", 4);
                i0__namespace.ɵɵtemplate(5, CronGenComponent_mat_tab_5_Template, 22, 4, "mat-tab", 5);
                i0__namespace.ɵɵtemplate(6, CronGenComponent_mat_tab_6_Template, 36, 15, "mat-tab", 6);
                i0__namespace.ɵɵtemplate(7, CronGenComponent_mat_tab_7_Template, 41, 16, "mat-tab", 7);
                i0__namespace.ɵɵtemplate(8, CronGenComponent_mat_tab_8_Template, 6, 1, "mat-tab", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("backgroundColor", ctx.backgroundColor)("color", ctx.color)("selectedIndex", ctx.selectedIndex);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.options.hideMinutesTab);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.options.hideHourlyTab);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.options.hideDailyTab);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.options.hideWeeklyTab);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.options.hideMonthlyTab);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.options.hideYearlyTab);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.options.hideAdvancedTab);
            }
        }, directives: [i2__namespace.MatTabGroup, i3__namespace.NgIf, i2__namespace.MatTab, TimePickerComponent, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i5__namespace$1.MatRadioGroup, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i5__namespace$1.MatRadioButton, i3__namespace$1.MatFormField, i1__namespace.FormGroupName, i3__namespace$1.MatLabel, i4__namespace.MatSelect, i3__namespace.NgForOf, i5__namespace.MatOption, i9__namespace.MatCheckbox, i3__namespace.NgClass, i1__namespace.NgSelectOption, i1__namespace.ɵNgSelectMultipleOption, i10__namespace.MatInput, i1__namespace.DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{@include mat-elevation(1);}.cron-editor-tab-content[_ngcontent-%COMP%]{height:200px;margin-top:24px;border-radius:8px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-radio[_ngcontent-%COMP%]{width:20px;display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-select[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-input[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-checkbox[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .well-time-wrapper[_ngcontent-%COMP%]{padding-left:20px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .inline-block[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .hour-types[_ngcontent-%COMP%]{width:70px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.cron-editor-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button[_ngcontent-%COMP%]{margin:5px}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CronGenComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cron-editor',
                        templateUrl: './cron-editor.template.html',
                        styleUrls: ['./cron-editor.component.css'],
                        providers: [CRON_VALUE_ACCESSOR]
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, { backgroundColor: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], cron: [{
                    type: i0.Input
                }], cronChange: [{
                    type: i0.Output
                }] });
    })();
    var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39;

    var CronEditorModule = /** @class */ (function () {
        function CronEditorModule() {
        }
        return CronEditorModule;
    }());
    /** @nocollapse */ CronEditorModule.ɵfac = function CronEditorModule_Factory(t) { return new (t || CronEditorModule)(); };
    /** @nocollapse */ CronEditorModule.ɵmod = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineNgModule({ type: CronEditorModule });
    /** @nocollapse */ CronEditorModule.ɵinj = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjector({ providers: [
            { provide: i3$1.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
        ], imports: [[
                i3.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i2.MatTabsModule,
                list.MatListModule,
                i4.MatSelectModule,
                i10.MatInputModule,
                i5$1.MatRadioModule,
                i9.MatCheckboxModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CronEditorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i2.MatTabsModule,
                            list.MatListModule,
                            i4.MatSelectModule,
                            i10.MatInputModule,
                            i5$1.MatRadioModule,
                            i9.MatCheckboxModule
                        ],
                        exports: [TimePickerComponent, CronGenComponent],
                        declarations: [TimePickerComponent, CronGenComponent],
                        providers: [
                            { provide: i3$1.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CronEditorModule, { declarations: [TimePickerComponent, CronGenComponent], imports: [i3.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i2.MatTabsModule,
                list.MatListModule,
                i4.MatSelectModule,
                i10.MatInputModule,
                i5$1.MatRadioModule,
                i9.MatCheckboxModule], exports: [TimePickerComponent, CronGenComponent] });
    })();

    /*
     * Public API Surface of pmsys
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CRON_VALUE_ACCESSOR = CRON_VALUE_ACCESSOR;
    exports.CronEditorModule = CronEditorModule;
    exports.CronGenComponent = CronGenComponent;
    exports.Days = Days;
    exports.MonthWeeks = MonthWeeks;
    exports.TimePickerComponent = TimePickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=winarg-ngx-cron-editor.umd.js.map
