import { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50, q51, q52, q53, q54, q55, q56, q57, q58, q59, q60, q61, q62, q63, q64, q65, q66, q67, q68, q69, q70, q71, q72, q73, q74, q75, q76 } from './var.js';
let i = 0;
let e = 0;

let s = 0;
let n = 0;

let t = 0;
let f = 0;

let j = 0;
let p = 0;

let count = 1;
$('form').html(q1);
$('button').click(function (elem) {
   elem.preventDefault();
   plusCount();
   count++;
   if (count == 77) {
      psixoResult();
      console.log(`i=${i},e=${e},s=${s},n=${n},t=${t},f=${f},j=${j},p=${p}`);
   } else {
      $(this).prev().html(eval(`q${count}`));
   }
});

function psixoResult() {
   let psixo = [];
   if (i > e) {
      psixo.push("I")
   } else if(i < e) {
      psixo.push("E")
   } else{
      psixo.push("(I / E) ")
   };
   if (s > n) {
      psixo.push("S")
   } else if(s < n){
      psixo.push("N")
   }else{
      psixo.push("(S / N) ")
   };
   if (t > f) {
      psixo.push("T")
   } else if(t < f){
      psixo.push("F")
   } else{
      psixo.push("(T / F) ")
   };
   if (j > p) {
      psixo.push("J")
   } else if(j < p){
      psixo.push("P")
   } else{
      psixo.push("(J / P) ")
   };
   psixo = psixo.join("");
   $('.result').html(`<p>Ваш тип личности: ${psixo}</p>
   <p><a href="https://www.16personalities.com/ru/tipy-lichnosti">Узнать про свой тип личности</a></p>`);
   $('button').hide(0)
}

function plusCount() {
   if ($('input[name="q1"]:checked').val() == 'q') {
      return;
   } else if ($('input[name="q1"]:checked').val() == 'i') {
      i++;
   } else if ($('input[name="q1"]:checked').val() == 'e') {
      e++;
   } else if ($('input[name="q1"]:checked').val() == 's') {
      s++;
   } else if ($('input[name="q1"]:checked').val() == 'n') {
      n++;
   } else if ($('input[name="q1"]:checked').val() == 't') {
      t++;
   } else if ($('input[name="q1"]:checked').val() == 'f') {
      f++;
   } else if ($('input[name="q1"]:checked').val() == 'j') {
      j++;
   } else if ($('input[name="q1"]:checked').val() == 'p') {
      p++;
   }
   console.log(`i=${i},e=${e},s=${s},n=${n},t=${t},f=${f},j=${j},p=${p}`);
}