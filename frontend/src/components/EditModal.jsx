import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
	Textarea,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BASE_URL } from "../App";

function EditModal({ setUsers, user}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [ isLoading, setIsLoading ] = useState(false);
	const [ inputs, setInputs ] = useState({
		name: user.name,
		role: user.role,
		description: user.description,
		gender: user.gender,
	});
	const toast = useToast();

	const handleEditUser = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const res = await fetch(BASE_URL + "/friends/" + user.id, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs)
			});

			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error);
			}
			setUsers((prevUsers) => prevUsers.map((u) => u.id === user.id ? data: u));
			toast({
				status: "success",
				title: "Hoorayy! 🎊",
				description: "Friend update successful.",
				duration: 2000,
				position: "top-center",
			});
			onClose();
		} catch (error) {
			toast({
				status: "error",
				title: "An error occurred.",
				description: error.message,
				duration: 4000,
				isClosable: true,
				position: "top-center",
			})
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<IconButton
				onClick={onOpen}
				variant='ghost'
				colorScheme='blue'
				aria-label='See menu'
				size={"sm"}
				icon={<BiEditAlt size={20} />}
			/>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<form onSubmit={handleEditUser}>
					<ModalContent>
						<ModalHeader>Update Peak Gameplay Peep 🎮</ModalHeader>
						<ModalCloseButton />
						<ModalBody pb={6}>
							<Flex alignItems={"center"} gap={4}>
								<FormControl>
									<FormLabel>Full Name</FormLabel>
									<Input placeholder='Ryomen Sukuna' 
										value={inputs.name}
										onChange={(e) => setInputs((prev) => ({...prev, name: e.target.value}))}
									/>
								</FormControl>

								<FormControl>
									<FormLabel>Role</FormLabel>
									<Input placeholder='The King of Curses' 
										value={inputs.role}
										onChange={(e) => setInputs((prev) =>({...prev, role: e.target.value}))}
									/>
								</FormControl>
							</Flex>
							<FormControl mt={4}>
								<FormLabel>Description</FormLabel>
								<Textarea
									resize={"none"}
									overflowY={"hidden"}
									placeholder="The Strongest Sorcerer in Jujutsu History."
									value={inputs.description}
									onChange={(e) => setInputs((prev) =>({...prev, description: e.target.value}))}
								/>
							</FormControl>
							<RadioGroup defaultValue='male' mt={4}>
								<Flex gap={5}>
									<Radio value='male'>Male</Radio>
									<Radio value='female'>Female</Radio>
								</Flex>
							</RadioGroup>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3} type='submit' isLoading={isLoading}>
								Update
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		</>
	);
}

export default EditModal;