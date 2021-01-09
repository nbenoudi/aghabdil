const now = new Date("2021, 01, 12,")
var tas = [{title:""}];
var tid = [{title:""}];
var autoevents = [{
  id: "-1",
  title: "ⵉⵖⴼ ⵍ ⵎⵓⵍⵢ ", start: "", end: ""
}];


const testevents = [

  {
    id: 0,
    title: 'حدو وداش',

  },

  {
    id: 1,
    title: 'بروش',

  },

  {
    id: 2,
    title: 'تورتيت',

  },

  {
    id: 3,
    title: 'ايت علي',

  },
  {
    id: 4,
    title: 'ارحو',

  },
  {
    id: 5,
    title: 'زعك',

  },
  {
    id: 6,
    title: 'أحرضان',

  },
  {
    id: 7,
    title: 'أوبرشوم',

  },
  {
    id: 8,
    title: 'الراضي',

  },
  {
    id: 9,
    title: 'أشلاف',

  },
  {
    id: 10,
    title: 'مزكنان',

  },
  {
    id: 11,
    title: 'أولهنت',

  },
  {
    id: 12,
    title: 'خساس',

  },
  {
    id: 13,
    title: 'ايت مادوش',

  },
  {
    id: 14,
    title: 'ايت مخداش',

  },
  {
    id: 15,
    title: 'ملبرج',

  },
  {
    id: 16,
    title: 'ايت عسو',

  },
  {
    id: 17,
    title: 'إخلف',

  },
  {
    id: 18,
    title: 'أخربيش',

  },
  {
    id: 19,
    title:'اهرو',

  },

  {
    id: 20,
    title: 'ايت بخلا',

  },
  {
    id: 21,
    title: 'متغتن',

  },
  {
    id: 22,
    title: 'شعو',

  },
  {
    id: 23,
    title: 'ايت حساين',

  }, {
    id: 24,
    title: 'بن زاير',

  }, {
    id: 25,
    title: 'اولهزا',

  }, {
    id: 26,
    title: 'ايت كرما',

  }, {
    id: 27,
    title: 'اقرب',

  }, {
    id: 28,
    title: 'تين زدو',

  }, {
    id: 29,
    title: 'قسو',

  }, {
    id: 30,
    title: 'حدو نايت موحا',

  }, {
    id: 31,
    title: 'اتبير',

  }, {
    id: 32,
    
    title: 'اهرو نغرمين',
  }, {
    id: 33,
    title: 'ايت كمو',

  }, {
    id: 34,
    title: 'الصديق',

  }, {
    id: 35,
   
    title: 'ايت سكيس',
  }, {
    id: 36,
    title: 'علي حمو',

  }, {
    id: 37,
   
    title: 'امزوار',
  },
  {
    id: 38,
    title: 'ايت حمو',
  },
  {
    id: 39,
   
    title: 'ايت حلوس',

  },
  {
    id: 40,
  
    title: 'اضبجي',
  },
{
    id: 41,
   
    title: 'ايت مسري',
  },

]


for (let j = 0; j < 365; j++) {
  let k = parseInt(j / 17);
  let r = j % 17;
/*
  
  if (r===0) {
    tas[j]={title: "الجامع"}; 
    tid[j]={title: "الجامع"};
    
  } else {

      tas[j]={title:testevents[(2 * j-2) % 42].title}; 
      tid[j]={title:testevents[(2 * j-1) % 42].title};//
     
   } 
    
    
*/
    
  


  if (k % 2 === 0 ) {
    if (r === 0 ) {
    
      tas[j]={title: "الجامع"}; 
      tid[j]={title: "الجامع"};

    } else {
     
      tas[j]={title:testevents[(2 * (j-k)-1) % 42].title}; 
      tid[j]={title:testevents[(2 * (j-k)-2) % 42].title};//
    }
  } else {
    if (r !== 0) {

      tas[j] ={title: testevents[ (2 * (j-k)-2) % 42].title}; 
  
     tid[j]={title:testevents[(2 * (j-k)-1) % 42].title}; 
    } else {
      
      tas[j]={title : "الجامع"};
     tid[j]={title : "الجامع"};
     
    }
    
  }
  
 now.setDate(now.getDate()+1); 
 
autoevents.push({title:tid[j].title,start:now.setDate(now.getDate()),end:now.setDate(now.getDate())},{title:tas[j].title,start:now.setDate(now.getDate()),end:now.setDate(now.getDate())});

}




  







export default autoevents