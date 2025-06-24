export default function Music() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Music
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Album */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-4xl">
                🎵
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold mb-2">Texas Perreo Volume 1</h2>
                <p className="text-gray-400 mb-4">Our debut album featuring the hottest tracks</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition duration-300">
                    Play Album
                  </button>
                  <button className="border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full transition duration-300">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-center">Music Stats</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-pink-500">15+</div>
                <div className="text-gray-400">Tracks Released</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500">50K+</div>
                <div className="text-gray-400">Streams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500">3</div>
                <div className="text-gray-400">Albums</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">25+</div>
                <div className="text-gray-400">Collaborations</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Track List */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Latest Tracks</h3>
          <div className="space-y-4">
            {[
              { title: "Texas Perreo", duration: "3:45", plays: "12K" },
              { title: "Houston Nights", duration: "4:12", plays: "8.5K" },
              { title: "Cowboy Reggaeton", duration: "3:28", plays: "15K" },
              { title: "Lone Star Latina", duration: "4:03", plays: "9.2K" },
              { title: "BBQ & Beats", duration: "3:51", plays: "7.8K" }
            ].map((track, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-700 transition duration-300">
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300">
                    ▶
                  </button>
                  <div>
                    <div className="font-medium">{track.title}</div>
                    <div className="text-gray-400 text-sm">{track.duration}</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">
                  {track.plays} plays
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}