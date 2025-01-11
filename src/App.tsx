import React from 'react';
    import { Sun } from 'lucide-react';

    function App() {
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <div className="flex items-center justify-center mb-6">
              <Sun size={48} className="text-yellow-500 mr-2" />
              <h1 className="text-2xl font-bold text-gray-800">Simple Page</h1>
            </div>
            <p className="text-gray-700 text-center mb-4">
              This is a simple page demonstrating a clean and minimal design.
            </p>
            <div className="text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Learn More
              </button>
            </div>
          </div>
          <footer className="mt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Simple Page. All rights reserved.</p>
          </footer>
        </div>
      );
    }

    export default App;
