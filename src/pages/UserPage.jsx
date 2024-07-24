import React, { useState, useEffect } from "react"
import UserService from "../API/UserService"
import { useFetching } from "../hooks/useFetching"
import Loader from "../Components/UI/Loader/Loader"
// import { TypeUser } from '../types/types';

const UserPage = () => {
	const [users, setUusers] = useState([])
	const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
		const response = await UserService.getAll()
		setUusers(response.data)
	})

	useEffect(() => {
		fetchUsers()
	}, [])

	return (
		<div>
			{isUsersLoading ? (
				<div
					style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
				>
					<Loader />
				</div>
			) : (
				users.map((user) => (
					<div key={user.id}>
						{user.id}. {user.name}
					</div>
				))
			)}
		</div>
	)
}
export default UserPage
