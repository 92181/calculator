let p=Math.PI,P=document.querySelector('[p2]'),L=document.querySelector('p1'),D=document.querySelector('p0'),J,B,C,G,H,Z,O;

i=['A','C','%','/','π','7','8','9','*','e','4','5','6','-','!','1','2','3','+','^','S','0','.','=','√'];
z=0;while(z<25){D.insertAdjacentHTML('beforeend','<c0>'+i[z]+'</c0>');z+=1;if(z%5==0){D.insertAdjacentHTML('beforeend','<p3>')}}

function CRU(D){let V=P.value;P.value=V.substring(0,P.selectionStart)+D+V.substring(P.selectionEnd,V.length)}
Ci=document.querySelectorAll('c0');z=2;while(z<20){let u=i[z];Ci[z].onclick=function(){CRU(u)};z+=1}Ci[0].onclick=function(){P.value=''};Ci[1].onclick=function(){let H=P.selectionStart;let J=P.selectionEnd;if(H==J){H-=1}let V=P.value;P.value=V.substring(0,H)+V.substring(J,V.length)};
Ci[21].onclick=function(){CRU('0')};Ci[22].onclick=function(){CRU('.')};Ci[24].onclick=function(){CRU('√')};Ci[23].onclick=function(){P0E()};Ci[8].innerText='x';

let P0=function(){C[d]+=C[d+1];C.pop()},P1=function(){C[d]-=C[d+1];C.pop()},P2=function(){C[d]*=C[d+1];C.pop()},P3=function(){C[d]/=C[d+1];C.pop()},
P4=function(){C[d]=C[d]**C[d+1];C.pop()},P5=function(){C[d]=C[d]**(1/C[d+1]);C.pop()},P7=function(){let O=1;for(var x=1;x<=C[d+1];x++){O*=x}C[d+1]=O};

function P0E()
{
  J=P.value;B=0;C=[];G=[];H=[];f=[];let z;

  let n='';let s=function(){if(n.length){C.push(parseFloat(n));n=''}};

  k=function(p,u){s();let x=G.length;while(x){d=C.length-2;let PrevP=G[x-1];if(PrevP>=p){H[x-1]();G.pop();H.pop()}else{H.push(u);G.push(p);return}x-=1}if(!G.length){H.push(u);G.push(p)}}

  let o=0,y=function(){if(H.length<C.length){k(o+1,P2)}};

  i=0;while(i<J.length)
  {
    z=J[i];switch(z)
    {
      case'+':k(o,P0);break;
      case'-':if(J[i-1]!='-'&&J[i-1]!='('&&i!=0){k(o+0,P1)}else{n+=z}break;
      case'*':k(o+1,P2);break;
      case'/':k(o+1,P3);break;
      case'^':k(o+2,P4);break;
      case'√':k(o+2,P5);break;
      case'!':k(o+3,P7);break;
      case'%':k(o+1,P3);C.push(100);y();break;
      case'π':s();y();C.push(p);break;
      case'(':s();y();o+=4;break;
      case')':s();o-=4;break;
      case'e':n+=z*2;i+=1;break;
      default:n+=z;
    }
    
    i+=1
  }
  
  s();if(H.length<C.length-1){k(o+1,P2)}x=H.length;while(x){d=C.length-2;H[x-1]();H.pop();x-=1}
  let S=parseFloat(C[0].toPrecision(15));P.value=S;var Y=document.createElement('div');Y.textContent=J+' = '+S;L.append(Y)
}

P.onkeydown=function(e){let s=e.key;switch(s){case'Enter':P0E();break;case'p':e.preventDefault();CRU('π');break;case'w':e.preventDefault();CRU('√');break;case'd':e.preventDefault();CRU('^2');break;case'l':e.preventDefault();CRU('l');break;case'o':e.preventDefault();CRU('l10');break}};

P.value='21.001+0.2';
P0E();
P.value='4.52/0.01';
P0E();
P.value='4.52*99';
P0E();
P.value='5!%4^2';
P0E();
P.value='π+5π2';
P0E();
P.value='8(8)';
P0E();