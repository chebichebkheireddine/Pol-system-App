// Test Code 
// options object
const options =[
    {id:"option1", text:"JavaScript", vote:0},
    {id:"option2", text:"Python", vote:0},
    {id:"option3", text:"Java", vote:0},
    {id:"option4", text:"C++", vote:0},
];

function submitPoll(){
    const slectedOption =document.querySelector('input[name="poll"]:checked');
    // console.log(slectedOption.value);
    if (!slectedOption){
        alert('Please select an option');
        return; 
    }
    const  optionID= slectedOption.value;
    const selcteOptionObject= options.find((option)=> option.id === optionID);
    // console.log(selcteOptionObject);
    if (selcteOptionObject){
        selcteOptionObject.vote++;
        console.log(selcteOptionObject);
        displayResults();
    }
      
}
 function displayResults(){
    const result= document.getElementById('result');
    result.innerHTML="";
    options.forEach((option)=>{
        const persntage= ((option.vote / getTotalVotes()) * 100).toFixed(2)||0;
        const barWidh = persntage > 0 ? `${persntage}%`:'0%';
        const optionResult=document.createElement('div');
        optionResult.className='option-result';
        optionResult.innerHTML=`
        <span class="option-text" >${option.text}</span>
        <div class="bar-container">
            <div class="result-bar" style="width:${barWidh}"></div>
        </div>
        <span class="persenteg">${persntage}%</span>
        `;
        result.appendChild(optionResult);
    });

}
function getTotalVotes(){
        return options.reduce((acc, option)=> acc + option.vote, 0 );
}
displayResults();