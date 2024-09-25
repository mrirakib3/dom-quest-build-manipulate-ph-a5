// doanation for noakhali
document
  .getElementById("btn-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliInput = document.getElementById(
      "input-noakhali-balance"
    ).value;

    if (noakhaliInput >= 0) {
      const noakhaliBalance = parseFloat(
        document.getElementById("noakhali-balance").innerText
      );

      const noakhaliBalanceNew = noakhaliBalance + parseFloat(noakhaliInput);

      document.getElementById("noakhali-balance").innerText =
        noakhaliBalanceNew;

      const totalBalance = parseFloat(
        document.getElementById("total-balance").innerText
      );

      document.getElementById("total-balance").innerText =
        totalBalance - parseFloat(noakhaliInput);
    } else {
      alert("Please, give a valid amount of donation.");
    }
  });




// doanation for feni
document
  .getElementById("btn-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniInput = document.getElementById(
      "input-feni-balance"
    ).value;

    if (feniInput >= 0) {
      const feniBalance = parseFloat(
        document.getElementById("feni-balance").innerText
      );

      const feniBalanceNew = feniBalance + parseFloat(feniInput);

      document.getElementById("feni-balance").innerText =
        feniBalanceNew;

      const totalBalance = parseFloat(
        document.getElementById("total-balance").innerText
      );

      document.getElementById("total-balance").innerText =
        totalBalance - parseFloat(feniInput);
    } else {
      alert("Please, give a valid amount of donation.");
    }
  });





  // doanation for quota
document
.getElementById("btn-quota")
.addEventListener("click", function (event) {
  event.preventDefault();

  const quotaInput = document.getElementById(
    "input-quota-balance"
  ).value;

  if (quotaInput >= 0) {
    const quotaBalance = parseFloat(
      document.getElementById("quota-balance").innerText
    );

    const quotaBalanceNew = quotaBalance + parseFloat(quotaInput);

    document.getElementById("quota-balance").innerText =
      quotaBalanceNew;

    const totalBalance = parseFloat(
      document.getElementById("total-balance").innerText
    );

    document.getElementById("total-balance").innerText =
      totalBalance - parseFloat(quotaInput);
  } else {
    alert("Please, give a valid amount of donation.");
  }
});


