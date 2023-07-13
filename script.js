function countChocolates() {
    const totalMoney = document.getElementById("totalMoney").value;
    const chocolateCost = document.getElementById("chocolateCost").value;
  
    const money = parseFloat(totalMoney.replace(/[^0-9.-]+/g, ""));
    const cost = parseFloat(chocolateCost.replace(/[^0-9.-]+/g, ""));
  
    if (isNaN(money) || isNaN(cost) || money < 0 || cost <= 0) {
      document.getElementById("output").textContent = "Invalid Input";
      return;
    }
  
    let initialChocolates = Math.floor(money / cost);
    let totalChocolates = initialChocolates;
    let wrappers = initialChocolates;

    while (wrappers >= 3) {
      const additionalChocolates = Math.floor(wrappers / 3);
      totalChocolates += additionalChocolates;
      const remainingWrappers = wrappers % 3;
      wrappers = additionalChocolates + remainingWrappers;
    }
  
    document.getElementById("output").textContent = totalChocolates;
  }
  