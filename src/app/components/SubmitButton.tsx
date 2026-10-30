import { Button, Spinner } from "@chakra-ui/react";

type SubmitButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};

const SubmitButton = ({ onClick, isLoading }: SubmitButtonProps) => {
  return (
    <Button
      width="100%"
      mt={3}
      height="48px"
      bg="#302A54"
      color="#FFFFFF"
      fontSize="md"
      fontWeight="medium"
      borderRadius="8px"
      onClick={onClick}
      isDisabled={isLoading}
      _hover={{
        bg: "#453B72",
      }}
      _active={{
        bg: "#241F40",
      }}
      _focusVisible={{
        outline: "3px solid #8B72D6",
        outlineOffset: "3px",
      }}
    >
      {isLoading ? (
        <>
          <Spinner size="sm" mr={2} />
          Checking accessibility...
        </>
      ) : (
        "Check accessibility"
      )}
    </Button>
  );
};

export default SubmitButton;
