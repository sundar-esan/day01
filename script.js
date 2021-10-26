var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload = function(){var data= JSON.parse(request.response);
                  
                  // console.log(data);}
                  //console.log(data[0].region);}
                  //for(var i=0;i<data.length;i++)
                  //console.log(data[i].region);}
                  //for(var i=0;i<data.length;i++)
                  //console.log(data[i].capital);}
                  //for(var i=0;i<data.length;i++)
                  //console.log(data[i].name);} res    = data.filter ( (data)  => data.population<1000000);
   var res= data.filter((ele)=>ele.population<1000000);
 
                  console.log(res);