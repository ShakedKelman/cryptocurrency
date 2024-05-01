const debug = true;
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
function simulateProgress() {
    var val = $("#progress-bar").progressbar("value");
    val = val + 10; // Increase value by 10%
    if (val <= 100) {
        $("#progress-bar").progressbar("value", val);
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


//const navbarContainer = document.getElementById('navbar-container');
//navbarContainer.setAttribute('class', 'navContainer');
//document.body.appendChild(navbarContainer);
//document.body.appendChild(headerContainer);
// Create navbar element
//const navbar = document.createElement('nav');
//navbar.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');

// Navbar content
// navbar.innerHTML = `
// <nav class="navbar navbar-expand-lg bg-light">
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
//         <li class="nav-item">
//           <a class="nav-link active" data-section="home-sect" id="home-id" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" data-section="live-reports-sect" href="#"  id="live-reports-id">live reports</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" data-section="about-sect" href="#"  id="about-id">about</a>
//         </li>
//         </li>

//       </ul>
//       <form class="d-flex ms-auto searchStyle" role="search">
//         <input class="form-control me-2 searchStyle" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-dark" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// `;

// Append navbar after the header

//navbarContainer.appendChild(navbar);
//document.body.appendChild(navbarContainer);

const navbarContainer = document.getElementById("navbar-container");

const progressBarContainer = document.createElement('div');
progressBarContainer.setAttribute('id', 'progress-bar-container');
navbarContainer.appendChild(progressBarContainer);

const progressBar = document.createElement('div');
progressBar.setAttribute('id', 'progress-bar');
progressBarContainer.appendChild(progressBar);



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
        
        if (isAdditionalInfoDisplayed[itemId]) {
            //navItem.textContent = itemId.replace(/-/g, ' ').replace('id', '').replace(/\b\w/g, l => l.toUpperCase());
        } else {

            //const additionalInfo = document.createElement('div');
            //additionalInfo.textContent = `This is more info for ${itemId.replace('-id', '')}`;
            //additionalInfo.setAttribute('class', 'nav-additional-info');

            //navItem.textContent = '';
            //navItem.appendChild(additionalInfo);
            //const sectIdToDisplay = navItem.getAttribute('data-section');

        }


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
            function handleToggleSwitchChange(index, isChecked, coin, mainToggleIndex) {
                if (!isChecked) {
                    removeReport(index);
                } else {
                    addToReport(coin, index);
                }
                console.log("Selected toggle card index:", index);
                console.log("Main toggle index:", mainToggleIndex); // Log the main toggle index
            
                // If the modal toggle is unchecked, uncheck the corresponding coin card toggle switch
                if (!isChecked) {
                    $(`#toggle-switch-${index}`).prop('checked', false);
                }
            }
            

            // Usage:
            const toggleSwitch = document.getElementById(`toggle-switch-${index}`);
            toggleSwitch.addEventListener('change', function (event) {
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
            moreInfoButton.addEventListener('click', async () => {
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
        }

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



// // Simulate progress (increase value over time)
// function simulateProgress() {
//     var val = $("#progress-bar").progressbar("value");
//     val = val + 10; // Increase value by 10%
//     if (val <= 100) {
//         $("#progress-bar").progressbar("value", val);
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

// };



const reportsArray = [];
const addedCardIds = [];


function addToReport(coin, index) {
    if (!addedCardIds.includes(index)) {
        if (reportsArray.length < 1) {
            reportsArray.push({ coin, index });
            addedCardIds.push(index);
            console.log('Added coin to reports array:', coin);
            console.log('Reports array:', reportsArray);
        } else {
            const modalDOM = $('#model-text');
            modalDOM.html(generateModalContent()); // Populate modal body with content
            $('#maxCoinsModal').modal('show'); // Show the modal

        }
    } else {
        console.log('This card has already been added to the reports.');
    }
}
// function generateModalContent() {
//     let content = '<ul>';
//     reportsArray.forEach((item, index) => {
//         content += `<li>${item.coin.name} (${item.coin.symbol})`;
//         content += `<label class="toggle-switch" id="toggle-button-${index}">
//                         <input type="checkbox" id="toggle-switch-${index}" checked>
//                         <span class="slider"></span>
//                     </label></li>`;
//     });
//     content += '</ul>';
//     return content;
// // }
// function generateModalContent() {
//     let content = '<ul>';
//     reportsArray.forEach((item, index) => {
//         content += `<li>${item.coin.name} (${item.coin.symbol})`;
//         content += `<label class="toggle-switch" id="toggle-button-${index}">
//                         <input type="checkbox" id="toggle-switch-${index}" checked>
//                         <span class="slider"></span>
//                     </label></li>`;
//     });
//     content += '</ul>';

//     // Add event listener to each toggle switch
//     reportsArray.forEach((item, index) => {
//         const toggleSwitch = document.getElementById(`toggle-switch-${index}`);
//         toggleSwitch.addEventListener('change', function(event) {
//             handleToggleSwitchChange(index, event.target.checked, item.coin);
//         });
//     });

//     return content;reportsArray
// }


function generateModalContent() {

    let switches = $('#modal-switches');
    switches.empty();

    reportsArray.forEach((item, index) => {
        // Create a new <li> element, within create a label + input, within the latter create a span
        const li = $('<li>');
        li.text(`${item.coin.name} (${item.coin.symbol})`);
        const label = $('<label>').addClass('toggle-switch').attr('id', `modal-toggle-${index}`);
        const inp = $('<input>').attr('type', 'checkbox').attr('id', `modal-switch-${index}`).prop('checked', true);


        inp.on('change', function () {
            const index = parseInt($(this).attr('id').replace(/.*-/, ''));
            const checked = $(this).prop('checked');
            const coin = reportsArray[index].coin;
            const mainToggleIndex = index; // Set mainToggleIndex to the chosen index
            const checkbox = $(`#toggle-switch-${index}`);
            checkbox.prop('checked', !checkbox.prop('checked')).change();
            handleToggleSwitchChange(index, checked, coin, mainToggleIndex); // Pass mainToggleIndex to the handleToggleSwitchChange function
        });
        
        
        const span = $('<span>').addClass('slider');
        label.append(inp).append(span);
        li.append(label);
        switches.append(li);


        // li.appendChild(label.appendChild(inp).appendChild(span))
        // // Append the new element to an existing element with id 'container'
        // switches.append(li);

    })

    // reportsArray.forEach((item, index) => {
    //     content += `<li>${item.coin.name} (${item.coin.symbol})`;
    //     content += `<label class="toggle-switch" id="toggle-button-${index}">
    //                     <input type="checkbox" id="toggle-switch-${index}" checked>
    //                     <span class="slider"></span>
    //                 </label></li>`;
    // });
    // content += '</ul>';

    // Add event listener to each toggle switch
    /*
    reportsArray.forEach((item, index) => {
        const toggleSwitch = document.getElementById(`toggle-switch-${index}`);
        toggleSwitch.addEventListener('change', function(event) {
            handleToggleSwitchChange(index, event.target.checked, item.coin);
        });
    });
    */

    return switches;
}

function closeModal() {
    $('#maxCoinsModal').modal('hide');
    console.log('Reports array:', reportsArray);

    // Iterate over each report in the array
    reportsArray.forEach(report => {
        const index = report.index;
        const isChecked = $(`#modal-switch-${index}`).prop('checked');

        if (isChecked) {
            console.log(`Coin at index ${index} is checked.`);
            // Perform actions if the toggle switch is checked
        } else {
            console.log(`Coin at index ${index} is not checked.`);
            // Perform actions if the toggle switch is not checked
        }
    });
}


// document.addEventListener('DOMContentLoaded', function() {
//     const closeButton = document.querySelector('#maxCoinsModal .close');

//     closeButton.addEventListener('click', function() {
//         closeModal();
//     });


// });

// document.addEventListener('DOMContentLoaded', function() {
//     const closeButton = document.querySelector('#maxCoinsModal .close');

//     closeButton.addEventListener('click', function() {
//         closeModal(reportsArray);
//     });

//     // Render modal content on page load
//     const modalText = document.getElementById('model-text');
//     modalText.innerHTML = generateModalContent();
// });


// function reloadPage() {
//     window.location.reload();
// }

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
}

function reloadPage() {
    window.location.reload();
}

function filterByName() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
    const filteredData = dataDebug.filter(item => item.name.toLowerCase().includes(filterValue));
    displayResults(filteredData);
}

function displayResults(results) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    results.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.id} - ${item.symbol} - ${item.name}`;
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