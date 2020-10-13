

var countries=[
    {
        name:'Algeria',
        code:'DZ'
    },
    {
        name:'Angola',
        code:'AO'
    },
    {
        name:'Bangladesh',
        code:'BD'
    },
    {
        name:'Belgium',
        code:'BE'
    },
    {
        name:'Canada',
        code:'CA'
    },
    {
        name:'Columbia',
        code:'CO'
    },
    {
        name:'Costa Rica',
        code:'CR'
    },
    {
        name:'Cuba',
        code:'CU'
    },
    {
        name:'Dominica',
        code:'DM'
    },
    {
        name:'Egypt',
        code:'EG'
    },
    {
        name:'Estonia',
        code:'EE'
    },
    {
        name:'Fiji',
        code:'FJ'
    },
    {
        name:'France',
        code:'FR'
    },
    {
        name:'Gabon',
        code:'GA'
    },
    {
        name:'Guinea',
        code:'GN'

    },
    {
        name:'Haiti',
        code:'HT'
    },
    {
        name:'Hong Kong',
        code:'HK'
    },
    {
        name:'India',
        code:'IN'
    },
    {
        name:'Iraq',
        code:'IQ'
    },
    {
        name:'Ialy',
        code:'IT'
    },
    {
        name:'Jordan',
        code:'JO'
    },
    {
        name:'Latvia',
        code:'LV'
    },
    {
        name:'Liberia',
        code:'LR'
    },
    {
        name:'Mali',
        code:'ML'
    }, 
    {
        name:'Mexico',
        code:'MX'
    }, 
    {
        name:'Nepal',
        code:'NP'
    },
    {
        name:'Oman',
        code:'OM'
    
    },
    {
        name:'Pakistan',
        code:'PK'
    },
    {
        name:'Peru',
        code:'PE'
    },
    {
        name:'Rwanda',
        code:'RW'
    },
    {
        name:'Saint Lucia',
        code:'LC'
    },
    {
        name:'Samoa',
        code:'WS'
    },
    {
        name:'Serbia',
        code:'RS'
    },
    {
        name:'Spain',
        code:'ES'
    },
    {
        name:'Turkey',
        code:'TR'
    }
]

function getList(){
    let arrayToDisplay=uniqueRandoms(25,0,35);
    listOfCountries = [];
    strHtml='';
    arrayToDisplay.forEach(element => {
        listOfCountries.push(countries[element]);
        strHtml+='<li><b>'+countries[element].code+'</b> - '+countries[element].name+'</li>'
    });
    document.getElementsByClassName("countries")[0].innerHTML=strHtml;
    

    for(let i=0;i<countries.length;i++){
        if(!arrayToDisplay.includes(i)){
            console.log(countries[i]);
        }
    }

    return listOfCountries;
}

function uniqueRandoms(qty, min, max){
    var rnd, arr=[];
    do { do { rnd=Math.floor(Math.random()*max)+min }
        while(arr.includes(rnd))
        arr.push(rnd);
    } while(arr.length<qty)
    return arr;
  }
  getList();