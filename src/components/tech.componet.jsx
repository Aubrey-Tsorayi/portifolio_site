function TechStack() {
  return (
    <div className="">
      <div className="flex p-2 justify-center">
        <div className="p-1 mr-3">
          <img
            src={require("../assets/php.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="php"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/react.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="react"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/tailwind.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="tailwind"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/python.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="python"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/Csharp.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="csharp"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/flutter.png")}
            className="object-scale-down w-12 h-12 hover:animate-bounce"
            alt="flutter"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
