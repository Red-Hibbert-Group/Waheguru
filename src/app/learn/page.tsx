export default function LearnPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Understanding Sikhi</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">Learn about the fundamentals, principles, and practices of Sikhism</p>
        
        <div className="space-y-10">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Who are Sikhs?</h2>
            <p className="text-gray-600">Sikhs are followers of the Sikh religion, which originated in the Punjab region of South Asia in the 15th century. Founded by Guru Nanak Dev Ji, Sikhism is a monotheistic religion that emphasizes the importance of leading an honest and moral life while serving others and seeking spiritual liberation.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Core Beliefs</h2>
            <p className="text-gray-600">Sikhism is based on the teachings of the Ten Gurus, collected in the Guru Granth Sahib. Sikhs believe in one formless God, equality of all humans, and the importance of selfless service. The three pillars of Sikhism are Naam Japo (meditation on God's name), Kirat Karo (honest living), and Vand Chakko (sharing with others).</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Religious Practices</h2>
            <p className="text-gray-600">Sikhs engage in daily prayers (Nitnem), attend congregational worship (Sangat), participate in community service (Seva), and practice meditation (Simran). Many Sikhs also follow the Khalsa code of conduct, which includes maintaining the five Ks: Kesh (uncut hair), Kangha (wooden comb), Kara (steel bracelet), Kachera (cotton underwear), and Kirpan (steel sword).</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">History</h2>
            <p className="text-gray-600">From Guru Nanak's revolutionary teachings of equality and devotion in the 15th century to the establishment of the Khalsa by Guru Gobind Singh Ji in 1699, Sikh history is rich with stories of spiritual wisdom, courage, and sacrifice. The Sikh community has grown from its Punjab roots to a global presence, maintaining traditions while adapting to modern contexts.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/contact"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
          >
            Visit Our Gurdwara
          </a>
        </div>
      </div>
    </main>
  )
} 