
import { useAuth } from '../../routes/auth';
import './style.css'

export function ProtectedPage() {
    const auth = useAuth()
    return <div>
        <h3>Protected. You are logged in</h3>
        <button onClick={() => {
            auth.signout()
        }}>Log Out</button>
    </div>;
}