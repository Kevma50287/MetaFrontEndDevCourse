import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Adds eventlistener to window, every mouse move updates state
    window.addEventListener("mousemove", handleMousePositionChange);

    // When component unmounts we cleanup and remove the listener
    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?

  // We should be rendering the mousePosition. render should be a function that takes the data from the side effect
  // and returns some React component injected with the data
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <MousePosition
          render={(mousePosition) => {
            return (
              <>
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    <MousePosition
      render={(mousePosition) => {
        return (
          <p>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        );
      }}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
