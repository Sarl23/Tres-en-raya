## IMPLEMENTACIÓN DE AGENTES INTELIGENTES
          ORIENTADO AL JUEGO TRES EN RAYA 
### Inteligencia computacional
##### Julian David González Sanchez
##### Sergio Andrés Rojas León
##### Juan José Gutiérrez Leguizamon
#### OBJETIVOS.
Aplicar conocimientos del algoritmo Minimax con poda α-β en la implementación de dos agentes inteligentes para jugar tres en raya (famoso juego del triqui), desarrollando a su vez un software en lenguaje Perl y respaldando con una interfaz html.

#### DESCRIPCIÓN.
Se desea desarrollar un agente inteligente para un sistema de software enfocado al juego tres en raya, que permita monitorear las jugadas hechas por el jugador, como las jugadas de la máquina y de ambos a su vez, además las jugadas disponibles que se jugarán. El programa se debe diseñar para que un usuario juegue con la máquina (computadora). Implementando vectores de movimientos tanto de usuarios, máquina, jugadas de ambos y movimientos disponibles, antes de realizarse la primera jugada se debe inicializar cada elemento de los vectores en cero o vacío. Cada jugada consistirá en marcar el número de filas y columnas donde se quiera jugar usando vectores y a su vez consultar en un dataset las jugadas ya realizadas y ganadas. El jugador 1 se le asignará una marca de tipo “x” y a la máquina una marca de tipo ”o”, para diferenciar la jugada realizada por los dos contrincantes. Después de cada jugada se debe mostrar en pantalla la matriz del juego. Cuando termine la partida se debe mostrar un mensaje que indique si hubo un ganador o un empate.

#### REQUISITOS FUNCIONALES.
El sistema debe permitir:
- Aprobar cada jugada realizada por su diferente agente.
- El usuario debe ser el primero en jugar.
- Validar un posible empate.
- Validar el quién ganó del juego.
#### REQUISITOS NO FUNCIONALES.
- Las visualizaciones se deben presentar usando entorno web.
- Se deben implementar el uso de agentes inteligentes.
- Su desarrollo base debe ser implementado en lenguaje Perl.
- Es necesario ejecutar el sistema con jugadas ya hechas en la implementación del aprendizaje de máquina.
### ¿Qué hay de nuevo?

- Ya no está en lenguaje PERL, se paso lenguaje Python

#### Flask
Es un marco o "micro" Framework escrito en Python, ligero de aplicación web WSGI (Web Server Gateway Interface), Permite escalabilidad de aplicaciones complejas. Este framework depende del motro de plantillas denominado Jinja (permite insertar datos procesados y texto predeterminado dentro de un documento de texto) y del kit de herramientas Werkzeug (Proporciona clases y funciones útiles para cualquier aplicación WSGI) 

#### Datos a tener en cuenta.
Al  momento de oprimir un botón, hacemos un petición POST enviando los datos a continuación en formato JSON.

- El botón oprimido (número)
- Movimientos del usuario
- Movimientos de la máquina
- Movimientos realizados (ambos jugadores)
- Movimientos disponibles



