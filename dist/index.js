"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os")); // Import the os module
const app = (0, express_1.default)();
const port = 3000; // You can choose any port
app.get('/hello', (req, res) => {
    const serverName = os_1.default.hostname(); // Get the hostname
    res.send(`hello from ${serverName}`);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
