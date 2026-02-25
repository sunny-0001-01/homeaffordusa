<script>
const STATE_TAX = {
"Alabama":0.41,"Alaska":0.94,"Arizona":0.41,"Arkansas":0.60,"California":0.69,
"Colorado":0.50,"Connecticut":1.41,"Delaware":0.40,"Florida":0.90,"Georgia":0.82,
"Hawaii":0.42,"Idaho":0.42,"Illinois":1.84,"Indiana":0.84,"Iowa":1.27,
"Kansas":1.26,"Kentucky":0.77,"Louisiana":0.77,"Maine":0.89,"Maryland":0.85,
"Massachusetts":0.96,"Michigan":1.08,"Minnesota":1.01,"Mississippi":0.64,
"Missouri":0.85,"Montana":0.67,"Nebraska":1.29,"Nevada":0.48,"New Hampshire":1.24,
"New Jersey":1.52,"New Mexico":0.64,"New York":0.82,"North Carolina":0.62,
"North Dakota":0.96,"Ohio":1.35,"Oklahoma":0.88,"Oregon":0.84,"Pennsylvania":1.26,
"Rhode Island":0.94,"South Carolina":0.55,"South Dakota":1.11,"Tennessee":0.46,
"Texas":1.38,"Utah":0.46,"Vermont":1.22,"Virginia":0.81,"Washington":0.78,
"West Virginia":0.50,"Wisconsin":1.29,"Wyoming":0.52
};

document.getElementById("calcBtn").onclick=function(){

let price=parseFloat(priceInput.value);
let salary=parseFloat(salaryInput.value);
let tax=parseFloat(taxInput.value)/100;
let save=parseFloat(saveInput.value)/100;

if(!price||!salary||!tax){alert("Fill all fields");return;}

let monthlyIncome=salary/12;
let yearlySavings=salary*save;
let monthlySavings=yearlySavings/12;

let down=price*0.20;
let years=Math.ceil(down/yearlySavings);

let safeBudget=monthlyIncome*0.28;
let stretchBudget=monthlyIncome*0.36;

let monthlyTax=(price*tax)/12;

let readiness=Math.min((yearlySavings/down)*100,100);

let incomeBoost=salary+15000;
let boostYears=Math.ceil(down/(incomeBoost*save));

let saveBoost=save+0.05;
let saveBoostYears=Math.ceil(down/(salary*saveBoost));

let recommendedPrice=Math.round((safeBudget*12)/tax);

let verdict="",cls="";
if(years<5){verdict="Comfortable";cls="good";}
else if(years<10){verdict="Slow Grind";cls="warn";}
else{verdict="Unrealistic";cls="bad";}

result.innerHTML=`

<h2 class="${cls}">${verdict}</h2>

<p>
You earn <b>$${monthlyIncome.toFixed(0)}</b> per month and save
<b>$${monthlySavings.toFixed(0)}</b>.
To buy this home you need a 20% down payment of
<b>$${down.toFixed(0)}</b>.
At your current pace, it will take approximately
<b>${years} years</b>.
</p>

<div class="progresswrap"><div class="progress" style="width:${readiness}%"></div></div>

<hr>

<h3>1️⃣ Income Breakdown</h3>
<p>Gross Monthly: $${monthlyIncome.toFixed(0)}</p>

<hr>

<h3>2️⃣ Savings Reality</h3>
<p>Monthly Savings: $${monthlySavings.toFixed(0)}</p>

<hr>

<h3>3️⃣ Lender Rules</h3>
<p>Safe Housing Budget: $${safeBudget.toFixed(0)}</p>
<p>Stretch Limit: $${stretchBudget.toFixed(0)}</p>

<hr>

<h3>4️⃣ Ownership Cost</h3>
<p>Monthly Property Tax: $${monthlyTax.toFixed(0)}</p>

<hr>

<h3>✅ Recommended Home Price</h3>
<p>Based on your income, target homes under <b>$${recommendedPrice.toLocaleString()}</b></p>

<hr>

<h3>🚀 How To Buy Faster</h3>
<ul>
<li>Increase income to $${incomeBoost.toLocaleString()} → buy in ${boostYears} years</li>
<li>Save ${(save*100+5).toFixed(0)}% instead of ${(save*100).toFixed(0)}% → buy in ${saveBoostYears} years</li>
<li>Lower home price to $${recommendedPrice.toLocaleString()}</li>
</ul>

<p class="small">
Hard truth: If timeline exceeds 8–10 years, this home is financially out of reach right now.
</p>
`;

result.scrollIntoView({behavior:"smooth"});
}
</script>