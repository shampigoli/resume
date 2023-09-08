import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  IconButton,
  Progress,
  Card,
  Collapse,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";


function Home() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <i class="bi bi-house"></i> &nbsp; Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <i class="bi bi-file-earmark"></i> &nbsp;
          <Link to="/skills">Skills</Link>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <i class="bi bi-file-play"></i> &nbsp;
          <Link to="/exp">Experience</Link>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <i class="bi bi-mortarboard"></i> &nbsp; 
          <Link to="/edu">Education</Link>
        </a>
      </Typography>
    </ul>
  );
  return (
    <>
      {/* navbar section */}
      <section className="pb-[30px]">
        <Navbar className="mb-[10px] mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-black fixed z-10 rounded-none border-0 text-xl">
          <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              AJ Styles
            </Typography>
            <div className="hidden lg:block">{navList}</div>

            <Button
              size="sm"
              className="hidden lg:inline-block hover:bg-white hover:text-black"
            >
              <span>Get Started</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <div className="container mx-auto">{navList}</div>

            <Button
              size="sm"
              fullWidth
              className="mb-2 hover:bg-white hover:text-black"
            >
              <span>Get Started</span>
            </Button>
          </Collapse>
        </Navbar>
      </section>

      {/* main content */}
      <div className="flex">
      <div className="ml-[50px]">
    <Card className="mt-40 w-56 text-black">
      <CardHeader color="blue-gray" className=" h-28 bg-center bg-cover">
        <img
          src="/ajnew-removebg.png"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        
        Full Stack Developer
        </Typography>
        <Typography>
        
        React Developer
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      </CardFooter>
    </Card>
        
      </div>
      
      <section className="about_wrapper border-r-2">
        <div className="p-8">
          <h1 className="font-bold text-3xl ">About Me:</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum
            cum necessitatibus quia temporibus cumque atque porro, magni nulla
            animi!
          </p>
        </div>
        <div className="h-[2px] w-full bg-gray-600"></div>
        <div className="flex flex-wrap">
          <div className="flex p-5">
            <h1 className="text-lg font-bold">Address:</h1>
            <h2 className="text-lg font-light">Shadbagh</h2>
          </div>
          <div className="flex p-5">
            <h1 className="text-lg font-bold">Address:</h1>
            <h2 className="text-lg font-light">Shadbagh</h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex p-5">
            <h1 className="text-lg font-bold">Email:</h1>
            <h2 className="text-lg font-light">xyz@gmail.com</h2>
          </div>
          <div className="flex p-5">
            <h1 className="text-lg font-bold">Email:</h1>
            <h2 className="text-lg font-light">xyz@gmail.com</h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex p-5">
            <h1 className="text-lg font-bold">Phone:</h1>
            <h2 className="text-lg font-light">03164944176</h2>
          </div>
          <div className="flex p-5 ">
            <h1 className="text-lg font-bold">Phone:</h1>
            <h2 className="text-lg font-light">03164944176</h2>
          </div>
        </div>
      </section>
      </div>
      
      {/* professional skills */}
      <div className="professional_wrapper p-8 bg-gray-400">
        <h1 className="font-bold text-3xl">Professional Skills</h1>
        <div className="flex pt-8 gap-4">
          <div className="w-full">
            <h3 className="text-xl font-semibold">HTML</h3>
            <Progress value={100} label="&nbsp;" />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-semibold">Brain</h3>
            <Progress value={100} label="&nbsp;" />
          </div>
        </div>
        <div className="flex pt-8 gap-4">
          <div className="w-full">
            <h3 className="text-xl font-semibold">JS</h3>
            <Progress value={30} label="&nbsp;" />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-semibold">Node</h3>
            <Progress value={60} label="&nbsp;" />
          </div>
        </div>
        <div className="flex pt-8 gap-4">
          <div className="w-full">
            <h3 className="text-xl font-semibold">CSS</h3>
            <Progress value={85} label="&nbsp;" />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-semibold">React</h3>
            <Progress value={90} label="&nbsp;" />
          </div>
        </div>
      </div>
      {/* education */}
      <section className="professional_wrapper">
      <div className="p-8 mt-20 mb-20">
        <h1 className="font-bold text-3xl">Education</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quos eaque reprehenderit libero modi, delectus animi quibusdam non deleniti, voluptatum, laboriosam quasi explicabo error sit voluptas nam temporibus deserunt harum.
        </p>
        <Button
              size="sm"
              className="hidden mt-5 lg:inline-block hover:bg-white hover:text-black"
            >
            <Link to="/">
              <span>AJ Styles</span></Link>
            </Button>
      </div> 
      </section>
    </>
  );
}

export default Home;
