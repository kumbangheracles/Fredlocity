let availableKeywords = ['Yogyakarta',
    'Tangerang',
    'Bandung',
    'London',
    'Jakarta',
    'Manado',
    'Medan',];

let availableKeywords2 = ['Bedroom',
    'Living Room',
    'Kitchen',
    'Bathroom',
    'Garden',
    'Balcony',
    'Office',
    'Wardrobe',
    'Dining Room',
    'Guest Room',
    'Family Room',
    'Laundry Room',
    'Playroom',
    'Home Office',
    'Home Gym',
    'Home Theater',
    'Home Bar',
    'Home Spa',
    'Home Library',
    'Home Studio',

]



const resultBox = document.querySelector('.result-box');
const resultBox2 = document.querySelector('.result-box2');

const inputBox1 = document.querySelector('.search1')
const inputBox2 = document.querySelector('.search2')

inputBox1.onkeyup = function(){
    let result = [];
    let input = inputBox1.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
     const content = result.map((list)=>{
        return '<li onclick=selectInput(this)>' + list + '</li>';
    });

    resultBox.innerHTML = '<ul>' + content.join('') + '</ul>';
}

function selectInput(list){
    inputBox1.value = list.innerHTML;
    resultBox.innerHTML = '';
}

//section room
inputBox2.onkeyup = function(){
    let result2 = [];
    let input2 = inputBox2.value;
    if(input2.length){
        result2 = availableKeywords2.filter((keyword2)=>{
            return keyword2.toLowerCase().includes(input2.toLowerCase());
        });
        console.log(result2);
    }
    display2(result2);
    if(!result2.length){
        resultBox2.innerHTML = ''; // Use resultBox2 instead of resultBox
    }
}

function display2(result2){
     const content2 = result2.map((list2)=>{
        return '<li onclick=selectInput2(this)>' + list2 + '</li>'; // selectInput2 instead of selectInput
    });

    resultBox2.innerHTML = '<ul>' + content2.join('') + '</ul>'; // Use resultBox2 instead of resultBox
}

function selectInput2(list2){
    inputBox2.value = list2.innerHTML;
    resultBox2.innerHTML = ''; // Use resultBox2 instead of resultBox
}