const status = document.querySelector('.status');

let online = () => {
    status.innerText = "Connection Available";
    status.style.background = "#77D970";
};

let offline = () => {
    status.innerText = "No Connection";
    status.style.background = "#E02401";
};

// "window.navigator.onLine" Returns the online status of the browser.
// The property retuens a boolean IDBCursorWithValue, 
// with 'true' meaning online and 'false' meaning offline

if(window.navigator.onLine) {
    online();
}
else{
    offline();
}

window.addEventListener("online",online);
window.addEventListener("offline",offline);