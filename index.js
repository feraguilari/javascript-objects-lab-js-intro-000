var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value })
}
function deleteFromObjectByKey(object, key){
  var clone = object
  delete clone[key]
  return clone
}
