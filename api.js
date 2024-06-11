const api = useApi();

const getRandomJoke = async () => {
	try {
		const { data } = await api.get("random");
		return data;
	} catch (error) {
		console.error("Une erreur s'est produite : ", error);
	}
};

// const getUsers = async () => {
// 	try {
// 		const { data } = await api.get("users");
// 		return data;
// 	} catch (error) {
// 		console.error("Une erreur s'est produite : ", error);
// 	}
// };

// const getUser = async (id) => {
// 	try {
// 		const { data } = await api.get(`users/${id}`);
// 		return data;
// 	} catch (error) {
// 		console.error("Une erreur s'est produite : ", error);
// 	}
// };

// const createUser = async (user) => {
// 	try {
// 		const { data } = await api.post("users", user);
// 		return data;
// 	} catch (error) {
// 		console.error("Une erreur s'est produite : ", error);
// 	}
// };

// const updateUser = async (user) => {
// 	try {
// 		const { data } = await api.put(`users/${user.id}`, user);
// 		return data;
// 	} catch (error) {
// 		console.error("Une erreur s'est produite : ", error);
// 	}
// };

// const deleteUser = async (id) => {
// 	try {
// 		const { data } = await api.delete(`users/${id}`);
// 		return data;
// 	} catch (error) {
// 		console.error("Une erreur s'est produite : ", error);
// 	}
// };
