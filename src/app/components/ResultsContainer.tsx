import React from "react";
import { Box, Heading, Text, List, ListItem, Divider, Icon, Spinner } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon, InfoIcon } from "@chakra-ui/icons";

type ResultsContainerProps = {
  results: any;
  isLoading: boolean;
  errorMessage: string | null; // Ny prop för att hantera felmeddelanden
};

const ResultsContainer = ({ results, isLoading, errorMessage }: ResultsContainerProps) => {
  if (errorMessage) {
    return (
      <Box bg="red.100" p="4" borderRadius="md" shadow="md" mt="4">
        <Text color="red.800" fontWeight="bold" textAlign="center">
          {errorMessage}
        </Text>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box bg="white" p="6" borderRadius="lg" shadow="lg" mt="6" mb="10" textAlign="center">
        <Spinner size="xl" color="blue.500" />
        <Text mt="4" color="gray.600">
          Analyzing the page, please wait...
        </Text>
      </Box>
    );
  }

  if (!results) {
    return (
      <Box bg="gray.100" p="4" borderRadius="md" shadow="md" mt="4">
        <Text color="gray.800" textAlign="center">
          No results to display. Try running the analysis.
        </Text>
      </Box>
    );
  }

  return (
    <Box bg="white" p="6" borderRadius="lg" shadow="lg" mt="6" mb="10">
      <Heading as="h2" size="lg" mb="6" color="black">
        Accessibility Analysis Results
      </Heading>

      <Divider mb="4" />

      {/* Violations */}
      {results.violations?.length > 0 ? (
        <Box mb="6">
          <Heading as="h3" size="md" mb="4" color="red.600">
            <Icon as={WarningIcon} color="red.600" mr="2" />
            Violations ({results.violations.length})
          </Heading>
          <List spacing={4}>
            {results.violations.map((violation: any) => (
              <ListItem key={violation.id}>
                <Text fontWeight="bold" color="black">{violation.description}</Text>
                <Text color="gray.700" mb="2">{violation.help}</Text>
                <a
                  href={violation.helpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1a73e8", textDecoration: "underline" }}
                >
                  Learn more
                </a>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Box mb="6">
          <Text fontSize="lg" color="green.600">
            <Icon as={CheckCircleIcon} color="green.600" mr="2" />
            No violations found. 🎉
          </Text>
        </Box>
      )}

      <Divider mb="4" />

      {/* Passes */}
      {results.passes?.length > 0 && (
        <Box mb="6">
          <Heading as="h3" size="md" mb="4" color="green.600">
            <Icon as={CheckCircleIcon} color="green.600" mr="2" />
            Passes ({results.passes.length})
          </Heading>
          <List spacing={4}>
            {results.passes.map((pass: any) => (
              <ListItem key={pass.id}>
                <Text fontWeight="bold" color="black">{pass.description}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      <Divider mb="4" />

      {/* Inapplicable */}
      {results.inapplicable?.length > 0 && (
        <Box>
          <Heading as="h3" size="md" mb="4" color="gray.600">
            <Icon as={InfoIcon} color="gray.600" mr="2" />
            Inapplicable Rules ({results.inapplicable.length})
          </Heading>
          <Text color="gray.700">
            This page does not include elements that apply to these rules.
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ResultsContainer;
