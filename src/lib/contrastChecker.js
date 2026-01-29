export async function checkContrast(hex, contrastText) {
  try {
    const response = await fetch(
      "https://www.aremycolorsaccessible.com/api/are-they",
      {
        method: "POST",
        body: JSON.stringify({
          colors: [hex, contrastText],
        }),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      },
    );

    if (!response.ok) {
      return { error: true };
    }

    const data = await response.json();
    console.log("API Response:", data);

    return {
      overallScore: data.overall || "N/A",
    };
  } catch (error) {
    console.error("Contrast check failed:", error);
    return { error: true };
  }
}
