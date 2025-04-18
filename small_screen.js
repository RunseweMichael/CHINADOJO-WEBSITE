const leng = document.getElementById('length');

const width = document.getElementById('width');

const height = document.getElementById('height');

const workings = document.getElementById('form1_calculations');

const calc_btn = document.getElementById('calc-btn');

const result = document.getElementById('result1');

const CBM_calc = document.getElementById('CBM_calc');

const instruction = document.getElementById('desc');

const b_screen3 = document.getElementById('b_screen3');



const price = document.getElementById('price');

const weight = document.getElementById('weight2');

const shipping = document.getElementById('shipping');

const clearing = document.getElementById('clearing');

const exchange = document.getElementById('exchange');

const Calculations2Display = document.getElementById('form2_calculations');

const calculate2btn = document.getElementById('calculatebtn');

const land_calc = document.getElementById('Land_price_calc');




CBM_calc.addEventListener('click',firstCalc);

land_calc.addEventListener('click',secondCalc);

calc_btn.addEventListener('click',CBM);

calculate2btn.addEventListener('click',Land);


function CBM(event){
    event.preventDefault();

    const val1 = leng.value;
    const val2 = width.value;
    const val3 = height.value;

    if(val1,val2,val3 == 0){
        alert('Enter the values for length, width and height')
    }else{
        const solution = val1 * val2 * val3; 
        const final_solution = solution.toFixed(2);
        const convert_to_m = final_solution/1000000;
        const convert_to_ft = (convert_to_m * 35.32).toFixed(1);
        result.innerText = `${final_solution}`;

        const fval1 = val1/100;
        const fval2 = val2/100;
        const fval3 = val3/100;

        form1_calculations.style.display = 'block'

        workings.innerHTML = `<p class="Res">RESULTS</p><br>
        <p class='js_p'>${val1} * ${val2} * ${val3} = <b>${convert_to_m} m</b><sup>3</sup> = <b>${convert_to_ft} ft</b><sup>3</sup></p><br>
        <p class='js_p'>${val1} cm = <b>${fval2} m</b>, ${val2} cm = <b>${fval2} m</b>, ${val3} cm = <b>${fval3} m</b>,</p><br>
        <p class='js_p'>${fval1} * ${fval2} * ${fval3} = <b>${convert_to_m} cbm</b></p>`
    }

   
}

function Land(event){
    event.preventDefault();

    const finalPrice = (price.value);
    const finalWeight = weight.value;
    const finalShipping = shipping.value;
    const finalClearing = clearing.value;
    const finalRate = exchange.value;

    const Shipping = ((finalWeight * finalShipping) * finalRate).toFixed(2);
    const Clearing = (finalWeight * finalClearing).toFixed(2);
    const Landing = (parseFloat(finalPrice) + parseFloat(((finalWeight * finalShipping) * finalRate)) + parseFloat((finalWeight * finalClearing))).toFixed(2);

    form2_calculations.style.display = 'block';

    Calculations2Display.innerHTML =`<p id='cost'><b>LANDING COST</b></p><br>
    <p class='display2'>Price of Goods: <b>${finalPrice}</b></p><br>
    <p class='display2'>Shipping in (₦): <b>(${finalWeight} * ${finalShipping}) * ${finalRate} = ${Shipping} ₦</b></p><br>
    <p class='display2'>Clearing Total: <b>${finalWeight} * ${finalClearing} = ${Clearing} ₦</b></p><br>
    <p class='display2'>Landing Cost: <b>${finalPrice} + ${Shipping} + ${Clearing} = ${Landing} ₦<b></p>`;
}

function firstCalc(){
    Calculations2Display.style.display = 'none';
    instruction.innerText = 'CUBIC METER CALCULATOR'
    form1.style.display = 'flex';
    b_screen3.style.display = 'flex';
    form2.style.display = 'none';
    CBM_calc.style.color = 'lightseagreen';
    land_calc.style.color = 'black';
}

function secondCalc(){
    workings.style.display = 'none';
    instruction.innerText = 'LANDING COST CALCULATOR'
    form2.style.display = 'flex';
    form1.style.display = 'none';
    b_screen3.style.display = 'none';
    land_calc.style.color = 'lightseagreen';
    CBM_calc.style.color = 'black';
}




const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

function mainPage(event){
    event.preventDefault();
    page1.style.display = 'block';
    page2.style.display = 'none';
}

function cancel(event){
    event.preventDefault();
    page1.style.display = 'none';
    page2.style.display = 'block'
}