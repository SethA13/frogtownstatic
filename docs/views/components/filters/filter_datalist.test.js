"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_test_renderer_1 = __importStar(require("react-test-renderer"));
var memory_data_loader_1 = require("../../../data/memory_data_loader");
var filter_datalist_1 = __importDefault(require("./filter_datalist"));
it('Shows options after maps are loaded.', function () { return __awaiter(void 0, void 0, void 0, function () {
    var mockLoader, setValue, component;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mockLoader = new memory_data_loader_1.MemoryDataLoader();
                setValue = jest.fn(function (_value) { });
                component = react_test_renderer_1.default.create(react_1.default.createElement(filter_datalist_1.default, { map: 'SetCodeToSetName', otherRequiredMaps: ['IDToSetCode'], loader: mockLoader, visible: true, value: '', setValue: setValue }, "Set"));
                expect(component.root.findAllByType('div')[0].props.style.display).toEqual('inline-block');
                expect(component.root.findByType('datalist').children.length).toBe(0);
                // Load just one map. There should still be no options available, because we can't show results until the other maps
                // are loaded.
                return [4 /*yield*/, react_test_renderer_1.act(function () {
                        mockLoader.setMapDataLoaded('SetCodeToSetName', { 'setA': 'Set A Full', 'setB': 'Set B Full', 'setC': 'Set C Full' });
                    })];
            case 1:
                // Load just one map. There should still be no options available, because we can't show results until the other maps
                // are loaded.
                _a.sent();
                expect(component.root.findByType('datalist').children.length).toBe(0);
                // Load the remaining map, verify the options are present.
                return [4 /*yield*/, react_test_renderer_1.act(function () {
                        mockLoader.setMapDataLoaded('IDToSetCode', { '1': 'setA', '2': 'setA', '3': 'setB' });
                    })];
            case 2:
                // Load the remaining map, verify the options are present.
                _a.sent();
                expect(component.root.findByType('datalist').children.length).toBe(3);
                expect(component.root.findByType('datalist').findAllByType('option').map(function (o) { return o.props; })).toEqual([
                    { value: 'setA', children: 'Set A Full' },
                    { value: 'setB', children: 'Set B Full' },
                    { value: 'setC', children: 'Set C Full' },
                ]);
                return [2 /*return*/];
        }
    });
}); });
it('Hidden when not enabled.', function () { return __awaiter(void 0, void 0, void 0, function () {
    var mockLoader, setValue, component;
    return __generator(this, function (_a) {
        mockLoader = new memory_data_loader_1.MemoryDataLoader();
        setValue = jest.fn(function (_value) { });
        component = react_test_renderer_1.default.create(react_1.default.createElement(filter_datalist_1.default, { map: 'SetCodeToSetName', otherRequiredMaps: ['IDToSetCode'], loader: mockLoader, visible: false, value: '', setValue: setValue }, "Set"));
        expect(component.root.findAllByType('div')[0].props.style.display).toEqual('none');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=filter_datalist.test.js.map