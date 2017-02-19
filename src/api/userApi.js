import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}

export function updateUser(id, firstName, lastName){
  return upd(`users/${id}`, id, firstName,lastName);
}

function get(url){
  return fetch (baseUrl + url).then(onSuccess, onError);
}

function del(url){
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function upd(url,id, fn,ln){
  var record = {
    id:id,
    firstName:fn,
    lastName: ln
  };
  const request = new Request(baseUrl + url, {
    method: 'PUT',
     headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(record)
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error);//eslint-disable-line no-console
}
