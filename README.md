# workshop-idwm02
# Backend
## Prerequisitos
Antes de instalar y ejecutar la API del proyecto, asegúrate de tener el siguiente software instalado:

1. .NET 7: Verifica si tienes .NET 7 instalado ejecutando el siguiente comando en tu terminal:

```bash
   dotnet --version
```
Si .NET 7 no está instalado, consulta la documentación oficial para obtener instrucciones de instalación. Puedes encontrar la guía de instalación en [Install .NET 7](https://dotnet.microsoft.com/download/dotnet/7.0).

2. Microsoft SQL Server: Asegúrate de tener Microsoft SQL Server instalado y en ejecución en tu máquina. Si no está instalado, instálalo según tu sistema operativo y sigue las instrucciones de configuración. Puedes encontrar la guía de instalación en [Install Microsoft SQL Server](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver15).

## Instalación 
Para instalar y ejecutar correctamente siga los siguientes pasos:
1. Clona el reposotiorio https://github.com/matiias23/workshop-idwm02.git

2. Navega hasta el repositiorio del servidor
```bash
   cd backend
```
3. Restaurar dependencias: Antes de ejecutar el proyecto, restaure las dependencias del proyecto ejecutando el siguiente comando en la terminal:
```bash
   dotnet restore
```
   Este comando descargará e instalará todos los paquetes y dependencias necesarios para el proyecto.

4. Configuración Database: Cree un archivo llamado appsettings.Development.json en la raiz, e ingrese los siguiente datos.
```json
   {
     "Logging": {
       "LogLevel": {
         "Default": "Information",
         "Microsoft.AspNetCore": "Information"
       }
     },
     "ConnectionStrings": {
       "DefaultConnection": "Server=SERVER_NAME; Database=DATABASE_NAME; Trusted_Connection=True; User ID=EXAMPLE_USER_ID; Password=DATABASE_PASSWORD;"
     },
     "TokenKey": "super clave secreta"
   }
```
y reemplaza `SERVER_NAME`, `DATABASE_NAME`, `EXAMPLE_USER_ID`, `DATABASE_PASSWORD` con tu actual información.

5. Ejecuta el proyecto: Escriba el siguiente comando en la terminal:
```bash
dotnet run
```
## Pruebas con Postman
Para probar las funcionalidades de la API, puede utilizar Postman.
Importe el archivo "DumboApp.postman_collection.json" ubicado dentro de la carpeta "backend". 
Esta colección contiene solicitudes preconfiguradas que puede utilizar para interactuar con la API.

# Frontend
## Prerequisitos
Antes de continuar con la instalación, asegúrese de tener NPM (Node Package Manager) instalado en su máquina. NPM es un administrador de paquetes para JavaScript y viene incluido con Node.js. Puede verificar si NPM está instalado ejecutando el siguiente comando en su terminal:
```bash
npm -v
```

Si NPM no está instalado, puede seguir la documentación oficial de NPM para obtener instrucciones de instalación. Consulte la [NPM Installation Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) para obtener instrucciones detalladas sobre cómo instalar NPM.

Antes de usar Angular CLI, y verificar tener Node.js y npm (Node Package Manager) instalados en tu sistema, ya que Angular CLI depende de ellos. Puedes instalar Angular CLI globalmente usando el siguiente comando:
```bash
npm install -g @angular/cli
```
Después de instalar Angular CLI, tendrás acceso a los comandos mencionados posteriormente para facilitar el desarrollo de aplicaciones Angular.

## Instalación
1. Navega hasta el repositiorio del cliente,desde la raiz:
```bash
   cd frontend
```
2. Instale las dependencias del proyecto con el siguiente comando: 
```bash
   npm install
```
3. Una vez instaladas las dependencias, puede compilar el proyecto ejecutando el siguiente comando:
```bash
   ng serve
```

   Esto iniciará el servidor de desarrollo y podrá acceder al cliente web abriendo su navegador y navegando a http://localhost:4200.

   ¡Eso es todo! Ahora podrá disfrutar de la aplicación en su máquina local.