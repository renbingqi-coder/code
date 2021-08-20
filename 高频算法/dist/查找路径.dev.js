"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// //查找路径
var data = [{
  "id": "1",
  "sub": [{
    "id": "2",
    "sub": [{
      "id": "3",
      "sub": null
    }]
  }]
}, {
  "id": "7",
  "sub": [{
    "id": "8",
    "sub": [{
      "id": "9",
      "sub": null
    }]
  }]
}, {
  "id": "10",
  "sub": null
}]; //     id = "1" => ["1"]
//     id = "9" => ["7", "8", "9"]
//     id = "100"=> []
//     PS: id 全局唯一，无序
//     function getPath (data, id) {}

function getPath(data, id) {
  var res = null;

  var setFather = function setFather(data) {
    var father = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (data.length === 0) return;
    data = data.map(function (el) {
      if (el.id === id) {
        res = _objectSpread({}, el, {
          father: father
        });
      }

      if (el.sub) {
        return _objectSpread({}, el, {
          sub: setFather(el.sub, _objectSpread({}, el, {
            father: father
          })),
          father: father
        });
      }

      return _objectSpread({}, el, {
        father: father
      });
    });
    return data;
  };

  setFather(data);
  var result = [];

  while (res) {
    console.log(res);
    result.unshift(res.id);
    res = res.father;
  }

  return result;
}
/**
 * 回朔法
 * @param {*} data 
 * @param {*} id 
 * @returns 
 */


function getpath(data, id) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var result = [];

  var get1 = function get1(data, id) {
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (data.length === 0) {
      return;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var obj = _step.value;
        console.log(path);
        path.push(obj.id);

        if (obj.id === id) {
          console.log(path);
          result = path;
          return;
        } // console.log(obj,path);


        var children = obj.sub ? obj.sub : [];
        getpath(children, id, path); //遍历

        path.pop(); //回溯
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  get1(data, id);
  return result;
}

console.log(getpath(data, "2"));