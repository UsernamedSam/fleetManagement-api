const { Pool } = require('pg');
//config detalles de conexion
const pool = new Pool({
    user: 'Karen Subia',               // tu usuario PostgreSQL
    host: 'http://localhost:3000/',         // host (en tu máquina local)
    database: 'fleet_management',     // nombre de tu base de datos
    password: '1234',                 // contraseña de tu usuario PostgreSQL
    port: 5432,                       // el puerto por defecto de PostgreSQL
  });
  