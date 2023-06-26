function TechStack() {
  return (
    <div className="">
      <div className="flex p-2 justify-center">
        <div className="p-1 mr-3">
          <img
            src={require("../assets/img/php.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="php"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/img/react.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="react"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/img/tailwind.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="tailwind"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/img/python.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="python"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/img/Csharp.png")}
            className="object-scale-down w-14 h-14 hover:animate-bounce"
            alt="csharp"
          ></img>
        </div>
        <div className="p-1 mr-3">
          <img
            src={require("../assets/img/flutter.png")}
            className="object-scale-down w-12 h-12 hover:animate-bounce"
            alt="flutter"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
