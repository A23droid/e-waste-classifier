// About.jsx
export default function About() {
  const stats = [
    { value: '1M+', label: 'Classifications Processed' },
    { value: '95%', label: 'Classification Accuracy' },
    { label: 'Avg Processing Time', value: '<1s' },
    { value: '24/7', label: 'System Availability' }
  ];

  const values = [
    {
      title: 'Accuracy',
      description: 'Our machine learning models are trained on extensive datasets to ensure high classification accuracy across diverse waste types.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sustainability',
      description: 'We are committed to reducing environmental impact through proper waste classification and promoting circular economy practices.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'Continuous research and development to improve our AI models and expand classification capabilities to new waste categories.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Accessibility',
      description: 'Making waste classification technology accessible to individuals and organizations of all sizes through intuitive design.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Image Upload',
      description: 'Users upload or capture an image of waste material through our web interface or mobile application.'
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Our neural network analyzes the image using computer vision and deep learning algorithms to identify waste characteristics.'
    },
    {
      step: '03',
      title: 'Classification',
      description: 'The system categorizes the waste into appropriate disposal categories with confidence scores and detailed recommendations.'
    },
    {
      step: '04',
      title: 'Guidance',
      description: 'Users receive specific disposal instructions, recycling information, and environmental impact data for informed decision-making.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About EcoClassify
        </h1>
        <p className="text-xl text-gray-600">
          Leveraging artificial intelligence to revolutionize waste management and promote sustainable practices globally.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-200">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <section>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              EcoClassify was founded on the belief that proper waste classification is fundamental to achieving a sustainable circular economy. Our platform combines cutting-edge machine learning technology with practical environmental science to make waste sorting accessible, accurate, and actionable.
            </p>
            <p className="text-gray-600">
              By providing individuals and organizations with instant, reliable waste classification, we reduce contamination in recycling streams, improve resource recovery rates, and contribute to meaningful environmental impact. Our goal is to make sustainable waste management the easiest choice for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-emerald-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
        <div className="space-y-6">
          {process.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-emerald-200 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Technology</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6 text-center">
            Our platform is built on state-of-the-art machine learning infrastructure, utilizing convolutional neural networks trained on extensive datasets of waste materials.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Computer Vision', 'Deep Learning', 'Cloud Infrastructure', 'Data Analytics', 'API Integration', 'Mobile Ready'].map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center"
              >
                <p className="text-sm font-medium text-gray-900">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="border border-gray-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental Impact</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Every correctly classified piece of waste contributes to cleaner recycling streams, reduced landfill contamination, and more efficient resource recovery. Together, we're building a more sustainable future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">2.5M kg</div>
            <div className="text-sm text-gray-600">CO₂ Emissions Reduced</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">78%</div>
            <div className="text-sm text-gray-600">Sorting Accuracy Improvement</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
            <div className="text-sm text-gray-600">Partner Organizations</div>
          </div>
        </div>
      </section>
    </div>
  );
}