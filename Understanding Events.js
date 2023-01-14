const quotes = {
    nelsonMandela: `"The greatest glory in living lies not in never falling, but in rising every time we fall" - Nelson Mandela`,
    steveJobs: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." - Steve Jobs`,
    johnLennon: `"Life is what happens when you're busy making other plans." - John Lennon`,
    anneFrank: `"Whoever is happy will make others happy too." - Anne Frank`,
  };
  
  const quoteOut = document.querySelector('#quote');
  const nelsonMBtn = document.querySelector('#nelson-mandela');
  const steveJBtn = document.querySelector('#steve-jobs');
  const johnLBtn = document.querySelector('#john-lennon');
  const anneFBtn = document.querySelector('#anne-frank');
  
  nelsonMBtn.addEventListener('click', () => (quoteOut.innerText = quotes.nelsonMandela));
  steveJBtn.addEventListener(
      'click',
      () => (quoteOut.innerText = quotes.steveJobs)
    );
     
    johnLBtn.addEventListener(
      'click',
      () => (quoteOut.innerText = quotes.johnLennon)
    );
     
    anneFBtn.addEventListener(
      'click',
      () => (quoteOut.innerText = quotes.anneFrank)
    );