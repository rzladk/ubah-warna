const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class','biru-muda');
    document.body.classList.toggle('biru-muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    
}
);

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

const setWarna = () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
};

sMerah.addEventListener('input', setWarna);
sHijau.addEventListener('input', setWarna);
sBiru.addEventListener('input', setWarna);


document.body.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const r = clientX;
    const g = clientY;
    const b = clientY;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
