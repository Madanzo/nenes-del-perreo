export default function Events() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Upcoming Events
        </h1>
        
        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl">🎉</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Houston Perreo Night</h3>
                  <p className="text-gray-400">Downtown Houston</p>
                </div>
                <div className="text-right">
                  <div className="text-pink-500 font-bold">Dec 15</div>
                  <div className="text-gray-400 text-sm">9:00 PM</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Join us for an unforgettable night of Texas-style reggaeton in the heart of Houston!
              </p>
              <div className="flex gap-2">
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition duration-300 flex-1">
                  Get Tickets
                </button>
                <button className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-full transition duration-300">
                  Info
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
            <div className="h-48 bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
              <span className="text-6xl">🤠</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Dallas Cowboy Beats</h3>
                  <p className="text-gray-400">Deep Ellum, Dallas</p>
                </div>
                <div className="text-right">
                  <div className="text-pink-500 font-bold">Dec 22</div>
                  <div className="text-gray-400 text-sm">8:30 PM</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Experience the ultimate fusion of country and reggaeton in Dallas's music district.
              </p>
              <div className="flex gap-2">
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition duration-300 flex-1">
                  Get Tickets
                </button>
                <button className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-full transition duration-300">
                  Info
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Past Events */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl mb-16">
          <h3 className="text-2xl font-bold mb-6">Recent Performances</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Austin City Limits", date: "Nov 2024", venue: "Austin, TX" },
              { name: "San Antonio Fiesta", date: "Oct 2024", venue: "San Antonio, TX" },
              { name: "El Paso Border Beats", date: "Sep 2024", venue: "El Paso, TX" },
              { name: "Corpus Christi Coastal", date: "Aug 2024", venue: "Corpus Christi, TX" },
              { name: "Fort Worth Stockyards", date: "Jul 2024", venue: "Fort Worth, TX" },
              { name: "Galveston Island Festival", date: "Jun 2024", venue: "Galveston, TX" }
            ].map((event, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <h4 className="font-bold text-pink-400">{event.name}</h4>
                <p className="text-gray-300 text-sm">{event.venue}</p>
                <p className="text-gray-400 text-xs">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Event Booking */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Book Us for Your Event</h3>
          <p className="text-lg mb-6 opacity-90">
            Bring the Texas Perreo experience to your venue or celebration
          </p>
          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Contact Booking
          </button>
        </div>
      </div>
    </div>
  );
}