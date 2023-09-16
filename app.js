const nombre = document.getElementById("text-name").value;

const textos = [
    "Hello [CUSTOMER]! Please confirm if the issue was fixed after the changes that have been made. Kind regards",
    "Hi [CUSTOMER], If no further assistance is needed this ticket will be automatically closed by the end of the day. Regards.",
    "All Yealink phones have the 'OK' button right in the center of the navigation button (Up, Down, Left, Right), if you press that button once the phone will reveal its IP Address that's something we need to monitor and troubleshoot phones, so please if it happens again, do share with us phone's IP Address. Best Regards.",
    "",
    "",
    "",
    "",
    "",
]

const miBoton = document.getElementById("btn-1");

miBoton.addEventListener('click', () => {
    alert('¡Hiciste clic en el botón!');
});