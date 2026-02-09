function bakeCake(mycallback){
    console.log('1.cake is baking');
    setTimeout(()=>{
        console.log('2.cake is ready');
        mycallback();
    },2000);
 }
 bakeCake(()=>{
    console.log('3.now i can eat this');
 });