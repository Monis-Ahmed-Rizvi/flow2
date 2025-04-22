import React, { useState } from 'react';
import { Building, Users, Briefcase, Globe, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessProfileSetup = () => {
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedGoals, setSelectedGoals] = useState([]);
  
  const navigate = useNavigate();
  
  const handleGoalToggle = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const completeProfile = () => {
    console.log('Profile completed with:', {
      companyName,
      website,
      location,
      selectedIndustry,
      selectedSize,
      selectedGoals
    });
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Set up your business profile</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Help us personalize your experience with DataInsight AI
        </p>
      </div>

      {/* Progress Steps */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <Building size={20} />
            </div>
            <span className="text-xs mt-2 text-gray-500">Company</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <Briefcase size={20} />
            </div>
            <span className="text-xs mt-2 text-gray-500">Industry</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <Users size={20} />
            </div>
            <span className="text-xs mt-2 text-gray-500">Team Size</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${step >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <Globe size={20} />
            </div>
            <span className="text-xs mt-2 text-gray-500">Goals</span>
          </div>
        </div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Step 1: Company Information */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Company Information</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="company-name"
                      name="company-name"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Acme Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    Company Website (Optional)
                  </label>
                  <div className="mt-1">
                    <input
                      id="website"
                      name="website"
                      type="url"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="https://www.example.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company-location" className="block text-sm font-medium text-gray-700">
                    Company Location
                  </label>
                  <div className="mt-1">
                    <select
                      id="company-location"
                      name="company-location"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!companyName}
                    className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      companyName ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    Next <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 2: Industry */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Select Your Industry</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Technology', 'Finance', 'Healthcare', 'Education',
                  'Retail', 'Manufacturing', 'Real Estate', 'Marketing'
                ].map((industry) => (
                  <div
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`border rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition-colors ${
                      selectedIndustry === industry ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{industry}</span>
                      {selectedIndustry === industry && (
                        <Check size={16} className="text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!selectedIndustry}
                  className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    selectedIndustry ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Next <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Team Size */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">How large is your team?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Just me', '2-10 employees', '11-50 employees', '51-200 employees',
                  '201-500 employees', '501-1000 employees', '1000+ employees'
                ].map((size) => (
                  <div
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition-colors ${
                      selectedSize === size ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{size}</span>
                      {selectedSize === size && (
                        <Check size={16} className="text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!selectedSize}
                  className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    selectedSize ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Next <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">What are your main goals?</h3>
              <p className="text-sm text-gray-500 mb-6">Select all that apply</p>
              
              <div className="space-y-3">
                {[
                  'Improve business reporting',
                  'Automate data analysis',
                  'Identify trends and patterns',
                  'Generate predictive insights',
                  'Make data-driven decisions',
                  'Create compelling visualizations',
                  'Save time on manual analysis',
                  'Share insights with my team'
                ].map((goal) => (
                  <div
                    key={goal}
                    onClick={() => handleGoalToggle(goal)}
                    className={`border rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition-colors ${
                      selectedGoals.includes(goal) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{goal}</span>
                      {selectedGoals.includes(goal) && (
                        <Check size={16} className="text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={completeProfile}
                  disabled={selectedGoals.length === 0}
                  className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    selectedGoals.length > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Complete Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileSetup;