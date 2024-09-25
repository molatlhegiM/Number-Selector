document.addEventListener('DOMContentLoaded', function () {
  const drawButton = document.getElementById('drawButton');
  const viewHistoryButton = document.getElementById('viewHistoryButton');
  const resultDiv = document.getElementById('result');
  const historyDiv = document.getElementById('history');

  // Existing past history for frequency analysis
  const existingHistoryData = [
    [7, 21, 23, 38, 43, 45, 25],
    [4, 6, 8, 28, 46, 52, 27],
    [8, 13, 16, 22, 26, 43, 9],
    [2, 7, 18, 29, 40, 49, 38],
    [10, 17, 33, 38, 39, 50, 5],
    [1, 10, 14, 19, 25, 46, 29],
    [2, 12, 23, 24, 30, 31, 36],
    [2, 5, 13, 22, 23, 51, 1],
    [4, 11, 22, 29, 36, 44, 14],
    [4, 7, 12, 31, 38, 49, 15]
  ];

  // Combine existing history with new draws
  let drawHistory = existingHistoryData.map(arr => [...arr]); // Clone existing history

  // Function to generate a unique set of random numbers
  function getRandomNumbers() {
    const randomNumbers = new Set();
    while (randomNumbers.size < 6) {
      // Generate a random number between 1 and 52
      const randomNumber = Math.floor(Math.random() * 52) + 1;
      randomNumbers.add(randomNumber);
    }
    return Array.from(randomNumbers);
  }

  drawButton.addEventListener('click', function () {
    const drawnNumbersArray = getRandomNumbers();
    drawHistory.push(drawnNumbersArray); // Add new draw to history

    // Display the drawn set
    resultDiv.textContent = `Drawn Numbers: ${drawnNumbersArray.join(', ')}`;

    // Clear history display initially
    historyDiv.style.display = 'none';
  });

  viewHistoryButton.addEventListener('click', function () {
    updateHistory();
    historyDiv.style.display = historyDiv.style.display === 'none' ? 'block' : 'none';
  });

  function updateHistory() {
    historyDiv.innerHTML = '<h2>Draw History</h2>';
    if (drawHistory.length === 0) {
      historyDiv.innerHTML += '<p>No draws yet.</p>';
    } else {
      const historyList = document.createElement('ul');
      drawHistory.forEach(numbers => {
        const listItem = document.createElement('li');
        listItem.textContent = numbers.join(', ');
        historyList.appendChild(listItem);
      });
      historyDiv.appendChild(historyList);
    }
  }

  // Initialize history display as hidden
  historyDiv.style.display = 'none';
  updateHistory();
});

