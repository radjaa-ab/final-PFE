// resources/js/Pages/Welcome.tsx
import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

const Welcome = ({ canLogin, canRegister, laravelVersion, phpVersion }: any) => {
    return (
        <div>
            <h1>Welcome to Laravel</h1>
            <p>Laravel Version: {laravelVersion}</p>
            <p>PHP Version: {phpVersion}</p>
            {canLogin && <Link href="/login">Login</Link>}
            {canRegister && <Link href="/register">Register</Link>}
        </div>
    );
};

export default Welcome;
