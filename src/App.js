import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const calculateBMI = () => {
    if (!weight || !height) return;
    const heightMeters = height / 100;
    const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(1);
    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setBMICategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBMICategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBMICategory("Overweight");
    } else {
      setBMICategory("Obesity");
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setBMICategory("");
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"} p-8 rounded-lg shadow-md`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h2>
        <div className="mb-4">
          <label
            className={`block ${darkMode ? "text-white" : "text-gray-700"} font-bold mb-2`}
            htmlFor="weight"
          >
            Weight (kg)
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline`}
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div className="mb-4">
          <label
            className={`block ${darkMode ? "text-white" : "text-gray-700"} font-bold mb-2`}
            htmlFor="height"
          >
            Height (cm)
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline`}
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            onClick={calculateBMI}
          >
            Calculate
          </button>
          <button
            className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            onClick={resetCalculator}
          >
            Reset
          </button>
        </div>
        {bmi !== null && (
          <div className="mt-4 text-center">
            <p
              className={`text-lg font-semibold ${
                darkMode ? "text-blue-300" : "text-blue-500"
              }`}
            >
              Your BMI: <span className="font-bold">{bmi}</span>
            </p>
            {bmiCategory && (
              <div className="mt-2">
                <p className={`${darkMode ? "text-white" : "text-gray-700"}`}>
                  BMI Category:
                </p>
                <p
                  className={`text-lg font-semibold ${
                    darkMode ? "text-blue-300" : "text-blue-500"
                  }`}
                >
                  {bmiCategory}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="absolute top-4 right-4">
        <button
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-600" : "bg-gray-300"
          } text-white focus:outline-none`}
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full text-center p-4 mt-10 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://mohannadnasreldin.vercel.app"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohannad Nasreldin
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default App;
