function countdown() {
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 3);
  
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Encerra em: ${d}d ${h}h ${m}m ${s}s`;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Oferta encerrada!";
    }
  }, 1000);
}

countdown();
