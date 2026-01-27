let pages=document.querySelectorAll('.page');
let btn=document.querySelectorAll('.btn');
let placeholder=document.querySelectorAll('.placeHolder');

// js for page number 1
btn[0].addEventListener('click', ()=>{
    pages[0].style.display='none';
    pages[1].style.display='block';
});

//js for page number 2 part 1
btn[1].addEventListener('click', ()=>{
    pages[1].style.display='none';
    pages[2].style.display='block';
});
btn[2].addEventListener('click', ()=>{
    pages[1].style.display='none';
    pages[3].style.display='block';
});

//js for page number 2 part 2
const left=document.querySelector('.left');
const right=document.querySelector('.right');
const slider=document.querySelector('.slider');
const images=document.querySelectorAll('.image');

let slideNumber=1;
const length= images.length;

const navigator= document.querySelector('.navigator');

for(let i=0; i<length; i++){
    let div=document.createElement('div');
    div.className='dots';
    navigator.appendChild(div);
}

const dots= document.querySelectorAll('.dots');
dots[0].style.backgroundColor = 'white';
 
function resetButton(){
    for(let x=0; x<length; x++){
        dots[x].style.backgroundColor='transparent';
    }
}

dots.forEach((dot, i) =>{
    dot.addEventListener('click', ()=>{
        resetButton();
        if(window.innerWidth<=850){
            slider.style.transform = `translateX(-${i*90}vw)`;
        }
        else{
            slider.style.transform = `translateX(-${i*850}px)`;
        }
        slideNumber=i+1;
        dot.style.backgroundColor='white';
    });
});

function changeColor(){
    resetButton();
    dots[slideNumber-1].style.backgroundColor='white';
}

function nextSlide(){
    if(window.innerWidth<=850){
        slider.style.transform = `translateX(-${slideNumber*90}vw)`;
    }
    else{
        slider.style.transform = `translateX(-${slideNumber*850}px)`;
    }
        slideNumber++;
}

function previousSlide(){
    if(window.innerWidth<=850){
        slider.style.transform = `translateX(-${(slideNumber-2)*90}vw)`;
    }
    else{
        slider.style.transform = `translateX(-${(slideNumber-2)*850}px)`;
    }
        slideNumber--;
}

function getFirstSlide(){
    slider.style.transform = `translateX(0px)`;
        slideNumber=1;
}

function getLastSlide(){
    if(window.innerWidth<=850){
        slider.style.transform = `translateX(-${(length-1)*90}vw)`;
    }
    else{
        slider.style.transform = `translateX(-${(length-1)*850}px)`;
    }
    slideNumber=length;
}

right.addEventListener('click', ()=>{
    if(slideNumber < length){
        nextSlide();
    }
    else{
        getFirstSlide();
    } 
    changeColor();   
});

left.addEventListener('click', ()=>{
    if(slideNumber >1){
        previousSlide();
    }
    else{
        getLastSlide();
    }
    changeColor();    
});

let name;
let userName;
let emailId;

//js for page number 3 (login page)
btn[3].addEventListener('click', ()=>{
    if(placeholder[0].value!=="" && placeholder[1].value!=="" && placeholder[2].value!==""){
        for(let i=0; i<3; i++){
         placeholder[i].style.backgroundColor='transparent';
   }
    pages[2].style.display='none';
    pages[3].style.display='block';
    name=placeholder[0].value;
    userName=placeholder[1].value;
    emailId=placeholder[2].value;

    let makeGroup=document.querySelector('.createGroup');
    const createGroup=document.createElement('h1');
    createGroup.className='whiteHead';
    createGroup.textContent=`Hello ${userName}!`;
    makeGroup.prepend(createGroup);  
}
else{
   for(let i=0; i<3; i++){
    if(placeholder[i].value===""){
         placeholder[i].style.backgroundColor='#4E070799';
    }
    if(placeholder[i].value!==""){
         placeholder[i].style.backgroundColor='transparent';
    }
   }
}
});

//end

let groupName;

//js for page number 4
btn[4].addEventListener('click', ()=>{
    if(placeholder[3].value!==""){
        placeholder[3].style.backgroundColor='transparent';
        pages[3].style.display='none';
    pages[4].style.display='block';
    groupName=placeholder[3].value;

    let grName=document.querySelector('#grdetails');
    grName.textContent=`Enter the details for ${groupName}`;
    }
    else{
        placeholder[3].style.backgroundColor='#4E070799';
    }
});

//end

let number;
const bills=document.querySelector('.bill');
let checklistDiv=document.getElementById("checklist");
let names=[];
//js for grp details page number 5

btn[5].addEventListener('click', ()=>{
    number=placeholder[4].value;
});

let k=0;
btn[6].addEventListener('click', ()=>{
    names[k]=placeholder[5].value;
    placeholder[5].value="";
    k++;
});

let expenses=[];

btn[7].addEventListener('click', ()=>{

    names.forEach((Name, index) => {
                let label = document.createElement("label");
                let checkbox = document.createElement("input");
                checkbox.className='boxes';
                checkbox.type = "checkbox";
                checkbox.value = Name;
                label.appendChild(checkbox);
                label.append(" " + Name);
                checklistDiv.appendChild(label);
                checklistDiv.appendChild(document.createElement("br"));
            });       

    pages[4].style.display='none';
    pages[5].style.display='block';
});

//end

let l=0;
let reason=[];
let amount=[]; 
let paidBy=[];
let contributors=[];
let noOfPeople=[];
let billNumber=1;
let netPaid=[];

//js for bills i.e, page number 6

btn[8].addEventListener('click', ()=>{
    reason[l]=placeholder[6].value;
    amount[l]=Number(placeholder[7].value);
    paidBy[l]=placeholder[8].value;

    let checkedBoxes=document.querySelectorAll('input.boxes:checked');
    noOfPeople[l]=Number(checkedBoxes.length);
    let allBoxes=document.querySelectorAll('input.boxes');
    contributors[l]="";
    for(let a=0; a<number; a++){
        if(allBoxes[a].checked){
           contributors[l]+= "  "+ names[a];
        }
    }
    l++;
    billNumber++;    
});

let billHead=document.querySelector('#billHead');

btn[9].addEventListener('click', ()=>{
    billHead.textContent=`BILL ${billNumber}`;
    placeholder[6].value='';
    placeholder[7].value='';
    placeholder[8].value='';

    let allBoxes=document.querySelectorAll('input.boxes');
    for(let a=0; a<number; a++){
        allBoxes[a].checked=false;
    }
});

let viewBill=document.querySelector('#viewbill');
let startBillno=1;
btn[10].addEventListener('click', ()=>{
    pages[5].style.display='none';
    pages[6].style.display='block';

    for(let b=startBillno; b<billNumber; b++){
        let receipt=document.createElement('div');
        receipt.className='viewBill';

        let h1=document.createElement('h1');
        h1.className='whiteHead';
        h1.textContent=`Bill ${b}`;
        receipt.appendChild(h1);

        let expName=document.createElement('h2');
        expName.className='whiteHead';
        expName.textContent=`Reason of Payment: ${reason[b-1]}`;
        receipt.appendChild(expName);

        let amtPaid=document.createElement('h2');
        amtPaid.className='whiteHead';
        amtPaid.textContent=`Amount Paid: ${amount[b-1]}`;
        receipt.appendChild(amtPaid);

        let payer=document.createElement('h2');
        payer.className='whiteHead';
        payer.textContent=`Paid By: ${paidBy[b-1]}`;
        receipt.appendChild(payer);

        let contribet=document.createElement('h3');
        contribet.className='whiteHead';
        contribet.textContent=`Bill is splitted between: ${contributors[b-1]}`;
        receipt.appendChild(contribet);

        let deleteBtn=document.createElement('button');
        deleteBtn.className='btn';
        deleteBtn.textContent="Delete Bill";
        receipt.appendChild(deleteBtn);

        viewBill.appendChild(receipt);
        deleteBtn.addEventListener('click', ()=> {
            amount[b-1]=0;
            receipt.style.display='none';
                });
    }
    startBillno=billNumber;
});

function getSettlement(){
    for(let i=0; i<number; i++){
        expenses[i]=0;
        netPaid[i]=0;
    } 
    for(let i=0; i<number; i++){
        for(let b=0; b<billNumber-1; b++){
            let crAmount=Number(amount[b]);
            let people=Number(noOfPeople[b]);
            if(names[i]===paidBy[b]){
                expenses[i]+=crAmount;
                netPaid[i]+=crAmount;
            }
            if(contributors[b].includes(names[i])){
                expenses[i]-=(crAmount/people);
            }
        }
    }
}

let tableBody=document.getElementById('tableBody');

//js for page number 7 viewbills page
btn[11].addEventListener('click', ()=>{
    getSettlement();
    pages[6].style.display='none';
    pages[7].style.display='block';
    tableBody.innerHTML=`<tr>
                        <th>NAME</th>
                        <th>STATUS</th>
                        <th>BALANCES</th>
                        <th>NET PAID</th>
                    </tr>`;
    for(let c=0; c<number; c++){
        let status='clear';
        let displayAmount=0;
        if(expenses[c]>0){
            status='is owed';
            displayAmount=expenses[c];
        }
        else if(expenses[c]<0){
            status='owes';
            displayAmount=-expenses[c];
        }
         tableBody.innerHTML+=`
            <tr>
            <td>${names[c]}</td>
            <td>${status}</td>
            <td>${displayAmount}</td>
            <td>${netPaid[c]}</td>
            </tr>`;
    }
});

btn[12].addEventListener('click', ()=>{
    pages[6].style.display='none';
    pages[5].style.display='block';
});

//js for page number 8 settlement window
btn[13].addEventListener('click', ()=>{
    pages[7].style.display='none';
    pages[6].style.display='block';
});