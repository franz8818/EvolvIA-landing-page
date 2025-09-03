const ns = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(ns, "svg");
svg.setAttribute("viewBox", "0 0 400 400");
svg.setAttribute("width", "400");
svg.setAttribute("height", "400");

// Definimos un gradiente
const defs = document.createElementNS(ns, "defs");
const grad = document.createElementNS(ns, "linearGradient");
grad.id = "grad";
grad.setAttribute("x1", "0%");
grad.setAttribute("y1", "0%");
grad.setAttribute("x2", "100%");
grad.setAttribute("y2", "0%");

[["0%", "#21ecec"], ["100%", "transparent"]].forEach(([offset, color]) => {
  const stop = document.createElementNS(ns, "stop");
  stop.setAttribute("offset", offset);
  stop.setAttribute("stop-color", color);
  grad.appendChild(stop);
});

defs.appendChild(grad);
svg.appendChild(defs);

// Grupo centrado
const g = document.createElementNS(ns, "g");
g.setAttribute("transform", "translate(200,200)");

for (let i = 0; i < 60; i++) {
  const circle = document.createElementNS(ns, "circle");
  const r = 50 + i * 2;
  const angle = i * 6;
  const opacity = 1 - i / 80;
  circle.setAttribute("r", r);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "url(#grad)");
  circle.setAttribute("stroke-opacity", opacity);
  circle.setAttribute("stroke-width", "1");
  circle.setAttribute("transform", `rotate(${angle})`);
  g.appendChild(circle);
}

svg.appendChild(g);

// Texto
const text = document.createElementNS(ns, "text");
text.setAttribute("x", "200");
text.setAttribute("y", "210");
text.setAttribute("text-anchor", "middle");
text.setAttribute("font-family", "Montserrat, sans-serif");
text.setAttribute("font-size", "36");
text.setAttribute("fill", "#21ecec");
text.setAttribute("font-weight", "bold");
text.textContent = "Manifiesto";
const tspan = document.createElementNS(ns, "tspan");
tspan.setAttribute("x", "200");
tspan.setAttribute("dy", "1.2em");
tspan.textContent = "Evolutivo";
text.appendChild(tspan);

svg.appendChild(text);

// Lo ponemos en el contenedor
document.getElementById("demo").appendChild(svg);
