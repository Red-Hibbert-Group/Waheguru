'use client'

export default function Pillars() {
  const pillars = [
    {
      title: "NAAM JAPO",
      icon: (
        <svg className="w-16 h-16 text-secondary-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      mainTitle: "Kirtan:",
      mainDesc: "Singing hymns and devotional songs from the Guru Granth Sahib, the holy scripture of Sikhism, during religious services. Usually it is sang with musical accompaniment.",
      subTitle: "Paath:",
      subDesc: "Recitation of prayers and scriptures, such as the Japji Sahib or Rehras Sahib, by the congregation or individuals. In Sikhism, comprehension of what is being read is considered more important than ritual recitation.",
      extraTitle: "Simran:",
      extraDesc: "Silent meditation or chanting of God's name (Waheguru) during personal or communal prayer sessions."
    },
    {
      title: "KIRAT KARO",
      icon: (
        <svg className="w-16 h-16 text-secondary-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7v-4h2v4h3l-4 4-4-4h3z" />
        </svg>
      ),
      mainTitle: "Seva:",
      mainDesc: "Volunteering for various tasks within the Gurdwara, such as cleaning, cooking in the langar (community kitchen), or maintaining the premises, as a form of selfless service.",
      subTitle: "Teaching and Learning:",
      subDesc: "Conducting or attending educational programs and classes on Sikh teachings, history, and language, promoting moral and ethical living.",
      extraTitle: "Community Projects:",
      extraDesc: "Organizing and participating in initiatives that benefit the wider community, such as blood donation drives or environmental clean-up efforts."
    },
    {
      title: "VAND CHHAKO",
      icon: (
        <svg className="w-16 h-16 text-secondary-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zm-9 15a6 6 0 110-12 6 6 0 010 12zm0-10a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
      mainTitle: "Langar:",
      mainDesc: "Providing free meals to all visitors, regardless of their background, in the Gurdwara's community kitchen, embodying the spirit of equality and generosity.",
      subTitle: "Donations:",
      subDesc: "Contributing money, food, or other resources to support the Gurdwara's operations and charitable activities, such as helping those in need.",
      extraTitle: "Support Services:",
      extraDesc: "Offering assistance to community members, such as providing shelter, counseling, or support for those facing difficulties, reflecting the value of compassion and care."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-700 mb-4">
            Basics of Sikhism (The 3 Pillars)
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            SPIRITUAL DEVOTION AND REVERENCE OF GOD AT ALL TIMES
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="bg-secondary-50 rounded-full p-4 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-2">
                  {pillar.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-2">
                    {pillar.mainTitle}
                  </h4>
                  <p className="text-neutral-600">{pillar.mainDesc}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-2">
                    {pillar.subTitle}
                  </h4>
                  <p className="text-neutral-600">{pillar.subDesc}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-2">
                    {pillar.extraTitle}
                  </h4>
                  <p className="text-neutral-600">{pillar.extraDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 