/*document.writeln("<CENTER>"); 
document.writeln("<HR WIDTH=600 COLOR=Black>"); 
document.writeln("<H1>INSTITUTE BISNIS DAN INFORMATIK KESATUAN BOGOR</H1>"); 
document.writeln("<H2>FAKULTAS INFORMATIKA DAN PARIWISATA<H2>"); 
document.writeln("<H3>JURUSAN TEKNOLOGI INFORMASI<H3>"); 
document.writeln("<HR WIDTH=600 COLOR=Black>"); 
document.writeln("</CENTER>"); */

function jumlah() {
     var bilangan_1 = parseFloat(document.fform.bilangan_1.value);
     var bilangan_2 = parseFloat(document.fform.bilangan_2.value);
     var hasil;
     if(isNaN(bilangan_1)) {
        bilangan_1 = 0.0;
     } 
     if(isNaN(bilangan_2)){
        bilangan_2=0.0;
    }
    hasil = bilangan_1 + bilangan_2;
    alert("Hasil Penjumlahan = " + hasil);
    }