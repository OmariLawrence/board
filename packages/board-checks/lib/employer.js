"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var employer_1 = require("@board/validation/lib/employer");
var async_1 = require("@quenk/preconditions/lib/async");
var record_1 = require("@quenk/preconditions/lib/async/record");
exports.check = async_1.and(async_1.async(employer_1.validate), record_1.disjoint({
    id: _1.id,
    password: _1.bcrypt
}));
//# sourceMappingURL=employer.js.map