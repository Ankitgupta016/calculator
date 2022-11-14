let string = '';
let buttons = document.querySelectorAll('.button');
try {
    Array.from(buttons).forEach((button)=>{
     button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            
            string=string + button.innerHTML+eval(string);
            document.querySelector('input').value=string;
        
        }
        
        else if (e.target.innerHTML == 'AC') {
            string='';
            document.querySelector('input').value=string;
        }
         
        
         else  {
        // console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
      }
    //   button.addEventListener('click',(e)=>{
    //     if (e.target.innerHTML == '=') {
    //         string='';
    //         document.querySelector('input').value=string;
    //     }
  
    //  })
    })
    
      
})



} catch (error) {
    console.log(error);
}