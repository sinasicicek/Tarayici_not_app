import {
        uyari
} from './alert_dialog.js';

import {local_getir} from './page_load.js'

const yeni_gorev = document.getElementById('not-text'); //girilen not
const gorev_ekle = document.querySelector('.btn-gorev-ekle'); // ekleme butonu

const icerik_cont = document.querySelector('.icerik-ekle') //iceriklerin eklenecegi div
gorev_ekle.addEventListener('click', notEkle);

const loadin=window.addEventListener('load',local_getir)


function notEkle(e) {
        e.preventDefault();

        // !!!!!!!!!  bir boşluk bırakılıp yazıldıgında if kurtuluyor not ekliyor
        /////// !!!!!!! checkbox tıkladıgında bir üst parenti silecek
        // Tıklanma eventleri dahil hepsini tanımlanan lazım
        if (yeni_gorev.value !== "") {
                const parca_bir = nesne1();
                //container div
                const ana = nesne();

                //2.div
                const div_create = document.createElement('div');
                div_create.classList.add('row');
                div_create.appendChild(parca_bir);
                ana.appendChild(div_create);


                //tum parcalar eklencek
                icerik_cont.appendChild(ana);

                //localStorage kaydetme
                kaydet(yeni_gorev.value);
                notifi("Bilgiler Eklendi")

        } else {
                notifi("Not alanı boş olamaz");
        }



}
//notification ekle
let notifi=(mesaj)=>{
        let uyar = uyari(mesaj);

        document.body.appendChild(uyar);

        setTimeout(() => {
                document.querySelector('.alert_dialog').remove();
        }, 2000)
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

//1.div
const nesne = () => {
        const ana_parca_class = ['container', 'container-ince']
        let ana_parca = elementOlustur('div', ana_parca_class)

        return ana_parca
}
//3.div 
let nesne1 = () => {
        let classlar = ["col-md", "icerik-container"]
        const yeni_div = elementOlustur('div', classlar)


        const parca_iki = nesne2();
        yeni_div.appendChild(parca_iki);

        const parca_dort = nesne4();
        yeni_div.appendChild(parca_dort);

        return yeni_div;
}

//3.div içindeki 1.div
let nesne2 = () => {
        const classlar = ["col", "ince-ayar"]
        const yeni_div_iki = elementOlustur('div', classlar);

        //span
        const span = tagOlustur('span');
        const input = tagOlustur('input');
        input.type = "checkbox";
        input.classList.add('tamamlandi')
        const span_icerik = nesne3();

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
let nesne3 = () => {
        const span_icerik = tagOlustur('span')
        span_icerik.textContent = yeni_gorev.value;
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

        console.log("şinasi");
        yeni_btn.addEventListener('click',(e)=>{

                sil(e.target.value);
                e.target.parentElement.parentElement.parentElement.parentElement.remove();
       
        })

        return yeni_div.appendChild(yeni_btn);

}

//localStorage Kaydetme işlem
let kaydet=(notum)=>{
      //
      let notlar;
      let notlarım=localStorage.getItem("Notlar")
        if(notlarım === null){
                notlar=[];
        
        }
        else {
                notlar=JSON.parse(localStorage.getItem("Notlar"))
        }
        notlar.push(notum);
        localStorage.setItem("Notlar",JSON.stringify(notlar));
     
      
}

let sil=(sil_not)=>{
        let notlar;
        let notlarım=localStorage.getItem("Notlar")
          if(notlarım === null){
                  notlar=[];
          
          }
          else {
                  notlar=JSON.parse(localStorage.getItem("Notlar"))
          }
         let not_numb= notlar.indexOf(sil_not);
         notlar.splice(not_numb,1);
          localStorage.setItem("Notlar",JSON.stringify(notlar));
          console.log(notlar+"  "+not_numb);
}


