export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Perreo Texas Vibes
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Where reggaeton rhythms meet Texas swagger. Experience the fusion of Latin beats with Southern soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
              Listen Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
              Latest Tracks
            </button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Releases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-6xl">🎵</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Texas Perreo</h3>
                <p className="text-gray-400 mb-4">The fusion anthem that started it all</p>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition duration-300">
                  Play Now
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
                <span className="text-6xl">🔥</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Houston Nights</h3>
                <p className="text-gray-400 mb-4">Late night vibes from the Bayou City</p>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition duration-300">
                  Play Now
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-yellow-600 to-red-600 flex items-center justify-center">
                <span className="text-6xl">🤠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cowboy Reggaeton</h3>
                <p className="text-gray-400 mb-4">Western meets Caribbean in perfect harmony</p>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition duration-300">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}