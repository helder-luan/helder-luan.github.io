// monte um script que faça o triangulo de sierpinski

const area = document.querySelector("body");

const chaos = {
  status: "off",
};

const startPoints = [];

area.addEventListener("click", (event) => marcaPonto(event), false);

function marcaPonto(event) {
  if (startPoints.length < 4) {
    startPoints.push({ x: event.clientX, y: event.clientY });
    const point = document.createElement('div');
    point.setAttribute('class', 'point');
    point.setAttribute('style', `top: ${event.clientY}px; left: ${event.clientX}px`);
  
    point.innerText = ".";
  
    area.appendChild(point);
  } else {
    if (chaos.status === "off") {
      area.removeEventListener("click", marcaPonto);
      chaos.status = "on";
      montaTrianguloSierpinski();
    }
  }
}


function montaTrianguloSierpinski() {
  const lastPoint = startPoints[startPoints.length - 1];
  
  for (let i = 0; i < 15000; i++) {
    setTimeout(() => {
      // seleciona um ponto aleatorio
      const randomPoint = startPoints[Math.floor(Math.random() * startPoints.length)];
    
      // calcula o ponto medio
      const x = (lastPoint.x + randomPoint.x) / 2;
      const y = (lastPoint.y + randomPoint.y) / 2;
      
      // cria um ponto
      const point = document.createElement('div');
      point.setAttribute('class', 'point');
      point.setAttribute('style', `top: ${y}px; left: ${x}px`);
    
      point.innerText = ".";
    
      area.appendChild(point);
      
      // atualiza o ultimo ponto
      lastPoint.x = x;
      lastPoint.y = y;
    }, i * 1);
  }
}