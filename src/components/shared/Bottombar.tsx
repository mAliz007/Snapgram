import { bottombarLinks } from "@/_root/constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Bottombar = () => {
  const {pathname}= useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
             <Link
             key={link.label}
              to={link.route}
               className={`${isActive && 'bg-primary-500 rounded-[10px]'} flex-center flex-col gap-1 p-2 transition`}
              >
                <img src={link.imgURL}
                alt={link.label}
                className={`${isActive && 'invert-white'}`}
                width={16}
                height={16}
                ></img>
                <p className="tiny-medium text-light-1">{link.label}</p>
              </Link>
              
            )
            } )
}
    </section>
  )
}

export default Bottombar