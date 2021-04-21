// Rest Api Dati covid totali per nazione 
const form = document.querySelector('form');
form.addEventListener('submit', search);
let key = "26754f21bamshaa28ca2e54f8ea1p132e17jsnab333c16b5c4";

function search(event) {
    event.preventDefault();
    const risultati = document.querySelector("#risultati");
    risultati.innerHTML = "";
    risultati.classList.remove("hidden");

    const input = document.querySelector('#nazione');
    const nazione = encodeURIComponent(input.value);

    fetch("https://restcountries.eu/rest/v2/name/" + nazione).then(onResponse, onError).then(onNazioni);

    fetch("https://covid-19-data.p.rapidapi.com/country?name=" + nazione, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
    }).then(onResponse, onError).then(onSearch);


}

function onSearch(json) {
    if (!json) {
        console.log('Nessun json ritornato');
        return;
    }
    console.log(json);
    let Positivi_totali = json[0].confirmed;
    let Deaths = json[0].deaths;
    let critici = json[0].critical;


    let containerr = document.querySelector('#risultati');

    let scritta = document.createElement('p');
    scritta.textContent = "Casi totali: " + Positivi_totali;
    containerr.appendChild(scritta);

    let scritta1 = document.createElement('p');
    scritta1.textContent = "Deceduti totali: " + Deaths;
    containerr.appendChild(scritta1);
    let scritta2 = document.createElement('p');
    scritta2.textContent = "Pazienti in terapia intensiva totali: " + critici;
    containerr.appendChild(scritta2);


}

function onNazioni(json) {
    if (!json) {
        console.log('Nessun json ritornato');
        return;
    }

    let n_abitanti = json[0].population;
    let containerr = document.querySelector('#risultati');
    let scritta = document.createElement('p');
    scritta.textContent = "Num.Abitanti: " + n_abitanti;
    containerr.appendChild(scritta);
    console.log(json);
}




// Rest Api Covid giornalieri per Italia
let url = "https://api.quarantine.country/api/v1/summary/region?region=italy";
fetch(url).then(onResponse, onError).then(onJson);

function onResponse(response) {
    if (!response.ok) { console.log('Problema con la riposta'); return null; }
    return response.json();
}

function onError(error) { console.log('Errore' + error); }

function onJson(json) {
    if (!json) {
        console.log('Nessun json ritornato');
        return;
    }
    console.log(json);
    let casi_attivi = json.data.summary.active_cases;
    let casi_nuovi = json.data.change.total_cases;
    let deceduti = json.data.change.deaths;
    let ricoverati = json.data.change.recovered;
    let pazienti = json.data.summary.recovered;
    if (casi_nuovi === 0) { casi_nuovi = "Aggiornamenti non rilevati"; }
    if (ricoverati === 0) { ricoverati = "Aggiornamenti non rilevati"; }
    if (deceduti === 0) { deceduti = "Aggiornamenti non rilevati"; }
    let containerr = document.querySelector('#CovidNews');
    let scritta0 = document.createElement('p');
    let scritta = document.createElement('p');
    let scritta1 = document.createElement('p');
    let scritta2 = document.createElement('p');
    let scritta3 = document.createElement('p');

    scritta0.textContent = "Casi attuali: " + casi_attivi;
    containerr.appendChild(scritta0);
    scritta2.textContent = "Pazienti curati finora: " + (pazienti - casi_attivi);
    containerr.appendChild(scritta2);
    scritta.textContent = "Casi di oggi: " + casi_nuovi;
    containerr.appendChild(scritta);
    scritta1.textContent = "Pazienti ricoverati: " + ricoverati;
    containerr.appendChild(scritta1);
    scritta3.textContent = "Deceduti di oggi: " + deceduti;
    containerr.appendChild(scritta3);
}








let i = 0;
const preferiti = document.querySelector('#ScrittaPreferiti');
//funzioni per aggiunta e rimozione tra i preferiti, ap sta per add preferiti e rp per remove preferiti
function ap1() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p1');
    p.classList.remove('hidden');
    i++;
    p1.removeEventListener('click', ap1);
    c1.addEventListener('click', rp1);

}

function rp1() {

    const p = document.querySelector('#p1');
    p.classList.add('hidden');
    i--;
    c1.removeEventListener('click', rp1);
    p1.addEventListener('click', ap1);
    if (i == 0) { preferiti.classList.add('hidden'); }
}

const p1 = document.querySelector('#u1');
p1.addEventListener('click', ap1);

const c1 = document.querySelector('#c1');
c1.addEventListener('click', rp1);

//2
function ap2() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p2');
    p.classList.remove('hidden');
    i++;
    p2.removeEventListener('click', ap2);
    c2.addEventListener('click', rp2);

}

function rp2() {

    const p = document.querySelector('#p2');
    p.classList.add('hidden');
    i--;
    c2.removeEventListener('click', rp2);
    p2.addEventListener('click', ap2);
    if (i == 0) { preferiti.classList.add('hidden'); }



}

const p2 = document.querySelector('#u2');
p2.addEventListener('click', ap2);

const c2 = document.querySelector('#c2');
c2.addEventListener('click', rp2);
//3
function ap3() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p3');
    p.classList.remove('hidden');
    i++;
    p3.removeEventListener('click', ap3);
    c3.addEventListener('click', rp3);

}

function rp3() {

    const p = document.querySelector('#p3');
    p.classList.add('hidden');
    i--;
    c3.removeEventListener('click', rp3);
    p3.addEventListener('click', ap3);
    if (i == 0) { preferiti.classList.add('hidden'); }



}

const p3 = document.querySelector('#u3');
p3.addEventListener('click', ap3);

const c3 = document.querySelector('#c3');
c3.addEventListener('click', rp3);


function ap4() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p4');
    p.classList.remove('hidden');
    i++;
    p4.removeEventListener('click', ap4);
    c4.addEventListener('click', rp4);

}

function rp4() {

    const p = document.querySelector('#p4');
    p.classList.add('hidden');
    i--;
    c4.removeEventListener('click', rp4);
    p4.addEventListener('click', ap4);
    if (i == 0) { preferiti.classList.add('hidden'); }



}

const p4 = document.querySelector('#u4');
p4.addEventListener('click', ap4);

const c4 = document.querySelector('#c4');
c4.addEventListener('click', rp4);



function ap5() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p5');
    p.classList.remove('hidden');
    i++;
    p5.removeEventListener('click', ap5);
    c5.addEventListener('click', rp5);

}

function rp5() {

    const p = document.querySelector('#p5');
    p.classList.add('hidden');
    i--;
    c5.removeEventListener('click', rp5);
    p5.addEventListener('click', ap5);
    if (i == 0) { preferiti.classList.add('hidden'); }



}

const p5 = document.querySelector('#u5');
p5.addEventListener('click', ap5);

const c5 = document.querySelector('#c5');
c5.addEventListener('click', rp5);



function ap6() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p6');
    p.classList.remove('hidden');
    i++;
    p6.removeEventListener('click', ap6);
    c6.addEventListener('click', rp6);

}

function rp6() {

    const p = document.querySelector('#p6');
    p.classList.add('hidden');
    i--;
    c6.removeEventListener('click', rp6);
    p6.addEventListener('click', ap6);
    if (i == 0) { preferiti.classList.add('hidden'); }



}

const p6 = document.querySelector('#u6');
p6.addEventListener('click', ap6);

const c6 = document.querySelector('#c6');
c6.addEventListener('click', rp6);



function ap7() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p7');
    p.classList.remove('hidden');
    i++;
    p7.removeEventListener('click', ap7);
    c7.addEventListener('click', rp7);

}

function rp7() {

    const p = document.querySelector('#p7');
    p.classList.add('hidden');
    i--;
    c7.removeEventListener('click', rp7);
    p7.addEventListener('click', ap7);
    if (i == 0) { preferiti.classList.add('hidden'); }



}

const p7 = document.querySelector('#u7');
p7.addEventListener('click', ap7);

const c7 = document.querySelector('#c7');
c7.addEventListener('click', rp7);


function ap8() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p8');
    p.classList.remove('hidden');
    i++;
    p8.removeEventListener('click', ap8);
    c8.addEventListener('click', rp8);

}

function rp8() {

    const p = document.querySelector('#p8');
    p.classList.add('hidden');
    i--;
    c8.removeEventListener('click', rp8);
    p8.addEventListener('click', ap8);
    if (i == 0) { preferiti.classList.add('hidden'); }



}

const p8 = document.querySelector('#u8');
p8.addEventListener('click', ap8);

const c8 = document.querySelector('#c8');
c8.addEventListener('click', rp8);


function ap9() {
    preferiti.classList.remove('hidden');
    const p = document.querySelector('#p9');
    p.classList.remove('hidden');
    i++;
    p9.removeEventListener('click', ap9);
    c9.addEventListener('click', rp9);

}

function rp9() {

    const p = document.querySelector('#p9');
    p.classList.add('hidden');
    i--;
    c9.removeEventListener('click', rp9);
    p9.addEventListener('click', ap9);
    if (i == 0) { preferiti.classList.add('hidden'); }



}

const p9 = document.querySelector('#u9');
p9.addEventListener('click', ap9);

const c9 = document.querySelector('#c9');
c9.addEventListener('click', rp9);

//inizio funzioni per le descrizioni(add description 1 fino a 9)
function ad1() {
    let d = document.querySelector('#d1 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d1 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d1 .c');
    d.classList.remove('hidden');
}


function ad2() {
    let d = document.querySelector('#d1 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d1 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d1 .c');
    d.classList.add('hidden');
}

const d1 = document.querySelector('#d1 .b');
d1.addEventListener('click', ad1);
const d2 = document.querySelector('#d1 .c');
d2.addEventListener('click', ad2);

function ad3() {
    let d = document.querySelector('#d2 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d2 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d2 .c');
    d.classList.remove('hidden');
}

function ad4() {
    let d = document.querySelector('#d2 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d2 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d2 .c');
    d.classList.add('hidden');
}

const d3 = document.querySelector('#d2 .b');
d3.addEventListener('click', ad3);
const d4 = document.querySelector('#d2 .c');
d4.addEventListener('click', ad4);

function ad5() {
    let d = document.querySelector('#d3 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d3 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d3 .c');
    d.classList.remove('hidden');
}

function ad6() {
    let d = document.querySelector('#d3 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d3 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d3 .c');
    d.classList.add('hidden');
}

const d5 = document.querySelector('#d3 .b');
d5.addEventListener('click', ad5);
const d6 = document.querySelector('#d3 .c');
d6.addEventListener('click', ad6);

function ad7() {
    let d = document.querySelector('#d4 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d4 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d4 .c');
    d.classList.remove('hidden');
}

function ad8() {
    let d = document.querySelector('#d4 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d4 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d4 .c');
    d.classList.add('hidden');
}

const d7 = document.querySelector('#d4 .b');
d7.addEventListener('click', ad7);
const d8 = document.querySelector('#d4 .c');
d8.addEventListener('click', ad8);

function ad9() {
    let d = document.querySelector('#d5 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d5 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d5 .c');
    d.classList.remove('hidden');
}

function ad10() {
    let d = document.querySelector('#d5 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d5 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d5 .c');
    d.classList.add('hidden');
}

const d9 = document.querySelector('#d5 .b');
d9.addEventListener('click', ad9);
const d10 = document.querySelector('#d5 .c');
d10.addEventListener('click', ad10);


function ad11() {
    let d = document.querySelector('#d6 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d6 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d6 .c');
    d.classList.remove('hidden');
}

function ad12() {
    let d = document.querySelector('#d6 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d6 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d6 .c');
    d.classList.add('hidden');
}

const d11 = document.querySelector('#d6 .b');
d11.addEventListener('click', ad11);
const d12 = document.querySelector('#d6 .c');
d12.addEventListener('click', ad12);


function ad13() {
    let d = document.querySelector('#d7 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d7 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d7 .c');
    d.classList.remove('hidden');
}

function ad14() {
    let d = document.querySelector('#d7 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d7 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d7 .c');
    d.classList.add('hidden');
}

const d13 = document.querySelector('#d7 .b');
d13.addEventListener('click', ad13);
const d14 = document.querySelector('#d7 .c');
d14.addEventListener('click', ad14);


function ad15() {
    let d = document.querySelector('#d8 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d8 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d8 .c');
    d.classList.remove('hidden');
}

function ad16() {
    let d = document.querySelector('#d8 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d8 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d8 .c');
    d.classList.add('hidden');
}

const d15 = document.querySelector('#d8 .b');
d15.addEventListener('click', ad15);
const d16 = document.querySelector('#d8 .c');
d16.addEventListener('click', ad16);


function ad17() {
    let d = document.querySelector('#d9 .a');
    d.classList.remove('hidden');
    d = document.querySelector('#d9 .b');
    d.classList.add('hidden');
    d = document.querySelector('#d9 .c');
    d.classList.remove('hidden');
}

function ad18() {
    let d = document.querySelector('#d9 .a');
    d.classList.add('hidden');
    d = document.querySelector('#d9 .b');
    d.classList.remove('hidden');
    d = document.querySelector('#d9 .c');
    d.classList.add('hidden');
}

const d17 = document.querySelector('#d9 .b');
d17.addEventListener('click', ad17);
const d18 = document.querySelector('#d9 .c');
d18.addEventListener('click', ad18);

// parte atta a far funzionare la barra di ricerca e all'implementazione delle relative funzioni
const input = document.getElementById('ricerca');
input.addEventListener('keyup', ricerca);

function ricerca(event) {
    let scritta = input.value;

    if (contenuti[0].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#es');
        esame.classList.add('hidden');
    }
    if (contenuti[0].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#es')
        esame.classList.remove('hidden');
    }

    if (contenuti[1].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#ec');
        esame.classList.add('hidden');
    }
    if (contenuti[1].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#ec')
        esame.classList.remove('hidden');
    }

    if (contenuti[2].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#endoscopia');
        esame.classList.add('hidden');
    }
    if (contenuti[2].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#endoscopia')
        esame.classList.remove('hidden');
    }

    if (contenuti[3].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#biopsia');
        esame.classList.add('hidden');
    }
    if (contenuti[3].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#biopsia')
        esame.classList.remove('hidden');
    }

    if (contenuti[4].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#cistografia');
        esame.classList.add('hidden');
    }
    if (contenuti[4].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#cistografia')
        esame.classList.remove('hidden');
    }

    if (contenuti[5].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#calcemia');
        esame.classList.add('hidden');
    }
    if (contenuti[5].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#calcemia')
        esame.classList.remove('hidden');
    }
    if (contenuti[6].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#broncoscopia');
        esame.classList.add('hidden');
    }
    if (contenuti[6].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#broncoscopia')
        esame.classList.remove('hidden');
    }
    if (contenuti[7].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#rm');
        esame.classList.add('hidden');
    }
    if (contenuti[7].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#rm')
        esame.classList.remove('hidden');
    }
    if (contenuti[8].titolo.indexOf(scritta) == -1) {
        let esame = document.querySelector('#tampone');
        esame.classList.add('hidden');
    }
    if (contenuti[8].titolo.indexOf(scritta) >= 0) {
        let esame = document.querySelector('#tampone')
        esame.classList.remove('hidden');
    }




}








const titolo1 = document.createElement('strong');
titolo1.textContent = contenuti[0].titolo;
const container1 = document.querySelector('#v1');
container1.appendChild(titolo1);

const img1 = document.createElement('img');
img1.src = contenuti[0].immagine;
const container2 = document.querySelector('#img1');
container2.appendChild(img1);

const descrizione1 = document.createElement('p');
descrizione1.textContent = contenuti[0].descrizione;
descrizione1.classList.add('a');
descrizione1.classList.add('hidden');
const container3 = document.querySelector('#d1');
container3.appendChild(descrizione1);

const titolo2 = document.createElement('strong');
titolo2.textContent = contenuti[1].titolo;
const container4 = document.querySelector('#v2');
container4.appendChild(titolo2);

const img2 = document.createElement('img');
img2.src = contenuti[1].immagine;
const container5 = document.querySelector('#img2');
container5.appendChild(img2);

const descrizione2 = document.createElement('p');
descrizione2.textContent = contenuti[1].descrizione;
descrizione2.classList.add('a');
descrizione2.classList.add('hidden');
const container6 = document.querySelector('#d2');
container6.appendChild(descrizione2);

const titolo3 = document.createElement('strong');
titolo3.textContent = contenuti[2].titolo;
const container7 = document.querySelector('#v3');
container7.appendChild(titolo3);

const img3 = document.createElement('img');
img3.src = contenuti[2].immagine;
const container8 = document.querySelector('#img3');
container8.appendChild(img3);

const descrizione3 = document.createElement('p');
descrizione3.textContent = contenuti[2].descrizione;
descrizione3.classList.add('a');
descrizione3.classList.add('hidden');
const container9 = document.querySelector('#d3');
container9.appendChild(descrizione3);

const titolo4 = document.createElement('strong');
titolo4.textContent = contenuti[3].titolo;
const container10 = document.querySelector('#v4');
container10.appendChild(titolo4);

const img4 = document.createElement('img');
img4.src = contenuti[3].immagine;
const container11 = document.querySelector('#img4');
container11.appendChild(img4);

const descrizione4 = document.createElement('p');
descrizione4.textContent = contenuti[3].descrizione;
descrizione4.classList.add('a');
descrizione4.classList.add('hidden');
const container12 = document.querySelector('#d4');
container12.appendChild(descrizione4);

const titolo5 = document.createElement('strong');
titolo5.textContent = contenuti[4].titolo;
const container13 = document.querySelector('#v5');
container13.appendChild(titolo5);

const img5 = document.createElement('img');
img5.src = contenuti[4].immagine;
const container14 = document.querySelector('#img5');
container14.appendChild(img5);

const descrizione5 = document.createElement('p');
descrizione5.textContent = contenuti[4].descrizione;
descrizione5.classList.add('a');
descrizione5.classList.add('hidden');
const container15 = document.querySelector('#d5');
container15.appendChild(descrizione5);

const titolo6 = document.createElement('strong');
titolo6.textContent = contenuti[5].titolo;
const container16 = document.querySelector('#v6');
container16.appendChild(titolo6);

const img6 = document.createElement('img');
img6.src = contenuti[5].immagine;
const container17 = document.querySelector('#img6');
container17.appendChild(img6);

const descrizione6 = document.createElement('p');
descrizione6.textContent = contenuti[5].descrizione;
descrizione6.classList.add('a');
descrizione6.classList.add('hidden');
const container18 = document.querySelector('#d6');
container18.appendChild(descrizione6);

const titolo7 = document.createElement('strong');
titolo7.textContent = contenuti[6].titolo;
const container19 = document.querySelector('#v7');
container19.appendChild(titolo7);

const img7 = document.createElement('img');
img7.src = contenuti[6].immagine;
const container20 = document.querySelector('#img7');
container20.appendChild(img7);

const descrizione7 = document.createElement('p');
descrizione7.textContent = contenuti[6].descrizione;
descrizione7.classList.add('a');
descrizione7.classList.add('hidden');
const container21 = document.querySelector('#d7');
container21.appendChild(descrizione7);

const titolo8 = document.createElement('strong');
titolo8.textContent = contenuti[7].titolo;
const container22 = document.querySelector('#v8');
container22.appendChild(titolo8);

const img8 = document.createElement('img');
img8.src = contenuti[7].immagine;
const container23 = document.querySelector('#img8');
container23.appendChild(img8);

const descrizione8 = document.createElement('p');
descrizione8.textContent = contenuti[7].descrizione;
descrizione8.classList.add('a');
descrizione8.classList.add('hidden');
const container24 = document.querySelector('#d8');
container24.appendChild(descrizione8);

const titolo9 = document.createElement('strong');
titolo9.textContent = contenuti[8].titolo;
const container25 = document.querySelector('#v9');
container25.appendChild(titolo9);

const img9 = document.createElement('img');
img9.src = contenuti[8].immagine;
const container26 = document.querySelector('#img9');
container26.appendChild(img9);

const descrizione9 = document.createElement('p');
descrizione9.textContent = contenuti[8].descrizione;
descrizione9.classList.add('a');
descrizione9.classList.add('hidden');
const container27 = document.querySelector('#d9');
container27.appendChild(descrizione9);