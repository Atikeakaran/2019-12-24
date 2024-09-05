

// 1.yöntem
// function isim (parametreler){
//     //kod blokları;
// }


// 2. yöntem
// var/let/const isim = funcsion(parametreler){
//     kod blokları;
// }

// ----------ARROW FUNCTİONS------------

// var isim =(parametreler)=>{
// //kod blokları;
// }


// istisnaları; 
// - tek bir parametre var ise () gerek yok
// örk:    var isim = parametre1 => {
//     kod bloğu;
// }

// - kod bloğu tek satırdan oluşuyorsa {} gerek yok/ RETURN kullanmaya gerek yok
// örk:    var isim =() => kod bloğu;

// -


var merhaba = function () {
    console.log('Merhaba dünya');
}
merhaba();


var merhaba =()=>{console.log('Merhaba Dünya');}
merhaba();


var merhaba=function(text){
    console.log(text);
}
merhaba('istanbul ve Ankara');

var merhaba=text=> console.log(text);
merhaba('istanbul ve Ankara');




var alan = function (kisaKenar, uzunKenar) {
    console.log(`Kısa Kenarı ${kisaKenar}m ve uzun kenarı ${uzunKenar}m olan dikdörtgenin alanı ${kisaKenar * uzunKenar}m'dir`)
}
alan(4, 6);

var alan = (kisaKenar, uzunKenar) => console.log(`Kısa Kenarı ${kisaKenar}m ve uzun kenarı ${uzunKenar}m olan dikdörtgenin alanı ${kisaKenar * uzunKenar}m'dir`)

alan(4, 6);


var enUzunKelime = function (str) {
    var array1 = str.split(' '); //splitile boşlukları baz alarak array e çevirecek
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
            if(result.length< array1[i].length){
                    result=array1[i];
            }
    }
    return result;
}
console.log(enUzunKelime('Web Development Dersi bugün saat kaçta olacak'));



var enUzunKelime = str => {
    var array1 = str.split(' ');
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    return result;
}
console.log(enUzunKelime('Web Development Dersi bugün saat kaçta olacak'));

/*
ARRAY ITERATION METHODS
1 array.foreach (function)
2 array.map(function)
3 array.filter(function)
4 array.find(function)
5 array.some(function)
6 array.every(function)
7 array.reduce(function)
8 array.findindex(function)

*/
//------------------------------------------------------
//------------------------------------------------------
//FOREACH() METHODS
//foreach(function)  ----> for loop un muadili

var numbers = [45, 4, 9, 16, 25];
//normal for döngüsü ile

for (var i = 0; i < numbers.length; i++) {
    console.log(`${i+1}. eleman : ${numbers[i]}`);
}

//-------------------------------------------
//for döngüsü ile fonksiyon çağrılacak
function yazdir(value, index) {
    return console.log(`${index+1}. eleman : ${value}'dir`);
}
for (var i = 0; i < numbers.length; i++) {
    yazdir(numbers[i], i)
}

//-------------------------------------------
//foreach()+klasik fonksiyon ile
numbers.forEach(function(item,a){
    // önce value sonra index parametre verilmelidir.
    console.log(`array içerindeki ${a+1}. değer : ${item}'dir`)
});


//-------------------------------------------
//foreach()+  arrow fonksiyon ile

numbers.forEach((sayi,index)=>
    console.log(`numbers array'i içerindeki ${index+1}. değer : ${sayi}`)
);




//------------------------------------------------------
//------------------------------------------------------
// MAP() METODU
// array.map(function)  ---> orjinal array i değiştirmeden yeni arrayoluşturmak



var liste = [
    ['Televizyon', 1000],
    ['kitap', 15],
    ['bisiklet', 350],
    ['Telefon', 550],
    ['klavye', 35],
    ['cd', 10],
    ['bilgisayar', 1500]
]

//------------ normal for döngüsü
var fiyatlarListesi = [];
var ihtiyaclarListesi = [];
for (var i = 0; i < liste.length; i++) {
    fiyatlarListesi.push(liste[i][1]);
    ihtiyaclarListesi.push(liste[i][0]);
}
console.log(fiyatlarListesi);
console.log(ihtiyaclarListesi);

//------------klasik fonksiyon ile
var klasikFuncIhtiyacListesi = liste.map(function (item) {
    return item[0];
});
var klasikFuncFiyatListesi = liste.map(function (item) {
    return item[1];
});
console.log(klasikFuncFiyatListesi);
console.log(klasikFuncIhtiyacListesi);

//----------Arrow Function ile
var arrowFuncIhtiyacListesi = liste.map( item=> item[0]);
var arrowFuncFiyatListesi = liste.map( item=>item[1]);
console.log(arrowFuncFiyatListesi);
console.log(arrowFuncIhtiyacListesi);



//------------------------------------------------------
//------------------------------------------------------
//FILTER METODU
//Array.filter(function)  --> filtre sonrasında true olan array elemanlarından 
//yeni bir array üretmek için kullanılır.

var liste = [
    ['Televizyon', 1000],
    ['kitap', 15],
    ['bisiklet', 350],
    ['Telefon', 550],
    ['klavye', 35],
    ['cd', 10],
    ['bilgisayar', 1500]
]

//-------------- normal for döngüsü ile 
//fiyatı 500 tl üzeri olan ürünlerive fiyatlarını yeni bir array de oluşturmak
var filterIhtiyac = [];
for (var i = 0; i < liste.length; i++) {
    if (liste[i][1] > 500) {
        filterIhtiyac.push(liste[i]);
    }
}
console.log(filterIhtiyac);

//------------klasik fonksiyon ile
var filterKlasikFuncIhtiyac = liste.filter(function (item) {
    return item[1] > 500;
});
console.log(filterKlasikFuncIhtiyac);

//----------Arrow Function ile
var filterArrowFuncIhtiyac = liste.filter(item => item[1] > 500);
console.log(filterArrowFuncIhtiyac);


//------------------------------------------------------
//------------------------------------------------------
//FIND METODU
//Array.Find(function)   ----> uygulanan testi/filteri geçen yani true üreten ilk elemanı verir 

var liste = [
    ['Televizyon', 1000],
    ['kitap', 15],
    ['bisiklet', 350],
    ['Telefon', 550],
    ['klavye', 35],
    ['cd', 10],
    ['bilgisayar', 1500],
    ['klavye', 120]
]

//------------For döngüsü ile
//klavye ürününü bulmak istiyorum.
var findItem;

for (var i = 0; i < liste.length; i++) {
    if (liste[i][0].toLowerCase() === 'klavye') {
        findItem = liste[i];
        break;
    }
}
console.log(findItem);

//------------klasik fonksiyon ile

var findKlasikFuncIhtiyac = liste.find(function(item){
    return item[0].toLowerCase()==='klavye';
})
console.log(findKlasikFuncIhtiyac);


//----------Arrow Function ile 

var findArrowFuncIhtiyac = liste.find(item=> item[0].toLowerCase()==='klavye');
console.log(findArrowFuncIhtiyac);




//------------------------------------------------------
//------------------------------------------------------
//EVERY METODU
//array.every(function) --> test uyguluyoruz, tüm elemanların testi geçip geçmediğini kontrol ediyor. 
//true, false


var liste = [
    ['Televizyon', 1000],
    ['kitap', 15],
    ['bisiklet', 350],
    ['Telefon', 550],
    ['klavye', 35],
    ['cd', 10],
    ['bilgisayar', 1500],
    ['klavye', 120]
]



// tüm ürünlerin fiyatı 1600 tl den küçük mü
var everyArrowFuncItem= liste.every(item=>item[1]<1600);
console.log(everyArrowFuncItem);


var everyArrowFuncItem= liste.every(item=>item[1]<1300);
console.log(everyArrowFuncItem);


//------------------------------------------------------
//------------------------------------------------------
//Some METODU
//array.some(function) --> test uyguluyoruz, en az bir eleman testi geçerse true, aksi halde false


var liste = [
    ['Televizyon', 1000],
    ['kitap', 15],
    ['bisiklet', 350],
    ['Telefon', 550],
    ['klavye', 35],
    ['cd', 10],
    ['bilgisayar', 1500],
    ['klavye', 120]
]



// tüm ürünlerin fiyatı 20 tl den küçük mü
var someArrowFuncItem = liste.some(item => item[1] < 20);
console.log(someArrowFuncItem);


var someArrowFuncItem = liste.some(item => item[1] > 1700);
console.log(someArrowFuncItem);
