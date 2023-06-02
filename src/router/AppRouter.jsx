import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {
  
  const authStatus = 'not-authenticate'
  
  return (
    <Routes>
        {
          (authStatus === 'not-authenticated')
            ? <Route path="/auth/*" element={ <LoginPage /> } />
            : <Route path="/*" element={ <CalendarPage /> } />
        }
    </Routes>
  )
}
