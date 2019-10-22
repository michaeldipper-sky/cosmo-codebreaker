var Cipher = {};

Cipher.decode = function(text) {
  var map = {
    a: "q",
    b: "w",
    c: "e",
    d: "r",
    e: "t",
    f: "y",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
    '.': "."
  };

  // Decode text here

  return text;
};

let ciphertext = ""; // Insert provided ciphertext here

document.getElementById("solution").innerHTML = Cipher.decode(ciphertext);