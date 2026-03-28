import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { IoSparklesOutline, IoCheckmarkCircleOutline, IoAlertCircleOutline, IoTrendingUpOutline } from 'react-icons/io5';
import './ReviewInsights.css';

const ReviewInsights = ({ reviews }) => {
  // Mock AI Analysis Logic
  const insights = useMemo(() => {
    const totalReviews = reviews.length;
    const sentimentScore = 94; // Mock score
    
    // Simple mock logic for pros and cons based on the review data
    const pros = [
      "Exceptional Customer Support",
      "Transformative Service Quality",
      "High Efficiency & Reliability"
    ];
    
    const cons = [
      "Expansion to More Locations",
      "Optional Premium Features"
    ];

    const summary = `Based on ${totalReviews} recent guest testimonials, the overall sentiment is overwhelmingly positive. Guests frequently highlight our "transformative" and "reliable" service. Most users find the convenience and quality to be top-tier, though some are looking forward to further expansion.`;
    
    return { sentimentScore, pros, cons, summary };
  }, [reviews]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="review-insights"
    >
      <div className="insights-header">
        <IoSparklesOutline className="ai-icon" />
        <h3>AI-Powered Performance Insights</h3>
      </div>

      <div className="insights-grid">
        <div className="insight-card sentiment">
          <div className="card-label">
            <IoTrendingUpOutline strokeWidth={20} />
            <span>Overall Sentiment</span>
          </div>
          <div className="sentiment-value">
            <span className="number">{insights.sentimentScore}%</span>
            <span className="label">Positive</span>
          </div>
          <div className="gauge-container">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${insights.sentimentScore}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="gauge-fill"
            />
          </div>
        </div>

        <div className="insight-card summary">
          <div className="card-label">AI Summary</div>
          <p className="summary-text">{insights.summary}</p>
        </div>

        <div className="insight-card pros">
          <div className="card-label pros-label">Key Strengths</div>
          <ul className="pros-list">
            {insights.pros.map((pro, index) => (
              <li key={index}>
                <IoCheckmarkCircleOutline className="icon" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="insight-card cons">
          <div className="card-label cons-label">Opportunities</div>
          <ul className="cons-list">
            {insights.cons.map((con, index) => (
              <li key={index}>
                <IoAlertCircleOutline className="icon" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewInsights;
