let divBox = document.createElement("div");
divBox.className = "div-box";
divBox.style.position = "absolute";
divBox.style.width = "400px";
divBox.style.top = "40%";
divBox.style.left = "35%";
divBox.style.padding = "1px 50px";
divBox.style.background = "#FEFFFF";
divBox.style.boxShadow = "2.5px 2.5px 2.5px 2.5px lightGrey";
divBox.innerHTML = `<p style='text-align:center; color:#3F3F3F; font-size:25px;
font-family:font-family:Arial, Helvetica, sans-serif; font-weight:bold;'>Press any keyboard key</p>`;
document.body.appendChild(divBox);

document.body.addEventListener("keydown", (press) => {
  let keyCode = document.createElement("p");
  keyCode.style.position = "absolute";
  keyCode.style.width = "100px";
  keyCode.style.marginTop = "50px";
  keyCode.style.top = "100%";
  keyCode.style.left = "25%";
  keyCode.style.padding = "50px 50px";
  keyCode.style.background = "#FEFFFF";
  keyCode.style.textAlign = "center";
  keyCode.style.color = "#5BBC7A";
  keyCode.style.fontWeight = "bold";
  keyCode.style.fontFamily = "Arial, Helvetica, sans-serif";
  keyCode.style.fontSize = "100px";
  keyCode.style.boxShadow = "2.5px 2.5px 2.5px 2.5px lightGrey";

  if (press.keyCode === 32) {
    divBox.innerHTML = `<p style='text-align:center; color:#3F3F3F; font-size:25px;
        font-family:font-family:Arial, Helvetica, sans-serif; font-weight:bold;'>You pressed <span style='color:#5BBC7A; font-size:40px;'>Space</span></p>`;

    keyCode.innerHTML = `${press.keyCode}`;
    divBox.appendChild(keyCode);
    document.body.appendChild(divBox);
  } else {
    if (press.keyCode > 99) {
      divBox.innerHTML = `<p style='text-align:center; color:#3F3F3F; font-size:25px;
        font-family:font-family:Arial, Helvetica, sans-serif; font-weight:bold;'>You pressed <span style='color:#5BBC7A; font-size:40px;'> ${press.key}</span></p>`;
      keyCode.style.textIndent = "-.35em";

      keyCode.innerHTML = `${press.keyCode}`;
      divBox.appendChild(keyCode);
      document.body.appendChild(divBox);
    } else {
      divBox.innerHTML = `<p style='text-align:center; color:#3F3F3F; font-size:25px;
        font-family:font-family:Arial, Helvetica, sans-serif; font-weight:bold;'>You pressed <span style='color:#5BBC7A; font-size:40px;'> ${press.key}</span></p>`;

      keyCode.innerHTML = `${press.keyCode}`;
      divBox.appendChild(keyCode);
      document.body.appendChild(divBox);
    }
  }
});
