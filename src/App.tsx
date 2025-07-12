
import { Route, Routes } from 'react-router-dom';
import './globals.css'; // Make sure this is imported
import SignupForm from './_auth/forms/SignupForm';
import Home from './_root/pages/Home';
import { RootLayout } from './_root/RootLayout';
import SigninForm from './_auth/forms/SigninForm';

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
        <Route path="/sign-in" element={<SigninForm />}/>
        <Route path="/sign-up" element={<SignupForm />}/>
        </Route>
        <Route element={<RootLayout />}>
        <Route index element={<Home />}/>
        </Route>
      </Routes>

    </main>
  );
}

export default App;