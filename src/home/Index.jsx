import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React - CRUD con React Hook para HelloAuto</h1>
            <p>Creacion de un Crud basico para la gestion de Usuarios, estos tiene datos tipo: email. password. Rol.</p>
            <p><Link to="users">&gt;&gt; Administración de Usuarios</Link></p>
        </div>
    );
}

export { Home };