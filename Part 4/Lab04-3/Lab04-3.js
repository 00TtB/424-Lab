function outside(){
    const o = document.querySelector('.all');
    o.style.backgroundColor = 'red';
}

function inside(){
    const o = document.querySelector('.in');
    o.style.backgroundColor = 'pink';
}

function reset(){
    const reout = document.querySelector('.all');
    const rein = document.querySelector('.in');
    reout.style.backgroundColor = 'beige';
    rein.style.backgroundColor = 'beige';
}

const outs = document.querySelector('.all');
outs.addEventListener('click', outside);
const ins = document.querySelector('.in');
ins.addEventListener('click', inside);
const res = document.querySelector('.re');
res.addEventListener('click', reset);