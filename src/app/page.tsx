"use client";

import { useState } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import UrlInput from "./components/UrlInput";
import SubmitButton from "./components/SubmitButton";
import ResultsContainer from "./components/ResultsContainer";

// Funktion för att validera en URL
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url); // Validerar URL-format
    return true;
  } catch {
    return false;
  }
};

export default function Home() {
  const [url, setUrl] = useState(""); // För användarens inmatning
  const [results, setResults] = useState<any>(null); // För analysresultaten
  const [isLoading, setIsLoading] = useState(false); // För laddningsindikator
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // För felmeddelanden

  // Funktion för att köra analys
  const handleAnalyze = async () => {
    // Kontrollera om användaren har angett en URL
    if (!url.trim()) {
      setErrorMessage("You need to paste a URL!");
      return;
    }

    // Kontrollera om URL:en är giltig
    if (!isValidUrl(url)) {
      setErrorMessage("Please enter a valid URL!");
      return;
    }

    // Återställ tidigare fel och börja ladda
    setErrorMessage(null);
    setIsLoading(true);
    setResults(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "An unexpected error occurred");
        return;
      }

      const data = await response.json();
      setResults(data); // Uppdatera resultaten
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="lg" centerContent>
      {/* Rubrik och instruktioner */}
      <Heading as="h1" size="xl" mt="20" mb="4" textAlign="center">
        Is Your Website Accessible To Everyone?
      </Heading>
      <Text mb="4" textAlign="center">
        Enter your URL and receive a detailed report on your site's accessibility based on WCAG standards.
      </Text>

      {/* Huvudinnehåll */}
      <Box width="100%">
        {/* URL-input för användaren */}
        <UrlInput value={url} onChange={(e) => setUrl(e.target.value)} />

        {/* Knappen som kör analysen */}
        <SubmitButton onClick={handleAnalyze} isLoading={isLoading} />

        {/* Resultatcontainer med fel och resultat */}
        <ResultsContainer results={results} isLoading={isLoading} errorMessage={errorMessage} />
      </Box>
    </Container>
  );
}
