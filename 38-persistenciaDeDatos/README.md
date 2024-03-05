
# Persistencia de datos en el navegador:

## Cookies:

- Aceptamos que la pagina web que estamos navegando acceda a nuestras cookies para almacenar información.
- Para utilizar la información.
- Tienen un tamaño de 4 kilobytes.
- Se guaradan a nivel de navegador.
- Cualquiera de las pestañas que esten abiertas tienen acceso a esa información.
- La caducidad de la información se define en el momento de crear la misma.
- La información se almacena tanto en el navegador como en el propio servidor.
- La información se está intercambiando continuamente con el servidor.
- Es un toquen que esta validando que nosotros estamos registrados en una aplicacion, le mandamos una peticion al servidor y el servidor verifica si el toquen es valido y pertenece a un usuario, en caso de que sea positivo el servidor nos envia la información que estamos solicitando. En cambio si la información no es valida no pasa el chequeo y es una forma segura de trabajar con datos sensibles.

## LocalStorage:

- Cualquiera de las pestañas que esten abiertas tienen acceso a esa información.
- Tienen un tamaño de 10 megas.
- Nunca caduca la información, se elimina a mano.
- Solo se almacenan a nivel de navegador.



## SessionStorage:
- Solo se puede acceder a la información desde la misma pestaña, si se cierra se pierde la información.
- Tienen un tamaño de 5 megas.
- Cuando cerramos la pestaña se elimina la información.
- Solo se almacenan a nivel de navegador.


## Herramientas:
- Desde la consola del navegador accedemos a aplication y nos muestra las opciones de almacenamiento (cookies, localStorage y sessionStorage).
- 
