document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  
    //console.log('READYSTATE', xhr.readyState);

  // Used to have to do this: 
  // xhr.onreadystatechange = function() {
    // console.log('READYSTATE', xhr.readyState);
    //if(this.status === 200 && this.readyState === 4){
        //console.log(this.responseText);
    //}
  

  // Optional Used for Spinners/loaders during readystate 3 to show graphic while loading
//xhr.onprogress = function(){
  //console.log('READYSTATE', xhr.readyState);
//}

  // Now we can just do this:
  xhr.onload = function(){
    if(this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function() {
    console.log('Resuest Error...');
  }

  xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
