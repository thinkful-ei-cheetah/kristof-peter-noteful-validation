import { Component } from 'react'

export default class API extends Component{

    static apiGet() { 
        
    const searchURL = 'https://noteful-server-ppae.herokuapp.com/api/db';

    // const queryString = this.formatQueryParams(data);

    const url = searchURL;
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    return fetch(url, options)
    }

    static apiDelete(noteId) {

        const searchURL = `https://noteful-server-ppae.herokuapp.com/api/notes/${noteId}/`;

    // const queryString = this.formatQueryParams(data);
    const url = searchURL;

    const options = {
      method: 'DELETE',
      headers: {
        
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
    }

    static apiPost(data){
      

      if(data.type === 'folders') {  
        const itemName = {name: data.datum.name};
        const jsonName = JSON.stringify(itemName)
        const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: jsonName
          };

          return fetch(`https://noteful-server-ppae.herokuapp.com/api/${data.type}`, options); 
}
else{
  const itemBody = {name: data.datum.name, content:data.datum.content , modified:data.datum.modified, folderId:data.datum.folderId}
  const jsonBody = JSON.stringify(itemBody)
  const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonBody
    };
    return fetch(`https://noteful-server-ppae.herokuapp.com/api/${data.type}`, options); 
}
}

}

