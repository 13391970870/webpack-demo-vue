import Vue from 'vue'
import { $getJson } from '@/api/service.js';
import jsons from '@@/data/json/message.json'

const testRegExp = (value) => {
  /*let rule = /[0-9]+/*/
  /*let rule = /runoo*b/*/
  let rule = /\S*/
  console.log(typeof rule)
  return rule +  String(value).match(rule)
}

const message = (value) => {
  return jsons[value];
}


function install() {
  Vue.filter('testRegExp', testRegExp)
  Vue.filter('message', message)
}


export default install