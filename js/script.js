function toId(str) {
    return str.toLowerCase().replace(/[^0-9a-z]/g, '');
}

function buildMenu(image) {
    const items = ['HOME', 'REPERTOIRE', 'BIO', 'MEDIA', 'PERFORMANCES', 'CONTACT']
    const buttons = items.map(name => {
        let id = toId(name);
        if (id === 'home') id = '';

        return `<a class="menu-button" href="${id}">${name}</a>`;
    })
    const spacing = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    
    let menu = document.getElementById('menu');

    if (image) menu.backgroundImage = `images/${image}`;
    else menu.height = '100px';

    menu.innerHTML = buttons.join(spacing);
}

function fill() {

}