import { 
    Button,
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    useDisclosure, 
    ModalBody, 
    Flex, 
    FormControl, 
    FormLabel, 
    Input,
    Textarea,
    RadioGroup,
    Radio,
    ModalFooter
} from "@chakra-ui/react";

import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return <>
    <Button onClick={onOpen}>
        <BiAddToQueue size={20}/>
    </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader> New Peak Gameplay Friend 🧑‍🤝‍🧑</ModalHeader>
            <ModalCloseButton />
                <ModalBody pb={6}>
                    <Flex alignItems={"center"} gap={4}>
                        {/* Left side*/}
                        <FormControl>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder='Gojo Satoru'/>
                        </FormControl>
                        
                        {/* Right side */}
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Input placeholder='Six Eyes and Limitless User'/>
                        </FormControl>
                    </Flex>
                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            resize={"none"}
                            overflowY={"hidden"}
                            placeholder="The Strongest Sorcerer in the Modern Age."
                        />
                    </FormControl>
                    <RadioGroup mt={4}>
                        <Flex gap={5}>
                            <Radio value='male'>Male</Radio>
                            <Radio value='female'>Female</Radio>
                        </Flex>
                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>Add</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
        </ModalContent>
    </Modal>
  </>
}

export default CreateUserModal;
