'use strict';

const QRCode = require('qrcode');

module.exports = {
  toDataURL: (text, opts) => QRCode.toDataURL(text, opts),
  toString: (text, opts) => QRCode.toString(text, { type: 'terminal', ...opts }),
  toFile: (path, text, opts) => QRCode.toFile(path, text, opts)
};
