const signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
  });
  const submit = document.getElementById('submit-btn');
  const clear = document.getElementById('clear-btn');
  
  submit.addEventListener('click', function (event) {
    const data = signaturePad.toDataURL('image/png');
  
  // Send data to server instead...
    window.open(data);
  });
  
  clear.addEventListener('click', function (event) {
    signaturePad.clear();
  });