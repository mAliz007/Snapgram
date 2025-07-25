
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center ">
          <img src="/assets/images/logo.svg" width={130} height={35} />
        </Link>

        <div className="flex gap-4 ">
          <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" width={20} height={20} alt="logout" />

          </Button>
          <Link to={`/profile/${user.username}`} className="flex-center gap-3">
            <img src={user.imageUrl || "/assets/icons/profile-placeholder.svg"} width={30} height={30} alt="profile" className="-8 w-8 rounded-full" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
