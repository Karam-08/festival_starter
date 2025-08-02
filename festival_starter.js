// Starter Data
const festivalData = {
    bands:[
        {name: 'Cosmic Echoes', genre: 'Rock', stage: 'Main Stage', time: '9:00 PM'},
        {name: 'Neon Dreams', genre: 'Electronic', stage: 'Starlight Stage', time: '8:30 PM'},
        {name: 'Urban Flow', genre: 'Hip Hop', stage: 'Main Stage', time: '7:00 PM'},
        {name: 'Aurora Haze', genre: 'Indie', stage: 'Acoustic Tent', time: '6:00 PM'},
        {name: 'Midnight Train', genre: 'Rock', stage: 'Main Stage', time: '5:00 PM'},
        {name: 'Soul Spectrum', genre: 'R&B', stage: 'Starlight Stage', time: '4:00 PM'}
    ],
    attendees:[
        {name: 'Alex Chen', city: 'Los Angeles', vip: true},
        {name: 'Maya Singh', city: 'San Francisco', vip: false},
        {name: 'Chris Lee', city: 'Los Angeles', vip: false},
        {name: 'Zoe Hart', city: 'Seattle', vip: true}
    ]
};

const reportOutput = document.getElementById('report-output');

function appendReport(title, content) {
    const section = document.createElement('div');
    section.innerHTML = `<h2>${title}</h2><pre>${content}</pre>`;
    reportOutput.appendChild(section);
}

// Task 1
const task1 = festivalData.bands.forEach(band =>{
    console.log(`${band.name} is performing at ${band.time} on the ${band.stage}.`)
})
// We use forEach because we don't need a new array back. We just want to print text for each item.

// Task 2
const bandSummaries = festivalData.bands.map(band => `${band.name} (${band.genre})`);
console.log(bandSummaries);
// Unlike forEach which would require an empty array to put values in, map does that automatically.

// Task 3
const rockBands = festivalData.bands.filter(band => band.genre === "Rock");
console.log(rockBands);
// We use filter to find all of the bands that match the rock condition unlike find which only gets one match.

// Task 4
neonDreams = festivalData.bands.find(band => band.name === 'Neon Dreams')
console.log(neonDreams)
// We use find because we only care about one match.