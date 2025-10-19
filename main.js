function f(x, expression) {
  try {
    return eval(expression);
  } catch (e) {
    return NaN;
  }
}

function dichotomie(a, b, longueur, expression) {
  let output = "";

  if (f(a, expression) * f(b, expression) >= 0) {
    output += "Erreur : f(a) * f(b) >= 0.\nChoisissez un intervalle où f change de signe.\n";
    return output;
  }

  while ((b - a) > longueur) {
    let m = (a + b) / 2;
    if (f(m, expression) * f(a, expression) < 0) {
      b = m;
    } else {
      a = m;
    }
    output += `Nouvel intervalle: [${a.toFixed(6)}, ${b.toFixed(6)}]\n`;
  }

  return output;
}

function calculer() {
  const expression = document.getElementById("fonction").value;
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const longueur = parseFloat(document.getElementById("longueur").value);
  const outputDiv = document.getElementById("output");

  if (!expression || isNaN(a) || isNaN(b) || isNaN(longueur)) {
    outputDiv.textContent = "Veuillez entrer une fonction, un intervalle (a, b) et une longueur valides.";
    return;
  }

  const result = dichotomie(a, b, longueur, expression);
  outputDiv.textContent = result;
}