const f=require('../../../verifica.js');

//test funzione offusca
test('controllo stringa BABBO',()=>{
    expect(f.offusca('BABBO')).toBe('84880');
});

test('controllo stringa abbonati',()=>{
    expect(f.offusca('abbonati')).toBe('4880N471');
});

test('controllo stringa Angelo Chiapparo',()=>{
    expect(f.offusca('Angelo Chiapparo')).toBe('4ng3l0 ch14pp4r0');
});

test('controllo stringa Antonio',()=>{
    expect(f.offusca('Antonio')).toBe('4N70N10');
});

//test funzione calcola
test('test sen x',()=>{
    expect(f.calcola('sin(x) + 1', 1.5)).toCloseTo('1.9974949866040546');
});

test('test B calcola',()=>{
    expect(f.calcola('cos(x) + 1', 1.5)).toCloseTo('2');
});

test('test falsy',()=>{
    expect(f.calcola('sin(x) + 1', 1.5)).toBeFalsy();
});

test('test  not falsy',()=>{
    expect(f.calcola('sin(x) + 1', 1.5)).not.toBeFalsy();
});
