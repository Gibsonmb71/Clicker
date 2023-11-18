// snowfall.js
document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector('.container');

    for (let i = 0; i < 30; i++) {
        let snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        container.appendChild(snowflake);

        let size = Math.random() * 3;
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's'; // Added delay for a staggered effect

        container.appendChild(snowflake);
    }
});
