// API
var url = 'https://catfact.ninja/fact'
var btn = document.querySelector('.btn')
var i =0
var data = []
const factDisplay = document.getElementById('factDisplay')


function displayNextData() {
    fetch(url)
    .then((response)=>{
        return response.json();
}).then((data)=>{
    // for text is innerHTML
    document.querySelector('.text').innerHTML = data.fact
    document.querySelector('.number').innerHTML=data.length
    // for image is setattribute
    // Img.setAttribute('src',data.message)
})

}
btn.addEventListener('click', displayNextData)
setInterval(displayNextData, 2000)

//  const weatherApp = async ()  =>{
//     const url = 'https://meteostat.p.rapidapi.com/point/monthly?lat=52.5244&lon=13.4105&alt=43&start=2020-01-01&end=2020-12-31';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '6b0880b6ccmsh044de3b0862a2e6p12ef2ajsned58d2d54489',
//             'x-rapidapi-host': 'meteostat.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
    
//  }


// weatherApp()
