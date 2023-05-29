/*
 * Get all HTML elements with the class name, loops over them and checks for the USD
 * value for the gas fee and adds them up.
 */
const calculatorFeesFromHistory = () => {
  console.log('Calculating fees from history');
  const nodes = document.querySelectorAll('.History_gasPrice__2TKTX');
  console.log(`Found ${nodes.length} send transactions`)
  let total = 0;

  nodes.forEach((feeNode) => {
    let _fee = feeNode.innerHTML.split('$')[1].split(')')[0];
    total = total + parseFloat(_fee);
  });

  console.log(`$${total.toFixed(2)}`);
};

/*
 * Query the webpage (DOM) for the loadMore button and click it if it exists.
 */
const queryAndClickButton = () => {
  const nodeList = document.querySelectorAll('.History_loadMore__1DkZs');
  if (nodeList.length > 0 && nodeList.length === 1) {
    const buttonElement = nodeList[0];
    buttonElement.click();
    console.log('Clicked the loadMore button');
  }
};

/*
 * Starter function that runs repeatedly every 5 seconds as long as the button exists
 */
const runRepeatedly = () => {
  queryAndClickButton();

  const loadMoreButton = document.querySelector('.History_loadMore__1DkZs');
  if (loadMoreButton) {
    setTimeout(runRepeatedly, 5000);
  } else {
    console.log('No more loadMore button');
    calculatorFeesFromHistory();
  }
};

// Start the repeated execution
runRepeatedly();
