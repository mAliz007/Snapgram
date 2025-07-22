
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import {  useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "@/_root/constants";
import { link } from "fs";
import { INavLink } from "@/types";

const Leftsidebar = () => {
  const {pathname} = useLocation();
  const {mutate: signOut , isSuccess} = useSignOutAccount();
  const navigate = useNavigate();
  const {user} =useUserContext();

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  },[isSuccess]);

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
         <Link to="/" className="flex gap-3 items-center ">
          <img src="/assets/images/logo.svg" width={170} height={35} />
        </Link>


        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
        <img src={user.imageUrl || "/assets/images/profile-placeholder.svg"} width={30} height={30} alt="profile" className="h-15 w-15 rounded-full" />
        <div className="flex flex-col">
          <p className="body-bold">
            {user.name}
          </p>
          <p className="small-regular text-gray-500">
            @{user.username}
            </p>
        </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li key={link.label} className={`leftsidebar-link group  ${isActive && 'bg-primary-500'}`}>
              <NavLink
              to={link.route}
               className="flex gap-4 items-center p-4"
              >
                <img src={link.imgURL}
                alt={link.label}
                className={`group-hover:invert-white ${isActive && 'invert-white'}`}
                ></img>
                {link.label}
              </NavLink>
              </li>
            )
            } )
}
          </ul>
      </div>

      <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut()}> 
              <img src="/assets/icons/logout.svg" width={20} height={20} alt="logout"  />
              <p className="small-medium lg:base-medium">Logout</p>
                

            </Button>
    </nav>
  )
}

export default Leftsidebar