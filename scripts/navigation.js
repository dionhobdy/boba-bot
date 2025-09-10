document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#new').addEventListener('click', () => {
        window.location.href = 'pages/new.html';
    })

    document.querySelector('#saved').addEventListener('click', () => {
        window.location.href = 'pages/saved.html';
    })

    document.querySelector('#back').addEventListener('click', () => {
        window.location.href = './index.html';
    })
});