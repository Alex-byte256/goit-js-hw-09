!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},e.parcelRequired7c6=t);var o=t("h6c0i");function u(e,n){var r=Math.random()>.3;return new Promise((function(t,o){setTimeout((function(){r?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}var a={formEl:document.querySelector(".form")};a.formEl.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,r=Number(n.delay.value),t=Number(n.step.value),c=Number(n.amount.value);for(i=1;i<=c;i++)u(i,r).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),r+=t;a.formEl.reset()}))}();
//# sourceMappingURL=03-promises.dfeada14.js.map
