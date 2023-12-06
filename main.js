

const btn = document.getElementById('toggleSubscription');
const monthlyPrice = document.querySelectorAll('.monthlyPrice');
const yearlyPrice = document.querySelectorAll('.yearlyPrice');


btn.addEventListener('click',function(){
    if(btn.textContent === 'Monthly'){
        btn.textContent = 'Yearly'; 
        monthlyPrice.forEach(price => price.style.display = 'none' );
        yearlyPrice.forEach(price => price.style.display = 'block');
    }else{
        btn.textContent = 'Monthly';
        monthlyPrice.forEach(price => price.style.display='block')
        yearlyPrice.forEach(price => price.style.display='none')
    }
})