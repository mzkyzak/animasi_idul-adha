
const starsLayer = document.getElementById('starsLayer');
for (let i = 0; i < 150; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
        left: ${Math.random() * 100}%; 
        top: ${Math.random() * 60}%; 
        width: ${sz}px; 
        height: ${sz}px; 
        animation-duration: ${1.5 + Math.random() * 2}s; 
        animation-delay: -${Math.random() * 2}s; 
        opacity: ${0.2 + Math.random() * 0.8};
    `;
    starsLayer.appendChild(s);
}

const ff = document.getElementById('fireflies');
for (let i = 0; i < 12; i++) {
    const f = document.createElement('div');
    f.className = 'firefly';
    const dur = 5 + Math.random() * 8;
    f.style.cssText = `
        left: ${5 + Math.random() * 90}%; 
        top: ${50 + Math.random() * 40}%; 
        --dx: ${(Math.random() - 0.5) * 80}px; 
        --dy: ${(Math.random() - 0.5) * 60}px; 
        --dx2: ${(Math.random() - 0.5) * 120}px; 
        --dy2: ${(Math.random() - 0.5) * 80}px; 
        animation-duration: ${dur}s; 
        animation-delay: -${Math.random() * dur}s;
    `;
    ff.appendChild(f);
}