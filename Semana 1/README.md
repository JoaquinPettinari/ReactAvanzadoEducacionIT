# App de noticias
1. Realizar una página web de noticias. En principio hardcodear la información de
noticias, sin ninguna fuente externa real. El proyecto debe tener redux incorporado
2. Utilizando alguna API externa (sugerencia newsapi o mockapi) realizar utilizando la
API de fetch la llamada correspondiente para poder obtener toda la información
3. Hacer lo mismo pero ahora utilizando la librería axios. Recuerden que todo tiene que
estar conectado con el store principal
4. Agregar una funcionalidad nueva, el usuario debería ahora poder apretar en un botón
para indicar que una noticia ya la leyó y por lo tanto que salga y no aparezca de la
página. Si se utilizó newsapi, esto no va a ser posible debido a que no podemos
guardar esa información, en cuyo caso podemos lograr simularla o guardarla
internamente en el estado del componente)
5. Queremos ahora lograr loguear todas las acciones que el usuario realiza en la página.
Para esto tenemos que crear un middleware de redux que nos ayude.
6. Cuando una noticia es seleccionada como ya leída, tiene que desaparecer de la
página con una animación. Para esto crearemos un middleware el cual cuando se
recibe el key “delay” (con su respectivo valor en milisegundos) retrasados el dispatch
de esa acción.
7. Incorporar redux-thunk a nuestro proyecto. Realizar las llamadas asíncronas y el
retraso para la animación utilización react-thunk (sugerencia: quitar todos los
middlewares creados para evitar problemas de coordinación con thunk)