"use client";

import { useState } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import UrlInput from "./components/UrlInput";
import SubmitButton from "./components/SubmitButton";
import ResultsContainer from "./components/ResultsContainer";

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url); 
    return true;
  } catch {
    return false;
  }
};

export default function Home() {
  const [url, setUrl] = useState(""); 
  const [results, setResults] = useState<any>(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setErrorMessage("You need to paste a URL!");
      return;
    }

    if (!isValidUrl(url)) {
      setErrorMessage("Please enter a valid URL!");
      return;
    }

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
      setResults(data);
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="lg" centerContent>
      <Heading as="h1" size="xl" mt="20" mb="4" textAlign="center">
        Is Your Website Accessible To Everyone?
      </Heading>
      <Text mb="4" textAlign="center">
        Enter your URL and receive a detailed report on your site's accessibility based on WCAG standards.
      </Text>

      <Box width="100%">
        <UrlInput value={url} onChange={(e) => setUrl(e.target.value)} />

        <SubmitButton onClick={handleAnalyze} isLoading={isLoading} />

        <ResultsContainer results={results} isLoading={isLoading} errorMessage={errorMessage} />
      </Box>
    </Container>
  );
}
