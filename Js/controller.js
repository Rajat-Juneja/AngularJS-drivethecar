app.controller('myCtrl', function($scope) {
    var x=50;
    var y=50;
    var width=300;
    var height=150;


    var minx = window.innerWidth/2 - window.innerWidth/6;
    var maxx = window.innerWidth/2 + window.innerWidth/6;
    var miny = window.innerHeight/2 - window.innerHeight/20;
    var maxy = window.innerHeight/2 + window.innerHeight/20;

    $scope.function = (ev)=>{

         
        
    
        if(ev.keyCode==37) // left
       {    
        $scope.src="left.png";
        x-=0.5;
        if(ev.srcElement.childNodes[3].x<width){
            x+=0.48;
            
        }
        
        if(ev.srcElement.childNodes[3].x<minx){
        width-=2;
        height-=1;
        }
        if(ev.srcElement.childNodes[3].x>maxx){
        width+=2;
        height+=1;
        }
        ev.srcElement.childNodes[3].style.width = width+"px";
        ev.srcElement.childNodes[3].style.height = height+"px";
        ev.srcElement.childNodes[3].style.left = x+"%";
       }
       
       // console.log("yes");


        else if(ev.keyCode==38) //up
       {
        $scope.src="back.png";
        y-=0.5;
        // console.log(y);
        if(ev.srcElement.childNodes[3].y<height+30){
            y+=0.49;
          
           
        }

       
        if(ev.srcElement.childNodes[3].y<miny){
        width-=1;
        height-=0.5;
        }
        if(ev.srcElement.childNodes[3].y>maxy){
        width-=1;
        height-=0.5;
        }
       
        
        ev.srcElement.childNodes[3].style.width = width+"px";
        ev.srcElement.childNodes[3].style.height = height+"px";
        
        ev.srcElement.childNodes[3].style.top = y+"%";
       }

       else if(ev.keyCode==39) //right
       {
        $scope.src="right.png";
        x+=0.5;
        if(ev.srcElement.childNodes[3].x>window.innerWidth-width){
            x-=0.48;
            
        }
        
        if(ev.srcElement.childNodes[3].x<minx){
        width+=2;
        height+=1;
        }
        if(ev.srcElement.childNodes[3].x>maxx){
        width-=2;
        height-=1;
        }
        ev.srcElement.childNodes[3].style.width = width+"px";
        ev.srcElement.childNodes[3].style.height = height+"px";
        ev.srcElement.childNodes[3].style.left = x+"%";
       }

       else if(ev.keyCode=40) //down
       {
        $scope.src="front.png";
        y+=0.5;
        // console.log("y is",y+3.4*height);
        if(ev.srcElement.childNodes[3].y+height>window.innerHeight){
            y-=0.49;
            // console.log(window.innerHeight-20);

        }
        if(ev.srcElement.childNodes[3].y<miny){
        width+=1;
        height+=0.5;
        }
        if(ev.srcElement.childNodes[3].y>maxy){
        width+=1;
        height+=0.5;
        }
        ev.srcElement.childNodes[3].style.width = width+"px";
        ev.srcElement.childNodes[3].style.height = height+"px";
        ev.srcElement.childNodes[3].style.top = y+"%";
       }


    };
});
