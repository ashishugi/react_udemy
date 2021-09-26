// all the functions that are required in other place example actions ,reducer etc.

// email:"'a@a.com
export function getFormBody(params) {
    let formBody = [];
    for (let property in params) {
      //encode => 'email'
      let encodedKey = encodeURIComponent(property); // take property name ex: 'user name' =>'user%20name'
      // encode 'a@a.com
      let encodedValue = encodeURIComponent(params[property]); // encode the value of properties
      // below will make -> ['email=a@a.com','username=ashwin']
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&'); //email=a@a.com&username=ashwin
  }
  
  export function getAuthTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }