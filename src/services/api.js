export const checkInfringement = async (patentId, companyName) => {
  try {
    const apiUrl = 'http://54.250.5.70:8181/patent/infringement';
    
    const params = new URLSearchParams({
      patentId,
      companyName,
    });

    const response = await fetch(`${apiUrl}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Patent ID or company name could be wrong.');
      }
      throw new Error('Failed to fetch infringement data');
    }

    const data = await response.json();

    return {
      analysis_id: Date.now().toString(),
      patent_id: data.patent_id,
      company_name: data.company_name,
      analysis_date: new Date().toLocaleDateString(),
      top_infringing_products: data.top_infringing_products,
      overall_risk_assessment: data.overall_risk_assessment,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
