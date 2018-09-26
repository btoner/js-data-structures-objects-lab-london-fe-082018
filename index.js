// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return driver = Object.assign({name: 'Sam', address: '11 Broadway'}, driver);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return driver = Object.assign({name: 'Sam', address: '12 Broadway' }, driver);
}

function deleteFromDriverByKey(driver, key){
  
}

function destructivelyDeleteFromDriverByKey(){
  
}