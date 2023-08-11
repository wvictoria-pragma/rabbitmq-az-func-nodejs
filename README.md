## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

## Pre-Requisitos 📋

Software requerido

```
NodeJS >= 18.X
NPM >= 9.X
```

## Instalación 🔧

Para ejecutar un entorno de desarrollo

Previamente ejecutar el comando en la terminal para descargar "node_modules" para el funcionamiento del proyecto

```
 npm install
```

## Ejecución Azure Functions ⚡

Para ejecutar una Azure Functions localmente se debe ejecutar el siguiente comando:

```
func host start
```

## RabbitMQ 🐰

Comando para levantar un contenedor de RabbitMQ

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management
```

Para ingresar al portal web de RabbitMQ

```
http://localhost:15672
```