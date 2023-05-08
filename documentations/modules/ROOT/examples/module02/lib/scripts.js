"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _titre = /*#__PURE__*/new WeakMap();
var _sous_titre = /*#__PURE__*/new WeakMap();
var _annee = /*#__PURE__*/new WeakMap();
var _auteur = /*#__PURE__*/new WeakMap();
var Livre = /*#__PURE__*/function () {
  function Livre(titre, sous_titre, annee, auteur) {
    _classCallCheck(this, Livre);
    _classPrivateFieldInitSpec(this, _titre, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _sous_titre, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _annee, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _auteur, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _titre, titre);
    _classPrivateFieldSet(this, _sous_titre, sous_titre);
    _classPrivateFieldSet(this, _annee, annee);
    _classPrivateFieldSet(this, _auteur, auteur);
  }
  _createClass(Livre, [{
    key: "getDescription",
    value: function getDescription() {
      return "".concat(_classPrivateFieldGet(this, _titre), " a \xE9t\xE9 \xE9crit par ").concat(_classPrivateFieldGet(this, _auteur), " en ").concat(_classPrivateFieldGet(this, _annee));
    }
  }]);
  return Livre;
}();