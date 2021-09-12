const cityName=document.getElementById("cityname")
const  submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById("CityName");

const  temp_real_val = document.getElementById("temp_real_val");
const temp_status =document.getElementById("temp_status")

const datahide = document.querySelector('.middel_layer')
 
  //Date and day

  const day = document.getElementById("day")
  const date=document.getElementById("date")


 
 
   const Day=[ "Sun","Mon" , "Tue" , "Wed","thu" ,"Fri" ,"Sat" ]
   const cday = new Date().getDay();
   const currentDay=Day[cday] 
  day.innerText=currentDay

   //date and  month
   const month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
   const cmonth=new Date().getMonth()
   const currentMonth = month[cmonth]
   const currentDate=new Date().getDate()
    date.innerText=`${currentDate} ${currentMonth}`






const submithandel=async(event)=>{
     event.preventDefault();
    datahide.classList.add('data_hide') 
    //day in weeks


   const cityvalue = cityName.value
    if(cityvalue == ""){
  cityname.innerText=`plz write the name before search`;
    }else{
        try {
           let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}%20&appid=1a672cb217e167899c4463eb569f4898`;
            const Res = await fetch(url); 
            const data =await Res.json(); 
            //convert data in array
            const tempdata =[data];
            
            // show data in weather page
            cityname.innerHTML=`${tempdata[0].name} , ${tempdata[0].sys.country} `;
            temp_real_val.innerText=tempdata[0].main.temp;

          const tempmood= tempdata[0].weather[0].main;
        
            if(tempmood == "clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'> </i>"
             }else if(tempmood == 'clouds'){
                temp_status.innerHTML="<i class='fas fa cloud' style='color:f1f2f6'></i>"
             }
             else if(tempmood =="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
             }
             else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
             }
       
      datahide.classList.remove('data_hide')
        } catch  {
              cityname.innerText=`plz write the currect city name`  
              datahide.classList.add('data_hide')
        }

    }
    
     
}
submitbtn.addEventListener('click',submithandel)