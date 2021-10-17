let cells;
var generacion;
var l;
let colo1=[
  '#FFF',
  '#BFFF00',
  '#FF299C'    
];
let colo2=[
  '#0D160B',
  '#FF299C',
  '#BFFF00'
];
let colo3=[
  '#0D160B',
  '#FF299C',
  '#BFFF00'
];
let colo4=[
  '#0D160B',
  '#BFFF00',
  '#FF299C'
];
function setup(){
  var canvas = createCanvas(574,574);
  canvas.parent('sketch-holder');
  noStroke();
  start();
}
function draw(){

}
function start(){
  cells=[0,1,1,0,1];
  generacion=0;
  l=12;
  color1=random(colo1);
  color2=random(colo2);
  color3=random(colo3);
  color4=random(colo4);
  init();
  gen();
}

function init(){
    for(let a=0;a<cells.length;a++){
    if(cells[a]==0){
      fill(color1);
    }
    else{
      fill(color2);
    }
    rutina(generacion,a,width/4,height/4);
    rutina(generacion,a,width/4,3*height/4);
    rutina(generacion,a,3*width/4,height/4);
    rutina(generacion,a,3*width/4,3*height/4);
  }
  generacion=generacion+2;
}

function gen(){
    while(generacion<9){
    let newcells=[1,0,0,0,0];
    for(let i=1;i<cells.length-1;i++){
      var arriba=cells[i-1];
      var medio=cells[i];
      var abajo=cells[i+1];
      if(arriba==0 && medio==0 && abajo==0) newcells[i]=1;
      else if(arriba==0 && medio==0 && abajo==1) newcells[i]=1;
      else if(arriba==0 && medio==1 && abajo==0) newcells[i]=int(random(0,2));
      else if(arriba==0 && medio==1 && abajo==1) newcells[i]=1;
      else if(arriba==1 && medio==0 && abajo==0) newcells[i]=0;
      else if(arriba==1 && medio==0 && abajo==1) newcells[i]=int(random(0,2));
      else if(arriba==1 && medio==1 && abajo==0) newcells[i]=int(random(0,2));
      else if(arriba==1 && medio==1 && abajo==1) newcells[i]=0;
    }
    cells = newcells;
    for (let a=0; a<cells.length; a++) {
      if (cells[a] == 0) {
        fill(color1);
      } 
      else {
        fill(color4);
      }
      rutina(generacion,a,width/4,height/4);
      rutina(generacion,a,width/4,3*height/4);
      rutina(generacion,a,3*width/4,height/4);
      rutina(generacion,a,3*width/4,3*height/4);
    }
    generacion=generacion+2;
  }
  if(generacion>8){
    marco(width/4,height/4);
    marco(width/4,3*height/4);
    marco(3*width/4,height/4);
    marco(3*width/4,3*height/4);
  }
}
function rutina(gen, b, posx, posy){
  rect(posx+(1+gen)*l,posy+(1+b*2)*l,l,l);
  rect(posx+(gen+2)*l,posy+(1+b*2)*l,l,l);
  rect(posx+(1+gen)*l,posy+(b+1)*2*l,l,l);
  rect(posx+(gen+2)*l,posy+(b+1)*2*l,l,l);
    
  rect(-posx+width-l-(1+gen)*l,posy+(1+b*2)*l,l,l);
  rect(-posx+width-l-(gen+2)*l,posy+(1+b*2)*l,l,l);
  rect(-posx+width-l-(1+gen)*l,posy+(b+1)*2*l,l,l);
  rect(-posx+width-l-(gen+2)*l,posy+(b+1)*2*l,l,l);
    
  rect(posx+(1+gen)*l,-posy+height-l-(1+b*2)*l,l,l);
  rect(posx+(gen+2)*l,-posy+height-l-(1+b*2)*l,l,l);
  rect(posx+(1+gen)*l,-posy+height-l-(b+1)*2*l,l,l);
  rect(posx+(gen+2)*l,-posy+height-l-(b+1)*2*l,l,l);
    
  rect(-posx+width-l-(1+gen)*l,-posy+height-l-(1+b*2)*l,l,l);
  rect(-posx+width-l-(gen+2)*l,-posy+height-l-(1+b*2)*l,l,l);
  rect(-posx+width-l-(1+gen)*l,-posy+height-l-(b+1)*2*l,l,l);
  rect(-posx+width-l-(gen+2)*l,-posy+height-l-(b+1)*2*l,l,l);  
}

function marco(posx, posy){
  for(let j=0;j<12;j++){
    if(j==0){
      fill(color3); //tercer color
    }
    else{
      fill(color1);
    }
    rect(posx,posy+l*j,l,l);
    rect(-posx+width-l,posy+l*j,l,l);
    rect(posx,-posy+height-l*j-l,l,l);
    rect(-posx+width-l,-posy+height-l*j-l,l,l);
    
  }
  for(let j=0;j<11;j++){
    fill(color1);
    rect(posx+l*(j+1),posy,l,l);
    rect(-posx+width-l-l*(j+1),posy,l,l);
    rect(posx+l*(j+1),-posy+height-l,l,l);
    rect(-posx+width-l-l*(j+1),-posy+height-l,l,l);
  }
  for(let j=0;j<11;j++){
    if(j<6 || j>7){
      fill(color2);
    }
    else{
      fill(color1);
    }
    rect(posx+l*(j+1),posy+11*l,l,l);
    rect(-posx+width-l-l*(j+1),posy+11*l,l,l);
    rect(posx+l*(j+1),-posy+height-l-11*l,l,l);
    rect(-posx+width-l-l*(j+1),-posy+height-l-11*l,l,l);
  }
  for(let j=0;j<10;j++){
    if(j==2 || j==3 || j>7){
      fill(color2);
    }
    else{
      fill(color1);
    }
    rect(posx+11*l,posy+l*(j+1),l,l);
    rect(-posx+width-l-11*l,posy+l*(j+1),l,l);
    rect(posx+11*l,-posy+height-l-l*(j+1),l,l);
    rect(-posx+width-l-11*l,-posy+height-l-l*(j+1),l,l);
  }
}
function mousePressed(){
  start();
}
function keyPressed(){
  if(key=='s'){
    save(canvas, 'patron.png');
  }
}
