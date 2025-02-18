# Scraping Web

Este proyecto permite realizar scraping web de manera asíncrona desde el cliente utilizando XPath. El usuario ingresa una URL y un XPath, y el contenido extraído se muestra en la página web.

## Instrucciones de instalación y uso

### Requisitos previos

Asegúrate de tener lo siguiente instalado:

- [Node.js](https://nodejs.org) (para la compilación de Tailwind CSS)
- [Tailwind CSS](https://tailwindcss.com) (se utiliza para los estilos de la página)

### Pasos para configurar el proyecto localmente

1. **Clonar el repositorio**

   Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/scraping-web.git
   
# Instalar dependencias
# Dirígete al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias de Tailwind CSS:

cd scraping-web
npm install

# Compilar Tailwind CSS
# Si aún no has compilado Tailwind CSS, asegúrate de que esté configurado en tu proyecto. Si estás usando la configuración predeterminada de Tailwind, puedes compilarlo con el siguiente comando:

npx tailwindcss build src/styles.css -o output.css

# Esto generará el archivo output.css que se enlaza en el archivo HTML.

# Si te da problemas durante el proceso de instalación prueba a installar una versión diferente como esta: "npm install tailwindcss@3". 

# Abrir el proyecto en el navegador
# Una vez que las dependencias estén instaladas y Tailwind CSS esté compilado, abre el archivo index.html en tu navegador. 
# Esto debería mostrarte la interfaz donde puedes ingresar la URL y el XPath para realizar el scraping.

open index.html  # o abre el archivo directamente en tu navegador

# Uso
# 1. Ingrese la URL: Escribe la URL del sitio web del cual deseas hacer scraping. Ejemplo URL: "https://es.wikipedia.org/wiki/Wikipedia:Acerca_de".
# 2. Ingrese el XPath: Escribe el XPath del contenido que quieres extraer de la página web. Ejemplo XPath: "//*[@id="mw-content-text"]/div[1]/p[1]".
# 3. Hacer Scraping: Haz clic en el botón "Realizar Scraping" para comenzar el proceso. Los resultados se mostrarán debajo del formulario. El resultado debería ser: 

"Wikipedia en español es la versión en español de Wikipedia, un proyecto de enciclopedia web multilingüe de contenido libre basado en un modelo de edición abierta. Wikipedia crece cada día gracias a la participación de gente de todo el mundo, siendo el mayor proyecto de recopilación de conocimiento jamás realizado en la historia de la humanidad."

# Consideraciones
# - El scraping se realiza mediante fetch() y XPath, por lo que es importante asegurarse de que la URL que ingresas sea accesible sin restricciones de CORS.
# - El proyecto no tiene un backend; todo el procesamiento se realiza en el cliente, por lo que el navegador debe permitir las peticiones CORS a la URL.

