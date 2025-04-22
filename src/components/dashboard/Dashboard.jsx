import React, { useState } from 'react';
import { ArrowLeft, Upload, BarChart2, PieChart, LineChart, User, Settings, Bell, Search, Download, Share2, Filter, Calendar, RefreshCcw, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock chart data
const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'Jun', sales: 2390 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Simulate analysis
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 2000);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">DataInsight AI</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-1 text-gray-400 rounded-full hover:text-gray-500">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
          </button>
          <div className="flex items-center">
            <div className="flex flex-col items-end mr-2">
              <span className="text-sm font-medium text-gray-700">John Doe</span>
              <span className="text-xs text-gray-500">TechCorp Inc.</span>
            </div>
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/32"
              alt="User profile"
            />
          </div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to DataInsight AI, John!</h2>
          <p className="text-gray-600 mb-6">Your business profile has been set up successfully. Start analyzing your data.</p>
          
          {!selectedFile && !isAnalyzing && !analysisComplete && (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Upload your first dataset</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
                <Upload className="h-12 w-12 text-gray-400 mb-3" />
                <p className="text-sm text-gray-500 mb-4">Drag and drop your CSV file here, or click to browse</p>
                <input 
                  type="file" 
                  id="file-upload" 
                  accept=".csv" 
                  onChange={handleFileUpload} 
                  className="hidden" 
                />
                <button 
                  onClick={() => document.getElementById('file-upload').click()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Upload CSV
                </button>
              </div>
            </div>
          )}
          
          {isAnalyzing && (
            <div className="bg-white shadow rounded-lg p-6 mb-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Analyzing your data...</h3>
              <p className="text-gray-500">This will take just a moment</p>
            </div>
          )}
          
          {analysisComplete && (
            <div>
              {/* Data Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <p className="text-sm text-gray-500 mb-1">Total Sales</p>
                  <h3 className="text-2xl font-bold">$1.28M</h3>
                  <p className="text-sm text-green-600">↑ 12.4% vs Last Period</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <p className="text-sm text-gray-500 mb-1">Average Order Value</p>
                  <h3 className="text-2xl font-bold">$892</h3>
                  <p className="text-sm text-green-600">↑ 3.2% vs Last Period</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
                  <h3 className="text-2xl font-bold">24.8%</h3>
                  <p className="text-sm text-red-600">↓ 1.5% vs Last Period</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <p className="text-sm text-gray-500 mb-1">Top Performing Region</p>
                  <h3 className="text-2xl font-bold">North</h3>
                  <p className="text-sm text-gray-600">42% of Total Sales</p>
                </div>
              </div>
              
              {/* Sample Chart */}
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Monthly Sales Trend</h3>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700 p-1">
                      <Download className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 p-1">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p>[ Chart visualization would appear here ]</p>
                </div>
              </div>
              
              {/* Insights */}
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Key Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Tuesday shows highest conversion rate (34.2%)</p>
                      <p className="text-sm text-gray-500 mt-1">Consider increasing promotion budget on Tuesdays.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">North region outperforms by 32%</p>
                      <p className="text-sm text-gray-500 mt-1">Analyze strategies used in the North region for broader application.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setAnalysisComplete(false);
                  }}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-all"
                >
                  Start New Analysis
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
                  Export Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;