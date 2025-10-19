function f(x, expression) {
    try {
      return eval(expression);
    } catch (e) {
      return NaN;
    }
  }
  
  function dichotomie(longueur, expression) {
    let a = 0;
    let b = 1;
    let output = "";
  
    if (f(a, expression) * f(b, expression) >= 0) {
      output += "Erreur : f(a) * f(b) >= 0. Choisissez une autre fonction ou intervalle.\n";
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
  
    let racine = (a + b) / 2;
    output += `\nRésultat approché : ${racine}`;
    return output;
  }
  
  function calculer() {
    const expression = document.getElementById("fonction").value;
    const longueur = parseFloat(document.getElementById("longueur").value);
    const outputDiv = document.getElementById("output");
  
    if (!expression || isNaN(longueur)) {
      outputDiv.textContent = "Veuillez entrer une fonction valide et une longueur.";
      return;
    }
  
    const result = dichotomie(longueur, expression);
    outputDiv.textContent = result;
  }
  
