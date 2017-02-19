 import './index.css';

import {getUsers, deleteUser, updateUser} from './api/userApi';

//Populate table of users via API call;
getUsers().then(result=>{
  let usersBody="";

  result.forEach(user =>{
    usersBody += `<tr>
      <td><input type="text" name="people[][firstname]" value=${user.firstName} /></td>
      <td><input type="text" name="people[][surname]" value=${user.lastName} /></td>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td><a href="#" data-id="${user.id}" class="updateUser">Update</a></td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link =>{
    link.onclick = function(event){
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });

   const updateLinks = global.document.getElementsByClassName('updateUser');
   Array.from(updateLinks, link =>{
    link.onclick = function(event){
      const element = event.target;
      event.preventDefault();
      const row = element.parentNode.parentNode;
      var tds = row.getElementsByTagName("td");
      var fn = tds[0].children[0].value;
      var ln = tds[1].children[0].value;
      updateUser(element.attributes["data-id"].value, fn, ln);
    };
  });
});
