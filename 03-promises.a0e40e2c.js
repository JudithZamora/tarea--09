!function(){function e(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]'),a=(parseInt(t.value),parseInt(o.value),parseInt(c.value)),i=0;i<a;i++){e(2,1500).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.a0e40e2c.js.map
