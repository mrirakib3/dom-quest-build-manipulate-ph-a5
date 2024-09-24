document
  .getElementById("btn-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //console.log('ok');
    const noakhaliInput = document.getElementById(
      "input-noakhali-balance"
    ).value;
    //console.log(noakhaliInput);
    if (noakhaliInput >= 0) {
      // console.log(typeof noakhaliInput);

      const noakhaliBalance = parseFloat(document.getElementById("noakhali-balance").innerText);

      const noakhaliBalanceNew = noakhaliBalance + parseFloat(noakhaliInput);
    //   console.log(noakhaliBalanceNew);

      document.getElementById('noakhali-balance').innerText = noakhaliBalanceNew;

    } else {
      alert("Please, give a valid amount of donation.");
    }
  });

//console.log(typeof noakhaliBalance);
