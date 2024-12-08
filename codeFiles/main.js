

const debug = false;  // true == do not fetch coins. Get them from HTML

const reportsArray = [];
let saveReportsArray = [];
const addedCardIds = [];
let eventHandlerType;
const usdPrices = [];
let nIntervId;

const dataDebug = $.parseJSON( $('#some-data').text() ); // .then(response => response.json());

const cache = {};

function simulateProgress() {
    var val = $("#progress-bar").progressbar("value");
    val = val + 10; // Increase value by 10%
    if (val <= 100) {
        $("#progress-bar").progressbar("value", val);
        $("#progress-label").text(val + "%");
        setTimeout(simulateProgress, 500); // Update every 1 second
    }
}


const startProgress = function (doSim = true) {
    $("#progress-bar").progressbar({
        value: 0 // Initial value (0%)
    });

  if (doSim)
    simulateProgress(); // Start the progress simulation
};

const updateProgress = function () {
    var val = $("#progress-bar").progressbar("value");
    $("#progress-bar").progressbar({
        value: val + 10
    });
};


const endProgress = function () {
    $("#progress-bar").progressbar({
        value: 100 // Initial value (0%)
    });

    // $("#progress-label").text("Complete!"); // Update progress label when complete
};

const mainHeader = document.getElementById('main-header');

document.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const parallaxSpeed = 0.5; // Adjust this value to control the parallax speed
    mainHeader.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`;
});


const navbarContainer = document.getElementById("navbar-container");


let isAdditionalInfoDisplayed = {
    'home-id': false,
    'live-reports-id': false,
    'about-id': false
};
const navbarItems = ['home-id', 'live-reports-id', 'about-id'];


//
// side effects of the navbar nav items
//
function navClickSideEffects(itemId) {

  // disable the filter buttons when not at 'Home'
  if (itemId === 'home-id') {
    $('.searchStyle button, .searchStyle input').attr('disabled', false);
  } else {
    $('.searchStyle button, .searchStyle input').attr('disabled', true);
  }

  // clear the fetch interval when no at 'Live Reports'
  if (itemId !== 'live-reports-id' && nIntervId) {
    clearInterval(nIntervId);
    nIntervId = null;
  }

  if (itemId === 'live-reports-id') {
    archive_data = { };
  // Call fetchCoinPrices every 2 seconds
    if (!nIntervId) {
	nIntervId = setInterval(async () => {
	    // Call fetchCoinPrices to fetch new coin prices
	  if (reportsArray.length > 0 )
	    await fetchCoinPrices();
	}, 2000);
      }
  }

}

navbarItems.forEach(itemId => {
    const navItem = document.getElementById(itemId);

    navItem.addEventListener('click', () => {
        console.log(this)

        const toActivate = Object.keys(isAdditionalInfoDisplayed)
            .filter(navId => navId !== itemId);
        toActivate.forEach(navId => $('#' + navId).removeClass('active')); // hide all sections not under itemId
        $('#' + itemId).addClass('active'); // show the section under itemId

	navClickSideEffects(itemId);
        // reflect the display on the respective section(s)
        const toHide = Object.keys(isAdditionalInfoDisplayed)
            .filter(navId => navId !== itemId)
            .map(navId => navId.replace(/-id/, '-sect'));
        toHide.forEach(sectId => $('#' + sectId).hide()); // hide all sections not under itemId
        $('#' + itemId.replace(/-id/, '-sect')).show(); // show the section under itemId

        isAdditionalInfoDisplayed[itemId] = !isAdditionalInfoDisplayed[itemId];
    });
});

function addListenerToCollapse(moreInfoButton, coinId, coinInfoId ) {
  moreInfoButton.addEventListener('click', async (ev) => {
      const btnTarget = ev.target.getAttribute('data-bs-target');
      const collapseElement = document.querySelector(btnTarget);
      
      // Check if the collapse element is opening
      if (!$(collapseElement).hasClass('show')) {
	  console.log($(btnTarget).prop('class'));
	  //setTimeout(() => getMyCollapse(btnTarget), 500);
	  startProgress(); // Call startProgress only when the collapse is opening
	  await getCoinInfo(coinId, coinInfoId);
      }
  });
}


// a function to fetch the coin information
async function getCoins() {

    startProgress();
    try {
        let response;
        let data;

        if (debug !== true) {
            response = await fetch('https://api.coingecko.com/api/v3/coins/list')
            data = await response.json();
        } else {
            data = dataDebug // 'file:///Users/shakedkelman/Documents/FullStack4578:41/projects/project_two/codeFiles/coins.json');
        }

      const allCoins = data//slice(0, 10000);
        console.log(allCoins);

        const cardContainer = $('#home-sect .cards')[0];
        const totalCoins = allCoins.length;
        let currentCoinIndex = 0;

        allCoins.forEach((coin, index) => {

            const cardOutput = document.createElement('div');
            cardOutput.setAttribute('class', 'cardOutputStyle mb-3 col-md-4');
            const coinInfoId = `coin-info-id-${index}`;
            cardOutput.setAttribute('id', `card-coin-output-${index}`);
            cardOutput.setAttribute('coin-id', coin.id)
            cardOutput.setAttribute('coin-name', coin.symbol)

            cardOutput.innerHTML = `
            <div class="card mb-3 custom-card-style" style="max-width: 540px;">

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
            // updateProgress(++currentCoinIndex, totalCoins); // Update progress

	    if (index >= totalCoins) {
                endProgress(); // End progress when all coins are loaded
            }

            function handleToggleSwitchChange(index, isChecked, coin) {
                console.log(index, isChecked, coin)
                if (!isChecked) {
                    removeReport(index);
                } else {
                    addToReport(coin, index);
                    if (isChecked) {
		      $(`#toggle-switch-${index}`).prop('checked', true); // make sure the main checkbox is checked (this includes a filtered screen element that was checked)
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
            // const moreInfoButton = cardOutput.querySelector(`.more-info-btn-${index}`);
            // moreInfoButton.addEventListener('click', async (ev) => {
            //     const btnTarget = ev.target.getAttribute('data-bs-target')
            //     console.log($(btnTarget).prop('class'))
            //     setTimeout(() => getMyCollapse(btnTarget), 500)
            //     await getCoinInfo(coin.id, coinInfoId);

            // });
            const moreInfoButton = cardOutput.querySelector(`.more-info-btn-${index}`);
	    addListenerToCollapse(moreInfoButton, coin.id, coinInfoId );
            
        });
        document.body.style.height = `${window.innerHeight}px`;
        endProgress(); // End progress when all coins are displayed
        return allCoins;

    } catch (err) {
        console.log('an error happened', err);
    }

}
    getCoins();


// // Function to update the progress bar
// function updateProgress(current, total) {
//     const progress = (current / total) * 100;
//     $("#progress-bar").progressbar("value", progress);
//     $("#progress-label").text(Math.round(progress) + "%");
// }

// // Call getCoins on DOMContentLoaded
// document.addEventListener('DOMContentLoaded', function() {
//     getCoins();
// });
// const getMyCollapse = (elem = '#collapseExample1') => {
//     console.log($(elem).prop('class'))
// }

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
	  // await sleep(2000)
        }

        //$('#dummy').removeClass('done')
        //$('#dummy').addClass("load").delay(4000).addClass("done").removeClass('load');

	// remove a possible prefixing '_' from the DOM elem id
        const baseCoinInfoId = coinInfoId.replace( /^_/, '');
        const moreInfoData = $(`*[id*="${baseCoinInfoId}"`).toArray();
      console.log(data.market_data)
	const price = data.market_data.current_price.hasOwnProperty('eur')
	? data.market_data.current_price
	: { usd: Math.random().toFixed(5), eur: Math.random().toFixed(5), ils: Math.random().toFixed(5) };
      moreInfoData.forEach( mid => mid.innerHTML = `
        <img src="${data.image.small}" class="coinInfoImg">
        <div class="coinInfoDiv">
            market price:
           <br> USD-${price.usd}$
           <br> EUR-${price.eur}€
           <br> ILS-${price.ils}₪
        </div>
    `);

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

/*
   create an array keyed by coin id, the values are the HTML tag's id, abbrevioated to the numeric value only. To locate the id do:
   pattern = 'card-coin-output-' + coin_hash['01coin'];
   $('#' + pattern)

{
    "01coin": "0",
    "0chain": "1",
 ...
    "0xos-ai": "31"
}
*/
function getCoinHash() {
    const coin_hash = Object.assign({},
        ...Array.from($('.cardOutputStyle'))
            .map(d => ({ [d.getAttribute('coin-id')]: d.id.replace(/.*-/, '') })))
    return coin_hash;
}



/*
   create an array keyed by coin id, the values are the coin names
{
    "zoc":  "01coin",
    "zcn":  "0chain",
 ...        
     "0xos":"0xos-ai"   
}
*/
function getCoinNamesHash() {
    const coin_hash = Object.assign({},
        ...Array.from($('.cardOutputStyle'))
            .map(d => {
                const title = $(d).find('h5');
                return ({ [ $(d).attr('coin-id') ] : $(title).text() }) }))
    return coin_hash;
}



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

        });

    return switches;
}

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

function processCopiedCards() {
  const copiedCards = $('.filter .cardOutputStyle').toArray();
  copiedCards.forEach( card => {
    const btn = $(card).find('[class*="more-info-btn-"]');
    const coinId = $(card).attr('coin-id');
    const coinInfoId = card.id.replace( /card-coin-output-/, 'coin-info-id-');
    const newCoinInfoId = `_${coinInfoId}`;
    $(`.filter .cardOutputStyle #${coinInfoId}`).attr('id', newCoinInfoId);
    addListenerToCollapse(btn[0], coinId, newCoinInfoId )
  });
}

function filterByName() {
    $('.coin-container .filter').empty();
    $('.coin-container .cards').hide();

    const filterValue = document.getElementById('filterInput').value.toLowerCase().trim(); // Trim whitespace from the input
    const cards = document.querySelectorAll('#home-sect .cardOutputStyle'); // Get all card elements within the home-sect

  coin_names_hash = getCoinNamesHash();
  const these = Object.values(coin_names_hash).filter( k => k.match( `^${filterValue}$`) ); // all coins that fit the search pattern
  const pat = new RegExp( '^(' + these.join ("|") + ')$' );

  // DOM entities that fit the search pattern
  theseCards = [...cards].filter( card => pat.test( $(card).attr('coin-name')) )

  // copy the card to the filter container
  theseCards.forEach( card => $('.coin-container .filter').append( $(card).clone(true, true)) );

  processCopiedCards();

  $('.coin-container .filter').show();
  $('#filterInput').popover('hide');
}

function filterChecked() {
    $('.coin-container .filter').empty();
    $('.coin-container .cards').hide();

    const cards = document.querySelectorAll('#home-sect .cardOutputStyle'); // Get all card elements within the home-sect

  // DOM entities that fit the search pattern
  theseCards = [ ... $(".cardOutputStyle:has( input[id*='toggle-switch-']:checked )") ]

  // copy the card to the filter container
  theseCards.forEach( card => $('.coin-container .filter').append( $(card).clone(true, true)) );

  processCopiedCards();

  $('.coin-container .filter').show();
  $('#filterInput').popover('hide');
}


function showAll() {
  document.getElementById('filterInput').value = '';
  $('.coin-container .cards').show();
  $('.coin-container .filter').hide();
  $('#filterInput').popover('hide');
}

$(document).ready(function () {
    // Initialize the popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});


let archive_data = { };

async function fetchCoinPrices(coinSymbols) {
    await generateModalContent();

    if (coinSymbols === undefined || coinSymbols.length === 0) coinSymbols = reportsArray.map(item => item.coin.symbol).join(',');
    console.log('Coin symbols:', coinSymbols); // Log the coin symbols
    if (coinSymbols.length !== 0) {
        try {
            const response = await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinSymbols}&tsyms=USD`);
            const data = await response.json();
	    if ( /Error/.test(data.Response) )
	      throw Error('no data available');
            console.log('Fetched coin prices:', data); // Log the fetched items

            //const prices = Object.keys(data).map( symbol => )
            
            Object.keys(data).forEach((symbol) => {
                if (archive_data[symbol] === undefined) archive_data[symbol] = [];
                archive_data[symbol].push( { price: data[symbol].USD, time: new Date() } );
            });
            //archive_data = Object.keys(data).map((symbol) => ({ [symbol] : Object.assign( [], ... archive_data[symbol], { price: data[symbol].USD, time: new Date() } ) } ));
            const usdPrices = archive_data;
            console.log('USD prices array:', usdPrices); // Log USD prices array

            initializeChart(usdPrices);

            return data; // Return the entire data object
        } catch (error) {
            console.error('Error fetching coin prices:', error);
            return {};
        }
    }
}



// // // trying]

let chart; // Declare chart variable in the global scope

function showDefaultText(chart, text){
  let isEmpty = !chart.options.data || chart.options.data.length > 0 && chart.options.data[0].dataPoints && chart.options.data[0].dataPoints.length === 0;

   if(!chart.options.subtitles)
   	(chart.options.subtitles = []);

   if(isEmpty)
   	chart.options.subtitles.push({
     text : text,
     verticalAlign : 'center',
   });
   else
   	(chart.options.subtitles = []);
}

async function initializeChart(coinPrices, symbol = 'ZCN') {
    console.log('chart works:');

    // Ensure coinPrices is a valid object
    if (Object.keys(coinPrices).length === 0)
    //if (!Array.isArray(coinPrices))
    {
        console.error('coinPrices is not a valid array:', coinPrices);
        return;
    }

    // create an array of arrays. symbol is the key, data is a series
    const dataPoints = Object.keys(coinPrices)
        .map(
            ky => ({
                symbol: ky,
                data: coinPrices[ky].slice(-30).map( item => ( {x : item.time, y: item.price }) )
                })
        );
    
    //const now = new Date().getTime();
    //const dataPoints = [];
    //for (let i = 0; i < coinPrices.length; i++) {
    //    const pointTime = now - (coinPrices.length - i - 1) * 2000; // Set each data point 2 seconds apart
    //    dataPoints.push({ x: new Date(pointTime), y: coinPrices[i].price });
    //}
    
    // Extract data points from the fetched coin prices
    const dataSeries0 = {
        type: "spline",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.########", // Display all digits after the decimal point
    };

    // dataSeries used to be an array. Now it is an array of
    // array-objects. Each is a data series of a symbol
    const dataSeries = Object.keys(dataPoints).map(
        ky => Object.assign(
            {},
            dataSeries0,
            { dataPoints: dataPoints[ky].data, name: dataPoints[ky].symbol }
        )
    );
    //dataPoints // Use the data points created

    console.log('all data series:', dataSeries);

  const unlist = Object
      .values(dataPoints)         // get the dataPoints
      .map( d => d.data )         // retrive the data tag
      .reduce( (a,s) => [].concat(s, a) ); // spread the lists

    const allYValues = unlist
      .map( d => d.y )            // get the y component
      .sort( (a, b) => a-b);      // sort numerically

    let delta = ( allYValues.slice(-1)[0] - allYValues[0] ) * 0.2;
    if (delta === 0) delta = allYValues[0] * 0.1;
    const minYValue = allYValues[0] - delta;
    const maxYValue = allYValues.slice(-1)[0] + delta; // Add 1% to the maximum value
    
    console.log('Min Y Value:', minYValue);
    console.log('Max Y Value:', maxYValue);

    const allXValues = unlist
      .map( d => d.x )            // get the x component
      .sort( (a, b) => a-b);      // sort numerically

    const minXValue = allXValues[0];
    const maxXValue = allXValues.slice(-1)[0];

    console.log('Min X Value:', minXValue);
    console.log('Max X Value:', maxXValue);
    
    let options = {
      height: 500,
      exportEnabled: true,
      animationEnabled: true,
      title: {
	  text: "Coin Prices to USD"
      },
      subtitles: [{
	  text: "Click Legend to Hide or Unhide Data Series"
      }],
      axisX: {
	  title: "Time",
	  valueFormatString: "HH:mm:ss",
	  minimum: minXValue, // Display data from the past based on the number of data points
	  maximum: maxXValue // Set maximum to 2 seconds in the future
      },
      
      axisY: {
	  title: "Price (USD)",
	  titleFontColor: "#4F81BC",
	  lineColor: "#4F81BC",
	  labelFontColor: "#4F81BC",
	  tickColor: "#4F81BC",
	  minimum: minYValue, // Set minimum y-axis value dynamically
	  maximum: maxYValue //
      },
      toolTip: {
	  shared: true
      },
      legend: {
	  cursor: "pointer",
	  itemclick: toggleDataSeries
      },
      data: dataSeries //  Use the fetched data series here
    };

    if (typeof chart === 'undefined') {
        chart = new CanvasJS.Chart("chartContainer", options); // Assign chart to the global variable
      showDefaultText(chart, "No Data available");
    } else {
        chart.options.axisX.minimum = minXValue;
        chart.options.axisX.maximum = maxXValue;
        chart.options.axisY.minimum = minYValue;
        chart.options.axisY.maximum = maxYValue;
        chart.options.data = dataSeries;
    }
    chart.render();

    // Define the toggleDataSeries function
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

    return chart;
}

// Function to add new data points to the chart
function addDataPoints(newDataPoints) {
    if (!chart) {
        console.error('Chart is not initialized.');
        return;
    }

    // Convert new data points to the correct format
    const formattedDataPoints = newDataPoints.map(item => ({
        x: new Date(item.time), // Convert item.time to a Date object
        y: item.price
    }));

    // Get the first data series in the chart
    const dataSeries = chart.options.data[0];

    // Add new data points to the data series
    dataSeries.dataPoints.push(...formattedDataPoints);

    // Update the maximum X axis value
    const maxXValue = Math.max(...dataSeries.dataPoints.map(dp => dp.x));
    chart.options.axisX.maximum = maxXValue;

    // Update the chart with new data points
    chart.render();
}




// Update the chart data every two seconds
// setInterval(async () => {
//     // Call fetchCoinPrices to fetch new coin prices
//     const newData = await fetchCoinPrices();
    
//     // Ensure newData is an array
//     // if (!Array.isArray(newData)) {
//     //     console.error('Invalid data format:', newData);
//     //     return;
//     // }

//     // Get the current time
//     let currentTime = new Date();
    
//     // Update the x-axis labels with the current time and the previous time
//     chart.options.axisX.labelFormatter = function (e) {
//         let prevTime = new Date(currentTime);
//         prevTime.setSeconds(currentTime.getSeconds() - 2); // Subtract 2 seconds to get the previous time
//         return CanvasJS.formatDate(prevTime, "HH:mm:ss") + " - " + CanvasJS.formatDate(currentTime, "HH:mm:ss");
//     };

//     // Update the data points with the new time and price
//     chart.options.data.forEach(series => {
//         // Find the corresponding item in newData
//         const newItem = newData.find(item => item.symbol === series.name);
//         // If newItem is found, push the new data point
//         if (newItem) {
//             // Increment the x-coordinate by one unit
//             const newX = series.dataPoints.length > 0 ? series.dataPoints[series.dataPoints.length - 1].x.getTime() + 1000 : currentTime.getTime();
//             series.dataPoints.push({ x: new Date(newX), y: newItem.price });
//         }
//     });

//     // Render the updated chart
//     chart.render();
// }, 2000);



document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the button
    var backToTopBtn = document.getElementById('back-to-top-btn');

    // Add a click event listener to scroll to the top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    });

    // Add a scroll event listener to show/hide the button based on scroll position
    window.addEventListener('scroll', function() {
        // Show the button when scrolling down past 200 pixels
        if (window.pageYOffset > 200) {
            backToTopBtn.classList.remove('d-none');
        } else {
            backToTopBtn.classList.add('d-none');
        }
    });
});

