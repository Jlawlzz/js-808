"use strict";
class Pad {
    constructor(type, identifier, active, selected) {
        this.type = type;
        this.identifier = identifier;
        this.active = active;
        this.selected = selected;
        this.active = false;
        this.selected = false;
    }
    toggleSelected() {
        this.selected = !this.selected;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Pad;
