let p=Math.PI,J,C,G,H,O,z=0;

let P0=function(){C[d]+=C[d+1];C.pop()},P1=function(){C[d]-=C[d+1];C.pop()},P2=function(){C[d]*=C[d+1];C.pop()},P3=function(){C[d]/=C[d+1];C.pop()},
P4=function(){C[d]=C[d]**C[d+1];C.pop()},P5=function(){C[d]=C[d]**(1/C[d+1]);C.pop()},P7=function(){let O=1;for(var x=1;x<=C[d+1];x++){O*=x}C[d+1]=O};

function P0E()
{
  J=P.value;C=[];G=[];H=[];f=[];let z;

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
