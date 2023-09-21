//Variables
const nombre = document.getElementById("text-name");
const botones = document.querySelectorAll('.btn-left');

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
}

//Funcion que detecta que boton tocamos
botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const textoIngresado = nombre.value;
        //Array
        let textos = [
            `Hello ${textoIngresado}! Please confirm if the issue was fixed after the changes that have been made. Kind regards.`,
            `Hi ${textoIngresado}, If no further assistance is needed this ticket will be automatically closed by the end of the day. Regards.`,
            `All Yealink phones have the 'OK' button right in the center of the navigation button (Up, Down, Left, Right), if you press that button once the phone will reveal its IP Address that's something we need to monitor and troubleshoot phones, so please if it happens again, do share with us phone's IP Address. Best Regards.`,
            `Hi ${textoIngresado},
            There is a premium feature called "Selective Call Rejection" that can be added to the Main number (Hunt Group).
            
            Once that feature is added you can create a black list of spam calling numbers, the process is 100% manual, I mean it only block what you add into the list.
            
            I'm not really sure about what exactly is its monthly cost, something like $10, but I can have your sales rep reach out to you so He can explain everything.
            
            Regards.`,
            `Something that always works is to select a random working phone, one that can be disconnected for a few minutes and swap these two devices.`,
            `${textoIngresado}, please take a picture of the MAC Address of your device and send it to us, in case you don't know the MAC address is a 12-digits alphanumeric code printed on a separated label and located on the back of your device,
        
            We'll start investigating the issues reported as soon as we get the phone's MAC.`,
            `Hi ${textoIngresado},
        
            See below IPFone's shipment details:
            
            Attn.: HAlls - IPFone returns
            Address: 1035 NE 125th St 200, North Miami, FL 33161
            Business Hours: Mo to Fr., 9:00 AM to 5:00 PM
            IMPORTANT: Please be so kind to send along a small piece of paper (or a sticker) inside the shipping box writing down Ticket number [XXXXXX].
            
            Kind Regards.`,
            `Hi ${textoIngresado}
            As agreed over the phone I'm sharing a list of items for the shipment of the [Yealink W60BXXX], the one that has its battery damaged/dead:
            
            Address
            Local contact full name
            Local contact cellphone
            Business Hours`,
        ];
        const texto = textos[index];
        crearParrafoEnMiddle(index + 1, texto);
    });
});
