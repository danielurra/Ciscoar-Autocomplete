//Variables
const nombre = document.getElementById("text-name");
const nombre2 = document.getElementById("text2");
const customer = document.getElementById("text3");
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
        const macAdress = nombre2.value;
        const customerName = customer.value;
        //Array
        let textos = [
            `Hi ${textoIngresado}, The first step to make a phone able to work from home is to whitelist your home's Public IP address.
            Please open below website and let me know the IP Address shown:
            https://ipchicken.com
            The computer you will use to open above website must be connected to the same network your phone is connected, and please do not
            open your work VPN or any other VPN.
            `,
            `Hi ${textoIngresado}, If no further assistance is needed this ticket will be automatically closed by the end of the day. Regards.`,
            `All Yealink phones have the 'OK' button right in the center of the navigation button (Up, Down, Left, Right), if you press that button once the phone will reveal its IP Address`,
            `Hi ${textoIngresado},
            There is a premium feature called "Selective Call Rejection" that can be added to the Main number (Hunt Group).
            
            Once that feature is added you can create a black list of spam calling numbers, the process is 100% manual, I mean it only block what you add into the list.
            
            I'm not really sure about what exactly is its monthly cost, something like $10, but I can have your sales rep reach out to you so He can explain everything.
            
            Regards.`,
            `Something that always works is to select a random working phone (make sure you can make and receive calls), one that can be disconnected for a few minutes and swap these two devices.
            most of the times a non-working phone becomes a working one just by changing desks.
            If phone works, then please work with your IT personnel to make the original location be ready for the phone.`,
            `${textoIngresado}, please take a picture of the MAC Address of your device and send it to us, in case you don't know the MAC address is a 12-digits 
            alphanumeric code printed on a separated label and located on the back of your device.
            For wireless devices you'll find the MAC address on the base (the DECT device your wireless phone is paired with)`,
            
            `Hi ${textoIngresado}, See below IPFone's shipment details:             
            Attn.: HAlls - IPFone returns
            Address: 1035 NE 125th St 200, North Miami, FL 33161
            Business Hours: Mo to Fr., 9:00 AM to 5:00 PM
            IMPORTANT: Please be so kind to send along a small piece of paper (or a sticker) inside the shipping box writing down Ticket number ${macAdress}.
            
            Kind Regards.`,
            `Hi ${textoIngresado},
            As per my Equipment department your phone with MAC:${macAdress} is currently elegible for replacement as it is still under warranty.
            Now, for us to be able to send the replacement device to your office, please confirm below data:
            - Address
            - Local contact full name
            - Local contact cellphone
            - Business Hours`,

            `tcpdump -s0 -i eth0.${textoIngresado} -vv host ${macAdress}`,

            `#${textoIngresado} -- ${macAdress} - ${customerName} - SOCKS proxy`,

            `whois ${macAdress} | grep Orga`,
            
            `${macAdress}@efax.ipfone.com`,

            `Hi ${textoIngresado}, I'm currently working with my internal team, I'll post any update here. Regards.`,

            `mysqldump -u root -p ${textoIngresado} > ${textoIngresado}-bkp.sql`,
                        
            `tar -cvzf /var/www/${textoIngresado}-bkp.tar.gz *`,
            
            `mkdir "${textoIngresado}"\\"${macAdress}"`,

            `CREATE DATABASE ${textoIngresado} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
        ];

        const texto = textos[index];
        crearParrafoEnMiddle(index + 1, texto);
    });
});
