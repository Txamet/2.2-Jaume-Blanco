# Sprint 2 Entrega 2.2: Función Throttle
# Configuración
Instalar los siguientes módulos en la terminal:
- npm install
- npx tsc

# Test
Realizado con Jest, consiste en comprobar si la función throttle ejecuta la función callback una única vez dentro del intervalo.
Para ejecutar el test, en la carpeta raíz escribir en la terminal:
- npm test

# CLI
Realizado con la interfaz de Readline, que viene integrado en node. Para ejecutarlo:
- npm run throttle

Este programa muestra como afecta la función throttle con un desfase de 1 segundo a la hora ejecutar la función callback. El programa es un contador que al pulsar una tecla suma 1 unidad al número anterior por pantalla.

Al empezar, al pulsar cualquier tecla, aparecerá el número 1 ya que se inicia el contador. 

Durante el intervalo de 1 segundo, cada vez que pulsemos una tecla, no incrementará el contador ya que la función throttle no permite la ejecución del incremento y veremos que se repite el número actual.

Pasado este intervalo se producirá el incremento ya que vuelve a empezar el bucle.  

# Front End
Archivo html incluido en el directorio raíz.
Al pasar por pantalla el cursor del ratón y se observa lo siguiente:
- El contador normal muestra el conteo acumulado de cada vez que se ha desplazado el cursor por la pantalla.
- El contador throttle muestra el conteo acumulado de una unidad por cada segundo de desplazamiento ininterrumpido, es decir, al mover 10 veces seguidas el cursor dentro del intervalo de 1 segundo el contador mostrará sólo 1 movimiento.

Esto ocurre porque la función throttle se ejecuta sólo la primera vez que es invocada dentro del intervalo de tiempo estipulado en la misma función (de 1 segundo en este ejercicio), y así sucesivamente.
