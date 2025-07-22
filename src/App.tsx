import { Toaster } from "@/components/ui/toaster"
import { Route, Routes } from 'react-router-dom';
import './globals.css'; // Make sure this is imported
import SignupForm from './_auth/forms/SignupForm';
import Home from './_root/pages/Home';
import { RootLayout } from './_root/RootLayout';
import SigninForm from './_auth/forms/SigninForm';
import AuthLayout from './_auth/AuthLayout';
import { AllUser, CreatePost, EditPost, Explore, PostDetails, Profile, Saved, UpdateProfile } from "./_root/pages";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUser />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />

        </Route>
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;