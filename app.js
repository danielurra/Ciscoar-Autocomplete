//Variables
const nombre = document.getElementById("text-name");
const botonNombre = document.getElementById("btn-name");
const miBoton1 = document.getElementById("btn-1");
const miBoton2 = document.getElementById("btn-2");
const miBoton3 = document.getElementById("btn-3");
const miBoton4 = document.getElementById("btn-4");
const miBoton5 = document.getElementById("btn-5");
const miBoton6 = document.getElementById("btn-6");
const miBoton7 = document.getElementById("btn-7");
const miBoton8 = document.getElementById("btn-8");

//Funcion para mandar el nombre con el boton (click)
botonNombre.addEventListener('click', () => {
    const textoIngresado = nombre.value;
    if(textoIngresado){
        console.log(textoIngresado)
    }else{
        alert("No pusiste nada papu");
    }
    nombre.value = '';
});

//Funcion para enviar el nombre con un enter
nombre.addEventListener('keydown', function(event) {
    // Verifica si la tecla presionada es "Enter" (código de tecla 13)
    if (event.keyCode === 13) {
      // Obtiene el valor del input
      const nombre2 = nombre.value;
      // Muestra el nombre en la consola
      console.log(nombre2);
      // Limpia el input
      nombre.value = '';
    }
  });

//Funcion para crear parrafo y borrar el anterior

function crearParrafoEnMiddle(numeroBoton, texto) {
    const nuevoParrafo = document.createElement('h1');
    nuevoParrafo.textContent = texto;
    nuevoParrafo.classList.add('center');
  
    const middleDiv = document.getElementById('middle');

    const parrafoAnterior = middleDiv.querySelector('h1.center');

    if (parrafoAnterior) {
        middleDiv.removeChild(parrafoAnterior);
    }

    middleDiv.appendChild(nuevoParrafo);
  
    console.log(`Párrafo creado por el botón ${numeroBoton}`);
}

//Funcion que detecta que boton tocamos
const botones = document.querySelectorAll('.btn-left');

botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const texto = textos[index]; // Suponiendo que tengas un array de textos
        crearParrafoEnMiddle(index + 1, texto);
    });
});

//Array
const textos = [
    `Hello ${nombre.value}! Please confirm if the issue was fixed after the changes that have been made. Kind regards.`,
    `Hi ${nombre.value}, If no further assistance is needed this ticket will be automatically closed by the end of the day. Regards.`,
    `All Yealink phones have the 'OK' button right in the center of the navigation button (Up, Down, Left, Right), if you press that button once the phone will reveal its IP Address that's something we need to monitor and troubleshoot phones, so please if it happens again, do share with us phone's IP Address. Best Regards.`,
    `Hi ${nombre.value},
    There is a premium feature called "Selective Call Rejection" that can be added to the Main number (Hunt Group).
    
    Once that feature is added you can create a black list of spam calling numbers, the process is 100% manual, I mean it only block what you add into the list.
    
    I'm not really sure about what exactly is its monthly cost, something like $10, but I can have your sales rep reach out to you so He can explain everything.
    
    Regards.`,
    `Something that always works is to select a random working phone, one that can be disconnected for a few minutes and swap these two devices.`,
    `${nombre.value}, please take a picture of the MAC Address of your device and send it to us, in case you don't know the MAC address is a 12-digits alphanumeric code printed on a separated label and located on the back of your device,

    We'll start investigating the issues reported as soon as we get the phone's MAC.`,
    `Hi ${nombre.value},

    See below IPFone's shipment details:
    
    Attn.: HAlls - IPFone returns
    Address: 1035 NE 125th St 200, North Miami, FL 33161
    Business Hours: Mo to Fr., 9:00 AM to 5:00 PM
    IMPORTANT: Please be so kind to send along a small piece of paper (or a sticker) inside the shipping box writing down Ticket number [XXXXXX].
    
    Kind Regards.`,
    `Hi ${nombre.value}
    As agreed over the phone I'm sharing a list of items for the shipment of the [Yealink W60BXXX], the one that has its battery damaged/dead:
    
    Address
    Local contact full name
    Local contact cellphone
    Business Hours`,
];

console.log(textos[1]);