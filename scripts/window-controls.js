const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('min-button').addEventListener('click', () => {
    ipcRenderer.send('window-minimize');
  });

  document.getElementById('max-button').addEventListener('click', () => {
    ipcRenderer.send('window-maximize');
  });

  document.getElementById('close-button').addEventListener('click', () => {
    ipcRenderer.send('window-close');
  });

});
