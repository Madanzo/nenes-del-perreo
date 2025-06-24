export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Nenes del Perreo
        </h1>
        
        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-pink-400">Our Story</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Born from the vibrant streets of Texas and the rhythmic heart of the Caribbean, 
              Nenes del Perreo represents a groundbreaking fusion that celebrates both cultures 
              with authentic passion and innovative sound.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We're not just making music – we're creating a movement that bridges communities, 
              breaks barriers, and brings people together through the universal language of rhythm and beat.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From Houston's bayous to San Antonio's riverwalk, our sound captures the essence 
              of Texas pride mixed with Latin fire, creating something entirely new and undeniably infectious.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-pink-400">Our Mission</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-xl">🎵</span>
                <div>
                  <h3 className="font-bold text-white">Authentic Fusion</h3>
                  <p className="text-gray-400 text-sm">Blending reggaeton with Texas culture naturally and respectfully</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-xl">🤝</span>
                <div>
                  <h3 className="font-bold text-white">Cultural Bridge</h3>
                  <p className="text-gray-400 text-sm">Connecting diverse communities through shared musical experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">⭐</span>
                <div>
                  <h3 className="font-bold text-white">Innovation</h3>
                  <p className="text-gray-400 text-sm">Pushing musical boundaries while honoring traditional roots</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">🔥</span>
                <div>
                  <h3 className="font-bold text-white">Energy</h3>
                  <p className="text-gray-400 text-sm">Bringing high-energy performances that ignite every crowd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-pink-400">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🎤
              </div>
              <h3 className="font-bold text-lg mb-2">Lead Vocals</h3>
              <p className="text-gray-400 text-sm">
                Bringing smooth vocals with bilingual flow and Texas swagger
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🎹
              </div>
              <h3 className="font-bold text-lg mb-2">Producer</h3>
              <p className="text-gray-400 text-sm">
                Crafting the perfect blend of traditional and modern sounds
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🎸
              </div>
              <h3 className="font-bold text-lg mb-2">Live Band</h3>
              <p className="text-gray-400 text-sm">
                Adding live instruments that bring authentic Texas flavor
              </p>
            </div>
          </div>
        </div>
        
        {/* Connect Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <p className="text-lg mb-6 opacity-90">
            Follow our journey and be part of the Texas Perreo movement
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              Instagram
            </button>
            <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              TikTok
            </button>
            <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              Spotify
            </button>
            <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              YouTube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}