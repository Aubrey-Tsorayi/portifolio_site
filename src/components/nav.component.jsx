function Navbar() {
  return (
    <nav class=" flex max-w-5xl w-11/12 mx-auto justify-center bg-white dark:bg-stone-900">
      <div class="max-w-screen-xl  mx-auto p-4">
        <div class="grid grid-flow-col gap-10 items-center justify-center mr-24">
          <div className="">
            <a
              href="https://podcasters.spotify.com/pod/show/africasblankcanvas"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="font-extrabold hover:underline hover:cursor-pointer">
                Africa's Blank Canvas Podcast
              </h3>
            </a>
          </div>
          <div className="">
            <a href="/">
              <img
                src={require("../assets/light.png")}
                class="w-12 h-12 animate-pulse"
                alt="Personal Logo"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/21shots_media/" target="_blank" rel="noreferrer">
              <h3 className="font-extrabold hover:underline hover:cursor-pointer">
                21 Shorts Media
              </h3>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
