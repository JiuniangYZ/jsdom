"use strict";
// const os = require("os");

exports.implementation = class NavigatorConcurrentHardwareImpl {
  get hardwareConcurrency() {
    // return os.cpus().length;
    // 感觉根本没啥用
    return 1;
  }
};
