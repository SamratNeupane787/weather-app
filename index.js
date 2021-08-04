const temperature=document.getElementById("tempr")
const cityN=document.getElementById("city")
const input=document.getElementById("val")
const btn=document.getElementById("btn-1")
const humi=document.getElementById("humidity")
const fells=document.getElementById("feels")
const cloudy=document.getElementById("cloud")



btn.addEventListener('click',()=>{
  let cityName=input.value;
  console.log(cityName)
  const url='https://api.openweathermap.org/data/2.5/weather'
  

  const finaluRL=`${url}?q=${cityName}&appid=3e338975daa2be0d47edee4d7d338315`;


  console.log(finaluRL)
  
const apidata=fetch(finaluRL)
.then((res)=>{
  return res.json();
})


.then((apidata)=>{
console.log(apidata);
let apitemp=apidata.main.temp;
apitemp.toFixed(2)
console.log(apitemp)

let temp=apitemp-273.15;
const two=temp.toFixed(2)
console.log(two);

let nameofcity=apidata.name
let countryN=apidata.sys.country

let humidi=apidata.main.humidity
console.log(humidi)

temperature.innerHTML=`CURRENT TEMPERATURE = ${two}°C`
cityN.innerHTML=`${nameofcity},${countryN}`

humi.innerHTML=`HUMIDITY =${humidi}`

let feltemp=apidata.main.feels_like;
feltemp.toFixed(2)
console.log(feltemp)

let fellsl =feltemp-237.15
const fellslike=fellsl.toFixed(2)
console.log(fellslike)

fells.innerHTML=`FEELS LIKE =${fellslike}°C`

let cloudyw=apidata.weather[0].main

/*console.log(cloudyw,icon)*/

cloudy.innerHTML=`${cloudyw}`

 })

})


window.onload=()=>{
  const apidata=fetch('https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=3e338975daa2be0d47edee4d7d338315')
.then((res)=>{
  return res.json();
})


.then((apidata)=>{
console.log(apidata);
let apitemp=apidata.main.temp;
apitemp.toFixed(2)
console.log(apitemp)

let temp=apitemp-273.15;
const two=temp.toFixed(2)
console.log(two);

let nameofcity=apidata.name
let countryN=apidata.sys.country

let humidi=apidata.main.humidity
console.log(humidi)

temperature.innerHTML=`CURRENT TEMPERATURE = ${two}°C`
cityN.innerHTML=`${nameofcity},${countryN}`

humi.innerHTML=`HUMIDITY =${humidi}`

let feltemp=apidata.main.feels_like;
feltemp.toFixed(2)
console.log(feltemp)

let fellsl =feltemp-237.15
const fellslike=fellsl.toFixed(2)
console.log(fellslike)

fells.innerHTML=`FEELS LIKE =${fellslike}°C`

let cloudyw=apidata.weather[0].main

/*console.log(cloudyw,icon)*/

cloudy.innerHTML=`${cloudyw}`
})

}


