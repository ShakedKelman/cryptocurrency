// const debug = true;

// const reportsArray = [];
// let saveReportsArray = [];
// const addedCardIds = [];
// let eventHandlerType;

// const dataDebug =
//     [

//         {
//             "id": "01coin",
//             "symbol": "zoc",
//             "name": "01coin"
//         },
//         {
//             "id": "0chain",
//             "symbol": "zcn",
//             "name": "Zus"
//         },
//         {
//             "id": "0-knowledge-network",
//             "symbol": "0kn",
//             "name": "0 Knowledge Network"
//         },
//         {
//             "id": "0-mee",
//             "symbol": "ome",
//             "name": "O-MEE"
//         },
//         {
//             "id": "0vix-protocol",
//             "symbol": "vix",
//             "name": "0VIX Protocol"
//         },
//         {
//             "id": "0vm",
//             "symbol": "zerovm",
//             "name": "0VM"
//         },
//         {
//             "id": "0x",
//             "symbol": "zrx",
//             "name": "0x Protocol"
//         },
//         {
//             "id": "0x0-ai-ai-smart-contract",
//             "symbol": "0x0",
//             "name": "0x0.ai: AI Smart Contract"
//         },
//         {
//             "id": "0x1-tools-ai-multi-tool",
//             "symbol": "0x1",
//             "name": "0x1.tools: AI Multi-tool"
//         },
//         {
//             "id": "0x404",
//             "symbol": "xfour",
//             "name": "0x404"
//         },
//         {
//             "id": "0xaiswap",
//             "symbol": "0xaiswap",
//             "name": "0xAISwap"
//         },
//         {
//             "id": "0xanon",
//             "symbol": "0xanon",
//             "name": "0xAnon"
//         },
//         {
//             "id": "0xbet",
//             "symbol": "0xbet",
//             "name": "0xBET"
//         },
//         {
//             "id": "0xblack",
//             "symbol": "0xb",
//             "name": "0xBlack"
//         },
//         {
//             "id": "0xcoco",
//             "symbol": "coco",
//             "name": "0xCoco"
//         },
//         {
//             "id": "0xconnect",
//             "symbol": "0xcon",
//             "name": "0xConnect"
//         },
//         {
//             "id": "0xdao",
//             "symbol": "oxd",
//             "name": "0xDAO"
//         },
//         {
//             "id": "0xdefcafe",
//             "symbol": "cafe",
//             "name": "0xDEFCAFE"
//         },
//         {
//             "id": "0xengage",
//             "symbol": "engage",
//             "name": "0xEngage"
//         },
//         {
//             "id": "0xfair",
//             "symbol": "fair",
//             "name": "0xFair"
//         },
//         {
//             "id": "0xfreelance",
//             "symbol": "0xfree",
//             "name": "0xFreelance"
//         },
//         {
//             "id": "0xgambit",
//             "symbol": "0xg",
//             "name": "0xgambit"
//         },
//         {
//             "id": "0xgasless",
//             "symbol": "0xgas",
//             "name": "0xGasless (OLD)"
//         },
//         {
//             "id": "0xgasless-2",
//             "symbol": "0xgas",
//             "name": "0xGasless"
//         },
//         {
//             "id": "0xgpu-ai",
//             "symbol": "0xg",
//             "name": "0xGPU.ai"
//         },
//         {
//             "id": "0x-leverage",
//             "symbol": "oxl",
//             "name": "0x Leverage"
//         },
//         {
//             "id": "0xliquidity",
//             "symbol": "0xlp",
//             "name": "0xLiquidity"
//         },
//         {
//             "id": "0xlsd",
//             "symbol": "0xlsd",
//             "name": "0xLSD"
//         },
//         {
//             "id": "0xmonero",
//             "symbol": "0xmr",
//             "name": "0xMonero"
//         },
//         {
//             "id": "0xnude",
//             "symbol": "nude",
//             "name": "0xNude"
//         },
//         {
//             "id": "0xnumber",
//             "symbol": "oxn",
//             "name": "0xNumber"
//         },
//         {
//             "id": "0xos-ai",
//             "symbol": "0xos",
//             "name": "0xOS AI"
//         }
//     ];

// const cache = {};
// // Simulate progress (increase value over time)
// // Simulate progress (increase value over time)
// function simulateProgress() {
//     var val = $("#progress-bar").progressbar("value");
//     val = val + 10; // Increase value by 10%
//     if (val <= 100) {
//         $("#progress-bar").progressbar("value", val);
//         $("#progress-label").text(val + "%");
//         setTimeout(simulateProgress, 1000); // Update every 1 second
//     }
// }



// const startProgress = function () {
//     $("#progress-bar").progressbar({
//         value: 0 // Initial value (0%)
//     });

//     simulateProgress(); // Start the progress simulation
// };

// const endProgress = function () {
//     $("#progress-bar").progressbar({
//         value: 100 // Initial value (0%)
//     });

//     $("#progress-label").text("Complete!"); // Update progress label when complete
// };

// const headerLogo = document.getElementById('header-main');
// //document.body.appendChild(headerContainer);

// const mainHeader = document.createElement('h1');
// mainHeader.setAttribute('id', 'main-header');
// mainHeader.setAttribute('class', 'mainHeaderStyle');
// mainHeader.setAttribute('class', 'parallax-header');
// mainHeader.style.fontWeight = "bold"; // Set the font weight to bold
// mainHeader.style.fontSize = "25px"; // Set the font size to 20 pixels

// mainHeader.style.backgroundImage = "url('../assets/cr.png')";
// mainHeader.textContent = "Cryptonite";

// headerLogo.appendChild(mainHeader);

// document.addEventListener('scroll', function () {
//     const scrollTop = window.scrollY;
//     const parallaxSpeed = 0.5; // Adjust this value to control the parallax speed
//     mainHeader.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`;
// });



// const navbarContainer = document.getElementById("navbar-container");

// /*
// const progressBarContainer = document.createElement('div');
// progressBarContainer.setAttribute('id', 'progress-bar-container');
// navbarContainer.appendChild(progressBarContainer);

// const progressBarLabel = document.createElement('div');
// progressBarLabel.setAttribute('id', 'progress-label');
// progressBarContainer.appendChild(progressBarLabel);

// const progressBar = document.createElement('div');
// progressBar.setAttribute('id', 'progress-bar');
// progressBarLabel.appendChild(progressBar);
// */


// let isAdditionalInfoDisplayed = {
//     'home-id': false,
//     'live-reports-id': false,
//     'about-id': false
// };
// const navbarItems = ['home-id', 'live-reports-id', 'about-id'];

// navbarItems.forEach(itemId => {
//     const navItem = document.getElementById(itemId);

//     navItem.addEventListener('click', () => {
//         console.log(this)

//         if (isAdditionalInfoDisplayed[itemId]) {
//             //navItem.textContent = itemId.replace(/-/g, ' ').replace('id', '').replace(/\b\w/g, l => l.toUpperCase());
//         } else {

//             //const additionalInfo = document.createElement('div');
//             //additionalInfo.textContent = `This is more info for ${itemId.replace('-id', '')}`;
//             //additionalInfo.setAttribute('class', 'nav-additional-info');

//             //navItem.textContent = '';
//             //navItem.appendChild(additionalInfo);
//             //const sectIdToDisplay = navItem.getAttribute('data-section');

//         }


//         // reflect the display on the respective navitem(s)
//         const toActivate = Object.keys(isAdditionalInfoDisplayed)
//             .filter(navId => navId !== itemId);
//         toActivate.forEach(navId => $('#' + navId).removeClass('active')); // hide all sections not under itemId
//         $('#' + itemId).addClass('active'); // show the section under itemId

//         // reflect the display on the respective section(s)
//         const toHide = Object.keys(isAdditionalInfoDisplayed)
//             .filter(navId => navId !== itemId)
//             .map(navId => navId.replace(/-id/, '-sect'));
//         toHide.forEach(sectId => $('#' + sectId).hide()); // hide all sections not under itemId
//         $('#' + itemId.replace(/-id/, '-sect')).show(); // show the section under itemId

//         isAdditionalInfoDisplayed[itemId] = !isAdditionalInfoDisplayed[itemId];
//     });
// });


// //navbarItems.forEach(itemId => {
// //    document.getElementById(itemId).addEventListener('click', () => showNavInfo(itemId));
// //});

// // a function to fetch the coin information
// async function getCoins() {

//     try {
//         let response;
//         let data;

//         if (debug !== true) {
//             response = await fetch('https://api.coingecko.com/api/v3/coins/list')
//             data = await response.json();
//         } else {
//             data = dataDebug // 'file:///Users/shakedkelman/Documents/FullStack4578:41/projects/project_two/codeFiles/coins.json');
//         }

//         const first25Coins = data.slice(0, 25);
//         console.log(first25Coins);

//         const cardContainer = document.getElementById('home-sect');

//         //cardContainer.setAttribute('id', 'coin-container');
//         //document.body.appendChild(cardContainer);


//         first25Coins.forEach((coin, index) => {

//             const cardOutput = document.createElement('div');
//             cardOutput.setAttribute('class', 'cardOutputStyle mb-3 col-md-4');
//             cardOutput.setAttribute('id', 'card-coin-output');
//             const coinInfoId = `coin-info-id-${index}`;
//             cardOutput.setAttribute('id', `card-coin-output-${index}`);
//             cardOutput.setAttribute('coin-id', coin.id)



//             cardOutput.innerHTML = `
//             <div class="card mb-3 border border-dark" style="max-width: 540px;">

//             <div class="row g-0">
//             <div class="col-md-4">
//                 <img src="../assets/card-logo.png" class="img-fluid rounded-start" alt="a logo picture">
//             </div>
//             <div class="col-md-8">

//             <div class="card-body text-bg-light text-dark" >
//             <label class="toggle-switch" id="toggle-button-${index}">
//                 <input type="checkbox" id="toggle-switch-${index}">
//                 <span class="slider"></span>
//             </label>

//                     <h5 class="card-title">${coin.symbol}</h5>
//                     <p class="card-text">${coin.name}</p>

//                     <p>
//                     <button class="btn btn-dark btn-sm more-info-btn-${index}" data-bs-target="#collapseExample${index}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
//                     more info </button>
//                   </p>
//                   <div class="collapse multi-collapse" aria-expanded="false" id="collapseExample${index}">
//                     <div class="card card-body cardIndex${index}" id="coin-info-id-${index}">

//                     </div>
//                   </div>
//              </div>
//             </div>
//         </div>
//         </div>

//             `;


//             cardContainer.appendChild(cardOutput);

//             //             const toggleSwitch = document.getElementById(`toggle-switch-${index}`);

//             // toggleSwitch.addEventListener('change', function(event) {
//             //     toggleSwitch.checked = event.target.checked;
//             //     if (!toggleSwitch.checked) {
//             //         removeReport(index);
//             //     }
//             //     else {
//             //         addToReport(coin, index);
//             //     }
//             // });
//             // function handleToggleSwitchChange(index, isChecked, coin, mainToggleIndex) {
//             //     if (!isChecked) {
//             //         removeReport(index);
//             //     } else {
//             //         addToReport(coin, index);
//             //     }
//             //     console.log("Selected toggle card index:", index);
//             //     console.log("Main toggle index:", mainToggleIndex); // Log the main toggle index
//             // }
//             function handleToggleSwitchChange(index, isChecked, coin, mainToggleIndex) {
//                 console.log(index, isChecked, coin)
//                 if (!isChecked) {
//                     removeReport(index);
//                 } else {
//                     addToReport(coin, index);
//                 }
//                 console.log("Selected toggle card index:", index);
//                 console.log("Main toggle index:", mainToggleIndex); // Log the main toggle index

//                 // If the modal toggle is unchecked, uncheck the corresponding coin card toggle switch
//                 if (!isChecked) {
//                     $(`#toggle-switch-${index}`).prop('checked', false);
//                 }
//             }


//             // Usage:
//             const toggleSwitch = $(`#toggle-switch-${index}`);
//             toggleSwitch.on('change', function (event) {
//                 handleToggleSwitchChange(index, event.target.checked, coin);
//             });


//             function removeReport(index) {
//                 const reportIndex = reportsArray.findIndex(item => item.index === index);
//                 if (reportIndex !== -1) {
//                     const removedCoin = reportsArray[reportIndex].coin; // Get the coin object before removing it
//                     reportsArray.splice(reportIndex, 1);
//                     const addedIndex = addedCardIds.indexOf(index);
//                     if (addedIndex !== -1) {
//                         addedCardIds.splice(addedIndex, 1);
//                     }
//                     console.log('Removed coin from reports array:', removedCoin); // Log the removed coin
//                     console.log('Reports array:', reportsArray);
//                 }
//             }

//             // Add event listener to "more info" button
//             const moreInfoButton = cardOutput.querySelector(`.more-info-btn-${index}`);
//             moreInfoButton.addEventListener('click', async (ev) => {
//                 const btnTarget = ev.target.getAttribute('data-bs-target')
//                 console.log($(btnTarget).prop('class'))
//                 setTimeout(() => getMyCollapse(btnTarget), 500)
//                 await getCoinInfo(coin.id, coinInfoId);

//             });

//         });
//         document.body.style.height = `${window.innerHeight}px`;

//         return first25Coins;

//     } catch (err) {
//         console.log('an error happened', err);
//     }

// }
// getCoins();

// const getMyCollapse = (elem = '#collapseExample1') => {
//     console.log($(elem).prop('class'))
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function getCoinInfo(coinId, coinInfoId) {
//     try {
//         startProgress();
//         let data;
//         if (!cache.hasOwnProperty(coinId)) {
//             const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
//             data = await response.json();
//             cache[coinId] = data;
//             setTimeout(() => {
//                 delete cache[coinId];
//                 console.log(`Cache for ${coinId} cleared.`);
//             }, 2 * 60 * 1000); // 2 minutes in milliseconds
//         } else {
//             data = cache[coinId];
//             await sleep(2000)
//         }

//         //$('#dummy').removeClass('done')
//         //$('#dummy').addClass("load").delay(4000).addClass("done").removeClass('load');

//         const moreInfoData = document.getElementById(coinInfoId);
//         moreInfoData.innerHTML = `
//         <img src="${data.image.small}" class="coinInfoImg">
//         <div class="coinInfoDiv">
//             market price:
//            <br> in usd-${data.market_data.current_price.usd}$
//            <br>  in eur-${data.market_data.current_price.eur}€
//            <br>  in ils-${data.market_data.current_price.ils}₪
//         </div>
//     `;

//         console.log(data.id);
//         console.log("Coin ID:", coinId);
//         console.log("card ID:", coinInfoId);

//     } catch (error) {
//         console.log("an error happened");
//         console.log(error);
//     }
//     endProgress();
// }





// function addToReport(coin, index) {
//     if (!addedCardIds.includes(index)) {
//         reportsArray.push({ coin, index });
//         addedCardIds.push(index);
//         console.log('Added coin to reports array:', coin);
//         console.log('Reports array:', reportsArray);
//     } else {
//         console.log('This card has already been added to the reports.');
//     }

//     if (reportsArray.length > 5) {
//         const modalDOM = $('#model-text');
//         modalDOM.html(generateModalContent()); // Populate modal body with content
//         $('#maxCoinsModal').modal('show'); // Show the modal
//     }
// }



// function getCoinHash() {
//     const coin_hash = Object.assign({},
//         ...Array.from($('.cardOutputStyle'))
//             .map(d => ({ [d.getAttribute('coin-id')]: d.id.replace(/.*-/, '') })))
//     return coin_hash;
// }


// //
// // save a snapshot of the toggle buttons that appear inside the modal
// // and add an event listener to the 'undo' button in the modal. When
// // undo is clicked, any unchecked toggles will be restored to checked.
// //
// function undoSaveHistory() {
//     const undoBtn = $('#undoModal');
//     if (eventHandlerType === 'click') {
//         console.log('EventHandler "click" has already been applied to #undoModal');
//     } else {
//         // create a click handler that restores the reportsArray to the toggles' original positions
//         undoBtn.on('click', function (ev) {
//             eventHandlerType = ev.type;
//             $("[id*='modal-switch-']:not(:checked)").click();
//         })
//     }
// }


// async function fetchCoinPrices() {
//     const coinSymbols = reportsArray.map(item => item.coin.symbol).join(',');
//     console.log('Coin symbols:', coinSymbols); // Log the coin symbols

//     const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinSymbols}&tsyms=USD`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log('Fetched coin prices:', data); // Log the fetched items

//         return data;
//     } catch (error) {
//         console.error('Error fetching coin prices:', error);
//         return {};
//     }
// }






// async function generateModalContent() {
//     let switches = $('#modal-switches');
//     switches.empty();
//     const coinPrices = await fetchCoinPrices();

//     const coin_hash = getCoinHash();

//     undoSaveHistory();

//     reportsArray
//         .sort((a, b) => coin_hash[a.coin.id] - coin_hash[b.coin.id])
//         .forEach((item) => {
//             const coin = item.coin; // Define coin variable here
//             const index = coin_hash[coin.id];
//             console.log(index)

//             // Create a new <li> element, within create a label + input, within the latter create a span
//             const li = $('<li>');
//             li.text(`${coin.name} (${coin.symbol})`);
//             const div = $('<span>')
//             const label = $('<label>').addClass('toggle-switch').attr('id', `modal-toggle-${index}`);
//             const inp = $('<input>')
//             inp.attr('type', 'checkbox').attr('id', `modal-switch-${index}`).prop('checked', true);

//             inp[0].addEventListener('change', function (ev) {
//                 $('#' + ev.target.id.replace(/modal-/, 'toggle-')).click()
//                 // handleToggleSwitchChange(index, $( this).prop('checked'), coin); // Pass coin as a parameter
//             });

//             console.log(inp)
//             const span = $('<span>').addClass('slider-modal').attr('id', `modal-slider-${index}`)
//             label.append(inp).append(span);
//             div.append(label)
//             li.append(div);
//             switches.append(li);

//             // Add event listener to the toggle switch
//             /*
//             inp.on('change', function (ev) {
//                 console.log([ 'EEEEEEEEEEEE', ev ])
//                 //handleToggleSwitchChange(index, $(this).prop('checked'), coin); // Pass coin as a parameter
//             });
//             */
//         });

//     return switches;
// }

// // const toggleSwitch = document.getElementById('my-toggle-switch');

// // // To toggle the switch programmatically
// // toggleSwitch.checked = !toggleSwitch.checked;


// // function closeModal() {
// //     $('#maxCoinsModal').modal('hide');
// //     console.log('Reports array:', reportsArray);

// //    }
// function closeModal() {
//     // Check if there are 5 or fewer items in the reportsArray
//     if (reportsArray.length <= 5) {
//         $('#maxCoinsModal').modal('hide');
//         console.log('Reports array:', reportsArray);
//     } else {
//         alert('please mke sure theres are 5 or less coins selected')
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const closeButton = document.querySelector('#maxCoinsModal .close');

//     closeButton.addEventListener('click', function () {
//         closeModal();
//         renderReportsArray(); // Render the reports array after closing the modal
//     });

//     // Render modal content on page load
//     const modalDOM = document.getElementById('model-text');
//     //modalText.innerHTML = generateModalContent();
// });

// // function renderReportsArray() {
// //     // Render the reports array wherever you want to display it
// //     console.log('Reports array:', reportsArray);
// // }
// function renderReportsArray() {
//     // Render the reports array wherever you want to display it
//     console.log('Reports array:', reportsArray);

//     // Iterate over each report in the array
//     reportsArray.forEach(report => {
//         const index = report.index;
//         const isChecked = $(`#modal-switch-${index}`).prop('checked');

//         if (!isChecked) {
//             // If the toggle switch in the modal is unchecked,
//             // check the corresponding toggle switch in the main UI
//             $(`#toggle-switch-${index}`).prop('checked', true);
//         }
//     });
// }


// // function filterByName() {
// //     const filterValue = document.getElementById('filterInput').value.toLowerCase();
// //     const filteredData = dataDebug.filter(item => item.name.toLowerCase().includes(filterValue));
// //     displayResults(filteredData);
// // }
// function filterByName() {
//     const filterValue = document.getElementById('filterInput').value.toLowerCase().trim(); // Trim whitespace from the input
//     const filteredData = dataDebug.filter(item => item.symbol.toLowerCase() === filterValue); // Compare entire name
//     displayResults(filteredData);
//     if (filteredData.length === 0) {
//         alert('please type the full name of the coin you want to find');
//     }
//     filterInput.value = '';

// }


// function displayResults(results) {
//     const resultList = document.getElementById('resultList');
//     resultList.innerHTML = '';
//     results.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = `${item.symbol} - ${item.id} - ${item.name}`;
//         resultList.appendChild(li);
//     });
// }

// // function showAll() {
// //     document.getElementById('filterInput').value = ''; // Clear the filter input
// //     // displayResults(dataDebug); // Display all results
// // }



// function showAll() {
//     document.getElementById('filterInput').value = ''; // Clear the filter input
//     const resultList = document.getElementById('resultList');
//     resultList.innerHTML = ''; // Clear the UI output
// }
// $(document).ready(function () {
//     // Initialize the popover
//     var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
//     var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//         return new bootstrap.Popover(popoverTriggerEl);
//     });
// });

// // function initializeChart() {
// //     var options = {
// //         exportEnabled: true,
// //         animationEnabled: true,
// //         title:{
// //             text: "Units Sold VS Profit"
// //         },
// //         subtitles: [{
// //             text: "Click Legend to Hide or Unhide Data Series"
// //         }],
// //         axisX: {
// //             title: "States"
// //         },
// //         axisY: {
// //             title: "Units Sold",
// //             titleFontColor: "#4F81BC",
// //             lineColor: "#4F81BC",
// //             labelFontColor: "#4F81BC",
// //             tickColor: "#4F81BC"
// //         },
// //         axisY2: {
// //             title: "Profit in USD",
// //             titleFontColor: "#C0504E",
// //             lineColor: "#C0504E",
// //             labelFontColor: "#C0504E",
// //             tickColor: "#C0504E"
// //         },
// //         toolTip: {
// //             shared: true
// //         },
// //         legend: {
// //             cursor: "pointer",
// //             itemclick: toggleDataSeries
// //         },
// //         data: [{
// //             type: "spline",
// //             name: "Units Sold",
// //             showInLegend: true,
// //             xValueFormatString: "MMM YYYY",
// //             yValueFormatString: "#,##0 Units",
// //             dataPoints: [
// //                 { x: new Date(2016, 0, 1),  y: 120 },
// //                 { x: new Date(2016, 1, 1), y: 135 },
// //                 { x: new Date(2016, 2, 1), y: 144 },
// //                 { x: new Date(2016, 3, 1),  y: 103 },
// //                 { x: new Date(2016, 4, 1),  y: 93 },
// //                 { x: new Date(2016, 5, 1),  y: 129 },
// //                 { x: new Date(2016, 6, 1), y: 143 },
// //                 { x: new Date(2016, 7, 1), y: 156 },
// //                 { x: new Date(2016, 8, 1),  y: 122 },
// //                 { x: new Date(2016, 9, 1),  y: 106 },
// //                 { x: new Date(2016, 10, 1),  y: 137 },
// //                 { x: new Date(2016, 11, 1), y: 142 }
// //             ]
// //         },
// //         {
// //             type: "spline",
// //             name: "Profit",
// //             axisYType: "secondary",
// //             showInLegend: true,
// //             xValueFormatString: "MMM YYYY",
// //             yValueFormatString: "$#,##0.#",
// //             dataPoints: [
// //                 { x: new Date(2016, 0, 1),  y: 19034.5 },
// //                 { x: new Date(2016, 1, 1), y: 20015 },
// //                 { x: new Date(2016, 2, 1), y: 27342 },
// //                 { x: new Date(2016, 3, 1),  y: 20088 },
// //                 { x: new Date(2016, 4, 1),  y: 20234 },
// //                 { x: new Date(2016, 5, 1),  y: 29034 },
// //                 { x: new Date(2016, 6, 1), y: 30487 },
// //                 { x: new Date(2016, 7, 1), y: 32523 },
// //                 { x: new Date(2016, 8, 1),  y: 20234 },
// //                 { x: new Date(2016, 9, 1),  y: 27234 },
// //                 { x: new Date(2016, 10, 1),  y: 33548 },
// //                 { x: new Date(2016, 11, 1), y: 32534 }
// //             ]
// //         }]
// //     };
// //     $("#chartContainer").CanvasJSChart(options);
// //     function toggleDataSeries(e) {
// //         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// //             e.dataSeries.visible = false;
// //         } else {
// //             e.dataSeries.visible = true;
// //         }
// //         e.chart.render();
// //     }
// // }

// // function initializeChart() {
// //     let options = {
// //         exportEnabled: true,
// //         animationEnabled: true,
// //         title:{
// //             text: "coin name to USD"
// //         },
// //         subtitles: [{
// //             text: "Click Legend to Hide or Unhide Data Series"
// //         }],
// //         axisX: {
// //             title: "States"
// //         },
// //         axisY: {
// //             title: "coin value",
// //             titleFontColor: "#4F81BC",
// //             lineColor: "#4F81BC",
// //             labelFontColor: "#4F81BC",
// //             tickColor: "#4F81BC"
// //         },
// //         // axisY2: {
// //         //     title: "Profit in USD",
// //         //     titleFontColor: "#C0504E",
// //         //     lineColor: "#C0504E",
// //         //     labelFontColor: "#C0504E",
// //         //     tickColor: "#C0504E"
// //         // },
// //         toolTip: {
// //             shared: true
// //         },
// //         legend: {
// //             cursor: "pointer",
// //             itemclick: toggleDataSeries
// //         },
// //         data: [{
// //             type: "spline",
// //             name: "Units Sold",
// //             showInLegend: true,
// //             xValueFormatString: "MMM YYYY",
// //             yValueFormatString: "#,##0 Units",
// //             dataPoints: [
// //                 { x: new Date(2016, 0, 1),  y: 120 },
// //                 { x: new Date(2016, 1, 1), y: 135 },
// //                 { x: new Date(2016, 2, 1), y: 144 },
// //                 { x: new Date(2016, 3, 1),  y: 103 },
// //                 { x: new Date(2016, 4, 1),  y: 93 },
// //                 { x: new Date(2016, 5, 1),  y: 129 },
// //                 { x: new Date(2016, 6, 1), y: 143 },
// //                 { x: new Date(2016, 7, 1), y: 156 },
// //                 { x: new Date(2016, 8, 1),  y: 122 },
// //                 { x: new Date(2016, 9, 1),  y: 106 },
// //                 { x: new Date(2016, 10, 1),  y: 137 },
// //                 { x: new Date(2016, 11, 1), y: 142 }
// //             ]
// //         },
// //         {
// //             type: "spline",
// //             name: "Profit",
// //             axisYType: "secondary",
// //             showInLegend: true,
// //             xValueFormatString: "MMM YYYY",
// //             yValueFormatString: "$#,##0.#",
// //             dataPoints: [
// //                 { x: new Date(2016, 0, 1),  y: 19034.5 },
// //                 { x: new Date(2016, 1, 1), y: 20015 },
// //                 { x: new Date(2016, 2, 1), y: 27342 },
// //                 { x: new Date(2016, 3, 1),  y: 20088 },
// //                 { x: new Date(2016, 4, 1),  y: 20234 },
// //                 { x: new Date(2016, 5, 1),  y: 29034 },
// //                 { x: new Date(2016, 6, 1), y: 30487 },
// //                 { x: new Date(2016, 7, 1), y: 32523 },
// //                 { x: new Date(2016, 8, 1),  y: 20234 },
// //                 { x: new Date(2016, 9, 1),  y: 27234 },
// //                 { x: new Date(2016, 10, 1),  y: 33548 },
// //                 { x: new Date(2016, 11, 1), y: 32534 }
// //             ]
// //         }]
// //     };


// //     // Initialize the chart within the chartContainer element


// //     var chart = new CanvasJS.Chart("chartContainer", options);
// //     chart.render();

// //     // Define the toggleDataSeries function
// //     function toggleDataSeries(e) {
// //         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// //             e.dataSeries.visible = false;
// //         } else {
// //             e.dataSeries.visible = true;
// //         }
// //         e.chart.render();
// //     }
// // }

// // // Call the initializeChart function when the page is loaded
// // $(document).ready(function() {
// //     initializeChart();
// // });


// // async function initializeChart() {
// //     let chartData = []; // Declare chartData outside of the updateChartData function
// //     let colorIndex = 0; // Initialize color index for assigning colors to coins

// //     // Fetch coin prices and update chart data
// // //     // Fetch coin prices and update chart data
// // // async function updateChartData() {
// // //     try {
// // //         // Fetch coin prices
// // //         const coinPrices = await fetchCoinPrices();

// // //         // Check if coin prices were fetched successfully
// // //         if (!coinPrices) {
// // //             console.error('Error fetching coin prices');
// // //             return;
// // //         }

// // //         // Update chart data
// // //         chartData = []; // Reset chartData
// // //         reportsArray.forEach((item, index) => {
// // //             const coin = item.coin;
// // //             const price = coinPrices[coin.symbol]?.USD || 0; // Get USD price from coinPrices
// // //             const normalizedPrice = price / 100; // Normalize price to fit between 0 and 1
// // //             const scaledPrice = normalizedPrice * 7000; // Scale normalized price to fit between 0 and 70000
// // //             const color = getColorForCoin(coin, index); // Get color for the coin
// // //             chartData.push({ label: coin.symbol, y: scaledPrice, color: color }); // Include color in data points
// // //         });


// // //         // Re-render the chart
// // //         chart.options.data[0].dataPoints = chartData;
// // //         chart.render();

// // //     } catch (error) {
// // //         console.error('Error updating chart data:', error);
// // //     }
// // // }

// // async function updateChartData() {
// //     try {
// //         // Fetch coin prices
// //         const coinPrices = await fetchCoinPrices();

// //         // Check if coin prices were fetched successfully
// //         if (!coinPrices) {
// //             console.error('Error fetching coin prices');
// //             return;
// //         }

// //         // Update chart data
// //         chartData = []; // Reset chartData

// //         // Get the current time
// //         const currentTime = new Date();

// //         // Push a new data point for each coin
// //         reportsArray.forEach((item, index) => {
// //             const coin = item.coin;
// //             const price = coinPrices[coin.symbol]?.USD || 0; // Get USD price from coinPrices
// //             const normalizedPrice = price / 100; // Normalize price to fit between 0 and 1
// //             const scaledPrice = normalizedPrice * 7000; // Scale normalized price to fit between 0 and 70000
// //             const color = getColorForCoin(coin, index); // Get color for the coin

// //             // Calculate the x-value for the data point
// //             const xValue = new Date(currentTime.getTime() + (index * 2000)); // Add 2 seconds for each index

// //             // Push the data point to the chartData array
// //             chartData.push({ x: xValue, y: scaledPrice, label: coin.symbol, color: color });
// //         });

// //         // Re-render the chart
// //         chart.options.data[0].dataPoints = chartData;
// //         chart.render();
// //     } catch (error) {
// //         console.error('Error updating chart data:', error);
// //     }
// // }

// // // Define chart options
// // const options = {
// //     exportEnabled: true,
// //     animationEnabled: true,
// //     title: {
// //         text: "Coin over Time"
// //     },
// //     subtitles: [{
// //         text: "Click Legend to Hide or Unhide Data Series"
// //     }],
// //     axisX: {
// //         title: "Time (Every 2 Seconds)",
// //         titleFontColor: "#4F81BC",
// //         lineColor: "#4F81BC",
// //         labelFontColor: "#4F81BC",
// //         tickColor: "#4F81BC",
// //         interval: 2, // Set interval between ticks to represent every 2 seconds
// //         valueFormatString: "HH:mm:ss" // Format the x-axis labels to display hours, minutes, and seconds
// //     },
// //     axisY: {
// //         title: "USD Value",
// //         titleFontColor: "#4F81BC",
// //         lineColor: "#4F81BC",
// //         labelFontColor: "#4F81BC",
// //         tickColor: "#4F81BC",
// //         minimum: 0, // Set minimum value of y-axis
// //         maximum: 7000, // Set maximum value of y-axis
// //         interval: 1000 // Set interval between ticks on the y-axis
// //     },
// //    toolTip: {
// //     shared: true,
// //     contentFormatter: function(e) {
// //         const xValue = e.entries[0].dataPoint.x;
// //         const formattedX = (xValue instanceof Date) ? xValue.toLocaleTimeString() : xValue;
// //         return `<strong>${formattedX}</strong><br/>${e.entries[0].dataPoint.y} USD`;
// //     }

// //     },
// //     legend: {
// //         cursor: "pointer",
// //         itemclick: toggleDataSeries
// //     },

// //     data: [{
// //         type: "column",
// //         name: "USD Value",
// //         showInLegend: true,
// //         dataPoints: chartData // Use chartData here
// //     }]
// // };


// //     // Initialize the chart within the chartContainer element
// //     const chart = new CanvasJS.Chart("chartContainer", options);
// //     chart.render();

// //     // Call updateChartData every 2 seconds
// //     setInterval(updateChartData, 2000);

// //     // Define the toggleDataSeries function
// //     function toggleDataSeries(e) {
// //         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// //             e.dataSeries.visible = false;
// //         } else {
// //             e.dataSeries.visible = true;
// //         }
// //         e.chart.render();
// //     }

// //     function getColorForCoin(coin, index) {
// //         const colors = ['#4F81BC', '#C0504E', '#9BBB59', '#FFC000', '#8064A2', '#4BACC6', '#F79646']; // Array of predefined colors
// //         return colors[index % colors.length]; // Return color based on index
// //     }
// // }

// // // Call the initializeChart function when the page is loaded
// // $(document).ready(function() {
// //     initializeChart();
// // });

// async function initializeChart() {
//     let chartData = []; // Declare chartData outside of the updateChartData function
//     let colorIndex = 0; // Initialize color index for assigning colors to coins

//     // Fetch coin prices and update chart data
//     async function updateChartData() {
//         try {
//             // Fetch coin prices
//             const coinPrices = await fetchCoinPrices();
// console.log('Fetched coin prices:', JSON.stringify(coinPrices));
//             // Check if coin prices were fetched successfully
//             if (!coinPrices) {
//                 console.error('Error fetching coin prices');
//                 return;
//             }

//             // Update chart data
//             chartData = []; // Reset chartData

//             // Get the current time
//             const currentTime = new Date();

//             // Push a new data point for each coin
//             reportsArray.forEach((item, index) => {
//                 const coin = item.coin;
//                 const price = coinPrices[coin.symbol]?.USD || 0; // Get USD price from coinPrices
//                 const normalizedPrice = price / 100; // Normalize price to fit between 0 and 1
//                 const scaledPrice = normalizedPrice * 7000; // Scale normalized price to fit between 0 and 70000
//                 const color = getColorForCoin(coin, index); // Get color for the coin

//                 // Calculate the x-value for the data point
//                 const xValue = new Date(currentTime.getTime() + (index * 2000)); // Add 2 seconds for each index

//                 // Push the data point to the chartData array
//                 chartData.push({ x: xValue, y: scaledPrice, label: coin.symbol, color: color });
//             });

//             // Log chartData for debugging
//             console.log('Chart Data:', chartData);

//             // Re-render the chart
//             chart.options.data[0].dataPoints = chartData;

//             chart.render();
//         } catch (error) {
//             console.error('Error updating chart data:', error);
//         }
//     }

//     // Define chart options
//     const options = {
//         exportEnabled: true,
//         animationEnabled: true,
//         title: {
//             text: "Coin over Time"
//         },
//         subtitles: [{
//             text: "Click Legend to Hide or Unhide Data Series"
//         }],
//         axisX: {
//             title: "Time (Every 2 Seconds)",
//             titleFontColor: "#4F81BC",
//             lineColor: "#4F81BC",
//             labelFontColor: "#4F81BC",
//             tickColor: "#4F81BC",
//             interval: 2, // Set interval between ticks to represent every 2 seconds
//             valueFormatString: "HH:mm:ss" // Format the x-axis labels to display hours, minutes, and seconds
//         },
//         axisY: {
//             title: "USD Value",
//             titleFontColor: "#4F81BC",
//             lineColor: "#4F81BC",
//             labelFontColor: "#4F81BC",
//             tickColor: "#4F81BC",
//             minimum: 0, // Set minimum value of y-axis
//             maximum: 7000, // Set maximum value of y-axis
//             interval: 1000 // Set interval between ticks on the y-axis
//         },
//         toolTip: {
//             shared: true,
//             contentFormatter: function (e) {
//                 const xValue = e.entries[0].dataPoint.x;
//                 const formattedX = (xValue instanceof Date) ? xValue.toLocaleTimeString() : xValue;
//                 const yValue = e.entries[0].dataPoint.y.toFixed(6); // Format y-value with two decimal points
//                 return `<strong>${formattedX}</strong><br/>${yValue} USD`;
//             }
//         },
//         legend: {
//             cursor: "pointer",
//             itemclick: toggleDataSeries
//         },

//         data: [{
//             type: "line", // Change type to line
//             name: "USD Value",
//             showInLegend: true,
//             dataPoints: chartData // Use chartData here
//         }]
//     };

//     // Initialize the chart within the chartContainer element
//     const chart = new CanvasJS.Chart("chartContainer", options);
//     chart.render();

//     // Call updateChartData every 2 seconds
//     setInterval(updateChartData, 2000);

//     // Define the toggleDataSeries function
//     function toggleDataSeries(e) {
//         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//             e.dataSeries.visible = false;
//         } else {
//             e.dataSeries.visible = true;
//         }
//         e.chart.render();
//     }

//     function getColorForCoin(coin, index) {
//         const colors = ['#4F81BC', '#C0504E', '#9BBB59', '#FFC000', '#8064A2', '#4BACC6', '#F79646']; // Array of predefined colors
//         return colors[index % colors.length]; // Return color based on index
//     }
// }

// // Call the initializeChart function when the page is loaded
// $(document).ready(function () {
//     initializeChart();
// });

const debug = true;

const reportsArray = [];
let saveReportsArray = [];
const addedCardIds = [];
let eventHandlerType;

const dataDebug =
    [

        {
            "id": "01coin",
            "symbol": "zoc",
            "name": "01coin"
        },
        {
            "id": "0chain",
            "symbol": "zcn",
            "name": "Zus"
        },
        {
            "id": "0-knowledge-network",
            "symbol": "0kn",
            "name": "0 Knowledge Network"
        },
        {
            "id": "0-mee",
            "symbol": "ome",
            "name": "O-MEE"
        },
        {
            "id": "0vix-protocol",
            "symbol": "vix",
            "name": "0VIX Protocol"
        },
        {
            "id": "0vm",
            "symbol": "zerovm",
            "name": "0VM"
        },
        {
            "id": "0x",
            "symbol": "zrx",
            "name": "0x Protocol"
        },
        {
            "id": "0x0-ai-ai-smart-contract",
            "symbol": "0x0",
            "name": "0x0.ai: AI Smart Contract"
        },
        {
            "id": "0x1-tools-ai-multi-tool",
            "symbol": "0x1",
            "name": "0x1.tools: AI Multi-tool"
        },
        {
            "id": "0x404",
            "symbol": "xfour",
            "name": "0x404"
        },
        {
            "id": "0xaiswap",
            "symbol": "0xaiswap",
            "name": "0xAISwap"
        },
        {
            "id": "0xanon",
            "symbol": "0xanon",
            "name": "0xAnon"
        },
        {
            "id": "0xbet",
            "symbol": "0xbet",
            "name": "0xBET"
        },
        {
            "id": "0xblack",
            "symbol": "0xb",
            "name": "0xBlack"
        },
        {
            "id": "0xcoco",
            "symbol": "coco",
            "name": "0xCoco"
        },
        {
            "id": "0xconnect",
            "symbol": "0xcon",
            "name": "0xConnect"
        },
        {
            "id": "0xdao",
            "symbol": "oxd",
            "name": "0xDAO"
        },
        {
            "id": "0xdefcafe",
            "symbol": "cafe",
            "name": "0xDEFCAFE"
        },
        {
            "id": "0xengage",
            "symbol": "engage",
            "name": "0xEngage"
        },
        {
            "id": "0xfair",
            "symbol": "fair",
            "name": "0xFair"
        },
        {
            "id": "0xfreelance",
            "symbol": "0xfree",
            "name": "0xFreelance"
        },
        {
            "id": "0xgambit",
            "symbol": "0xg",
            "name": "0xgambit"
        },
        {
            "id": "0xgasless",
            "symbol": "0xgas",
            "name": "0xGasless (OLD)"
        },
        {
            "id": "0xgasless-2",
            "symbol": "0xgas",
            "name": "0xGasless"
        },
        {
            "id": "0xgpu-ai",
            "symbol": "0xg",
            "name": "0xGPU.ai"
        },
        {
            "id": "0x-leverage",
            "symbol": "oxl",
            "name": "0x Leverage"
        },
        {
            "id": "0xliquidity",
            "symbol": "0xlp",
            "name": "0xLiquidity"
        },
        {
            "id": "0xlsd",
            "symbol": "0xlsd",
            "name": "0xLSD"
        },
        {
            "id": "0xmonero",
            "symbol": "0xmr",
            "name": "0xMonero"
        },
        {
            "id": "0xnude",
            "symbol": "nude",
            "name": "0xNude"
        },
        {
            "id": "0xnumber",
            "symbol": "oxn",
            "name": "0xNumber"
        },
        {
            "id": "0xos-ai",
            "symbol": "0xos",
            "name": "0xOS AI"
        }
    ];

const cache = {};
// Simulate progress (increase value over time)
// Simulate progress (increase value over time)
function simulateProgress() {
    var val = $("#progress-bar").progressbar("value");
    val = val + 10; // Increase value by 10%
    if (val <= 100) {
        $("#progress-bar").progressbar("value", val);
        $("#progress-label").text(val + "%");
        setTimeout(simulateProgress, 1000); // Update every 1 second
    }
}



const startProgress = function () {
    $("#progress-bar").progressbar({
        value: 0 // Initial value (0%)
    });

    simulateProgress(); // Start the progress simulation
};

const endProgress = function () {
    $("#progress-bar").progressbar({
        value: 100 // Initial value (0%)
    });

    $("#progress-label").text("Complete!"); // Update progress label when complete
};

const headerLogo = document.getElementById('header-main');
//document.body.appendChild(headerContainer);

const mainHeader = document.createElement('h1');
mainHeader.setAttribute('id', 'main-header');
mainHeader.setAttribute('class', 'mainHeaderStyle');
mainHeader.setAttribute('class', 'parallax-header');
mainHeader.style.fontWeight = "bold"; // Set the font weight to bold
mainHeader.style.fontSize = "25px"; // Set the font size to 20 pixels

mainHeader.style.backgroundImage = "url('../assets/cr.png')";
mainHeader.textContent = "Cryptonite";

headerLogo.appendChild(mainHeader);

document.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const parallaxSpeed = 0.5; // Adjust this value to control the parallax speed
    mainHeader.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`;
});



const navbarContainer = document.getElementById("navbar-container");

/*
const progressBarContainer = document.createElement('div');
progressBarContainer.setAttribute('id', 'progress-bar-container');
navbarContainer.appendChild(progressBarContainer);

const progressBarLabel = document.createElement('div');
progressBarLabel.setAttribute('id', 'progress-label');
progressBarContainer.appendChild(progressBarLabel);

const progressBar = document.createElement('div');
progressBar.setAttribute('id', 'progress-bar');
progressBarLabel.appendChild(progressBar);
*/


let isAdditionalInfoDisplayed = {
    'home-id': false,
    'live-reports-id': false,
    'about-id': false
};
const navbarItems = ['home-id', 'live-reports-id', 'about-id'];

navbarItems.forEach(itemId => {
    const navItem = document.getElementById(itemId);

    navItem.addEventListener('click', () => {
        console.log(this)

        // if (isAdditionalInfoDisplayed[itemId]) {
        //     //navItem.textContent = itemId.replace(/-/g, ' ').replace('id', '').replace(/\b\w/g, l => l.toUpperCase());
        // } else {

        //     //const additionalInfo = document.createElement('div');
        //     //additionalInfo.textContent = `This is more info for ${itemId.replace('-id', '')}`;
        //     //additionalInfo.setAttribute('class', 'nav-additional-info');

        //     //navItem.textContent = '';
        //     //navItem.appendChild(additionalInfo);
        //     //const sectIdToDisplay = navItem.getAttribute('data-section');

        // }


        // reflect the display on the respective navitem(s)
        const toActivate = Object.keys(isAdditionalInfoDisplayed)
            .filter(navId => navId !== itemId);
        toActivate.forEach(navId => $('#' + navId).removeClass('active')); // hide all sections not under itemId
        $('#' + itemId).addClass('active'); // show the section under itemId

        // reflect the display on the respective section(s)
        const toHide = Object.keys(isAdditionalInfoDisplayed)
            .filter(navId => navId !== itemId)
            .map(navId => navId.replace(/-id/, '-sect'));
        toHide.forEach(sectId => $('#' + sectId).hide()); // hide all sections not under itemId
        $('#' + itemId.replace(/-id/, '-sect')).show(); // show the section under itemId

        isAdditionalInfoDisplayed[itemId] = !isAdditionalInfoDisplayed[itemId];
    });
});


//navbarItems.forEach(itemId => {
//    document.getElementById(itemId).addEventListener('click', () => showNavInfo(itemId));
//});

// a function to fetch the coin information
async function getCoins() {

    try {
        let response;
        let data;

        if (debug !== true) {
            response = await fetch('https://api.coingecko.com/api/v3/coins/list')
            data = await response.json();
        } else {
            data = dataDebug // 'file:///Users/shakedkelman/Documents/FullStack4578:41/projects/project_two/codeFiles/coins.json');
        }

        const first25Coins = data.slice(0, 25);
        console.log(first25Coins);

        const cardContainer = document.getElementById('home-sect');

        //cardContainer.setAttribute('id', 'coin-container');
        //document.body.appendChild(cardContainer);


        first25Coins.forEach((coin, index) => {

            const cardOutput = document.createElement('div');
            cardOutput.setAttribute('class', 'cardOutputStyle mb-3 col-md-4');
            cardOutput.setAttribute('id', 'card-coin-output');
            const coinInfoId = `coin-info-id-${index}`;
            cardOutput.setAttribute('id', `card-coin-output-${index}`);
            cardOutput.setAttribute('coin-id', coin.id)



            cardOutput.innerHTML = `
            <div class="card mb-3 border border-dark" style="max-width: 540px;">

            <div class="row g-0">
            <div class="col-md-4">
                <img src="../assets/card-logo.png" class="img-fluid rounded-start" alt="a logo picture">
            </div>
            <div class="col-md-8">

            <div class="card-body text-bg-light text-dark" >
            <label class="toggle-switch" id="toggle-button-${index}">
                <input type="checkbox" id="toggle-switch-${index}">
                <span class="slider"></span>
            </label>

                    <h5 class="card-title">${coin.symbol}</h5>
                    <p class="card-text">${coin.name}</p>

                    <p>
                    <button class="btn btn-dark btn-sm more-info-btn-${index}" data-bs-target="#collapseExample${index}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    more info </button>
                  </p>
                  <div class="collapse multi-collapse" aria-expanded="false" id="collapseExample${index}">
                    <div class="card card-body cardIndex${index}" id="coin-info-id-${index}">

                    </div>
                  </div>
             </div>
            </div>
        </div>
        </div>

            `;


            cardContainer.appendChild(cardOutput);

            //             const toggleSwitch = document.getElementById(`toggle-switch-${index}`);

            // toggleSwitch.addEventListener('change', function(event) {
            //     toggleSwitch.checked = event.target.checked;
            //     if (!toggleSwitch.checked) {
            //         removeReport(index);
            //     }
            //     else {
            //         addToReport(coin, index);
            //     }
            // });
            // function handleToggleSwitchChange(index, isChecked, coin, mainToggleIndex) {
            //     if (!isChecked) {
            //         removeReport(index);
            //     } else {
            //         addToReport(coin, index);
            //     }
            //     console.log("Selected toggle card index:", index);
            //     console.log("Main toggle index:", mainToggleIndex); // Log the main toggle index
            // }
            function handleToggleSwitchChange(index, isChecked, coin) {
                console.log(index, isChecked, coin)
                if (!isChecked) {
                    removeReport(index);
                } else {
                    addToReport(coin, index);
                    if (isChecked) {
                        fetchCoinPrices(); // Call fetchCoinPrices here
                    }
                }
                console.log("Selected toggle card index:", index);
                // console.log("Main toggle index:", mainToggleIndex); // Log the main toggle index

                // If the modal toggle is unchecked, uncheck the corresponding coin card toggle switch
                if (!isChecked) {
                    $(`#toggle-switch-${index}`).prop('checked', false);
                }
            }


            // Usage:
            const toggleSwitch = $(`#toggle-switch-${index}`);
            toggleSwitch.on('change', function (event) {
                handleToggleSwitchChange(index, event.target.checked, coin);
            });


            function removeReport(index) {
                const reportIndex = reportsArray.findIndex(item => item.index === index);
                if (reportIndex !== -1) {
                    const removedCoin = reportsArray[reportIndex].coin; // Get the coin object before removing it
                    reportsArray.splice(reportIndex, 1);
                    const addedIndex = addedCardIds.indexOf(index);
                    if (addedIndex !== -1) {
                        addedCardIds.splice(addedIndex, 1);
                    }
                    console.log('Removed coin from reports array:', removedCoin); // Log the removed coin
                    console.log('Reports array:', reportsArray);
                }
            }

            // Add event listener to "more info" button
            const moreInfoButton = cardOutput.querySelector(`.more-info-btn-${index}`);
            moreInfoButton.addEventListener('click', async (ev) => {
                const btnTarget = ev.target.getAttribute('data-bs-target')
                console.log($(btnTarget).prop('class'))
                setTimeout(() => getMyCollapse(btnTarget), 500)
                await getCoinInfo(coin.id, coinInfoId);

            });

        });
        document.body.style.height = `${window.innerHeight}px`;

        return first25Coins;

    } catch (err) {
        console.log('an error happened', err);
    }

}
getCoins();

const getMyCollapse = (elem = '#collapseExample1') => {
    console.log($(elem).prop('class'))
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getCoinInfo(coinId, coinInfoId) {
    try {
        startProgress();
        let data;
        if (!cache.hasOwnProperty(coinId)) {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
            data = await response.json();
            cache[coinId] = data;
            setTimeout(() => {
                delete cache[coinId];
                console.log(`Cache for ${coinId} cleared.`);
            }, 2 * 60 * 1000); // 2 minutes in milliseconds
        } else {
            data = cache[coinId];
            await sleep(2000)
        }

        //$('#dummy').removeClass('done')
        //$('#dummy').addClass("load").delay(4000).addClass("done").removeClass('load');

        const moreInfoData = document.getElementById(coinInfoId);
        moreInfoData.innerHTML = `
        <img src="${data.image.small}" class="coinInfoImg">
        <div class="coinInfoDiv">
            market price:
           <br> in usd-${data.market_data.current_price.usd}$
           <br>  in eur-${data.market_data.current_price.eur}€
           <br>  in ils-${data.market_data.current_price.ils}₪
        </div>
    `;

        console.log(data.id);
        console.log("Coin ID:", coinId);
        console.log("card ID:", coinInfoId);

    } catch (error) {
        console.log("an error happened");
        console.log(error);
    }
    endProgress();
}





function addToReport(coin, index) {
    if (!addedCardIds.includes(index)) {
        reportsArray.push({ coin, index });
        addedCardIds.push(index);
        console.log('Added coin to reports array:', coin);
        console.log('Reports array:', reportsArray);
    } else {
        console.log('This card has already been added to the reports.');
    }

    if (reportsArray.length > 5) {
        const modalDOM = $('#model-text');
        modalDOM.html(generateModalContent()); // Populate modal body with content
        $('#maxCoinsModal').modal('show'); // Show the modal
    }
}



function getCoinHash() {
    const coin_hash = Object.assign({},
        ...Array.from($('.cardOutputStyle'))
            .map(d => ({ [d.getAttribute('coin-id')]: d.id.replace(/.*-/, '') })))
    return coin_hash;
}


//
// save a snapshot of the toggle buttons that appear inside the modal
// and add an event listener to the 'undo' button in the modal. When
// undo is clicked, any unchecked toggles will be restored to checked.
//
function undoSaveHistory() {
    const undoBtn = $('#undoModal');
    if (eventHandlerType === 'click') {
        console.log('EventHandler "click" has already been applied to #undoModal');
    } else {
        // create a click handler that restores the reportsArray to the toggles' original positions
        undoBtn.on('click', function (ev) {
            eventHandlerType = ev.type;
            $("[id*='modal-switch-']:not(:checked)").click();
        })
    }
}


// function generateModalContent() {
//     let switches = $('#modal-switches');
//     switches.empty();

//     const coin_hash = getCoinHash();

//     undoSaveHistory();

//     reportsArray
//       .sort((a,b) => coin_hash[ a.coin.id ] - coin_hash[ b.coin.id])
//       .forEach((item) => {
//         const coin = item.coin; // Define coin variable here
//         const index = coin_hash[ coin.id ];
//         console.log(index)

//         // Create a new <li> element, within create a label + input, within the latter create a span
//         const li = $('<li>');
//         li.text(`${coin.name} (${coin.symbol})`);
//         const div = $('<span>')
//         const label = $('<label>').addClass('toggle-switch').attr('id', `modal-toggle-${index}`);
//         const inp = $('<input>')
//         inp.attr('type', 'checkbox').attr('id', `modal-switch-${index}`).prop('checked', true);

//         inp[0].addEventListener('change', function(ev) {
//             $( '#' + ev.target.id.replace(/modal-/, 'toggle-') ).click()
//             // handleToggleSwitchChange(index, $( this).prop('checked'), coin); // Pass coin as a parameter
//         });

//         console.log(inp)
//         const span = $('<span>').addClass('slider-modal').attr('id', `modal-slider-${index}`)
//         label.append(inp).append(span);
//         div.append(label)
//         li.append(div);
//         switches.append(li);

//         // Add event listener to the toggle switch
//         /*
//         inp.on('change', function (ev) {
//             console.log([ 'EEEEEEEEEEEE', ev ])
//             //handleToggleSwitchChange(index, $(this).prop('checked'), coin); // Pass coin as a parameter
//         });
//         */
//     });

//     return switches;
// }

function generateModalContent() {
    let switches = $('#modal-switches');
    switches.empty();

    const coin_hash = getCoinHash();

    undoSaveHistory();

    reportsArray
        .sort((a, b) => coin_hash[a.coin.id] - coin_hash[b.coin.id])
        .forEach((item) => {
            const coin = item.coin; // Define coin variable here
            const index = coin_hash[coin.id];
            console.log(index)

            // Create a new <li> element, within create a label + input, within the latter create a span
            const li = $('<li>');
            li.text(`${coin.name} (${coin.symbol})`);
            const div = $('<span>')
            const label = $('<label>').addClass('toggle-switch').attr('id', `modal-toggle-${index}`);
            const inp = $('<input>')
            inp.attr('type', 'checkbox').attr('id', `modal-switch-${index}`).prop('checked', true);

            inp[0].addEventListener('change', function (ev) {
                $('#' + ev.target.id.replace(/modal-/, 'toggle-')).click()
                // handleToggleSwitchChange(index, $( this).prop('checked'), coin); // Pass coin as a parameter
            });

            console.log(inp)
            const span = $('<span>').addClass('slider-modal').attr('id', `modal-slider-${index}`)
            label.append(inp).append(span);
            div.append(label)
            li.append(div);
            switches.append(li);

            // Add event listener to the toggle switch
            /*
            inp.on('change', function (ev) {
                console.log([ 'EEEEEEEEEEEE', ev ])
                //handleToggleSwitchChange(index, $(this).prop('checked'), coin); // Pass coin as a parameter
            });
            */
        });

    return switches;
}


// async function fetchCoinPricesAndGenerateModalContent() {
//     try {
//         const coinPrices = await fetchCoinPrices();
//         const modalContent = await generateModalContent(coinPrices);
//         // Do something with modalContent, e.g., append it to the DOM
//     } catch (error) {
//         console.error('Error fetching coin prices and generating modal content:', error);
//         // Handle error gracefully
//     }
// }
// const toggleSwitch = document.getElementById('my-toggle-switch');

// // To toggle the switch programmatically
// toggleSwitch.checked = !toggleSwitch.checked;

function closeModal() {
    // $('#maxCoinsModal').modal('hide');
    // console.log('Reports array:', reportsArray);
    // Check if there are 5 or fewer items in the reportsArray
    if (reportsArray.length <= 5) {
        $('#maxCoinsModal').modal('hide');
        console.log('Reports array:', reportsArray);
    } else {
        alert('please make sure there are 5 or less coins selected')
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('#maxCoinsModal .close');

    closeButton.addEventListener('click', function () {
        closeModal();
        renderReportsArray(); // Render the reports array after closing the modal
    });

    // Render modal content on page load
    const modalDOM = document.getElementById('model-text');
    //modalText.innerHTML = generateModalContent();
});

// function renderReportsArray() {
//     // Render the reports array wherever you want to display it
//     console.log('Reports array:', reportsArray);
// }
function renderReportsArray() {
    // Render the reports array wherever you want to display it
    console.log('Reports array:', reportsArray);

    // Iterate over each report in the array
    reportsArray.forEach(report => {
        const index = report.index;
        const isChecked = $(`#modal-switch-${index}`).prop('checked');

        if (!isChecked) {
            // If the toggle switch in the modal is unchecked,
            // check the corresponding toggle switch in the main UI
            $(`#toggle-switch-${index}`).prop('checked', true);
        }
    });
}

function reloadPage() {
    window.location.reload();
}

// function filterByName() {
//     const filterValue = document.getElementById('filterInput').value.toLowerCase();
//     const filteredData = dataDebug.filter(item => item.name.toLowerCase().includes(filterValue));
//     displayResults(filteredData);
// }
function filterByName() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase().trim(); // Trim whitespace from the input
    const filteredData = dataDebug.filter(item => item.symbol.toLowerCase() === filterValue); // Compare entire name
    displayResults(filteredData);
    if (filteredData.length === 0) {
        alert('please type the full name of the coin you want to find');
    }
    filterInput.value = '';

}


function displayResults(results) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    results.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.symbol} - ${item.id} - ${item.name}`;
        resultList.appendChild(li);
    });
}

// function showAll() {
//     document.getElementById('filterInput').value = ''; // Clear the filter input
//     // displayResults(dataDebug); // Display all results
// }
function showAll() {
    document.getElementById('filterInput').value = ''; // Clear the filter input
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = ''; // Clear the UI output
}
$(document).ready(function () {
    // Initialize the popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// function initializeChart() {
//     var options = {
//         exportEnabled: true,
//         animationEnabled: true,
//         title:{
//             text: "Units Sold VS Profit"
//         },
//         subtitles: [{
//             text: "Click Legend to Hide or Unhide Data Series"
//         }],
//         axisX: {
//             title: "States"
//         },
//         axisY: {
//             title: "Units Sold",
//             titleFontColor: "#4F81BC",
//             lineColor: "#4F81BC",
//             labelFontColor: "#4F81BC",
//             tickColor: "#4F81BC"
//         },
//         axisY2: {
//             title: "Profit in USD",
//             titleFontColor: "#C0504E",
//             lineColor: "#C0504E",
//             labelFontColor: "#C0504E",
//             tickColor: "#C0504E"
//         },
//         toolTip: {
//             shared: true
//         },
//         legend: {
//             cursor: "pointer",
//             itemclick: toggleDataSeries
//         },
//         data: [{
//             type: "spline",
//             name: "Units Sold",
//             showInLegend: true,
//             xValueFormatString: "MMM YYYY",
//             yValueFormatString: "#,##0 Units",
//             dataPoints: [
//                 { x: new Date(2016, 0, 1),  y: 120 },
//                 { x: new Date(2016, 1, 1), y: 135 },
//                 { x: new Date(2016, 2, 1), y: 144 },
//                 { x: new Date(2016, 3, 1),  y: 103 },
//                 { x: new Date(2016, 4, 1),  y: 93 },
//                 { x: new Date(2016, 5, 1),  y: 129 },
//                 { x: new Date(2016, 6, 1), y: 143 },
//                 { x: new Date(2016, 7, 1), y: 156 },
//                 { x: new Date(2016, 8, 1),  y: 122 },
//                 { x: new Date(2016, 9, 1),  y: 106 },
//                 { x: new Date(2016, 10, 1),  y: 137 },
//                 { x: new Date(2016, 11, 1), y: 142 }
//             ]
//         },
//         {
//             type: "spline",
//             name: "Profit",
//             axisYType: "secondary",
//             showInLegend: true,
//             xValueFormatString: "MMM YYYY",
//             yValueFormatString: "$#,##0.#",
//             dataPoints: [
//                 { x: new Date(2016, 0, 1),  y: 19034.5 },
//                 { x: new Date(2016, 1, 1), y: 20015 },
//                 { x: new Date(2016, 2, 1), y: 27342 },
//                 { x: new Date(2016, 3, 1),  y: 20088 },
//                 { x: new Date(2016, 4, 1),  y: 20234 },
//                 { x: new Date(2016, 5, 1),  y: 29034 },
//                 { x: new Date(2016, 6, 1), y: 30487 },
//                 { x: new Date(2016, 7, 1), y: 32523 },
//                 { x: new Date(2016, 8, 1),  y: 20234 },
//                 { x: new Date(2016, 9, 1),  y: 27234 },
//                 { x: new Date(2016, 10, 1),  y: 33548 },
//                 { x: new Date(2016, 11, 1), y: 32534 }
//             ]
//         }]
//     };
//     $("#chartContainer").CanvasJSChart(options);
//     function toggleDataSeries(e) {
//         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//             e.dataSeries.visible = false;
//         } else {
//             e.dataSeries.visible = true;
//         }
//         e.chart.render();
//     }
// }


// async function fetchCoinPrices() {
//     await generateModalContent();

//     const coinSymbols = reportsArray.map(item => item.coin.symbol.toUpperCase()).join(',');
//     console.log('Coin symbols:', coinSymbols); // Log the coin symbols

//     const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinSymbols}&tsyms=USD`;
//     // Proceed with fetching data using the modified coinSymbols

//     console.log('Request URL:', url); // Log the URL before making the fetch request

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         console.log('Fetched coin prices:', data); // Log the fetched items

//         return data;
//     } catch (error) {
//         console.error('Error fetching coin prices:', error);
//         return {};
//     }
// }

// async function fetchCoinPrices() {
//     await generateModalContent();

//     const coinSymbols = reportsArray.map(item => item.coin.symbol.toUpperCase()).join(',');
//     console.log('Coin symbols:', coinSymbols); // Log the coin symbols

//     let url;
//     if (coinSymbols === '') {
//         console.error('No coin symbols found in reportsArray');
//         const defaultCoinSymbols = 'BTC,ETH,LTC'; // Example default symbols
//         url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${defaultCoinSymbols}&tsyms=USD`;
//     } else {
//         url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinSymbols}&tsyms=USD`;
//     }

//     console.log('Request URL:', url); // Log the URL before making the fetch request

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         console.log('Fetched coin prices:', data); // Log the fetched items

//         return data;
//     } catch (error) {
//         console.error('Error fetching coin prices:', error);
//         return {};
//     }
// }



// async function initializeChart() {
//     const coinPrices = await fetchCoinPrices();

//     // Extract data points from the fetched coin prices
//     const dataPoints = Object.entries(coinPrices).map(([symbol, price]) => ({
//         x: new Date(), // Assuming the current time as the fetch time
//         y: price.USD // Assuming the fetched data contains the USD price for each coin
//     }));
//     console.log('dataPoints:', dataPoints);
//     console.log('coinPrices:', coinPrices);

//     // Log the dataPoints array
//     // Log the dataPoints array

//     let options = {
//         exportEnabled: true,
//         animationEnabled: true,
//         title: {
//             text: "coin name to USD"
//         },
//         subtitles: [{
//             text: "Click Legend to Hide or Unhide Data Series"
//         }],
//         axisX: {
//             title: "States"
//         },
//         axisY: {
//             title: "coin value",
//             titleFontColor: "#4F81BC",
//             lineColor: "#4F81BC",
//             labelFontColor: "#4F81BC",
//             tickColor: "#4F81BC"
//         },
//         // axisY2: {
//         //     title: "Profit in USD",
//         //     titleFontColor: "#C0504E",
//         //     lineColor: "#C0504E",
//         //     labelFontColor: "#C0504E",
//         //     tickColor: "#C0504E"
//         // },
//         toolTip: {
//             shared: true
//         },
//         legend: {
//             cursor: "pointer",
//             itemclick: toggleDataSeries
//         },
//         data: [{
//             type: "spline",
//             name: "Coin Value (USD)",
//             showInLegend: true,
//             xValueFormatString: "MMM YYYY",
//             yValueFormatString: "$#,##0.#",
//             dataPoints: dataPoints // Use the fetched data points here
//         }]
//     };
//     // Initialize the chart within the chartContainer element


//     let chart = new CanvasJS.Chart("chartContainer", options);

//     chart.render();

//     // Define the toggleDataSeries function
//     function toggleDataSeries(e) {
//         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//             e.dataSeries.visible = false;
//         } else {
//             e.dataSeries.visible = true;
//         }
//         e.chart.render();
//     }
// }

// // Call the initializeChart function when the page is loaded
// $(document).ready(function () {
//     initializeChart();
// });

async function fetchCoinPrices() {
    try {
        const coinSymbols = 'BTC,ETH,LTC'; // Debug version with fixed symbols
        console.log('Coin symbols:', coinSymbols); // Log the coin symbols

        const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinSymbols}&tsyms=USD`;

        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched coin prices:', data); // Log the fetched items

        return data;
    } catch (error) {
        console.error('Error fetching coin prices:', error);
        return {};
    }
}
setInterval(async () => {
    await fetchCoinPrices();
}, 2000); 

// do not erase this!!!

// async function fetchCoinPrices() {
//         await generateModalContent();

//     const coinSymbols = reportsArray.map(item => item.coin.symbol).join(',');
//     console.log('Coin symbols:', coinSymbols); // Log the coin symbols

//     const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinSymbols}&tsyms=USD`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log('Fetched coin prices:', data); // Log the fetched items

//         return data;
//     } catch (error) {
//         console.error('Error fetching coin prices:', error);
//         return {};
//     }
// }






// async function initializeChart() {
//     const coinPrices = await fetchCoinPrices();

//     // Extract data points from the fetched coin prices
//     const dataPoints = Object.entries(coinPrices).map(([symbol, price]) => ({
//         x: new Date(), // Assuming the current time as the fetch time
//         y: price.USD // Assuming the fetched data contains the USD price for each coin
//     }));
//     console.log('dataPoints:', dataPoints);
//     console.log('coinPrices:', coinPrices);

//     // Log the dataPoints array
//     // Log the dataPoints array

//     let options = {
//         exportEnabled: true,
//         animationEnabled: true,
//         title: {
//             text: "coin name to USD"
//         },
//         subtitles: [{
//             text: "Click Legend to Hide or Unhide Data Series"
//         }],
//         axisX: {
//             title: "States"
//         },
//         axisY: {
//             title: "coin value",
//             titleFontColor: "#4F81BC",
//             lineColor: "#4F81BC",
//             labelFontColor: "#4F81BC",
//             tickColor: "#4F81BC"
//         },
//         // axisY2: {
//         //     title: "Profit in USD",
//         //     titleFontColor: "#C0504E",
//         //     lineColor: "#C0504E",
//         //     labelFontColor: "#C0504E",
//         //     tickColor: "#C0504E"
//         // },
//         toolTip: {
//             shared: true
//         },
//         legend: {
//             cursor: "pointer",
//             itemclick: toggleDataSeries
//         },
//         data: [{
//             type: "spline",
//             name: "Coin Value (USD)",
//             showInLegend: true,
//             xValueFormatString: "MMM YYYY",
//             yValueFormatString: "$#,##0.#",
//             dataPoints: dataPoints // Use the fetched data points here
//         }]
//     };
//     // Initialize the chart within the chartContainer element


//     let chart = new CanvasJS.Chart("chartContainer", options);

//     chart.render();

//     // Define the toggleDataSeries function
//     function toggleDataSeries(e) {
//         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//             e.dataSeries.visible = false;
//         } else {
//             e.dataSeries.visible = true;
//         }
//         e.chart.render();
//     }
// }

// // Call the initializeChart function when the page is loaded
// $(document).ready(function () {
//     initializeChart();
// });

async function initializeChart() {
    try {
        let options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Coin Value Over Time"
            },
            subtitles: [{
                text: "Click Legend to Hide or Unhide Data Series"
            }],
            axisX: {
                title: "Time"
            },
            axisY: {
                title: "Coin Value (USD)",
                titleFontColor: "#4F81BC",
                lineColor: "#4F81BC",
                labelFontColor: "#4F81BC",
                tickColor: "#4F81BC"
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                itemclick: toggleDataSeries
            },
            data: [] // Initialize empty data array
        };

        let chart = new CanvasJS.Chart("chartContainer", options);
        
        // Call fetchCoinPrices initially and then at intervals
        fetchAndRenderData(chart);

        // Fetch coin prices every 2 seconds and render data on the chart
        setInterval(() => {
            fetchAndRenderData(chart);
        }, 2000);

        function toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
        }

    } catch (error) {
        console.error('Error initializing chart:', error);
    }
}

async function fetchAndRenderData(chart) {
    try {
        const coinSymbols = 'BTC,ETH,LTC'; // Debug version with fixed symbols
        console.log('Coin symbols:', coinSymbols); // Log the coin symbols

        const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinSymbols}&tsyms=USD`;

        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched coin prices:', data); // Log the fetched items

        // Process the fetched data and add data series for each coin to the chart
        Object.entries(data).forEach(([symbol, price]) => {
            const dataPoints = [{
                x: new Date(), // Assuming the current time as the fetch time
                y: price.USD // Assuming the fetched data contains the USD price for each coin
            }];

            // Check if the data series already exists in the chart
            let dataSeries = chart.options.data.find(series => series.name === symbol);

            if (!dataSeries) {
                // Create a new data series if it doesn't exist
                dataSeries = {
                    type: "spline",
                    name: symbol,
                    showInLegend: true,
                    dataPoints: dataPoints
                };
                chart.options.data.push(dataSeries);
            } else {
                // Add new data points to the existing data series
                dataSeries.dataPoints.push(dataPoints[0]);
            }
        });

        // Render the updated chart
        chart.render();
    } catch (error) {
        console.error('Error fetching and rendering data:', error);
    }
}

// Call the initializeChart function when the page is loaded
$(document).ready(function () {
    initializeChart();
});
