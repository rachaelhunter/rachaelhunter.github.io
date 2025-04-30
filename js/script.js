function toId(str) {
    return str.toLowerCase().replace(/[^0-9a-z]/g, '');
}

function buildMenu(image) {
    const items = ['HOME', 'REPERTOIRE', 'BIO', 'MEDIA', 'PERFORMANCES', 'CONTACT']
    const buttons = items.map(name => {
        let id = toId(name);
        if (id === 'home') id = 'index';

        return `<a class="menu-button" href="${id}.html">${name}</a>`;
    })
    const spacing = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    
    const menu = document.getElementById('menu');

    if (image) {
        menu.style.backgroundImage = `url("images/${image}")`;
        menu.style.color = 'white';
    } else {
        menu.style.height = '50px';
    }

    menu.innerHTML = buttons.join(spacing);
}

function loadPerformances() {
    let elem = document.getElementById('contents');

    let buffer = '';
    buffer += `Upcoming:<br /><ul style="padding-left: 50px">${Upcoming.map(l => `<li>${l}</li>`).join('')}</ul><br />`
    buffer += `Past:<br /><ul style="padding-left: 50px">${Past.map(l => `<li>${l}</li>`).join('')}</ul>`;
    elem.innerHTML = buffer;
}