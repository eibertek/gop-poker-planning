Poker planning

Datos:
    Tickets
    Poker
    Pod
    Users
Como funciona

Debe haber un servicio o un host corriendo (Scrum Master)

EL Scrum master activa una planning con:
Tickets: Array de elementos donde hay un 
    ticket url, 
    estimated points,
    Assigned,

Al activar una plannign, se escriben que tickets se van a ver
y se empieza el poker
se elije el ticket en el poker y el contador empieza a marcar
El SM tiene la posibilidad de parar el contador o para el poker en cualquier momento
Cada usuario estima el poker con un numero (determinado por el SM antes de empezar el poker) y cuando cada usuario voto. el poker da las estimaciones y el promedio
Si asi lo require, el SM puede optar por elegir la estimacion o correr nuevamente el Poker, donde el punto anterior se repite
Una vez terminado el poker, el ticket queda estimado con ese numero.
una vez se termina la planning, aparece una tabla con los tickets y las estimaciones.

Se podria linkear la app con JIRA directamente
https://jira.atlassian.com/browse/JRACLOUD-67539

Componentes

new-poker-planning
    Date
    Tickets []
    Pod / Users
    ET Type [ fibbonaci, secuential, custom]
    custom Type: [d1, d2, d3...]
    ET format: [hours, points, days, weeks]
    
    Start Button
    Cancel Button

poker-game
    Ticket number
    Description
    [User ] ---- [ Vote ]
    [User ] ---- [ Vote ]
    [User ] ---- [ Vote ]
    [User ] ---- [ Vote ]

    [Average ] ---- [ Vote Average ]

    Start Button
    Pause Button
    Stop Button
    Save Button



Servicios:

poker-planning
    POST - crea un nuevo poker plannign
    GET - muestra los datos del pokerplanning

poker-game/{planningId}/{ticket}
    GET- status del juego
    POST - creacion dle juego
    PUT - actualizacion (estimacion de usuarios, etc)
    
