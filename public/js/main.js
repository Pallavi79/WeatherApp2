
//TEMPERATURE SECTION

const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo =async(event)=>{
  event.preventDefault();
  let cityVal = cityName.value;
  if(cityVal==""){
    //alert("invalid");
    city_name.innerText=`Please enter a city name before search`;
    datahide.classList.add('data_hide');
  }else{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1bd43669dbb260b823c54e7cefd7ce33`
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      console.log(arrData);

      city_name.innerText= `${arrData[0].name} ${arrData[0].sys.country}`;
      temp_real_val.innerText=arrData[0].main.temp;

      const tempMood =arrData[0].weather[0].main;
      if(tempMood=="Clear"){
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#f1f2f6;'></i>";
      }else if(tempMood=="clouds"){
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#a4b0be;'></i>";
      }
      else if(tempMood=="Rain"){
        temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
      }
      else if(tempMood=="Haze"){
        temp_status.innerHTML="<i class='fas fa-smog' style='color:#a4b0be;'></i>";
      }
      else{
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      }

      datahide.classList.remove('data_hide');
      
    }catch{
      city_name.innerText=`Please enter the city name properly`;
      datahide.classList.add('data_hide')
    }
    
  }
}
submitBtn.addEventListener('click',getInfo);

//DAY AND DATE SECTION

const getCurrentDay=()=>{
  let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let month=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];


  let currTime = new Date();
  let dayToday = week[currTime.getDay()];
  let dateToday = currTime.getDate();
  let monthToday = month[currTime.getMonth()];

  let day = document.getElementById('day');
  day.innerText=dayToday;
  
  let dateMonth = document.getElementById(today_date);
  today_date.innerText=`${dateToday}  ${monthToday}`

};
getCurrentDay();

