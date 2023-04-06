import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack className="card" align="left" borderRadius="1rem">
      <Image src={imageSrc} borderRadius="1rem"></Image>
      <div className="card-bottom-half">
        <Heading size="lg">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </div>
    </VStack>
  );
};

export default Card;
