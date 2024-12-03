import { Button, Spinner } from "@chakra-ui/react";

type SubmitButtonProps = {
  onClick: () => void;
  isLoading: boolean; // Ny prop för att hantera loading-status
};

const SubmitButton = ({ onClick, isLoading }: SubmitButtonProps) => {
  return (
    <Button
      bg="#43B5A0"
      color="white"
      _hover={{
        bg: "#5CD6BA",
      }}
      _active={{
        bg: "#38A18ES",
      }}
      onClick={onClick}
      isDisabled={isLoading} // Inaktivera knappen vid laddning
    >
      {isLoading ? (
        <>
          <Spinner size="sm" mr="2" /> Running...
        </>
      ) : (
        "Run Analysis"
      )}
    </Button>
  );
};

export default SubmitButton;
