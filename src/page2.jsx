import React from 'react';

const PneumaticConveyingDetailsEnhanced = () => {
  // Components data
  const pneumaticComponents = [
    {
      title: "Blower",
      description: "Blowers are critical in pneumatic conveying systems as they supply the necessary air velocity and pressure to transport materials. Positive displacement blowers create constant airflow, while centrifugal blowers use rotational motion to increase air velocity. The blower choice depends on the material being conveyed and the distance over which it's transported."
    },
    {
      title: "Material Feeder",
      description: "Material feeders control the rate at which materials enter the pneumatic conveying system. They ensure that the right amount of material is fed into the pipeline. There are different types of feeders such as rotary valves, screw feeders, and venturi feeders, each suited to different material characteristics and system requirements."
    },
    {
      title: "Conveying Pipeline",
      description: "The conveying pipeline is the primary structure through which materials are transported. Pipelines are designed to handle material flow and must accommodate various factors such as bends, changes in elevation, and pressure drops. The material flow within the pipe is governed by air velocity and pressure differential."
    },
    {
      title: "Air Compressor",
      description: "Air compressors are used to generate the compressed air required for the conveying process. They are crucial for dense-phase conveying, where high pressure and low airflow are needed. Compressors play a vital role in determining system efficiency, as their energy consumption can account for a significant portion of operational costs."
    },
    {
      title: "Receiver/Separator",
      description: "At the destination point, the receiver or separator is responsible for separating the material from the air stream. Cyclonic separators or filters are often used to remove particulate matter and return clean air to the system. The receiver is also designed to ensure that the material is not damaged during the separation process."
    },
    {
      title: "Dust Collector / Filter",
      description: "Dust collectors are essential for minimizing environmental impact. They capture fine dust particles from the air stream, which could otherwise pose a safety risk and lead to contamination. Cyclone separators and baghouse filters are common types of dust collectors used in pneumatic conveying systems."
    },
    {
      title: "Valves and Diverters",
      description: "Valves and diverters are used to control the direction of material flow in the pipeline. They help in managing multiple pathways, ensuring that materials can be directed to different destinations. Valve systems can be manual, automatic, or pneumatically operated, depending on system complexity."
    },
    {
      title: "Control System",
      description: "The control system is the brain of the pneumatic conveying system, monitoring critical parameters such as air pressure, velocity, material feed rate, and pipeline health. Advanced control systems incorporate sensors, PLCs (programmable logic controllers), and SCADA (Supervisory Control and Data Acquisition) to ensure seamless operation and real-time monitoring."
    }
  ];

  // Governing equations for Pneumatic Conveying
  const governingEquations = [
    {
      title: "Pressure Drop in Pipeline",
      equation: "ΔP = f * (L/D) * (ρ * v²) / 2",
      description: "This equation calculates the pressure drop (ΔP) in the pipeline, which is influenced by friction (f), pipe length (L), diameter (D), and airflow velocity (v). The density (ρ) of the air also plays a critical role in determining how pressure changes as the air moves through the pipe."
    },
    {
      title: "Conveying Capacity (Mass Flow Rate)",
      equation: "M = ρ * A * v",
      description: "The mass flow rate (M) represents the amount of material conveyed through the pipeline per unit of time. This equation takes into account the density (ρ) of the material, the cross-sectional area (A) of the pipeline, and the velocity (v) of the air flow."
    },
    {
      title: "Conveying Velocity for Minimum Pressure Drop",
      equation: "v = √(2 * ΔP / (ρ * f * L / D))",
      description: "This equation helps determine the optimal velocity of air flow for minimizing pressure drop in the conveying pipeline. It factors in the pressure drop (ΔP), air density (ρ), friction factor (f), pipe length (L), and diameter (D)."
    }
  ];

  // Advantages of Pneumatic Conveying
  const advantages = [
    "Highly flexible in design, allowing material transport across long distances and complex pipeline networks.",
    "Suitable for various material types, from fine powders to granules and large pellets.",
    "Enclosed system minimizes environmental impact by reducing dust generation, spillage, and contamination.",
    "Pneumatic conveying systems can be integrated into existing facilities with minimal space requirements.",
    "Minimal mechanical wear due to fewer moving parts compared to mechanical conveyors, resulting in lower maintenance costs."
  ];

  // Problems in Pneumatic Conveying Systems
  const problems = [
    "Excessive energy consumption in systems requiring high-pressure air or transporting materials over long distances.",
    "Material degradation or segregation due to high air velocities or improper system design.",
    "Clogs or blockages can occur at bends, sharp turns, or when conveying heavy or sticky materials.",
    "Dust generation, especially in systems that handle fine powders, which can lead to contamination and health hazards.",
    "Cost of initial setup and installation can be high for complex systems, especially when dealing with multiple routes or vertical conveying."
  ];

  // Solutions to Address Problems
  const solutions = [
    "Optimize airflow velocities to prevent material degradation while ensuring efficient transportation.",
    "Implement energy-efficient blowers and compressors that match the required airflow and pressure.",
    "Use sensors and flow monitoring systems to detect blockages and prevent system downtime.",
    "Incorporate advanced dust collection systems to ensure compliance with environmental standards.",
    "Carefully design the pipeline system with smooth bends and consider using augers or additional feeders to reduce material clumping."
  ];

  // Emerging Trends in Pneumatic Conveying
  const emergingTrends = [
    "Integration of AI and IoT for predictive maintenance and real-time system optimization.",
    "Development of energy-efficient systems that use less compressed air while maintaining high conveying performance.",
    "Increased use of modular and scalable pneumatic systems, allowing companies to easily expand or adjust the system based on changing production needs.",
    "Smart materials and advanced pipeline coatings are being explored to reduce friction and wear, improving system longevity.",
    "Focus on reducing environmental impact by incorporating green technologies such as electric-driven blowers and sustainable materials for pneumatic conveying."
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Pneumatic Conveying System - Comprehensive Overview</h1>

      <h2 style={styles.sectionTitle}>Components</h2>
      {pneumaticComponents.map((component, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{component.title}</h3>
          <p style={styles.description}>{component.description}</p>
        </div>
      ))}

      <h2 style={styles.sectionTitle}>Governing Equations</h2>
      {governingEquations.map((equation, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{equation.title}</h3>
          <p style={styles.equation}>Equation: <strong>{equation.equation}</strong></p>
          <p style={styles.description}>{equation.description}</p>
        </div>
      ))}

      <h2 style={styles.sectionTitle}>Advantages</h2>
      <ul style={styles.list}>
        {advantages.map((advantage, index) => (
          <li key={index} style={styles.listItem}>{advantage}</li>
        ))}
      </ul>

      <h2 style={styles.sectionTitle}>Problems</h2>
      <ul style={styles.list}>
        {problems.map((problem, index) => (
          <li key={index} style={styles.listItem}>{problem}</li>
        ))}
      </ul>

      <h2 style={styles.sectionTitle}>Solutions</h2>
      <ul style={styles.list}>
        {solutions.map((solution, index) => (
          <li key={index} style={styles.listItem}>{solution}</li>
        ))}
      </ul>

      <h2 style={styles.sectionTitle}>Emerging Trends</h2>
      <ul style={styles.list}>
        {emergingTrends.map((trend, index) => (
          <li key={index} style={styles.listItem}>{trend}</li>
        ))}
      </ul>
      <footer style={styles.footer}>
        <p>Author: Robin Jane</p>
        <p>Harvadrd Institute</p>
        <p>© 2025 Research Division</p>
      </footer>
    </div>
    
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '2rem',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f4f7f6',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#2b6cb0',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    color: '#2b6cb0',
  },
  card: {
    background: '#ffffff',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    borderLeft: '5px solid #2b6cb0',
  },
  title: {
    fontSize: '1.8rem',
    color: '#2d3748',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#4a5568',
  },
  equation: {
    fontSize: '1.1rem',
    fontFamily: 'Courier New, monospace',
    color: '#2d3748',
    marginBottom: '1rem',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.8',
  },
};

export default PneumaticConveyingDetailsEnhanced;
