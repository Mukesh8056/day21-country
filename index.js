
       function input(){
        let input=document.getElementById("input").value;
      
        var author = fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`)
            
        author.then((data)=>data.json()).then((data1)=>{
            console.log(data1)
            console.log(data1[0].flags.png)
            console.log(data1[0].name.common)
            console.log(data1[0].continents[0])
            console.log(data1[0].latlng[0] )
            console.log(data1[0].latlng[1] )
            console.log(data1[0].area )
            console.log(data1[0].population   )
        
            let result=document.getElementById("result").innerHTML=`  <div class="card" style="width: 18rem;">
         <img src="${data1[0].flags.png}" class="card-img-top" alt="..."  >
         <div class="card-body">
           <h5 class="card-title">Name:${data1[0].name.common}</h5>
           <h5 class="card-title">Continent:${data1[0].continents[0]}</h5>
           <h5 class="card-title">Latitude:${data1[0].latlng[0]}</h5>
           <h5 class="card-title">Longitude:${data1[0].latlng[1]}</h5>
           <h5 class="card-title">Area:${data1[0].area}</h5>
           <h5 class="card-title">Population:${data1[0].population}</h5>
           
         </div>
   </div>`
         

            });
        }
        