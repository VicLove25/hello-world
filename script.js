function myCoolFunction(x,y,z) {
  return x+y/z; 
}
myCoolFunction(2,3,4)


$( document ).ready(
  function() {
    console.log( "ready!" );
    
    
  }
);


$(document)
  .on(
    'click', 
      (event)=> 
      {
        // alert(event.target.id); 
        let $clicked = $('#'+event.target.id );  
        // alert($clicked.position().top);
        
        console.log(
          event.target.id, 
          $('#'+event.target.id)
          .position()
          .left);
        
         $('#clothesBasket').draggable(); 
         $("#clothesBasket").on('click', function(){
         $("#clothesBasket").animate({right: '-60px'});
    
  })
})