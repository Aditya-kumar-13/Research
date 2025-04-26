import React from 'react';

const ResearchPage = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>The Future of Pneumatic Conveying Systems</h1>
        <p style={styles.subtitle}>An In-depth Research Report | 2021</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p style={styles.text}>
          Pneumatic conveying systems utilize fundamental principles of fluid dynamics and pressure differentials to transport bulk materials through enclosed pipelines.
These systems operate by creating a pressure difference between the starting and ending points of the pipeline.
At their core, pneumatic systems employ air or another inert gas to move bulk materials—such as grains, cement, powders, and chips—through the pipeline.
The pressurized, sealed air functions both as the driving energy source and the transport medium, providing the necessary force to propel the materials along the conveying path.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Principle</h2>
          <p style={styles.text}>
          A pneumatic conveying system consists of several critical components including blowers to create the necessary air pressure, pipelines for transporting materials, feeders for controlling material flow, and dust collectors for mitigating material loss and maintaining air quality.​          </p>
          <p>Materials are entrained within an airstream, where their velocity and trajectory play a crucial role in ensuring efficient transport.
          The overall mechanics are governed by the properties of the material, the airflow rate, and the system design, all of which must be carefully balanced to achieve optimal performance.</p>
          <p>Understanding flow dynamics requires analyzing how variations in air pressure influence the movement of materials through bends, turns, and vertical transitions within the pipeline.
          This analysis ensures that materials are conveyed efficiently, preventing blockages and avoiding premature settling during transport.</p>
        </section>
</main>
        

      
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Merriweather, Georgia, serif',
    backgroundColor: '#f9fafb',
    color: '#333',
    padding: '2rem',
    maxWidth: '900px',
    margin: 'auto',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: '0.5rem',
    color: '#1a202c',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#4a5568',
  },
  main: {
    padding: '1rem 0',
  },
  section: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#2d3748',
    marginBottom: '1rem',
    borderBottom: '2px solid #cbd5e0',
    paddingBottom: '0.5rem',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#4a5568',
  },
  footer: {
    textAlign: 'center',
    marginTop: '4rem',
    fontSize: '0.9rem',
    color: '#718096',
  },
};

export default ResearchPage;
