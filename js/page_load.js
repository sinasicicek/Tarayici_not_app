const icerik_cont = document.querySelector('.icerik-ekle') 

export const local_getir=()=>{
    //localStorage verileri cekme
let veri=localStorage.getItem('Notlar');
let json_veri=JSON.parse(veri);

json_veri.forEach((item)=>{

    const parca_bir = nesne1(item);
    //container div
    const ana = nesne();

    //2.div
    const div_create = document.createElement('div');
    div_create.classList.add('row');
    div_create.appendChild(parca_bir);
    ana.appendChild(div_create);
    icerik_cont.appendChild(ana);
})

           
}




//div olustur sınıfı
let elementOlustur = (eleman, sınıf_listesi) => {

    const liEleman = document.createElement(eleman);


    sınıf_listesi.forEach((item) => {
            liEleman.classList.add(item)
    })

    return liEleman
}
//html tag olustur
let tagOlustur = (element) => {
    return document.createElement(element);
}
//const br_etiketi=tagOlustur('br');

//1.div
const nesne = () => {
    const ana_parca_class = ['container', 'container-ince']
    let ana_parca = elementOlustur('div', ana_parca_class)

    return ana_parca
}
//3.div 
let nesne1 = (notLar) => {
    let classlar = ["col-md", "icerik-container"]
    const yeni_div = elementOlustur('div', classlar)


    const parca_iki = nesne2(notLar);
    yeni_div.appendChild(parca_iki);

    const parca_dort = nesne4();
    yeni_div.appendChild(parca_dort);

    return yeni_div;
}

//3.div içindeki 1.div
let nesne2 = (notlar) => {
    const classlar = ["col", "ince-ayar"]
    const yeni_div_iki = elementOlustur('div', classlar);

    //span
    const span = tagOlustur('span');
    const input = tagOlustur('input');
    input.type = "checkbox";
    input.classList.add('tamamlandi')
    const span_icerik = nesne3(notlar);

    input.addEventListener('click', (e) => {

            e.target.parentElement.parentElement.classList.toggle('ustunu_ciz');
            //tıklanan tagın iki üstü yani parentine belirledigmiz class ekliyor
    })


    span.appendChild(input);
    yeni_div_iki.appendChild(span);
    yeni_div_iki.appendChild(span_icerik);


    return yeni_div_iki
}
//Notların bulundugu span nesnesi
let nesne3 = (notum) => {

    const span_icerik = tagOlustur('span')
    span_icerik.textContent = notum;
    return span_icerik;
}

//notları sil butonu nesnesi
let nesne4 = () => {

    const class_nesne_uc = ["col", "col-lg-1"]
    const yeni_div = elementOlustur('div', class_nesne_uc);
    const yeni_btn = tagOlustur('button');
    yeni_btn.classList.add("sil-btn");

    const class_yni_i = ["fas", "fa-trash-alt"]
    const yeni_i = elementOlustur('i', class_yni_i);
    yeni_btn.appendChild(yeni_i);

    yeni_btn.addEventListener('click',(e)=>{
            e.target.parentElement.parentElement.parentElement.parentElement.remove();
    })

    return yeni_div.appendChild(yeni_btn);

}
