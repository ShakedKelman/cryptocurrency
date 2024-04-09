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

const headerContainer = document.createElement('header');
headerContainer.setAttribute('class', 'headerContainer');
document.body.appendChild(headerContainer);

const mainHeader = document.createElement('h1');
mainHeader.setAttribute('id', 'main-header');
mainHeader.setAttribute('class', 'mainHeaderStyle');
mainHeader.textContent = "Cryptonite";

headerContainer.appendChild(mainHeader);


const logo = document.createElement('img');
logo.setAttribute('src', '../assets/cryptocurrency-coins-logo-design_652638-28 Background Removed.png');
logo.setAttribute('alt', 'this is my crypto logo');
logo.setAttribute('class', 'cryptoLogoStyling');

headerContainer.appendChild(logo);

const navbarContainer = document.createElement('div');
navbarContainer.setAttribute('class', 'navContainer');
document.body.appendChild(navbarContainer);

document.body.appendChild(headerContainer);
// Create navbar element
const navbar = document.createElement('nav');
navbar.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');

// Navbar content
navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link active" id="home-id" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  id="live-reports-id">live reports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  id="about-id">about</a>
        </li>
        </li>
       
      </ul>
      <form class="d-flex ms-auto" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`;

// Append navbar after the header

navbarContainer.appendChild(navbar);
document.body.appendChild(navbarContainer);
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
        const section = document.createElement('section');
        section.setAttribute('id', 'coin-section');
        document.body.appendChild(section);

        first25Coins.forEach(coin => {
            const cardOutput = document.createElement('div');
            cardOutput.setAttribute('class', 'cardOutputStyle mb-3 col-md-4');
            cardOutput.setAttribute('id', 'card-coin-output');

            cardOutput.innerHTML = `
            <div class="card mb-3 border border-dark" style="max-width: 540px;">

            <div class="row g-0">
            <div class="col-md-4">
                <img src="../assets/crypto-card-logo.jpg" class="img-fluid rounded-start" alt="a logo picture">
            </div>
            <div class="col-md-8">
                <div class="card-body text-bg-light text-dark">
                    <h5 class="card-title">${coin.symbol}</h5>
                    <p class="card-text">${coin.name}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </div>

            `;

            section.appendChild(cardOutput);

        });
        return first25Coins;

    } catch (err) {
        console.log('an error happened', err);
    }

}
getCoins();

let isAdditionalInfoDisplayed = {
    'home-id': false,
    'live-reports-id': false,
    'about-id': false // Add more IDs and initial states as needed
};

function showNavInfo(navItemId) {
    const navItem = document.getElementById(navItemId);

    if (isAdditionalInfoDisplayed[navItemId]) {
        navItem.textContent = navItemId.replace('-', ' ').replace('id', '').replace(/\b\w/g, l => l.toUpperCase()); // Revert to original text
    } else {
        const additionalInfo = document.createElement('div');
        additionalInfo.textContent = `This is more info for ${navItemId.replace('-id', '')}`;
        additionalInfo.setAttribute('class', 'nav-additional-info');

        navItem.textContent = '';
        navItem.appendChild(additionalInfo);
    }

    isAdditionalInfoDisplayed[navItemId] = !isAdditionalInfoDisplayed[navItemId];
}

// Add click event listeners for each navbar item
const navbarItems = ['home-id', 'live-reports-id', 'about-id']; // Add more IDs as needed
navbarItems.forEach(itemId => {
    document.getElementById(itemId).addEventListener('click', () => showNavInfo(itemId));
});
