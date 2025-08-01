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

// const reportOutput = document.getElementById('report-output');

//  function appendReport(title, content) {
//     const section = document.createElement('div');
//     section.innerHTML = `<h2>${title}</h2><pre>${content}</pre>`;
//     reportOutput.appendChild(section);
// }

// Your code goes here!

// Task 1

// Task 2

// Task 3

// Task 4
neonDreams = festivalData.find(bands => bands.name === 'Neon Dreams')
console.log(neonDreams)