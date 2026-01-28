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
let addToLocalStorage=true;
btn[2].addEventListener('click', ()=>{
    pages[1].style.display='none';
    pages[4].style.display='block';
    let grName=document.querySelector('#grdetails');
    grName.textContent=`Enter the details`;
    addToLocalStorage=false;
});

//js for page number 2 part 2  slider window 
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
let passWord;

//js for page number 3 (login and signup page)
//go to the login page if already have an account
btn[3].addEventListener('click', ()=>{   
    pages[2].style.display='none';
    pages[8].style.display='block';

});

let makeGroup=document.querySelector('.createGroup');

//function to create a named heading on the next page
function personGreeting(){         
    const createGroup=document.createElement('h1');
    createGroup.className='whiteHead';
    createGroup.textContent=`Hello ${userName}!`;
    makeGroup.prepend(createGroup);  
}

//entry of all personal details while signing up
btn[4].addEventListener('click', ()=>{   
    if(placeholder[0].value!=="" && placeholder[1].value!=="" && placeholder[2].value!=="" && placeholder[3].value!==""){
        for(let i=0; i<4; i++){
         placeholder[i].style.backgroundColor='transparent';
   }
    pages[2].style.display='none';
    pages[3].style.display='block';
    name=placeholder[0].value;
    userName=placeholder[1].value;
    passWord=placeholder[2].value;
    emailId=placeholder[3].value;
    personGreeting();
    localStorage.setItem(userName, passWord);
}
else{
   for(let i=0; i<4; i++){
    if(placeholder[i].value===""){
         placeholder[i].style.backgroundColor='#4E070799';
    }
    if(placeholder[i].value!==""){
         placeholder[i].style.backgroundColor='transparent';
    }
   }
}
});
//going to the create grp page
btn[5].addEventListener('click', ()=> {
    pages[2].style.display='none';
    pages[1].style.display='block';
    
});
//end

//details of the created group for both demo and logged in profiles
let groupName ='group';
let names=[];
let number;
let currency;

//function to create the checklist from the array created by adding the names
function createChecklist() {
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
}

//js for page number 4
//finding an existing group in the local storage
btn[6].addEventListener('click', ()=>{
    groupName=placeholder[4].value;
    let length=localStorage.length;
    for(let i=0; i<length; i++){
        let key=localStorage.key(i);
        let currKEY=localStorage.key(i);
        if(`${groupName}_currency`===currKEY){
            currency=localStorage.getItem(currKEY);
        }
        if(groupName===key){
            names=JSON.parse(localStorage.getItem(key));
            number=names.length;
            createChecklist();
            
            placeholder[4].style.backgroundColor='transparent';
            pages[3].style.display='none';
            pages[5].style.display='block';
            break;
        }
        else{
            placeholder[4].style.backgroundColor='#4E070799';
        }
    }
});

//creating a new group for splitting up the expenses
btn[7].addEventListener('click', ()=>{
    if(placeholder[5].value!==""){
        placeholder[5].style.backgroundColor='transparent';
        groupName=placeholder[5].value;
        pages[3].style.display='none';
        pages[4].style.display='block';

    let grName=document.querySelector('#grdetails');
    grName.textContent=`Enter the details for ${groupName}`;
    }
    else{
        placeholder[5].style.backgroundColor='#4E070799';
    }
});

//button to go back to the previous page
btn[8].addEventListener('click', ()=>{
    for(let i=0; i<4; i++){
        placeholder[i].value="";
    }
    groupName='group';
    pages[3].style.display='none';
    pages[2].style.display='block';
});
//end

//procuring elements for the bills 
const bills=document.querySelector('.bill');
let checklistDiv=document.getElementById("checklist");

//js for grp details page number 5
//entering the value for currency
btn[9].addEventListener('click', ()=>{
    currency=placeholder[6].value;
    number=placeholder[7].value;
});

let k=0;  
//creating a new array by adding using this button
btn[10].addEventListener('click', ()=>{
    names[k]=placeholder[8].value;
    placeholder[8].value="";
    k++;
});

//creating a checklist from the new array generated
btn[11].addEventListener('click', ()=>{
   if(addToLocalStorage){
     localStorage.setItem(groupName, JSON.stringify(names));
   }
    localStorage.setItem(`${groupName}_currency`, currency);
    createChecklist();
    pages[4].style.display='none';
    pages[5].style.display='block';
});

//back button for two cases- demo and logged in 
btn[12].addEventListener('click', ()=>{
    names=[];
    number=0;
    pages[4].style.display='none';
    if(addToLocalStorage){
        pages[3].style.display='block';
    }
    else{
        pages[1].style.display='block';
    }
});
//end

//creating variables for recording the data related each expense
let l=0;
let reason=[];
let amount=[]; 
let paidBy=[];
let contributors=[];
let noOfPeople=[];
let billNumber=1;
let netPaid=[];
let expenses=[];

//js for bills i.e, page number 6
//recording details from each bill by confirm above bill
btn[13].addEventListener('click', ()=>{
    reason[l]=placeholder[9].value;
    amount[l]=Number(placeholder[10].value);
    paidBy[l]=placeholder[11].value;

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

//access billHead for changing the bill number
let billHead=document.querySelector('#billHead');

//setting value of each input back to zero for a new bill
btn[14].addEventListener('click', ()=>{
    billHead.textContent=`BILL ${billNumber}`;
    placeholder[9].value='';
    placeholder[10].value='';
    placeholder[11].value='';

    let allBoxes=document.querySelectorAll('input.boxes');
    for(let a=0; a<number; a++){
        allBoxes[a].checked=false;
    }
});

//accessing the viewbill page
let viewBill=document.querySelector('#viewbill');
let startBillno=1;

//creating elements for displaying the bill on the next page
btn[15].addEventListener('click', ()=>{
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
        amtPaid.textContent=`Amount Paid: ${amount[b-1] }${currency}`;
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

//created the fnction to get settlement for the added bills
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

//access the table to edit the elements
let tableBody=document.getElementById('tableBody');

//js for page number 7 viewbills page
//going to the settlements page 
btn[16].addEventListener('click', ()=>{
    getSettlement();
    pages[6].style.display='none';
    pages[7].style.display='block';
//inner html is set like this every time so that elements won't repeat after any addition or deletion
    tableBody.innerHTML=`<tr>
                        <th>NAME</th>
                        <th>STATUS</th>
                        <th>BALANCES IN ${currency}</th>
                        <th>NET PAID IN ${currency}</th>
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

//going back to the previous page to add a bill
btn[17].addEventListener('click', ()=>{
    pages[6].style.display='none';
    pages[5].style.display='block';
});

//js for page number 8 settlement window
//going back to the previous window to delete a certain bill or go back further
btn[18].addEventListener('click', ()=>{
    pages[7].style.display='none';
    pages[6].style.display='block';
});

//js for page number nine that is the login page if the user is already signed up in the website
//ideally this page should present uupwards but thought about it later so didn't change the order
btn[19].addEventListener('click', ()=>{
    userName=placeholder[12].value;
    passWord=placeholder[13].value;

//check if the correct password is entered or not?    
    let length=localStorage.length;
    for(let i=0; i<length; i++){
        let key=localStorage.key(i);
        if(key===userName && localStorage.getItem(key)===passWord){
            placeholder[12].style.backgroundColor='transparent';
            placeholder[13].style.backgroundColor='transparent';
            personGreeting();
            pages[8].style.display='none';
            pages[3].style.display='block';
            break;
        }
        else{
            placeholder[12].style.backgroundColor='#4E070799';
            placeholder[13].style.backgroundColor='#4E070799';
        }
    }
});

//go back to the sign up window
btn[20].addEventListener('click', ()=>{
    pages[8].style.display='none';
    pages[2].style.display='block';
});