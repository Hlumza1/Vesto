
import React, { useState } from 'react';
import { getProjectEstimate } from '../services/geminiService';
import { ProjectEstimate } from '../types';
import { Calculator, Sparkles, Loader2, DollarSign, Calendar, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#f59e0b', '#3b82f6', '#10b981', '#6366f1', '#ec4899', '#8b5cf6'];

const AIEstimator: React.FC = () => {
  const [description, setDescription] = useState('');
  const [estimate, setEstimate] = useState<ProjectEstimate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    setError('');
    try {
      const result = await getProjectEstimate(description);
      setEstimate(result);
    } catch (err) {
      setError('Could not generate estimate. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimator" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-600 font-bold text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            AI-Powered Solutions
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Smart Project Estimator</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get an instant AI-generated cost breakdown and timeline for your construction project. Simply describe what you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Side */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <form onSubmit={handleEstimate}>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Project Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Example: A 2500 sq ft modern 3-bedroom house in Denver with energy-efficient windows, solar panels, and a detached 2-car garage."
                className="w-full h-48 p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none text-slate-800 placeholder:text-slate-400 mb-6"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !description.trim()}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 w-5 h-5" />
                    Analyzing Requirements...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 w-5 h-5" />
                    Generate AI Estimate
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-500 italic text-center">
              Note: This is an AI-generated approximation for planning purposes.
            </p>
            {error && <p className="mt-2 text-red-500 text-sm text-center">{error}</p>}
          </div>

          {/* Results Side */}
          <div className="flex flex-col">
            {estimate ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                    <div className="flex items-center text-amber-600 mb-2">
                      <DollarSign className="w-5 h-5 mr-1" />
                      <span className="font-bold text-sm uppercase">Estimated Budget</span>
                    </div>
                    <p className="text-2xl font-black text-slate-900">
                      ${estimate.estimatedCostLow.toLocaleString()} - ${estimate.estimatedCostHigh.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-center text-blue-600 mb-2">
                      <Calendar className="w-5 h-5 mr-1" />
                      <span className="font-bold text-sm uppercase">Timeline</span>
                    </div>
                    <p className="text-2xl font-black text-slate-900">
                      {estimate.timelineMonths} Months
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <h3 className="font-bold text-slate-900 mb-6 flex items-center uppercase text-sm tracking-wider">
                    <TrendingUp className="w-4 h-4 mr-2 text-emerald-500" />
                    Cost Breakdown
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={estimate.breakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="amount"
                          nameKey="category"
                        >
                          {estimate.breakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value: number) => `$${value.toLocaleString()}`}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                  <h4 className="font-bold text-amber-400 mb-3 text-sm uppercase tracking-widest">Expert Recommendations</h4>
                  <ul className="space-y-2">
                    {estimate.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-300">
                        <span className="mr-2 text-amber-500">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center text-slate-400">
                <Calculator className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-lg font-medium">Estimate results will appear here</p>
                <p className="text-sm">Describe your dream project on the left to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEstimator;
