# Practica00-ConsumodeAPIsenlanube

### Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a desarrollar


### Generar una llave para consumir los servicios web de la API de OMDb.
![image](https://user-images.githubusercontent.com/33675679/79171906-da692600-7db8-11ea-87fc-4d0bd7b5987a.png)

En la página de OMDb nos permite generar la key, mediante un correo en el cuál tenemos que verificar, esto nos sirve 
para realizar las peticiones.

### Crear un repositorio en GitHub con el nombre “Practica00 – Consumo de APIs en la nube”

![image](https://user-images.githubusercontent.com/33675679/79172077-55cad780-7db9-11ea-9db5-f33e00adb2d2.png)

Se crea el repositorio con el cual trabajaremos con el nombre que se nos especificó.

### Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar películas y toda su
información de la base de datos de OMDb. 

• La aplicación Web debe permitir buscar la información de las películas tanto por el nombre (listado) como
por el código (id) de cada película. 

![image](https://user-images.githubusercontent.com/33675679/79173949-c45e6400-7dbe-11ea-86e9-532352cc642f.png)

![image](https://user-images.githubusercontent.com/33675679/79173948-bf99b000-7dbe-11ea-8b18-28bd9342bab5.png)

Se muestra la cuando se realiza la búsqueda por el nombre de la película en la interfaz podemos observar que nos permite acceder 
a más información de la película dando click en MORE y en esta parte realizamos la búsqueda por id para poder acceder a la 
información que contiene la misma.

• Además, se deberá visualizar toda la información disponible (plot=full) de la base de datos de películas. 

![image](https://user-images.githubusercontent.com/33675679/79174169-7bf37600-7dbf-11ea-971b-488b942d39d7.png)

La búsqueda de las películas se realiza con plot=full para que nos devuelta todas las películas que están dentro de la base accediendo 
al total y no 10 resultados que obtenemos sin asignar este valor.

• También, la aplicación deberá presentar un máximo de 5 películas por búsqueda. Es decir, si la búsqueda retorna más de 5 
películas se deberá paginar los resultados. 

![image](https://user-images.githubusercontent.com/33675679/79174446-5dda4580-7dc0-11ea-8655-fe8e8d6f994f.png)

La paginación se realiza en tres páginas, el atributo de OMDb page nos devuelve una página con 10 resultados en esta 
sección mostramos la paginación cada 3 páginas hasta llegar al total de resultados.



## CONCLUSIONES
Se realiza la manipulación de objetos JSON y el consumo de APIs, mediante consultas a una base de datos.
OMDb es una base de datos que contiene objetos JSON cargados sobre peliculas, y dentro de esta las búsquedas nos devuelven
muchos datos, pero para acceder a una película en particular debemos acceder con el imdbID


