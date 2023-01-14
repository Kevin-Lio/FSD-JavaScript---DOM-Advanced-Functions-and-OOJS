import cart from './cart.json';
import { renderRows, renderTotals } from './view';
import currencyRates from './currencyRates.json';

const currencyPicker = document.querySelector("select[name='currency-picker']");
// Your code goes here...
currencyPicker.innerHTML = Object.keys(currencyRates)
  .map((key) => `<option>${key}</option>`)
  .join('');



const currencyConvert = (currency, rates, fn) => {
    const conversionRate = rates[currency] ?? 1;
    return (cart) => {
      const revised = cart.map((item) => {
        return {
          ...item,
          cost: item.cost * conversionRate,
        };
      });
      return fn(revised);
    };
  };

  const computeCart = function () {
    const currency = this?.value;
    currencyConvert(currency, currencyRates, renderRows)(cart);
    currencyConvert(currency, currencyRates, renderTotals)(cart);
  };

currencyPicker.addEventListener('change', computeCart);

computeCart();
