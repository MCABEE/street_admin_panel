import { useEffect, useContext, FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authContext } from "@/context/auth.context";
import useToken from "@/hooks/useToken";

// === components === //
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

// === Assets === //
import logo from "@/assets/logo.png";
import businessCollab from "@/assets/business_collaboration.png";

export default function Login() {
  const { auth, setAuth } = useContext(authContext);
  const { setToken } = useToken();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToken("token");
    setAuth(true);
    navigate("/");
  };

  useEffect(() => {
    if (auth) {
      location.state?.from ? navigate(location.state.from) : navigate("/");
    }
  }, [auth, location.state?.from, navigate]);

  return (
    <>
      <section className="max-w-screen-xl mx-auto sm:px-5 px-3 grid min-h-screen">
        <div className="bg-white my-12 py-10 rounded-[30px] grid md:grid-cols-2 gap-5">
          <div className="hidden md:flex flex-col justify-center items-center">
            <img src={logo} className="h-24 w-auto" alt="mcabee" />
            <img
              src={businessCollab}
              className="h-64 w-auto"
              alt="business collaboration"
            />
            <div>
              <h2 className="text-center leading-tight">
                Boost Your Business
                <br /> Visibility Online!
              </h2>
              <p className="text-center mt-3">
                Join our local search network today <br />
                and reach more customers easily !
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1>
                Master <br />
                Control Panel
              </h1>

              <form
                className="flex flex-col gap-5 items-end justify-end mt-8"
                onSubmit={(e) => handleLogin(e)}
              >
                <Input placeholder="Username" type="text" className="w-80" />
                <Input placeholder="Password" type="password" />
                <Button className="bg-primary font-semibold w-28 rounded-3xl">
                  Go
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
