module.exports = function InstanceOf(obj, type) {
  if(obj === null) return type === 'null';
  if(type === 'array') type = 'Array';
  var t = typeof obj;
  if(t === 'object') {
    if(type.toLowerCase() === t) return true; // Object === object
    if(obj.constructor.name === type) return true;
    if(obj.constructor.toString().match(/function\s*(\w*)/)[1] === type) return true;
    return InstanceOf(Object.getPrototypeOf(obj), type);
  } else {
    return t === type;
  }
};
