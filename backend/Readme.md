# PagoPlux Backend API Authentication

### Herramientas Utilizadas

- Node.js v20.x - Express
- Docker -> PostgreSQL
- TypeScript
- pnpm


### Instalación

1. Clonar el repositorio
```bash
    git clone https://github.com/xavii07/pagoplux.git
```
2. Instalar dependencias
```bash
    pnpm install
```
3.Copiar el archivo `.env.template` a `.env` y modificar los valores de las credenciales
4. Opcional: ejetuar el archivo `docker-compose.yml` para levantar la base de datos
```bash
    docker-compose up -d
```
5. Crear la tabla se encuentra en `src/db/query.sql`
6. Ejecutar el comando `pnpm run dev`