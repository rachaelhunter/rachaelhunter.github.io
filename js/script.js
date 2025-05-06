function toId(str) {
    return str.toLowerCase().replace(/[^0-9a-z]/g, '');
}

function buildMenu(image, position) {
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
        if (position) {
            menu.style.backgroundPosition = `${position[0]}% ${position[1]}%`
        }
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

function createEmbed(url) {
    return `<iframe width="1202" height="676" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

function loadMedia() {
    let elem = document.getElementById('contents');
    let buffer = [];

    for (const link of Media) {
        let parts = link.split(/[/=]/g);
        let bit = parts[parts.length - 1];
        let embed = `https://www.youtube.com/embed/${bit}`
        buffer.push(createEmbed(embed))
    }
    elem.innerHTML = buffer.join('<br />')
}

function loadRepertoire () {
    let elem = document.getElementById('contents');

    let SoloRep = {};
    for (const line of Solo) {
        let [composer, title] = line;
        if (!SoloRep[composer]) SoloRep[composer] = [];
        SoloRep[composer].push(title);
    }

    let ArtSongRep = {};
    for (const line of ArtSong) {
        let [composer, title] = line;
        if (!ArtSongRep[composer]) ArtSongRep[composer] = [];
        ArtSongRep[composer].push(title);
    }

    let buffer = ['<h2>Solo</h2>']
    let solo_composers = Object.keys(SoloRep).sort();
    for (const composer of solo_composers) {
        buffer.push(`<strong>${composer}</strong><br />${SoloRep[composer].sort().join('<br />')}`);
    }

    buffer.push('<br /><br /><h2>Art Song</h2>')
    let AS_composers = Object.keys(ArtSongRep).sort();
    for (const composer of AS_composers) {
        buffer.push(`<strong>${composer}</strong><br />${ArtSongRep[composer].sort().join('<br />')}`);
    }

    elem.innerHTML = buffer.join('<br />')
}